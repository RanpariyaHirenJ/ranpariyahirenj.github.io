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
			$member_name 	= $db_object->sanatize_string($_POST['member_name']);
			$member_email 	= $db_object->sanatize_string($_POST['member_email']);
			$member_phone_no = $db_object->sanatize_string($_POST['member_phone_no']);
			$suggestion = $db_object->sanatize_string($_POST['suggestion']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("../templates/");
			$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{fullname}|{email}|{phone_no}|{feedback}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone_no|".ucfirst(stripslashes($suggestion))."");
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			
			//$to = "ritesh.kalptech@gmail.com";
			$to = "contact@speciality.co.in";
			send_email($to,'Speciality Restaurants Ltd.,info@speciality.co.in',$subject,$body);
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone_no|".ucfirst(stripslashes($suggestion));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=33&project_name=Speciality&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
			
			redirect($url_name[0]."?enquiry=succes");
		}
	}
}

if(isset($_POST['franchise_enquiry']))
{
	if($_POST['franchise_enquiry'] == "Submit"){
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			$member_name 	= $db_object->sanatize_string($_POST['member_name']);			
			$member_email 	= $db_object->sanatize_string($_POST['member_email']);			
			$member_subject = $db_object->sanatize_string($_POST['member_subject']);
			$member_message = $db_object->sanatize_string($_POST['member_message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("../templates/");
			$file_obj->extract_html("franchise-enquiry.html");
			$body = $file_obj->replace_tags("{fullname}|{email}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|".ucfirst(stripslashes($member_subject))."|".ucfirst(stripslashes($member_message))."");
			$subject  = "Franchise enquiry from ".ucwords($member_name);
			
			//$to = "ritesh.kalptech@gmail.com";
			$to = "siddhartha@speciality.co.in, lahiri.sapl@gmail.com";
			
			send_email($to,'Speciality Restaurants Ltd.,info@speciality.co.in',$subject,$body);
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|".ucfirst(stripslashes($member_subject))."|".ucfirst(stripslashes($member_message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=33&project_name=Speciality&enquiry_type=franchise enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
			
			redirect($url_name[0]."?franchise=succes");
		}
	}
}




if(isset($_POST['customer_event']))
{
	if($_POST['customer_event'] == "Submit"){
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			$member_name 	= $db_object->sanatize_string($_POST['member_name']);
			$member_phone = $db_object->sanatize_string($_POST['member_phone']);
			$member_email 	= $db_object->sanatize_string($_POST['member_email']);			
			$member_city = $db_object->sanatize_string($_POST['member_city']);
			$member_event = $db_object->sanatize_string($_POST['member_event']);
			$member_guest = $db_object->sanatize_string($_POST['member_guest']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("../templates/");
			$file_obj->extract_html("speciality-catering-services.html");
			$body = $file_obj->replace_tags("{fullname}|{phone}|{email}|{city}|{event}|{guest}","".ucwords(stripslashes($member_name))."|$member_email|".ucfirst(stripslashes($member_subject))."|".ucfirst(stripslashes($member_message))."");
			$subject  = "Event Booking from ".ucwords($member_name);
			
			//$to = "ritesh.kalptech@gmail.com";
			$to = "chandan278@gmail.com";
			
			send_email($to,'Speciality Restaurants Ltd.,info@speciality.co.in',$subject,$body);
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|".ucfirst(stripslashes($member_subject))."|".ucfirst(stripslashes($member_message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=33&project_name=Speciality&enquiry_type=Customer event enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
			
			redirect($url_name[0]."?event=succes");
		}
	}
}

if(isset($_POST['customer_feedback']))
{
	if($_POST['customer_feedback'] == "Submit"){
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			$member_name 	= $db_object->sanatize_string($_POST['member_name']);
			$member_email 	= $db_object->sanatize_string($_POST['member_email']);
			$member_mobile = $db_object->sanatize_string($_POST['member_mobile']);
			$member_brand = $db_object->sanatize_string($_POST['member_brand']);
			$member_city = $db_object->sanatize_string($_POST['member_city']);
			$member_subject = $db_object->sanatize_string($_POST['member_subject']);
			$member_message = $db_object->sanatize_string($_POST['member_message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("../templates/");
			$file_obj->extract_html("customer-feedback.html");
			$body = $file_obj->replace_tags("{fullname}|{email}|{mobile}|{brand}|{city}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|".ucfirst(stripslashes($member_mobile))."|".ucfirst(stripslashes($member_brand))."|".ucfirst(stripslashes($member_city))."|".ucfirst(stripslashes($member_subject))."|".ucfirst(stripslashes($member_message))."");
			$subject  = "Customer feedback from ".ucwords($member_name);
			
			//$to = "ritesh.kalptech@gmail.com";
			$to = "feedback@speciality.co.in";
			send_email($to,'Speciality Restaurants Ltd.,info@speciality.co.in',$subject,$body);
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|".ucfirst(stripslashes($member_subject))."|".ucfirst(stripslashes($member_message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=33&project_name=Speciality&enquiry_type=Customer Feedback&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
			
			redirect($url_name[0]."?feedback=succes");
		}
	}
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Untitled Document</title>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-143009552-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-143009552-1');
</script>
</head>



<body>

</body>

</html>