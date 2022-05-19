<?php 
include("user_global.php");
if(isset($_REQUEST['action']))
{
	if($_REQUEST['action'] == "Send Enquiry")
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
			$member_mobile 	= $db_object->sanatize_string($_REQUEST['member_mobile']);
			$member_mesaage = $db_object->sanatize_string($_REQUEST['member_mesaage']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{name}|{email}|{phone}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($member_mesaage)));
	
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Global DCM Logistics Services <infoindia@globaldcm.com>'."\r\n";
			$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
			$headers .= "CC: infoUSA@globaldcm.com, info@intermind.in\r\n";
			
			$to = "infoindia@globaldcm.com";
			mail($to, $subject, $body, $headers);
			
			$file_obj1 = new file_manup("./");
			$file_obj1->extract_html("customer_contact.html");
			$bodycust = $file_obj1->replace_tags("{name}","".ucwords(stripslashes($member_name)));
			
			$subjectcust  = "Thank you for your enquiry. Our executives will get back to you soon";
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Global DCM Logistics Services <infoindia@globaldcm.com>'."\r\n";
			$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
			
			$tocust = $member_email;
			mail($tocust, $subjectcust, $bodycust, $headers);
			
			//enquiry send to enquiry management for intermind
			$message = ucfirst(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes(urlencode($member_mesaage)));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=22&project_name=Global DCM Inc&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
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