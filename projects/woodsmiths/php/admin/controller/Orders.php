<?php 

/**
 * 
 */
class Orders extends Masters
{
	
	public function orderList($page=1)
	{		

		$where_condition = "";
		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);

		
			if($form_data['customer']!=""){
				$where_condition .= " and (concat(o.first_name,' ',o.last_name) like('%".$form_data['customer']."%') or o.mobile='".$form_data['customer']."' or o.email='".$form_data['customer']."' )";
			}

			if($form_data['order_no']!=''){

				$where_condition .= " and (o.order_id='".$form_data['order_no']."' or o.order_no like('%".$form_data['order_no']."%'))";
			}

			if($form_data['order_type']!=2){
				$where_condition .= " and o.order_type=".$form_data['order_type'];
			}

			if($form_data['order_status']!='All'){

				$where_condition .= " and o.status='".$form_data['order_status']."'";
			}

			if($form_data['fromDate']!="" && $form_data['toDate']!=""){
				$where_condition .= " and DATE(o.date_added) between '".date('Y-m-d',strtotime($form_data['fromDate']))."' and '".date('Y-m-d',strtotime($form_data['toDate']))."'";
			}
			else if($form_data['fromDate']!=""){
				$where_condition .= " and DATE(o.date_added) >='".date('Y-m-d',strtotime($form_data['fromDate']))."'";
			}
			else if($form_data['toDate']!=""){
				$where_condition .= " and DATE(o.date_added) <='".date('Y-m-d',strtotime($form_data['toDate']))."'";
			}

			$_SESSION['search_cond_for_order'] = $form_data;
			$_SESSION['search_cond_for_order_query'] = $where_condition;
		}

		
		$this->rawQuery("SELECT o.order_no,o.order_id,o.order_type,o.status,c.first_name, c.last_name, o.mobile, o.country, o.state,o.address,o.date_added, (select count(*) from ". PREFIX ."order_items where order_id=o.order_id) as items from ". PREFIX ."customer c inner join ". PREFIX ."orders o on c.customer_id=o.customer_id where 1=1 ".$_SESSION['search_cond_for_order_query']." order by o.date_added desc");

		$pagConfig = array(
		    'baseURL'=>base_url.'order-list',
		    'totalRows'=>$this->count,
		    'perPage'=>PAGE_LIMIT,
		    'queryStringSegment' =>$page

		);
		$pagination =  new PaginationRendered($pagConfig);
		$this->data['pagination'] = $pagination->createLinks();

		$_SESSION['page'] = $page;

		$offset = ($page - 1) * PAGE_LIMIT;
		$sql = " LIMIT " . $offset . "," . PAGE_LIMIT;
		$_SESSION['pagination_sql'] = $sql;



		$this->data['orders'] = $this->rawQuery("SELECT o.order_no,o.order_id,o.order_type,o.status,o.grand_total,c.first_name, c.last_name, o.mobile, o.country, o.state,o.address,o.date_added, (select count(*) from ". PREFIX ."order_items where order_id=o.order_id) as items from ". PREFIX ."customer c inner join ". PREFIX ."orders o on c.customer_id=o.customer_id where 1=1 ".$_SESSION['search_cond_for_order_query']." order by o.date_added desc". $_SESSION['pagination_sql']);


		view('orders',$this->data);
	} 

	public function sessionReset(){

		unset($_SESSION['search_cond_for_order']);
		unset($_SESSION['search_cond_for_order_query']);
		$this->redirect('order-list');
	}

	public function sessionResetForEnquiry(){

		unset($_SESSION['search_cond_for_enquiry']);
		unset($_SESSION['search_cond_for_enquiry_query']);
		$this->redirect('enquiry');
	}

	public function orderDetails($order_id){


		$order_id = $this->xss_clean($order_id);

		$order_details = $this->rawQuery("SELECT o.order_no,o.order_id,o.customer_id,name,image,p.product_id,oi.quantity,oi.price,grand_total,order_type,date(o.date_added) as order_date,o.status, (SELECT keyword FROM " . PREFIX . "url_alias WHERE query = concat('product/index/',oi.product_id)) AS keyword  from ". PREFIX ."orders o inner join ". PREFIX ."order_items oi on o.order_id=oi.order_id inner join ". PREFIX ."product p on oi.product_id=p.product_id where  o.order_id =".$order_id);

		if(count($order_details) > 0){

			$this->data['order_details'] = $this->where('order_id',$order_details[0]['order_id'])->getOne('orders',null,'first_name,last_name,email,mobile,country,state,address');
			$this->data['order_details']['order_date'] = $order_details[0]['order_date'];
			$this->data['order_details']['order_type'] = $order_details[0]['order_type'];
			$this->data['order_details']['grand_total'] = $order_details[0]['grand_total'];
			$this->data['order_details']['order_id'] = $order_id;
			$this->data['order_details']['order_status'] = $order_details[0]['status'];

			foreach ($order_details as $result) {

		        $this->data['order_products'][$result['order_type']][] = $result + array('pro_cat'=>$this->getProductImagePath($result['product_id']));
		        
        	}

        	$this->data['histories'] = $this->where('order_id',$order_id)->get('order_history');
		}

		view('order-details',$this->data);

	}

	public function updateOrderHistory($order_id){

		$json = array();

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);	

			$form_data['order_id'] = $order_id;
			$form_data['date_added'] = date('Y-m-d H:i:s');

			if($this->insert('order_history',$form_data)){

				
				$this->where('order_id',$order_id)->update('orders',array('status'=>$form_data['order_status']));

				if($form_data['notify']){
					$this->notifyCustomer($order_id,$form_data['comment']);
				}
				$json['success'] = true;
			}else{
				$json['error'] = true;
				
			}

		}else{
			$json['error'] = true;
			
		}

		header('Content-Type: application/json');
		echo json_encode($json);
	}

	public function notifyCustomer($order_id,$comment){

		$order = $this->where('order_id',$order_id)->getOne('orders');

		$message = "<table width='600' border='0' cellspacing='5' align='center' style='background-color: #f8f8f8;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;padding:10px'>
				  <tbody><tr><td align='left' colspan='3'><img src='http://staging.intermind.in/woodsmiths/php/images/logo.png' style='margin-top:0px;padding-left:5px;width:140px' ></td></tr>
				  <tr>
					<td colspan='2'>&nbsp;</td>
				  </tr>
				  <tr>
				  	<td colspan='3'>
				  		<p>Dear ".($order['first_name'].' '.$order['last_name'])." </p><br>
				  		<p>We would like to inform you that your order status for order no #".$order['order_no']." has been updated.</p><br>
				  		<p>Your current order status is \"".$order['status']."\".</p>";
			  		if(trim($comment)!=""){
			  			$message.="<p>Comment: ".$comment."</p><br>";
			  		}else{
			  			$message.="<br>";
			  		}
				  	$message.="<p><a href='".DOMAIN."order-details/".$order_id."' target='_blank'>Click Here</a> to view your order summary on the Woodsmiths website</p>
				  		<p>For any further queries feel free to get in touch with us at <a href='mailto:customersupport@woodsmiths.com'>customersupport@woodsmiths.com</a> </p><br>
						Thanks &amp; Regards<br>
						The Woodsmiths Web Team
				    </td>
				  </tr>
				</tbody></table>";
			
		$mail['subject'] = "Woodsmiths - Order status updated #".$order['order_no'];  
		$mail['message'] = $message;
		$mail['to'] = $order['email'];

		$this->sendMail($mail);
	}

	public function getOrderHistory($order_id){

		$order_id = $this->xss_clean($order_id);	
		$data['histories'] = $this->where('order_id',$order_id)->get('order_history');

		if ($data['histories']) { 
    	 	foreach ($data['histories'] as $history) { ?>
			    <tr>
			      <td class="left"><?php echo date('d/m/Y',strtotime($history['date_added'])); ?></td>
			      <td class="left"><?php echo $history['comment']; ?></td>
			      <td class="left"><?php echo $history['order_status']; ?></td>
			      <td class="left"><?php echo $history['notify']?"Yes":'No'; ?></td>
			    </tr>
    		<?php } 
     	} 
		
	}

	public function getProductEnquiry($page=1){

		$where_condition = "";
		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);

		
			if($form_data['customer']!=""){
				$where_condition .= " and (pe.name like('%".$form_data['customer']."%') or pe.mobile='".$form_data['customer']."' or pe.email='".$form_data['customer']."' )";
			}

			if($form_data['enquiry_no']!=''){

				$where_condition .= " and (pe.enquiry_id='".$form_data['enquiry_no']."' or pe.enquiry_no like('%".$form_data['enquiry_no']."%'))";
			}

			// if($form_data['order_type']!=2){
			// 	$where_condition .= " and o.order_type=".$form_data['order_type'];
			// }

			// if($form_data['order_status']!='All'){

			// 	$where_condition .= " and o.status='".$form_data['order_status']."'";
			// }

			if($form_data['fromDate']!="" && $form_data['toDate']!=""){
				$where_condition .= " and DATE(pe.date_added) between '".date('Y-m-d',strtotime($form_data['fromDate']))."' and '".date('Y-m-d',strtotime($form_data['toDate']))."'";
			}
			else if($form_data['fromDate']!=""){
				$where_condition .= " and DATE(pe.date_added) >='".date('Y-m-d',strtotime($form_data['fromDate']))."'";
			}
			else if($form_data['toDate']!=""){
				$where_condition .= " and DATE(pe.date_added) <='".date('Y-m-d',strtotime($form_data['toDate']))."'";
			}

			$_SESSION['search_cond_for_enquiry'] = $form_data;
			$_SESSION['search_cond_for_enquiry_query'] = $where_condition;
		}

		$enquiry = $this->rawQuery('SELECT pe.*,p.name as product_name, (select keyword from ' . PREFIX . 'url_alias where query=concat(\'product/index/\',pe.product_id)) as keyword  from ' . PREFIX . 'product_enquiry pe inner join ' . PREFIX . 'product p on p.product_id=pe.product_id where 1=1 '.$_SESSION['search_cond_for_enquiry_query'].' order by pe.enquiry_id desc ');

		$pagConfig = array(
		    'baseURL'=>base_url.'enquiry',
		    'totalRows'=>$this->count,
		    'perPage'=>PAGE_LIMIT,
		    'queryStringSegment' =>$page

		);
		$pagination =  new PaginationRendered($pagConfig);
		$this->data['pagination'] = $pagination->createLinks();

		$_SESSION['page'] = $page;
			
		$offset = ($page - 1) * PAGE_LIMIT;
		$sql = " LIMIT " . $offset . "," . PAGE_LIMIT;
		$_SESSION['pagination_sql'] = $sql;

		$enquiry = $this->rawQuery('SELECT pe.*,p.name as product_name, (select keyword from ' . PREFIX . 'url_alias where query=concat(\'product/index/\',pe.product_id)) as keyword  from ' . PREFIX . 'product_enquiry pe inner join ' . PREFIX . 'product p on p.product_id=pe.product_id where 1=1 '.$_SESSION['search_cond_for_enquiry_query'].' order by pe.enquiry_id desc '.$_SESSION['pagination_sql']);

		foreach ($enquiry as  $result) {

			$this->data['enquiries'][] = $result + array('c_canonical'=>$this->getProductImagePath($result['product_id']));
		}

		view('enquiry',$this->data);

	}

	public function getEnquiryMessage(){

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$enquiry_id = $this->xss_clean($_POST['enquiry_id']);

			$res = $this->where('enquiry_id', $enquiry_id)->getOne('product_enquiry');
			if(count($res)){
				echo $res['message'];
			}else{
				echo "Message not found for this enquiry";
			}
			
		}else{
			echo "Message not found for this enquiry";
		}

	}


}

 ?>