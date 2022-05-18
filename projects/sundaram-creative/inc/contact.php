<?php 
include("user_global.php");

if(isset($_POST['action']))
{
	if($_POST['action'] == "Send Message")
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
			$member_phone 	= $db_object->sanatize_string($_POST['member_phone']);
			$subject 		= $db_object->sanatize_string($_POST['subject']);
			$message 		= $db_object->sanatize_string($_POST['message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{name}|{email}|{phone}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($subject))."|".ucfirst(stripslashes($message))."");
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			
			//$to = "hjrfifad@gmail.com, hirenatoffice@gmail.com";
			//send_email($to,"info@actgroup.in, Hiren Web Development",$subject,$body);
			
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Hiren Web Development <info@hirenranpariya.in.net>'."\r\n";
			//$headers .= "BCC: info@intermind.in, vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
			$headers .= "CC: hirenatoffice@gmail.com\r\n";
			$to = "hjrfifad@gmail.com";
			
			mail($to, $subject, $body, $headers);
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