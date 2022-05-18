<?php

error_reporting(-1);

ob_start();
session_start();



define("base_url", "http://".$_SERVER['HTTP_HOST']."/woodsmiths/php/");
define("IMAGE_PATH", "http://".$_SERVER['HTTP_HOST']."/woodsmiths/php/");
define("LOGO", "http://".$_SERVER['HTTP_HOST']."/woodsmiths/images/logo.png");
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

    private $controller     = "Home";
    private $contname       = "Home";
    private $method         = "index";
    private $params         = array();
    private $routing        = array();
    private $check_login  = array("cart-order","enquiry-order","my-account","wishlist","order-history","change-password","success","order-details");


    public function __construct()
    {

        $_SESSION['session_id'] = session_id();

        if(!isset($_SESSION['customer_id'])){
            $_SESSION['customer_id'] = 0;
        }

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


            if(in_array($url, $this->check_login) && $this->logged_in())
            {
                header('location:'.base_url.'login');
                die();
            }


            if($new_url = $this->seo_url($url)){
                $url = $new_url;
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
            $url = trim($url,'/');
            $url = str_replace('\/', ' ', filter_var(str_replace(' ', '\/', $url), FILTER_SANITIZE_URL));

            $url = explode("/", $url);                                              
                      
            return $url;
        }

    }

    public function seo_url($url)
    {
       
        $db = new MysqliDb();

        $uri = explode('/', $url);

        foreach ($uri as $value) {
      
            if($result = $db->where('keyword',$value)->getOne('url_alias')){

                $url = explode('/', $result['query']);
                  
                if($url[0]=="product"){
                    $url = "/".$result['query'];
                }

                if($url[0]=="category"){

                    $url = "/".$result['query'];
                }

                if($url[0]=="information"){

                    $url = "/".$result['query'];
                }

        

            }
        }

        return $url;
    }

    public function routing(){

        $this->routing['cart']              = "Cart/cartList";
        $this->routing['enquiry']           = "Cart/enquiryList";
        $this->routing['wishlist']          = "Cart/wishlistDetails";
        $this->routing['search']            = "Search/index";

        $this->routing['login']             = "Login/index";
        $this->routing['my-account']        = "Login/myAccount";

        
        $this->routing['profile']           = "Login/index";
        $this->routing['reset-passowrd']    = "Login/reset_password";
        $this->routing['change-password']   = "Login/changePassword";
        $this->routing['logout']            = "Login/PerformLogout";
        $this->routing['register']          = "Login/register";
        $this->routing['email_verification/(:any)']= "Login/email_verification/$1";

        $this->routing['cart-order']        = "Order/cartToOrder";
        $this->routing['enquiry-order']     = "Order/enquiryToOrder";
        $this->routing['success']           = "Order/success";
        $this->routing['order-history']     = "Order/orderHistory";
        $this->routing['order-details/(:num)']     = "Order/getOrderDetails/$1";

    }


    public function logged_in(){

        if($_SESSION['customer_id']){
            return false;
        }else{
            return true;
        }
    }
}

new route();

?>