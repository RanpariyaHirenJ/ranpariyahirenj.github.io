<?php 
include("user_global.php");
if(isset($_POST['action']))
{
	if($_POST['action'] == "Submit")
	{
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			$member_name 	= $db_object->sanatize_string($_POST['name']);
			$member_email 	= $db_object->sanatize_string($_POST['email']);
			$member_phone_no = $db_object->sanatize_string($_POST['phone']);
			$company 		= $db_object->sanatize_string($_POST['company']);
			$message 		= $db_object->sanatize_string($_POST['message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
    		$file_obj = new file_manup("./");
    		$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{fullname}|{email}|{phone_no}|{company}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone_no|".ucfirst(stripslashes($company))."|".ucfirst(stripslashes($message))."");
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			
			$to = "info@astrastays.com";
			//$bcc = "info@intermind.in, info@kalptech.com, vighnesh29114@gmail.com, hiren@intermind.in";
			
    		//$headers .= "CC: sales@babuteacoffee.com,fortunetradesolutions@gmail.com\r\n";
    		//$headers .= "BCC: info@intermind.in, info@kalptech.com,vighnesh29114@gmail.com,hiren@intermind.in\r\n";
			//echo $body;die();
			send_email($to,'Astra, info@astrastays.com',$subject,$body);
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone_no|".ucfirst(stripslashes($company))."|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=35&project_name=Astra&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
			
			redirect($url_name[0]."?enquiry=succes");
			die();
		}
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