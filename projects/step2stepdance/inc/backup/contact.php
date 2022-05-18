<?php 
include("user_global.php");
if(isset($_REQUEST['action']))
{
	if($_REQUEST['action'] == "Submit")
	{
		$first_name 	= $db_object->sanatize_string($_REQUEST['first_name']);
		$last_name 		= $db_object->sanatize_string($_REQUEST['last_name']);
		$member_email 	= $db_object->sanatize_string($_REQUEST['email']);
		$member_mobile 	= $db_object->sanatize_string($_REQUEST['contact_number']);
		$country_name 	= $db_object->sanatize_string($_REQUEST['country_name']);
		$interested_in  = $db_object->sanatize_string($_REQUEST['interested_in']);
		$message 		= $db_object->sanatize_string($_REQUEST['message']);
		
		$member_name	= $first_name." ".$last_name;
		
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		
		$file_obj = new file_manup("./");
		$file_obj->extract_html("contact.html");
		$body = $file_obj->replace_tags("{name}|{email}|{phone}|{country}|{intrested_in}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($message))."");
		
		$subject  = "You have a new enquiry from ".ucwords($member_name);
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= 'From: Tech Flow <info@techflowengg.com>'."\r\n";
		$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
		//$headers .= "CC: info@intermind.in, info@kalptech.com\r\n";
		
		//$to = "arif@techflowengg.com, nchatterjee@techflowengg.com";
		$to = "sunil@intermind.in, info@intermind.in";
		mail($to, $subject, $body, $headers);
		
		//enquiry send to enquiry management for intermind
		/*$message = ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($message));
		$myip = $_SERVER['REMOTE_ADDR'];
		$datetime = date("Y-m-d H:i:s");
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL,"http://www.intermind.in/admin/fetch_enquiry.php");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=20&project_name=Techflow&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$server_output = curl_exec ($ch);
		curl_close ($ch);*/
		
		redirect($url_name[0]."?enquiry=succes");
	}
}

if(isset($_REQUEST['action_enquiry']))
{
	if($_REQUEST['action_enquiry'] == "Submit")
	{
		$first_name 	= $db_object->sanatize_string($_REQUEST['first_name']);
		$last_name 		= $db_object->sanatize_string($_REQUEST['last_name']);
		$member_email 	= $db_object->sanatize_string($_REQUEST['email']);
		$member_mobile 	= $db_object->sanatize_string($_REQUEST['contact_number']);
		$country_name 	= $db_object->sanatize_string($_REQUEST['country_name']);
		$interested_in  = $db_object->sanatize_string($_REQUEST['interested_in']);
		$subject 		= $db_object->sanatize_string($_REQUEST['subject']);
		$message 		= $db_object->sanatize_string($_REQUEST['message']);
		
		$member_name	= $first_name." ".$last_name;
		
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		
		$file_obj = new file_manup("./");
		$file_obj->extract_html("enquiry-format.html");
		$body = $file_obj->replace_tags("{name}|{email}|{phone}|{country}|{intrested_in}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($subject))."|".ucfirst(stripslashes($message))."");
		
		$subject  = "You have a new enquiry from ".ucwords($member_name);
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= 'From: Tech Flow <info@techflowengg.com>'."\r\n";
		$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
		//$headers .= "CC: info@intermind.in, info@kalptech.com\r\n";
		
		//$to = "arif@techflowengg.com, nchatterjee@techflowengg.com";
		$to = "sunil@intermind.in, info@intermind.in";
		mail($to, $subject, $body, $headers);
		
		//enquiry send to enquiry management for intermind
		/*$message = ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($message));
		$myip = $_SERVER['REMOTE_ADDR'];
		$datetime = date("Y-m-d H:i:s");
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL,"http://www.intermind.in/admin/fetch_enquiry.php");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=20&project_name=Techflow&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$server_output = curl_exec ($ch);
		curl_close ($ch);*/
		
		redirect($url_name[0]."?enquiry=succes");
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