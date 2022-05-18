<?php
error_reporting(0);

ob_start();
session_start();

define("base_url", "http://".$_SERVER['HTTP_HOST']."/woodsmiths/php/admin/");
define("DOMAIN", "http://".$_SERVER['HTTP_HOST']."/woodsmiths/php/");
define("IMAGE_PATH", "http://".$_SERVER['HTTP_HOST']."/woodsmiths/php/uploads/");
define("DOC_ROOT", $_SERVER['DOCUMENT_ROOT']."/woodsmiths/php/admin/");
define("IMAGE_ROOT", $_SERVER['DOCUMENT_ROOT']."/woodsmiths/php/uploads/");
define("LOGO", "http://".$_SERVER['HTTP_HOST']."/woodsmiths/images/logo.png");
define("TEXT_SEPARATOR",' > ');
date_default_timezone_set('Asia/Kolkata');

//Database credentail
define("HOST", "localhost");
define("PREFIX", "ws_");
define("DB_USERNAME", "intermin_dbuser");
define("DB_PASSWORD", '#ZUm54PH=v_Q');

define("DB_DATABASE", "intermin_woodsmiths");

define('PAGE_LIMIT',10);

include('config/user_global.php');
include('config/MysqliDb.php');
include_once 'controller/PaginationRendered.php';
include_once 'controller/Masters.php';
class route {   
    // Default contorller, method, params

    private $controller     = "login";
    private $contname       = "login";
    private $method         = "index";
    private $params         = array();
    private $routing        = array();
    private $check_not_login       = array(
        "login"
    );

    public function __construct()
    {

        $this->routing();
        $url = $this->url();
        
        if(!empty($url)){
            $this->contname = $url[0];
            if(file_exists("controller/" . $url[0] . ".php")){
                    $this->controller = $url[0];
                    unset($url[0]);
            } else {
                if(file_exists($url[0] . ".php")){
                    include($url[0] . ".php");
                    exit();
                }else{
                    echo "<div style='margin:0;padding: 10px;background-color:silver;'>Sorry CONTROLLER ".$url[0].".php not found</div>";
                    exit();
                }
            }
        }
        
        // Include controller
        require_once "controller/" . $this->controller . ".php";
        
        // Instantiate controller
        $this->controller = new $this->controller;

        if(isset($url[1]) && !empty($url[1])){
            if(method_exists($this->controller, $url[1])){
                $this->method = $url[1];
                unset($url[1]);

            } else {
                echo "<div style='margin:0;padding: 10px;background-color:silver;'>Sorry METHOD ".$url[1]." not found in CONTROLLER ".$this->contname.".php </div>";
                exit();
            }
        }

        if(isset($url)){
            $this->params = $url;
        } else {
            $this->params = array();
        }
        call_user_func_array(array($this->controller, $this->method), $this->params);
    }

    
    public function url(){
   
        if(isset($_GET['url'])){

            $url = $_GET['url'];

            if(!in_array($url, $this->check_not_login) && !$this->logged_in())
            {
                header('location:'.base_url.'login');
                die();
            }

            foreach ($this->routing as $key => $val)
            {
                $key = str_replace(array(':any', ':num'), array('[^/]+', '[0-9]+'), $key);
                // Does the RegEx match?
                if (preg_match('#^'.$key.'$#', $url, $matches))
                {
                    // Are we using callbacks to process back-references?
                    if ( ! is_string($val) && is_callable($val))
                    {
                        // Remove the original string from the matches array.
                        array_shift($matches);

                        // Execute the callback using the values in matches as its parameters.
                        $val = call_user_func_array($val, $matches);
                    }
                    // Are we using the default routing method for back-references?
                    elseif (strpos($val, '$') !== FALSE && strpos($key, '(') !== FALSE)
                    {
                        $val = preg_replace('#^'.$key.'$#', $val, $url);
                    }

                    $url = $val;

                }else{

                    if(@$this->routing[$url] != ""){                
                        $url = $this->routing[$url];
                    }

                }
            }
           
            $url = rtrim($url);
            $url = str_replace('\/', ' ', filter_var(str_replace(' ', '\/', $url), FILTER_SANITIZE_URL));

            $url = explode("/", $url);                                              
                  
            return $url;
        }

    }

    public function routing(){

        $this->routing['login']                 = "Login/PerformLogin";
        $this->routing['dashboard']             = "Dashboard/index";
        
        $this->routing['category']              = "ManageCategory/viewCategories";
        $this->routing['category/(:num)']       = "ManageCategory/viewCategories/$1";
        $this->routing['add-category']          = "ManageCategory/index";
        $this->routing['edit-category/(:num)']  = "ManageCategory/edit/$1";
        $this->routing['category-toggle-status/(:num)/(:num)'] = "ManageCategory/categoryToggleStatus/$1/$2";
        $this->routing['delete-category']       = "ManageCategory/deleteCategory";

        $this->routing['product']              = "ManageProduct/getList";
        $this->routing['product/(:num)']       = "ManageProduct/getList/$1";
        $this->routing['add-product']          = "ManageProduct/index";
        $this->routing['edit-product/(:num)']  = "ManageProduct/edit/$1";
        $this->routing['product-toggle-status/(:num)/(:num)'] = "ManageProduct/ProductToggleStatus/$1/$2";
        $this->routing['delete-product']       = "ManageProduct/deleteProduct";

        $this->routing['order-list']           = "Orders/orderList";
        $this->routing['order-list/(:num)']    = "Orders/orderList/$1";
        $this->routing['order-details/(:num)'] = "Orders/orderDetails/$1";
        $this->routing['enquiry']              = "Orders/getProductEnquiry";
        $this->routing['enquiry/(:num)']       = "Orders/getProductEnquiry/$1";

        $this->routing['banner']               = "Banner/index";
        $this->routing['banner/(:num)']        = "Banner/index/$1";
        $this->routing['add-banner']           = "Banner/addBanner";
        $this->routing['edit-banner/(:num)']          = "Banner/editBanner/$1";
        $this->routing['update-banner-status/(:num)/(:num)'] = "Banner/updateBannerStatus/$1/$2";

        $this->routing['order-export']         = "Export/order";
        $this->routing['enquiry-export']       = "Export/enquiry";

        $this->routing['product-image']        = "ManageProduct/getImageList";
        $this->routing['upload-product-image'] = "ManageProduct/uploadProductImage";

        $this->routing['information']          = "Information/viewInformation";
        $this->routing['add-information']      = "Information/index";
        $this->routing['edit-information/(:num)']  = "Information/edit/$1";
        $this->routing['information-toggle-status/(:num)/(:num)'] = "Information/informationToggleStatus/$1/$2";

        $this->routing['social']                = "Information/viewSocial";
        $this->routing['add-social']            = "Information/addSocial";
        $this->routing['edit-social/(:num)']    = "Information/editSocial/$1";
        $this->routing['social-toggle-status/(:num)/(:num)'] = "Information/socialToggleStatus/$1/$2";
  

    }



    public function logged_in(){

        if(!isset($_SESSION['logged_in'])){
            return false;
        }else{
            return true;
        }
    }
}

new route();

?>