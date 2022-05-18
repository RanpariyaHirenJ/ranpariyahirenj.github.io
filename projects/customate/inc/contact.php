<?php 
include("user_global.php");
if(isset($_REQUEST['action']))
{
	if($_REQUEST['action'] == "Submit")
	{
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			$member_name 	= $db_object->sanatize_string($_REQUEST['member_name']);
			$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
			$member_company = $db_object->sanatize_string($_REQUEST['member_company']);
			$member_company_type = $db_object->sanatize_string($_REQUEST['member_company_type']);
			$member_subject = $db_object->sanatize_string($_REQUEST['member_subject']);
			$message  = $db_object->sanatize_string($_REQUEST['message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("contact.html");
			echo $body = $file_obj->replace_tags("{name}|{email}|{company}|{companytype}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|".stripslashes($member_company)."|".ucfirst(stripslashes($member_company_type))."|".ucfirst(stripslashes($member_subject))."|".ucfirst(stripslashes($message))."");
			die();
			$subject  = "You have a new demo enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Customate <info@customate.biz>'."\r\n";
			$headers .= "BCC: info@intermind.in, vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
			$to = "info@customate.biz";
			//$to = "ritesh.kalptech@gmail.com";
			mail($to, $subject, $body, $headers);
			
			/*//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=20&project_name=Techflow&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);*/
			
			redirect($url_name[0]."?enquiry=succes");
		}
	}
	else if($_REQUEST['action'] == "GET STARTED")
	{
		$newsletter_email 	= $db_object->sanatize_string($_REQUEST['newsletter_email']);
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		
		$file_obj = new file_manup("./");
		$file_obj->extract_html("newsletter.html");
		$body = $file_obj->replace_tags("{email}","$newsletter_email");
			
		$subject  = "You have a new newsletter signup request";
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= 'From: Customate <info@customate.biz>'."\r\n";
		$headers .= "BCC: info@intermind.in, vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
		$to = "info@customate.biz";
		//$to = "ritesh.kalptech@gmail.com";
		mail($to, $subject, $body, $headers);
			
		redirect($url_name[0]."?newsletter=succes");
	}
}

if(isset($_REQUEST['action_contact']))
{
	if($_REQUEST['action_contact'] == "SEND ENQUIRY")
	{
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			$member_name 	= $db_object->sanatize_string($_REQUEST['member_name']);
			$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
			$member_phone 	= $db_object->sanatize_string($_REQUEST['member_phone']);
			$member_company = $db_object->sanatize_string($_REQUEST['member_company']);
			$message 		= $db_object->sanatize_string($_REQUEST['message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("enquiry-format.html");
			$body = $file_obj->replace_tags("{name}|{email}|{phone}|{company}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($member_company))."|".ucfirst(stripslashes($message))."");
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Customate <info@customate.biz>'."\r\n";
			$headers .= "BCC: info@intermind.in, vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
			//$headers .= "CC: info@techflowengg.com, uk@techflowengg.com\r\n";
			$to = "info@customate.biz";
			//$to = "ritesh.kalptech@gmail.com";
			mail($to, $subject, $body, $headers);
			
			//enquiry send to enquiry management for intermind
			/*$message = ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($subject))."|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=20&project_name=Techflow&enquiry_type=Enquiry page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);*/
			
			redirect($url_name[0]."?enquiry=succes");
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