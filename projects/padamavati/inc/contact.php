<?php 
include("user_global.php");
// ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);

if(isset($_REQUEST['leadpage']))
{
	if($_REQUEST['leadpage'] == "Send Enquiry")
	{


			$member_fname 	= sanatize_string($_REQUEST['member_fname']);
			$member_lname 	= sanatize_string($_REQUEST['member_lname']);
			$member_email 	= sanatize_string($_REQUEST['member_email']);
			$member_phone 	= sanatize_string($_REQUEST['member_phone']);
			$message 		= sanatize_string($_REQUEST['message']);
			$member_name = $member_fname." ".$member_lname;

			
			$pagename_leadfrom = 'Enquiry From Website';
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{name}|{email}|{phone}|{message}|{subject}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($message))."|$pagename_leadfrom");
			
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Padamavatiroyal<info@intermind.in>'."\r\n";
			$headers .= "BCC: sushil@intermind.in\r\n";
			
			//mail(, $subject, $body, $headers);
            $file_obj1 = new file_manup("./");
            $file_obj1->extract_html("customer.html");
        	$member_body = $file_obj1->replace_tags("{member_name}",""."$member_name");
		
        	$mail_data['action'] = 'mail_send';
        	$mail_data['to'] = 'officialpadamavati@gmail.com';
        	$mail_data['from'] = 'info@padmavati.com';
        	$mail_data['project_name'] = 'padamavatiroyal';
        	$mail_data['subject'] = $subject;
        	$mail_data['body'] = $body;
        	
        	$mail_data['member_subject'] = "Thank you for contacting us - padamavatiroyal.com";
        	$mail_data['member_body'] = $member_body;
        	$mail_data['member_email'] = $member_email;
        
        
        	$ch = curl_init();
        	curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/send_mail/padamavatiroyal.php");
        	curl_setopt($ch, CURLOPT_POST, 1);
        	curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
        	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        	$server_output = curl_exec ($ch);
        	curl_close ($ch);
		
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($pagename_leadfrom))."|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=42&project_name=padamavatiroyal&enquiry_type=Send Enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);

			

			echo "200";
		
	}
}



?>
