<?php 
include("user_global.php");
//print_r($_POST);
if(isset($_POST['action']))
{
	if($_POST['action'] == "Send")
	{
		/*$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{*/
			$first_name 	= $db_object->sanatize_string($_POST['firstr_name']);
			$last_name 	= $db_object->sanatize_string($_POST['last_name']);
			$phone_no = $db_object->sanatize_string($_POST['phone_no']);
			$email_id 		= $db_object->sanatize_string($_POST['email_id']);
			$message 		= $db_object->sanatize_string($_POST['message']);
			
			$fullname = $first_name." ".$last_name;
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
    		$file_obj = new file_manup("./");
    		$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{fullname}|{email}|{phone_no}|{message}","".ucwords(stripslashes($fullname))."|$email_id|$phone_no|".ucfirst(stripslashes($message))."");
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			
			//$to = $email_id.",info@vsynergize.com";
			//send_email($to,'VSynergize Global, info@vsynergize.com',$subject,$body);
			//$to = $email_id.",hiren@intermind.in";
			$to = "info@vsynergize.com";
			send_email($to,' VSynergize Global, info@vsynergize.com',$subject,$body);
			
			//enquiry send to enquiry management for intermind
			/*$message = ucwords(stripslashes($fullname))."|$email_id|$phone_no|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=35&project_name=Astra&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);*/
			
			redirect($url_name[0]."?enquiry=succes");
			die();
		/*}*/
	}
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Untitled Document</title>

</head>



<body>

</body>

</html>