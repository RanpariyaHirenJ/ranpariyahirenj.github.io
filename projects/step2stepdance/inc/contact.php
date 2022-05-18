<?php 
include("user_global.php");
if(isset($_POST['action']))
{
	if($_POST['action'] == "Submit Now")
	{
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			$member_name = $db_object->sanatize_string($_POST['member_name']);
			$member_email = $db_object->sanatize_string($_POST['member_email']);
			$member_mobile = $db_object->sanatize_string($_POST['member_mobile']);
			$subjectt = $db_object->sanatize_string($_POST['subject']);
			$message = $db_object->sanatize_string($_POST['message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			if(!preg_match("/^([a-zA-Z' ]+)$/",$member_name)){ redirect($url_name[0]."?error"); die(); }
    			if (!filter_var($member_email, FILTER_VALIDATE_EMAIL)) { redirect($url_name[0]."?error"); die(); }
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{name}|{email}|{phone}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($subjectt))."|".ucfirst(stripslashes($message))."");
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Step2Step Dance Academy <rohitsonirs555@gmail.com>'."\r\n";
			$headers .= "BCC: info@intermind.in, vighnesh29114@gmail.com\r\n";
			
			$to = "rohitsonirs555@gmail.com";
			mail($to, $subject, $body, $headers);
			
			$file_obj1 = new file_manup("./");
			$file_obj1->extract_html("contact-customer.html");
			$bodycust = $file_obj1->replace_tags("{name}","".ucwords(stripslashes($member_name))."");
			
			$subjectcust  = "Thank you for your enquiry. Our team will get back to you soon";
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Step2Step Dance Academy <rohitsonirs555@gmail.com>'."\r\n";
			$headers .= "BCC: vighnesh29114@gmail.com\r\n";
			
			$tocust = $member_email;
			mail($tocust, $subjectcust, $bodycust, $headers);
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($subjectt))."|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=25&project_name=Step2Step&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
			
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