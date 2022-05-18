<?php 
/**
 * 
 */
class Masters extends MysqliDb
{
	private $error = array();
	protected $data = array();	
 

    function getCommonDetails(){
        $this->getMenu();
        $this->loadCart();
        $this->getCartDetails();
        $this->footer();
        
    }

	function getMenu(){

        $categories = $this->getCategories(0);
        $header_menu = array();
        foreach ($categories as $category) {

            if ($category['top']) {
                // Level 2
                $children_data = array();

                $children = $this->getCategories($category['category_id']);

                foreach ($children as $child) {
                    // Level 3
                    $sub_children = $this->getCategories($child['category_id']);
                    $sub_children_data = array();
                    foreach ($sub_children as $sub_child) {
                        $sub_children_data[] = array(
                            'name'  => $sub_child['name'],
                            'href'  => base_url.$sub_child['keyword']
                        );
                    }

                    $children_data[] = array(
                        'name'  => $child['name'],
                        'sub_children' => $sub_children_data,
                        'href'  => base_url.$child['keyword']
                    );
                }

                // Level 1
                $header_menu[] = array(
                    'name'     => $category['name'],
                    'children' => $children_data,
                    'href'     => base_url.$category['keyword']
                );
            }
        }

       $this->data["menu"] = $header_menu;
	}

	public function getCategories($parent_id = 0) {
        
        $query = $this->rawQuery("SELECT cd.*,c.top,(select keyword from " . PREFIX . "url_alias where query=concat('category/index/',cd.category_id)) as keyword FROM " . PREFIX . "category c LEFT JOIN " . PREFIX . "category_description cd ON (c.category_id = cd.category_id)  WHERE c.parent_id = '" . (int)$parent_id . "'  AND c.status = '1' ORDER BY c.category_id");

        $category_data = array();
     
        foreach ($query as $result) {

        	
        		$category_data[] = array('category_id'=>$result['category_id'],'name'=>$result['name'],'keyword'=>$this->getPath($result['category_id']),'top'=>$result['top']);
      
        }
           
        return $category_data;
    }


    public function getPath($category_id) {
       
        $query = $this->rawQueryOne("SELECT name, parent_id, (select keyword from " . PREFIX . "url_alias where query=concat('category/index/',cd.category_id)) as keyword FROM " . PREFIX . "category c LEFT JOIN " . PREFIX . "category_description cd ON (c.category_id = cd.category_id) WHERE c.category_id = '" . (int)$category_id . "'  ORDER BY c.sort_order, cd.name ASC");
        
    
        if ($query['parent_id']) {
            //echo "Parent <br>";
            return $this->getPath($query['parent_id']) .'/'. $query['keyword'];
        }else{
        	return  $query['keyword'];
        }
    }



    public function getCategoryBreadcrumbs($category_string){
        $query = $this->rawQuery("SELECT keyword,cd.name,cd.category_id from " . PREFIX . "url_alias ua inner join " . PREFIX . "category_description cd on ua.query = concat('category/index/',cd.category_id) inner join " . PREFIX . "category c on c.category_id=cd.category_id where keyword='".$category_string."'");

        $category_data = array();
      
        foreach ($query as $result) {

            $category_data = array('name'=>$result['name'],'keyword'=>$this->getPath($result['category_id']));
        }
           
        return $category_data;
    }

    public function getProductImagePath($product_id){

        $cat = $this->where('product_id',$product_id)->getOne('product_to_category');

        $dir = $this->where('category_id',$cat['category_id'])->getOne('category');

        return $dir['dir_path'];

    }

     public function getWishlistFlag($product_id){

        $wish = $this->where('product_id',$product_id)->where('customer_id',(int)$_SESSION['customer_id'])->getOne('wishlist');

        return $wish['product_id'];

    }

    public function getProductCartType($product_id){

        $cat = $this->where('product_id',$product_id)->getOne('product_to_category');

        $type = $this->where('category_id',$cat['category_id'])->getOne('category','cart_type');

        return $type['cart_type'];

    }

    public function getNewsSeoUrl($product_id) {
       
        $query = $this->rawQueryOne("SELECT keyword from " . PREFIX . "url_alias where query=concat('product/index/',$product_id)");
        
        return $query['keyword'];
        
    }
   
	public function getCartDetails(){

        if($_SESSION['customer_id'] > 0){
             $this->data['account_details']['enquiry'] = $this->where('customer_id',$_SESSION['customer_id'])->where('cart_type','0')->get('cart');
            $this->data['account_details']['cart'] = $this->where('customer_id',$_SESSION['customer_id'])->where('cart_type','1')->get('cart');
            $this->data['account_details']['wishlist'] = $this->where('customer_id',$_SESSION['customer_id'])->get('wishlist');
            $this->data['account_details']['orders'] = $this->where('customer_id',$_SESSION['customer_id'])->get('orders');


        }else{
            $this->data['account_details']['enquiry'] = $this->where('session_id',session_id())->where('customer_id','0')->where('cart_type','0')->get('cart');
            $this->data['account_details']['cart'] = $this->where('session_id',session_id())->where('customer_id','0')->where('cart_type','1')->get('cart');
        }


        
       
    }

    public function loadCart()
    {
        $this->rawQuery("DELETE FROM " . PREFIX . "cart WHERE customer_id = '0' AND date_added < DATE_SUB(NOW(), INTERVAL 1 HOUR)");

        if((int)$_SESSION['customer_id'] > 0){

            $this->where('customer_id',(int)$_SESSION['customer_id'])->update('cart',array('session_id'=>$_SESSION['session_id']));

            // Once the customer is logged in we want to update the customers cart
            $cart_query = $this->where('customer_id',0)->where('session_id',$_SESSION['session_id'])->get('cart');

            foreach ($cart_query as $cart) {
                $this->where('cart_id',(int)$cart['cart_id'])->delete('cart');
                // The advantage of using $this->add is that it will check if the products already exist and increaser the quantity if necessary.
                $this->add($cart);
            }
        }
    }

    public function add($form_data){

        if($cart_details = $this->where('customer_id',$_SESSION['customer_id'])->where('session_id',$_SESSION['session_id'])->where('product_id',$form_data['product_id'])->getOne('cart')){

            $cart = array(
                    'quantity' => $cart_details['quantity'] + $form_data['quantity'],
            );

            $this->where('cart_id',$cart_details['cart_id'])->update('cart',$cart);

        }else{

            $cart = array(
                    'session_id' => $_SESSION['session_id'],
                    'customer_id' => $_SESSION['customer_id'],
                    'product_id' => $form_data['product_id'],
                    'quantity' => $form_data['quantity'],
                    'cart_type' => $form_data['cart_type'],
                    'date_added' => date('Y-m-d H:i:s')
            );

            $this->insert('cart',$cart);
        }

    }

    public function sendMail($mail){

        $subject = $mail['subject']; 
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: Woodsmiths <info@intermind.in>' . "\r\n";
        $headers .= 'cc: kalpesh@intermind.in' . "\r\n";
        $to = $mail['to'];

        mail($to,$subject,$mail['message'],$headers);
           

    }

    public function getCustomerDetails($customer_id){

        return $this->where('customer_id',$_SESSION['customer_id'])->getOne('customer','first_name,last_name,email,mobile,country,state,address');

    }

    public function footer(){

        $this->data['information'] = $this->rawQuery("SELECT *, (select keyword from " . PREFIX . "url_alias where query=concat('information/index/',information_id)) as keyword from " . PREFIX . "information where link_type = 0 and status =1  order by sort_order asc ");
        $this->data['help'] = $this->rawQuery("SELECT *, (select keyword from " . PREFIX . "url_alias where query=concat('information/index/',information_id)) as keyword from " . PREFIX . "information where link_type = 1 and status =1  order by sort_order asc ");

        $this->data['social'] = $this->where('status',1)->get('social');
    }

	
}


 ?>
