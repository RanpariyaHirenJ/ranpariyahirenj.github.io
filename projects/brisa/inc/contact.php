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
			die();
		}
		else
		{
    		$first_name 	= $db_object->sanatize_string($_POST['first_name']);
    		$last_name 	= $db_object->sanatize_string($_POST['last_name']);
    		$email	= $db_object->sanatize_string($_POST['email']);
    		$organisation 	= $db_object->sanatize_string($_POST['organisation']);
    		$message 	= $db_object->sanatize_string($_POST['message']);
			$member_name = $first_name." ".$last_name;

    		$myip = $_SERVER['REMOTE_ADDR'];
    		$trimmedip = implode(".", array_slice(explode(".", $myip), 0, 3));
    		
    		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
    		
    		$file_obj = new file_manup("./");
    		$file_obj->extract_html("contact.html");
    		$body = $file_obj->replace_tags("{name}|{email}|{organisation}|{message}","".ucwords(stripslashes($member_name))."|$email|$organisation|".ucfirst(stripslashes($message))."");
    		
    		$file_objuser = new file_manup("./");
    		$file_objuser->extract_html("contact_user.html");
    		$userbody = $file_objuser->replace_tags("{name}|{email}|{organisation}|{message}","".ucwords(stripslashes($member_name))."|$email|$organisation|".ucfirst(stripslashes($message))."");
    		
    		$subject  = "You have a new enquiry from ".ucwords($member_name);
    		$headers = "MIME-Version: 1.0"."\r\n";
    		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
    		$headers .= 'From: Brisa <info@intermind.in>'."\r\n";
    		//$headers .= "BCC: info@intermind.in, info@kalptech.com, vighnesh29114@gmail.com, hiren@intermind.in\r\n";
    		//$headers .= "CC: razasayed.12@gmail.com\r\n";
    		
			$to = "vighnesh29114@gmail.com, hiren@intermind.in";

	       	mail($to, $subject, $body, $headers);
        		
    		$usersubject  = "Your enquiry have been sent";
			$userto = $email;

	       	mail($userto, $usersubject, $userbody, $headers);
        		
        		//enquiry send to enquiry management for intermind
        		/*$message = ucwords(stripslashes($member_name))."|$email|$organisation|".ucfirst(stripslashes($message));
        		$datetime = date("Y-m-d H:i:s");
        		$ch = curl_init();
        		curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
        		curl_setopt($ch, CURLOPT_POST, 1);
        		curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=20&project_name=Techflow&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
        		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        		$server_output = curl_exec ($ch);
        		curl_close ($ch);*/
        		
        		//redirect($url_name[0]."?enquiry=succes");
        		redirect("../thankyou.html");
    		/*}
    		else {
                $url_name = explode("?",$_SERVER['HTTP_REFERER']);
			    redirect($url_name[0]."?error");
			    die();
    		}*/
		}
	}
}

/*if(isset($_POST['action_enquiry']))
{
	if($_POST['action_enquiry'] == "Submit")
	{
	    $cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
			die();
		}
		else
		{
    		$first_name 	= $db_object->sanatize_string($_POST['first_name']);
    		$last_name 		= $db_object->sanatize_string($_POST['last_name']);
    		$member_email 	= $db_object->sanatize_string($_POST['email']);
    		$member_mobile 	= $db_object->sanatize_string($_POST['contact_number']);
    		$country_name 	= $db_object->sanatize_string($_POST['country_name']);
    		$interested_in  = $db_object->sanatize_string($_POST['interested_in']);
    		$subject 		= $db_object->sanatize_string($_POST['subject']);
    		$message 		= $db_object->sanatize_string($_POST['message']);
    		
    		$member_name	= $first_name." ".$last_name;
    		$myip = $_SERVER['REMOTE_ADDR'];
    		$trimmedip = implode(".", array_slice(explode(".", $myip), 0, 3));
    		
    		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
    		
    		if(!preg_match("/^([a-zA-Z' ]+)$/",$first_name)){ redirect($url_name[0]."?error"); die(); }
    		if(!preg_match("/^([a-zA-Z' ]+)$/",$last_name)){ redirect($url_name[0]."?error"); die(); }
    		if (!filter_var($member_email, FILTER_VALIDATE_EMAIL)) { redirect($url_name[0]."?error"); die(); }
    		
    		$file_obj = new file_manup("./");
    		$file_obj->extract_html("enquiry-format.html");
    		$body = $file_obj->replace_tags("{name}|{email}|{phone}|{country}|{intrested_in}|{subject}|{message}","".ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($subject))."|".ucfirst(stripslashes($message))."");
    		echo $body;
			die();
    		$subject  = "You have a new enquiry from ".ucwords($member_name);
    		$headers = "MIME-Version: 1.0"."\r\n";
    		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
    		$headers .= 'From: Tech Flow <info@techflowengg.com>'."\r\n";
    		$headers .= "BCC: info@intermind.in, info@kalptech.com, vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
    		$headers .= "CC: info@techflowengg.com, uk@techflowengg.com\r\n";
    		
    		$to = "harichandra.patil@techflowengg.com";
    		if($trimmedip != "184.154.36" && $member_name != "1" && $member_email != "1"){
        		$emailch = curl_init();
        		curl_setopt($emailch, CURLOPT_URL,"https://www.intermind.in/clients/techflow/html-file/inclive/contact.php");
        		curl_setopt($emailch, CURLOPT_POST, 1);
        		curl_setopt($emailch, CURLOPT_POSTFIELDS, "mbody=".urlencode($body)."&subject=".urlencode($subject));
        		curl_setopt($emailch, CURLOPT_RETURNTRANSFER, true);
        		curl_setopt($emailch, CURLOPT_SSL_VERIFYPEER, false);
        		$email_output = curl_exec ($emailch);
        		curl_close ($emailch);
//    		    mail($to, $subject, $body, $headers);
    		
    		    //enquiry send to enquiry management for intermind
    		    $message = ucwords(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($country_name))."|".ucfirst(stripslashes($interested_in))."|".ucfirst(stripslashes($subject))."|".ucfirst(stripslashes($message));
    		
        		$datetime = date("Y-m-d H:i:s");
        		$ch = curl_init();
        		curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
        		curl_setopt($ch, CURLOPT_POST, 1);
        		curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=20&project_name=Techflow&enquiry_type=Enquiry page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
        		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        		$server_output = curl_exec ($ch);
        		curl_close ($ch);
    		
    		    redirect($url_name[0]."?enquiry=succes");
    		}
    		else {
    		    $url_name = explode("?",$_SERVER['HTTP_REFERER']);
			    redirect($url_name[0]."?error");
			    die();
    		}
		}
	}
}*/

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Untitled Document</title>

</head>



<body>

</body>

</body>
</html>