<?php 
include("user_global.php");
// ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);
session_start();

$_SESSION['previous_path'] = $_SERVER['HTTP_REFERER'];

if(isset($_REQUEST['action']))
{
	if($_REQUEST['action'] == "Get Started" || $_REQUEST['action'] == "Submit Now")
	{
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			if(strtolower(trim($_REQUEST['member_fname']))!=strtolower(trim($_REQUEST['member_lname']))){
				$member_fname 	= $db_object->sanatize_string($_REQUEST['member_fname']);
				$member_lname 	= $db_object->sanatize_string($_REQUEST['member_lname']);
				$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
				$member_phone 	= $db_object->sanatize_string($_REQUEST['member_phone']);
				$message 		= $db_object->sanatize_string($_REQUEST['message']);
				$member_name = $member_fname." ".$member_lname;
				$pagename_leadfrom 	= $db_object->sanatize_string($_REQUEST['leadpage']);
				$_SESSION['member_name'] = $member_name;
				if($pagename_leadfrom != ""){
					if($pagename_leadfrom == "index"){ $pagename_leadfrom = "Home Page";	}
					else if($pagename_leadfrom == "about"){ $pagename_leadfrom = "About Page"; }
					else if($pagename_leadfrom == "contact"){ $pagename_leadfrom = "Contact Page"; }
					else { $pagename_leadfrom = ucwords($pagename_leadfrom); } 
				}
				else { $pagename_leadfrom = "Contact Page"; }
				
				$url_name = explode("?",$_SERVER['HTTP_REFERER']);
				
				$file_obj = new file_manup("./");
				$file_obj->extract_html("contact.html");
				$body = $file_obj->replace_tags("{name}|{email}|{phone}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($pagename_leadfrom))."|".ucfirst(stripslashes($message))."");
				
				$subject  = "You have a new enquiry from ".ucwords($member_name);
				$headers = "MIME-Version: 1.0"."\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
				$headers .= 'From: VSynergize <info@vsynergize.com>'."\r\n";
				$headers .= "CC: info@intermind.in\r\n";
				
				
				mail("trish.a@vsynergize.com,raj.a@vsynergize.com,naved.k@vsynergize.com,arlette@vsynergize.com", $subject, $body, $headers);


				
				//enquiry send to enquiry management for intermind
				$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($pagename_leadfrom))."|".ucfirst(stripslashes($message));
				$myip = $_SERVER['REMOTE_ADDR'];
				$datetime = date("Y-m-d H:i:s");
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=24&project_name=VSynergize&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				$server_output = curl_exec ($ch);
				curl_close ($ch);

					//enquiry send to enquiry management for intermind
				$mail_data['action'] = 'sample_mail';
				$mail_data['client_address'] = $_SERVER['REMOTE_ADDR'];
				$mail_data['ip_address'] = '216.51.232.29';
				$mail_data['to'] = 'trish.a@vsynergize.com,raj.a@vsynergize.com,naved.k@vsynergize.com,arlette@vsynergize.com,rizamovahedi@gmail.com,arlette.g@vsynergize.com,mike.k@vsynergize.com';
				$mail_data['from'] = 'info@vsynergize.com';
				$mail_data['cc'] = 'info@intermind.in';
				$mail_data['project_name'] = 'VSynergize';
				$mail_data['subject'] = $subject;
				$mail_data['body'] = $body;

				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/mail_send.php");
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				echo $server_output = curl_exec ($ch);
				curl_close ($ch);
			}
			

			redirect('https://www.vsynergizeoutsourcing.com/thankyou.html');
		}
	}
}

if(isset($_REQUEST['action_enquiry']))
{
	if($_REQUEST['action_enquiry'] == "Submit")
	{
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			
			$member_fname 	= $db_object->sanatize_string($_REQUEST['member_fname']);
			$member_lname 	= $db_object->sanatize_string($_REQUEST['member_lname']);
			$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
			$member_phone 	= $db_object->sanatize_string($_REQUEST['contact_number']);
			$country_name 	= $db_object->sanatize_string($_REQUEST['country_name']);
			$interested_in 	= $db_object->sanatize_string($_REQUEST['interested_in']);
			$message_val 	= $db_object->sanatize_string($_REQUEST['message_val']);
			$member_name 	= $member_fname." ".$member_lname;
			$_SESSION['member_name'] = $member_name;
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
				
		

			$file_obj = new file_manup("./");
			$file_obj->extract_html("career.html");
			$body = $file_obj->replace_tags("{name}|{email}|{phone}|{country}|{interested}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($message_val))."");
			
			$subject  = "You have a new job application from ".ucwords($member_name);
		
			if($_FILES["resume_file"]['name'] != "")
			{

				$semi_rand = md5(time());
				$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
				$from = "VSynergize <info@vsynergize.com>";
				$headers = "From: $from";
				$headers .= "\nCC: info@intermind.in";
				$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
				$message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/html; charset=UTF-8\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $body . "\n\n"; 
				$message .= "--{$mime_boundary}\n";
			
				$filename = "Attachment".date("dmYHis").rand(0,50);
				$file_obj = new file_manup("../uploads/");
				$filename = $file_obj->upload_file($_FILES["resume_file"]['name'],$_FILES["resume_file"]['tmp_name'],$filename,"jpeg,jpg,png,doc,docx,xls,xlsx,ppt,pptx,pdf",$_FILES["resume_file"]['type']);
				
				$file_name = "../uploads/".$filename;
				$file = fopen($file_name,"rb");
				$data = fread($file,filesize($file_name));
				fclose($file);
				$data = chunk_split(base64_encode($data));
				$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"".$filename."\"\n" . 
				"Content-Disposition: attachment;\n" . " filename=\"$filename\"\n" . 
				"Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
				$message .= "--{$mime_boundary}--\n";
			
				$to = "trish.a@vsynergize.com,raj.a@vsynergize.com,naved.k@vsynergize.com,arlette@vsynergize.com,rizamovahedi@gmail.com,arlette.g@vsynergize.com,mike.k@vsynergize.com";
				// $ok = @mail($to, $subject, $message, $headers, "-f " . $from);
				
				//enquiry send to enquiry management for intermind
				$messageinq = ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($message_val))."|".$filename;
				$myip = $_SERVER['REMOTE_ADDR'];
				$datetime = date("Y-m-d H:i:s");
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=24&project_name=VSynergize&enquiry_type=Career page&enquiry_details=$messageinq&datetime=$datetime&cust_ip=$myip");
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				$server_output = curl_exec ($ch);
				curl_close ($ch);

				$mail_data['action'] = 'filename';
				$mail_data['client_address'] = $_SERVER['REMOTE_ADDR'];
				$mail_data['ip_address'] = '216.51.232.29';
				$mail_data['to'] = $to;
				$mail_data['from'] = 'info@vsynergize.com';
				$mail_data['cc'] = 'info@intermind.in';
				$mail_data['project_name'] = 'VSynergize';
				$mail_data['subject'] = $subject;
				$mail_data['body'] = $body;
				$mail_data['file_path'] = "https://www.vsynergizeoutsourcing.com/uploads/$filename";
				$mail_data['file_name'] = $filename;
				
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/mail_send.php");
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				$server_output = curl_exec ($ch);
				curl_close ($ch);
		
			}
			else
			{
				$headers = "MIME-Version: 1.0"."\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
				$headers .= 'From: VSynergize <info@vsynergize.com>'."\r\n";
				$headers .= "BCC: info@intermind.in, vighnesh@intermind.in, hiren@intermind.in\r\n";
				$headers .= "CC: trish.a@vsynergize.com\r\n";
				$to = "careers@vsynergize.com";
				mail($to, $subject, $body, $headers);
			}
			
			
			redirect('https://www.vsynergizeoutsourcing.com/thankyou.html');
		}
	}
}

if(isset($_REQUEST['action_business']))
{
	if($_REQUEST['leadpage'] == "Get Back Your Business")
	{
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			
				$member_name 	= $db_object->sanatize_string($_REQUEST['member_fullname']);
				$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
				$member_phone 	= $db_object->sanatize_string($_REQUEST['member_phone']);
				$job_title 		= $db_object->sanatize_string($_REQUEST['job_title']);
				$employee_size 	= $db_object->sanatize_string($_REQUEST['employee_size']);
				$revenue_size 	= $db_object->sanatize_string($_REQUEST['revenue_size']);
				$message 		= $db_object->sanatize_string($_REQUEST['message']);
		
				$pagename_leadfrom 	= $db_object->sanatize_string($_REQUEST['leadpage']);
				
				$pagename_leadfrom = "Get Back Your Business";
				
				$url_name = explode("?",$_SERVER['HTTP_REFERER']);
				$_SESSION['member_name'] = $member_name;
				$file_obj = new file_manup("./");
				$file_obj->extract_html("get_your_business.html");
				$body = $file_obj->replace_tags("{name}|{email}|{phone}|{job_title}|{employee_size}|{revenue_size}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|$job_title|$employee_size|$revenue_size|".ucfirst(stripslashes($pagename_leadfrom))."|".ucfirst(stripslashes($message))."");
				

				$subject  = "You have a new enquiry from ".ucwords($member_name);

				
				//enquiry send to enquiry management for intermind
				$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|$job_title|$employee_size|$revenue_size|".ucfirst(stripslashes($pagename_leadfrom))."|".ucfirst(stripslashes($message));
				$myip = $_SERVER['REMOTE_ADDR'];
				$datetime = date("Y-m-d H:i:s");
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=24&project_name=VSynergize&enquiry_type=Get Back Your Business&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				$server_output = curl_exec ($ch);
				curl_close ($ch);

					//enquiry send to enquiry management for intermind
				$mail_data['action'] = 'sample_mail';
				$mail_data['client_address'] = $_SERVER['REMOTE_ADDR'];
				$mail_data['ip_address'] = '216.51.232.29';
				$mail_data['to'] = "trish.a@vsynergize.com,raj.a@vsynergize.com,naved.k@vsynergize.com,arlette@vsynergize.com,rizamovahedi@gmail.com,arlette.g@vsynergize.com,mike.k@vsynergize.com";
				$mail_data['from'] = 'info@vsynergize.com';
				$mail_data['cc'] = 'info@intermind.in';
				$mail_data['project_name'] = 'VSynergize';
				$mail_data['subject'] = $subject;
				$mail_data['body'] = $body;

				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/mail_send.php");
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				echo $server_output = curl_exec ($ch);
				curl_close ($ch);
			
			

			
			redirect('https://www.vsynergizeoutsourcing.com/thankyou.html');
		}
	}
}

if(isset($_REQUEST['action_home']))
{
	if($_REQUEST['leadpage'] == "Home Page")
	{
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else
		{
			
				$member_name 	= $db_object->sanatize_string($_REQUEST['member_fullname']);
				$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
				$member_phone 	= $db_object->sanatize_string($_REQUEST['member_phone']);
				
		
				$pagename_leadfrom 	= $db_object->sanatize_string($_REQUEST['leadpage']);
				
				$pagename_leadfrom = "Home Page";
				
				$url_name = explode("?",$_SERVER['HTTP_REFERER']);
				$_SESSION['member_name'] = $member_name;
				$file_obj = new file_manup("./");
				$file_obj->extract_html("home.html");
				$body = $file_obj->replace_tags("{name}|{email}|{phone}|{subject}","".ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($pagename_leadfrom)));
				

				$subject  = "You have a new enquiry from ".ucwords($member_name);

				
				//enquiry send to enquiry management for intermind
				$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($pagename_leadfrom));
				$myip = $_SERVER['REMOTE_ADDR'];
				$datetime = date("Y-m-d H:i:s");
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=24&project_name=VSynergize&enquiry_type=Home Page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				$server_output = curl_exec ($ch);
				curl_close ($ch);

					//enquiry send to enquiry management for intermind
				$mail_data['action'] = 'sample_mail';
				$mail_data['client_address'] = $_SERVER['REMOTE_ADDR'];
				$mail_data['ip_address'] = '216.51.232.29';
				$mail_data['to'] = "trish.a@vsynergize.com,raj.a@vsynergize.com,naved.k@vsynergize.com,arlette@vsynergize.com,rizamovahedi@gmail.com,arlette.g@vsynergize.com,mike.k@vsynergize.com";
				$mail_data['from'] = 'info@vsynergize.com';
				$mail_data['cc'] = 'info@intermind.in';
				$mail_data['project_name'] = 'VSynergize';
				$mail_data['subject'] = $subject;
				$mail_data['body'] = $body;

				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/mail_send.php");
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				echo $server_output = curl_exec ($ch);
				curl_close ($ch);
			
			

			
			redirect('https://www.vsynergizeoutsourcing.com/thankyou.html');
		}
	}
}

if(isset($_REQUEST['action_google_captcha'])){
	$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
	if($cptcha != 1){
		echo "404";
	}else{
		echo '200';
	}

	exit();
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