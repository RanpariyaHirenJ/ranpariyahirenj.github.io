<?php

/**
 * 
 */
class Cart extends Masters
{


    public function addToCart(){

        if($_SERVER['REQUEST_METHOD'] == 'POST') {

            $form_data = $this->xss_clean($_POST);

            if($form_data['product_id'] > 0 && $form_data['quantity'] > 0){

                $this->add($form_data);
            }

            echo  "true";
        }

    }

    

    public function wishlist(){

        if($_SERVER['REQUEST_METHOD'] == 'POST' && $_SESSION['customer_id'] > 0) {

            $form_data = $this->xss_clean($_POST);

            if($form_data['key'] > 0){

                if($this->where('customer_id',$_SESSION['customer_id'])->where('product_id',$form_data['key'])->getOne('wishlist')){

                    $this->where('customer_id',$_SESSION['customer_id'])->where('product_id',$form_data['key'])->delete('wishlist');

                }else{

                    $wishlist = array(
                        'customer_id' => $_SESSION['customer_id'],
                        'product_id' => $form_data['key'],
                        'date_added' => date('Y-m-d H:i:s')
                    );

                    $this->insert('wishlist',$wishlist);
                }

            }

            echo  "true";
        }else{
            echo base_url."login";
        }

    }

    public function updateCart($cart_id, $quantity) {

        if($_SERVER['REQUEST_METHOD'] == 'POST') {

            $form_data = $this->xss_clean($_POST);

            if($form_data['key'] > 0 && $form_data['quantity'] >= 0){


                $cart = array(
                        'quantity' => $form_data['quantity'],
                );

                $this->where('cart_id',$form_data['key'])->update('cart',$cart);

                echo  "true";

            }

           
        }

    }

    public function removeCart() {

        if($_SERVER['REQUEST_METHOD'] == 'POST') {

            $cart_id = $this->xss_clean($_POST['key']);

            $this->where('cart_id',$cart_id)->delete('cart');

            echo "true";

        }

    }

    public function cartList(){

        $this->getCommonDetails();

        $where = "";

        if($_SESSION['customer_id'] > 0){
            $where_condition = " and customer_id=".$_SESSION['customer_id'];
        }else{
            $where_condition = " and session_id='".$_SESSION['session_id']."'";
        }

     
      
        $this->data['card_list'] = $this->rawQuery("SELECT c.cart_id,c.quantity,p.name,p.image,p.price,ca.dir_path from " . PREFIX . "cart c inner join " . PREFIX . "product p on c.product_id=p.product_id inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id inner join " . PREFIX . "category ca on pc.category_id=ca.category_id where c.cart_type=1 ".$where_condition);

        $this->data["cart_type"] = 1;

        view('cart',$this->data);
    }

    public function enquiryList(){


        $this->getCommonDetails();

        $where = "";

          if($_SESSION['customer_id'] > 0){
            $where_condition = " and customer_id=".$_SESSION['customer_id'];
        }else{
            $where_condition = " and session_id='".$_SESSION['session_id']."'";
        }
      
        $this->data['card_list'] = $this->rawQuery("SELECT c.cart_id,c.quantity,p.name,p.image,p.price,ca.dir_path from " . PREFIX . "cart c inner join " . PREFIX . "product p on c.product_id=p.product_id inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id inner join " . PREFIX . "category ca on pc.category_id=ca.category_id where c.cart_type=0 ".$where_condition);

        $this->data["cart_type"] = 0;

        view('cart',$this->data);

    }

    public function wishlistDetails(){

        if($_SESSION['customer_id'] > 0){

            $this->getCommonDetails();

            $query = $this->rawQuery("SELECT p.product_id,p.name,p.image,p.price from ws_wishlist w inner join ws_product p on w.product_id=p.product_id where customer_id=".(int)$_SESSION['customer_id']);

            $wishlist_details = array();
            foreach ($query as $result) {

                $wishlist_details[] = array('product_id'=>$result['product_id'],'name'=>$result['name'],'image'=>$result['image'],'price'=>$result['price'],'keyword'=>$this->getNewsSeoUrl($result['product_id']),'image_path'=>$this->getProductImagePath($result['product_id']),'cart_type'=>$this->getProductCartType($result['product_id']));
            }

           $this->data['wishlist_details'] = $wishlist_details;

          
            view('wishlist',$this->data);

        }else{
            $this->redirect('login');
        }

       

    }
}


 ?>