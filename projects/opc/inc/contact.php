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
			$company_name 	= $db_object->sanatize_string($_POST['company_name']);
			$member_email 	= $db_object->sanatize_string($_POST['member_email']);
			$member_phone 	= $db_object->sanatize_string($_POST['member_phone']);
			$industry 		= $db_object->sanatize_string($_POST['industry']);
			$message 		= $db_object->sanatize_string($_POST['message']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{name}|{company}|{email}|{phone}|{industry}|{message}","".ucwords(stripslashes($member_name))."|".ucwords(stripslashes($company_name))."|$member_email|$member_phone|".ucfirst(stripslashes($industry))."|".ucfirst(stripslashes($message))."");
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: OPC Asset Solutions <info@opc.co.in>'."\r\n";
			$headers .= "BCC: sunil@intermind.in, arya@intermind.in, ritesh.kalptech@gmail.com\r\n";
			$to = "info@opc.co.in";
			
			mail($to, $subject, $body, $headers);
			
			//enquiry send to enquiry management for intermind
			$message = ucfirst(stripslashes($member_name))."|$member_email|$member_phone|".stripslashes(urlencode($company_name))."|".stripslashes(urlencode($industry))."|".stripslashes(urlencode($message))."|".stripslashes(urlencode($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS,"user_id=31&project_name=OPC&enquiry_type=Enquiry Page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
		
			redirect($url_name[0]."?enquiry=succes");
		}
	}
}
?>