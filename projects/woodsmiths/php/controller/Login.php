<?php 
// ini_set('display_errors', -1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
/**
 * 
 */
class Login extends Masters
{

	private $error = array();



	public function index()
	{		
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {

		      $form_data = $this->xss_clean($_POST);  

		      $res = $this->where('email',$form_data['email'])->where('password',encode5t($form_data['password']))->where('status',1)->getOne('customer');

		      if($this->count > 0 )
		      { 

		  		$_SESSION['customer_id'] = $res["customer_id"];
		        $_SESSION['customer_name'] = $res["first_name"];

		        $this->redirect('order-history');
		          exit();
		  
		      }else{
		        $this->data["message"] = array( 'type'  => 'warning', 'title' => 'Alert', 'msg' => 'Invalid Login Credentials!' );    
		      }
			
		}

		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}



    $this->getCommonDetails();
    $this->data['form'] = array('type'=>'Add','title'=>'Create a New Account','action'=>'register');

	view('login',$this->data);

	}
	
	public function register(){
		
		if($_SERVER['REQUEST_METHOD'] == 'POST' && $this->validateForm()) {

			$form_data = $this->xss_clean($_POST);

			$form_data['date_added'] = date('Y-m-d H:i:s');

			$form_data['password'] = encode5t($form_data['password']);
			$form_data['verification_code'] =  encode5t(date("y").date("m").rand(0,10).date("d").date("h").rand(0,10).date("i").date("s"));
	
			if($this->insert('customer', $form_data)){
				$this->send_verification_mail($form_data['first_name'].' '.$form_data['last_name'],$form_data['email'],$form_data['verification_code']);
				$_SESSION['message'] = array(
									'type'  => 'success',
									'title' => 'Success',
									'msg'	=> "Your registration has been successful! A verification link has been sent to your registered Email. Please click the link to activate your account."
									);
			
	
			}

			
			
		}



		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}

    	$this->getCommonDetails();

    	$this->data['form'] = array('type'=>'Add','title'=>'Create a New Account','action'=>'register');

		view('login',$this->data);    		        			
	}



	public function send_verification_mail($name, $email,$verification_code){

		$message = "<table width='600' border='0' cellspacing='5' align='center' style='background-color: #f8f8f8;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;padding:10px'>
				  <tbody><tr><td align='left' colspan='3'><img src='http://staging.intermind.in/woodsmiths/php/images/logo.png' style='margin-top:0px;padding-left:5px;width:140px' ></td></tr>
				  <tr>
					<td colspan='2'>&nbsp;</td>
				  </tr>
				  <tr>
				  	<td colspan='3'>
				  		<h3>Verify This Email Addresss</h3>
				  		<p>Dear ".$name." </p>
				  		<p>Welcome to Woodsmiths! </p>
				  		<p>It is a great pleasure to have you registered with us.</p><br>
				  		<p>Request you to kindly click on the button below to get your email verified.</p><br>
				  		<p style='text-align:center'><a style='text-decoration: none;width: 200px;height: 40px;background-color: #f32929;border-radius: 4px;padding: 10px;color: white;font-size: 12;' href='http://staging.intermind.in/woodsmiths/php/email_verification/".$verification_code."' target='_blank'>Clicking Here!</a></p>
						Thanks &amp; Regards<br>
						The Woodsmiths Web Team
				    </td>
				  </tr>
				</tbody></table>";
			
		$mail['subject'] = "Woodsmiths - Verify your email address";  
		$mail['message'] = $message;
		$mail['to'] = $email;

		$this->sendMail($mail);

	}

	public function reset_password(){
		$form_data = $this->xss_clean($_POST);	

		$res = $this->where('email',$form_data['email'])->getOne('customer');

		if($this->count>0){

			$this->send_reset_password_mail($res['first_name']." ".$res['last_name'],decode5t($res['password']),$res['email']);
			$_SESSION['message'] = array(
										'type'  => 'success', 
										'title' => 'Success', 
										'msg'	=> 'Your password has been found and sent successfully to your registered email addresss. Please check your email to know your password.'
									);
		}else{
	
			$_SESSION['message'] = array(
										'type'  => 'warning', 
										'title' => 'Alert', 
										'showForgotDiv' => 'Yes',
										'msg'	=> 'Email address not found.'
									);
		}

		$this->redirect('login');

	}

	public function send_reset_password_mail($name,$password, $email){

		$message = "<table width=\"600\" border=\"0\" cellspacing=\"5\" align=\"center\" style=\"background-color: #f8f8f8;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;padding:10px\">
				  <tbody><tr><td align=\"left\" colspan=\"3\"><img src=\"http://staging.intermind.in/woodsmiths/php/images/logo.png\" style=\"margin-top:0px;padding-left:5px;width:126px\" class=\"CToWUd\"></td></tr>
				  <tr>
					<td colspan=\"2\">&nbsp;</td>
				  </tr>
				  <tr>
				  	<td colspan=\"3\">
				  		
				  		<p>Dear ".$name." </p>
				  		<p>Following is your password that you requested, kindly use this password along with your registered email address to log into your account on Woodsmiths website.</p>
				  		<p>Password : ".$password."</p>

				  		<p><a  href='http://staging.intermind.in/woodsmiths/php/login' target='_blank'>Click Here</a> to login now!</p>

				  		<p>For any further queries feel free to get in touch with us at customersupport@woodsmiths.com</p><br>
				  		
						Thanks &amp; Regards<br>
						The Woodsmiths Web Team
				    </td>
				  </tr>
				</tbody></table>";


		$mail['subject'] = "Woodsmiths - Password recovery";  
		$mail['message'] = $message;
		$mail['to'] = $email;

		$this->sendMail($mail);


	}

	public function email_verification($verification_code){
		$verification_code = $this->xss_clean($verification_code);
		$res = $this->where('verification_code',$verification_code)->getOne('customer');

		if($this->count>0){

			$_SESSION['customer_id'] = $res["customer_id"];
		    $_SESSION['customer_name'] = $res["first_name"];

			$this->where('customer_id',$res['customer_id'])->update('customer',['is_email_veriefied'=>1,'status'=>1]);
			$_SESSION['message'] = array(
										'type'  => 'success', 
										'title' => 'Success', 
										'confirmButtonText' => 'Yes',
										'msg'	=> 'Dear '.$res['first_name'].' '.$res['last_name'].', Congratulations! Your registration has been successful! Woodsmiths welcomes you, and wishes you the very best.'
									);
			
			$this->redirect('login');
			exit();
			
		}else{
			$_SESSION['message'] = array(
										'type'  => 'warning', 
										'title' => 'Alert', 
										'msg'	=> 'Something went wrong.'
									);
		}

		
		
		
	}

	public function myAccount(){

		if($_SERVER['REQUEST_METHOD'] == 'POST' && $this->validateForm()) {

			$form_data = $this->xss_clean($_POST);

			$form_data = array_filter($form_data);

			if($this->where('customer_id',$_SESSION['customer_id'])->update('customer', $form_data)){

				$_SESSION['message'] = array(
										'type'  => 'success', 
										'title' => 'Success', 
										'msg'	=> 'Account details has been updated successfully.'
									);
			}	
	
		}



		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}

    	$this->getCommonDetails();

		if($_SESSION['customer_id'] > 0){
			$this->data['user_details'] = $this->where('customer_id',$_SESSION['customer_id'])->getOne('customer');
		}

		$this->data['form'] = array('type'=>'Edit','title'=>'Update Profile','action'=>'my-account');

		view('login',$this->data);
	}

	public function changePassword(){

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);

			$form_data['password'] = encode5t($form_data['password']);

			if($this->where('customer_id',$_SESSION['customer_id'])->update('customer', $form_data)){

				$_SESSION['message'] = array(
										'type'  => 'success', 
										'title' => 'Success', 
										'msg'	=> 'Your password has been updated successfully.'
									);
				
			
			}	
	
		}



		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}

    	$this->getCommonDetails();

		$this->data['form'] = array('type'=>'password','title'=>'Change Password','action'=>'change-password');

		
		view('login',$this->data);
	}




	private function validateForm(){

		$email = $this->xss_clean($_POST['email']);

		if($_SESSION['customer_id'] > 0){

			$customer_id = $this->xss_clean($_SESSION['customer_id']);
			$this->where('customer_id',$customer_id,"!=")->where('email',$user_email)->get('customer');

		}else{
			$this->where('email',$email)->get('customer');
		}


		if($this->count > 0){

			$_SESSION['message'] = array(
									'type'  => 'warning',
									'title' => 'Alert',
									'msg'	=> 'This users email id already exits. please try again..'
									);
			return false;
		}

		return true;

	}

	public function PerformLogout(){
			
			session_destroy();
      $this->redirect('login');
   
	}
}


 ?>
