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
			$member_name 	= $db_object->sanatize_string($_POST['member_name']);
			$member_email 	= $db_object->sanatize_string($_POST['member_email']);
			$member_phone 	= $db_object->sanatize_string($_POST['member_mobile']);
			$message 		= $db_object->sanatize_string($_POST['message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{name}|{email}|{phone}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($message))."");
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Globus Events <events.globus@gmail.com>'."\r\n";
			$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
			$headers .= "CC: info@intermind.in\r\n";
			$to = "events.globus@gmail.com";
			mail($to, $subject, $body, $headers);
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=29&project_name=Globus Events&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
			
			redirect($url_name[0]."?enquiry=succes");
		}
	}
}
?>