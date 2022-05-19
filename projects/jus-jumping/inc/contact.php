<?php 
include("user_global.php");

if(isset($_POST['action']))
{
	if($_POST['action'] == "Submit")
	{
		$member_name 	= $db_object->sanatize_string($_POST['member_name']);
		$member_email 	= $db_object->sanatize_string($_POST['member_email']);
		$member_phone 	= $db_object->sanatize_string($_POST['member_phone']);
		$subject 		= $db_object->sanatize_string($_POST['subject']);
		$message 		= $db_object->sanatize_string($_POST['message']);
		
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		
		$file_obj = new file_manup("./");
		$file_obj->extract_html("contact.html");
		$body = $file_obj->replace_tags("{name}|{email}|{phone}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($subject))."|".ucfirst(stripslashes($message))."");
		
		$subject  = "You have a new enquiry from ".ucwords($member_name);
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
		$to = "info@jusjumpin.com";
		
		send_email($to,"info@jusjumpin.com,Jus' Jumpin'",$subject,$body);
		//mail($to, $subject, $body, $headers);
		
		$file_obj1 = new file_manup("./");
		$file_obj1->extract_html("contact-customer.html");
		$bodycust = $file_obj1->replace_tags("{name}","".ucwords(stripslashes($member_name))."");
		
		$subjectcust  = "Thank you for contacting us. Our team will get back to you soon";
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
		$tocust = $member_email;
		
		send_email($tocust,"info@jusjumpin.com,Jus' Jumpin'",$subjectcust,$bodycust);
		//mail($tocust, $subjectcust, $bodycust, $headers);
		
		//enquiry send to enquiry management for intermind
		$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($subject))."|".ucfirst(stripslashes($message));
		$myip = $_SERVER['REMOTE_ADDR'];
		$datetime = date("Y-m-d H:i:s");
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=30&project_name=Jus Jumpin&enquiry_type=Contact page&enquiry_details=".urlencode($message)."&datetime=$datetime&cust_ip=$myip");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		$server_output = curl_exec ($ch);
		curl_close ($ch);
		
		redirect($url_name[0]."?enquiry=succes");
	}
}

if(isset($_POST['action_newsletter']))
{
	if($_POST['action_newsletter'] == "Submit")
	{
		$newsletter_email 	= $db_object->sanatize_string($_POST['newsletter_email']);
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		
		$file_obj = new file_manup("./");
		$file_obj->extract_html("newsletter.html");
		$body = $file_obj->replace_tags("{email}","$newsletter_email");
			
		$subject  = "You have a new newsletter signup request";
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
		$to = "info@jusjumpin.com";
		
		send_email($to,"info@jusjumpin.com,Jus' Jumpin'",$subject,$body);
		//mail($to, $subject, $body, $headers);
		
		$file_obj1 = new file_manup("./");
		$bodycust =$file_obj1->extract_html("newsletter-customer.html");
		
		$subjectcust  = "Your signup request has been submitted successfully";
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
		$tocust = $newsletter_email;
		
		send_email($tocust,"info@jusjumpin.com,Jus' Jumpin'",$subjectcust,$bodycust);
		//mail($tocust, $subjectcust, $bodycust, $headers);
		
		//enquiry send to enquiry management for intermind
		$message = $newsletter_email;
		$myip = $_SERVER['REMOTE_ADDR'];
		$datetime = date("Y-m-d H:i:s");
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=30&project_name=Jus Jumpin&enquiry_type=News Letter&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		$server_output = curl_exec ($ch);
		curl_close ($ch);
		
		redirect($url_name[0]."?newsletter=succes");
	}
}

?>