<?php 

/**
 * 
 */
class Order extends Masters
{
	
	public function cartToOrder(){

      
        $cart_list = $this->rawQuery("SELECT c.cart_id,c.quantity,p.name,p.image,p.price,p.product_id from " . PREFIX . "cart c inner join " . PREFIX . "product p on c.product_id=p.product_id inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id inner join " . PREFIX . "category ca on pc.category_id=ca.category_id where c.cart_type=1 and c.customer_id=".$_SESSION['customer_id']);

        if(count($cart_list) > 0){

        	$order_data = array(
        				'customer_id'=>$_SESSION['customer_id'],
        				'order_type'=>'1',
        				'date_added'=>date('Y-m-d H:i:s')
        				);

        	$customer_details = $this->getCustomerDetails($_SESSION['customer_id']);

        	$order_data = $order_data + $customer_details;

        	$id = $this->insert('orders',$order_data);

        	$year = date('y');
        	$order_prefix = "ORD%04d/".$year.'-'.($year+1);

        	$order_no = sprintf($order_prefix, $id);

        	$this->where('order_id',$id)->update('orders',compact('order_no'));

        	$grant_total = 0;

        	foreach ($cart_list as  $value) {

	        	$this->insert('order_items',array('order_id'=>$id,'product_id'=>$value['product_id'],'quantity'=>$value['quantity'],'price'=>$value['price']));

	        	$grant_total += $value['price']*$value['quantity'];

	        }

	        $this->where('order_id',$id)->update('orders',array('grand_total'=>$grant_total));

	        $this->where('customer_id',$_SESSION['customer_id'])->where('cart_type','1')->delete('cart');

	        $this->mailToCustomerAdmin($id,$customer_details['email']);

	        $_SESSION['order_no'] = $order_no;
	        $_SESSION['order_type'] = 'Order';

	        $this->redirect('success');

        }else{
        	$this->redirect('');
        }
        
  

	}

	public function enquiryToOrder(){

		$cart_list = $this->rawQuery("SELECT c.cart_id,c.quantity,p.name,p.image,p.price,p.product_id from " . PREFIX . "cart c inner join " . PREFIX . "product p on c.product_id=p.product_id inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id inner join " . PREFIX . "category ca on pc.category_id=ca.category_id where c.cart_type=0 and c.customer_id=".$_SESSION['customer_id']);

        if(count($cart_list) > 0){

        	$order_data = array(
        				'customer_id'=>$_SESSION['customer_id'],
        				'order_type'=>'0',
        				'date_added'=>date('Y-m-d H:i:s')
        				);

        	$customer_details = $this->getCustomerDetails($_SESSION['customer_id']);

        	$order_data = $order_data + $customer_details;

        	$id = $this->insert('orders',$order_data);

        	$year = date('y');
        	$order_prefix = "ORD%04d/".$year.'-'.($year+1);

        	$order_no = sprintf($order_prefix, $id);

        	$this->where('order_id',$id)->update('orders',compact('order_no'));

        	foreach ($cart_list as  $value) {

	        	$this->insert('order_items',array('order_id'=>$id,'product_id'=>$value['product_id'],'quantity'=>$value['quantity']));
	        }

	        $this->where('customer_id',$_SESSION['customer_id'])->where('cart_type','0')->delete('cart');

	         $this->mailToCustomerAdmin($id,$customer_details['email']);

	        $_SESSION['order_no'] = $order_no;
	        $_SESSION['order_type'] = 'Enquiry';

	        $this->redirect('success');

        }

	}

	public function mailToCustomerAdmin($order_id, $email){

	 	$order_data = $this->getOrderDetails($order_id,true);
	 	
	 	// Mail to customer

	 	$message = loadView('mail/order',$order_data);

	 	$mail['subject'] = "Woodsmiths - Your order summary #".$order_data['order_details']['order_no'];
		$mail['message'] = $message;
		$mail['to'] = $email;

		$this->sendMail($mail);

		// Mail to admin

		$message = loadView('mail/order-admin',$order_data);

	 	$mail['subject'] = "Woodsmiths - New ".($order_data['order_details']['order_type']?'Order':'Enquiry')." from ".$order_data['order_details']['first_name'].' '.$order_data['order_details']['last_name']." #".$order_data['order_details']['order_no'];  
		$mail['message'] = $message;
		$mail['to'] = $email;

		$this->sendMail($mail);

	}

	public function success(){

		$this->getCommonDetails();
		view('success',$this->data);

	}

	public function orderHistory(){

		$this->getCommonDetails();

		$this->data['orders'] = $this->rawQuery("SELECT  o.* , (select count(*)  from ". PREFIX ."order_items where order_id=o.order_id) as product_count, (select concat(first_name,' ',last_name)  from ". PREFIX ."customer where customer_id=o.customer_id) as cus_name from ". PREFIX ."orders o  where customer_id=".$_SESSION['customer_id']." order by date_added desc");


		view('order-history',$this->data);

	}

	public function getOrderDetails($order_id,$fun = false){

		if($_SESSION['customer_id'] <= 0){
			$this->redirect('login');
		}


		$this->getCommonDetails();

		$order_id = $this->xss_clean($order_id);

		$order['order_details'] = $this->where('order_id',$order_id)->getOne('orders');

		$order_products = $this->rawQuery("SELECT p.name,p.image,oi.* from ". PREFIX ."product p inner join ". PREFIX ."order_items oi on p.product_id=oi.product_id where order_id=".$order_id);
		

		foreach ($order_products as $result) {
			
			$order['order_items'][] = $result + array('keyword'=>$this->getNewsSeoUrl($result['product_id']),'image_path'=>$this->getProductImagePath($result['product_id']));
		}

		$order['order_history'] = $this->where('order_id',$order_id)->get('order_history',null,'order_status,comment,date_added');

		$this->data['order'] = $order;


		if($fun){
			return $this->data['order'];

		}else{
			view('order-details',$this->data);
		}
		

	}


}


 ?>