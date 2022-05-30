<?php 
include("user_global.php");
// ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);

if(isset($_REQUEST['leadpage']))
{
	if($_REQUEST['leadpage'] == "Get Started")
	{


			$member_fname 	= sanatize_string($_REQUEST['member_fname']);
			$member_lname 	= sanatize_string($_REQUEST['member_lname']);
			$member_email 	= sanatize_string($_REQUEST['member_email']);
			$member_phone 	= sanatize_string($_REQUEST['member_phone']);
			$interested_in 	= sanatize_string($_REQUEST['interested_in']);
			$message 		= sanatize_string($_REQUEST['message']);
			$member_name = $member_fname." ".$member_lname;
			$pagename_leadfrom 	= sanatize_string($_REQUEST['leadpage']);

			
			$pagename_leadfrom = 'Enquiry From Website';
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("./");
			$file_obj->extract_html("contact.html");
			$body = $file_obj->replace_tags("{name}|{email}|{phone}|{interested}|{message}|{subject}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($message))."|$pagename_leadfrom");
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Ashutoshshinde <info@intermind.in>'."\r\n";
			$headers .= "BCC: sushil@intermind.in,hiren@intermind.in\r\n";
			
			mail($member_email, $subject, $body, $headers);
		
			
			//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|$interested_in|".ucfirst(stripslashes($pagename_leadfrom))."|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=41&project_name=ashutoshshinde&enquiry_type=ASK Ashutosh&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);

			

			echo "200";
		
	}
}



?>
