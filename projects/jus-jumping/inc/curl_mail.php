<?php
include("user_global.php");

if(isset($_REQUEST['action']) && $_REQUEST['action'] == "sendmail_contact")
{
	$member_name 	= urldecode($db_object->sanatize_string($_REQUEST['member_name']));
	$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
	$member_phone 	= $db_object->sanatize_string($_REQUEST['member_phone']);
	$subject 		= urldecode($db_object->sanatize_string($_REQUEST['subject']));
	$message 		= urldecode($db_object->sanatize_string($_REQUEST['message']));
	
	$file_obj = new file_manup("./");
	$file_obj->extract_html("contact.html");
	$body = $file_obj->replace_tags("{name}|{email}|{phone}|{subject}|{message}","".ucwords(html_entity_decode(stripslashes(stripslashes(stripslashes($member_name)))))."|$member_email|$member_phone|".ucfirst(html_entity_decode(stripslashes(stripslashes(stripslashes($subject)))))."|".ucfirst(html_entity_decode(stripslashes(stripslashes(stripslashes($message)))))."");
	
	$subject  = "You have a new enquiry from ".ucwords($member_name);
	$headers = "MIME-Version: 1.0"."\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
	$headers .= "From: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
	$headers .= "Return-Path: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
	$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
	$to = "info@jusjumpin.com";
	mail($to, $subject, $body, $headers);
	
	$file_obj1 = new file_manup("./");
	$file_obj1->extract_html("contact-customer.html");
	$bodycust = $file_obj1->replace_tags("{name}","".ucwords(html_entity_decode(stripslashes(stripslashes(stripslashes($member_name)))))."");
		
	$subjectcust  = "Thank you for contacting us. Our team will get back to you soon";
	$headers = "MIME-Version: 1.0"."\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
	$headers .= "From: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
	$headers .= "Return-Path: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
	$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
	$tocust = $member_email;
	mail($tocust, $subjectcust, $bodycust, $headers);
}

if(isset($_REQUEST['action']) && $_REQUEST['action'] == "sendmail_newsletter")
{
	$newsletter_email 	= $db_object->sanatize_string($_REQUEST['newsletter_email']);
	$url_name = explode("?",$_SERVER['HTTP_REFERER']);
	
	$file_obj = new file_manup("./");
	$file_obj->extract_html("newsletter.html");
	$body = $file_obj->replace_tags("{email}","$newsletter_email");
		
	$subject  = "You have a new newsletter signup request";
	$headers = "MIME-Version: 1.0"."\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
	$headers .= "From: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
	$headers .= "Return-Path: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
	$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
	$to = "info@jusjumpin.com";
	mail($to, $subject, $body, $headers);
	
	$file_obj1 = new file_manup("./");
	$bodycust =$file_obj1->extract_html("newsletter-customer.html");
	
	$subjectcust  = "Your signup request has been submitted successfully";
	$headers = "MIME-Version: 1.0"."\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
	$headers .= "From: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
	$headers .= "Return-Path: Jus' Jumpin' <info@jusjumpin.com>"."\r\n";
	$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
	$tocust = $newsletter_email;
	mail($tocust, $subjectcust, $bodycust, $headers);
}

?>