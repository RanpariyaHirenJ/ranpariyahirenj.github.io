<?php 

class Product extends Masters
{

	private $error = array();


	public function index($product_id){

		$product_id = $this->xss_clean($product_id); 

		if($product_id > 0){

			$this->getCommonDetails();

			$this->data['products_details'] = $this->getProductDetails($product_id);
				
			$cat = $this->where('category_id',$this->data['products_details']['category_id'])->getOne('category');

			$this->data['cart_type'] = $cat['cart_type'];
			$this->data['enquiry_type'] = $cat['enquiry_type'];
				

			if($this->data['products_details']['meta_title']==""){
	            $this->data['products_details']['meta_title'] = $this->data['products_details']['name'];
	        }

	       $this->data['getPath'] = str_replace('url=', '', $_SERVER['REDIRECT_QUERY_STRING']);

	        $product_path = explode('/', $this->data['getPath']);
        	$product_path = array_filter($product_path);

	        $product_string = array_pop($product_path);

	        $this->data['image_path'] =  $this->data['image_path'] = $this->getProductImagePath($product_id);

	        $this->data['breadcrumbs'] = array();
	        foreach ($product_path as $value) {
	            $this->data['breadcrumbs'][] = $this->getCategoryBreadcrumbs($value);
	        }

	        $this->data['tag'] = array_filter(explode(',', $this->data['products_details']['tag']));

	        $this->data['customer_id'] = $_SESSION['customer_id'];

	        $this->data['customer_details'] = $this->getCustomerDetails($_SESSION['customer_id']);

	        $this->data['related'] = $this->getRelatedProducts($product_string);

	        
			view('product-details',$this->data);

		}
		
		
	}

	public function getProductDetails($product_id){


        $query = $this->rawQueryOne("SELECT p.*, (select category_id from " . PREFIX . "product_to_category where product_id=p.product_id)  as category_id , (select product_id from " . PREFIX . "wishlist where product_id=p.product_id and customer_id=".(int)$_SESSION['customer_id'].") as wishlist from " . PREFIX . "product p where product_id=".(int)$product_id);

        $images = $this->rawQuery("SELECT * from " . PREFIX . "product_image where product_id=".(int)$product_id);

        $query['product_images'] = $images;

        return $query;

       

    }
   


    public function getRelatedProducts($product_string){

      
        $query = $this->rawQuery("SELECT * FROM " . PREFIX . "product WHERE MATCH(name) AGAINST('".$product_string."')  LIMIT 5");
        $raleted = array();
        foreach ($query as $result) {

            $raleted[] = array('product_id'=>$result['product_id'],'name'=>$result['name'],'image'=>$result['image'],'price'=>$result['price'],'keyword'=>$this->getNewsSeoUrl($result['product_id']),'image_path'=>$this->getProductImagePath($result['product_id']),'cart_type'=>$this->getProductCartType($result['product_id']),'wishlist'=>$this->getWishlistFlag($result['product_id']));
        }

        return $raleted;

    }

     public function addProjectEnquiry(){

    	$json = array();

    	if($_SERVER['REQUEST_METHOD'] == 'POST') {

		      $form_data = $this->xss_clean($_POST);  

		      $form_data['date_added'] = date('Y-m-d H:i:s');

		   
		      if($id = $this->insert('product_enquiry',$form_data)){

		      	$year = date('y');
	        	$enquiry_prefix = "ENQ%04d/".$year.'-'.($year+1);

	        	$enquiry_no = sprintf($enquiry_prefix, $id);

	        	$this->where('enquiry_id',$id)->update('product_enquiry',compact('enquiry_no'));

		      	$json['success'] = true;

		      	$this->sendEnquiryToAdmin($form_data);
		      }
			
		}

		header('Content-Type: application/json');
		echo json_encode($json);

    }

    public function sendEnquiryToAdmin($form){

    	$project = $this->where('product_id',$form['product_id'])->getOne('product','name');

    	$message = "<table width='600' border='0' cellspacing='5' align='center' style='background-color: #f8f8f8;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;padding:10px'>
				  <tbody><tr><td align='left' colspan='3'><img src='http://staging.intermind.in/woodsmiths/php/images/logo.png' style='margin-top:0px;padding-left:5px;width:140px' ></td></tr>
				  <tr>
					<td colspan='2'>&nbsp;</td>
				  </tr>
				  <tr>
				  	<td colspan='3'>
				  		<p>Dear Admin, </p>
				  		<p>Congratulations! We have a project enquiry from Woodsmiths.com for ".$project['name']."! </p>
				  		<p><b>Following are customer's details</b></p>
				  		<p>Name: ".$form['name']."</p>
				  		<p>Email: ".$form['email']."</p>
				  		<p>Phone: ".$form['mobile']."</p><br>
				  		
				  		<p><b>Message:</b></p>
				  		<p>".$form['message']."</p>


				  		<p>Kindly respond back to the customer.</p><br>
				  
						Thanks,<br>
						The Woodsmiths Web Team
				    </td>
				  </tr>
				</tbody></table>";
			
		$mail['subject'] = "Woodsmiths - Project Inquiry for ".$project['name'];  
		$mail['message'] = $message;
		$mail['to'] = $form['email'];

		$this->sendMail($mail);

    }

    


    


	
}