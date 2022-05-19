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
    		//$first_name 	= $db_object->sanatize_string($_POST['first_name']);
    		//$last_name 	= $db_object->sanatize_string($_POST['last_name']);
			//$member_name = $first_name." ".$last_name;
    		//$organisation 	= $db_object->sanatize_string($_POST['organisation']);
			
			$name 	= $db_object->sanatize_string($_POST['name']);
    		$city 	= $db_object->sanatize_string($_POST['city']);
    		$phone 	= $db_object->sanatize_string($_POST['phone']);
    		$email	= $db_object->sanatize_string($_POST['email']);
    		$message 	= $db_object->sanatize_string($_POST['message']);

    		$myip = $_SERVER['REMOTE_ADDR'];
    		$trimmedip = implode(".", array_slice(explode(".", $myip), 0, 3));
    		
    		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
    		
			/* admin mail */
    		$file_obj = new file_manup("./");
    		$file_obj->extract_html("contact.html");
    		$body = $file_obj->replace_tags("{name}|{city}|{email}|{phone}|{message}","".ucwords(stripslashes($name))."|".ucwords(stripslashes($city))."|$email|$phone|".ucfirst(stripslashes($message))."");
    		
			/* user mail */
    		$file_objuser = new file_manup("./");
    		$file_objuser->extract_html("contact_user.html");
    		$userbody = $file_objuser->replace_tags("{name}|{city}|{email}|{phone}|{message}","".ucwords(stripslashes($name))."|".ucwords(stripslashes($city))."|$email|$phone|".ucfirst(stripslashes($message))."");
    		
    		$subject  = "You have a new enquiry from ".ucwords($name);
    		$headers = "MIME-Version: 1.0"."\r\n";
    		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
    		$headers .= 'From: Excellence Learning Centre Pvt. Ltd. <info@elceducation.com>'."\r\n";
    		$headers .= "BCC: info@intermind.in,info@kalptech.com,arya@intermind.in\r\n";
    		//$headers .= "BCC: info@kalptech.com\r\n";
    		//$headers .= "CC: arya@intermind.in\r\n";
    		
			$to = "info@elceducation.com";
			//$to = "hiren@intermind.in,vighnesh29114@gmail.com";
			//$to = "info@intermind.in";

	       	//mail($to, $subject, $body, $headers);
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/clients/curlmail.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "subject=".urlencode($subject)."&body=".urlencode($body)."&from=".urlencode($headers)."&to=".urlencode($to));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
        		
    		$usersubject  = "Your enquiry have been sent";
			$userto = $email;

	       	//mail($userto, $usersubject, $userbody, $headers);
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/clients/curlmail.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "subject=".urlencode($usersubject)."&body=".urlencode($userbody)."&from=".urlencode($headers)."&to=".urlencode($userto));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
        		
        		//enquiry send to enquiry management for intermind
        		/*$message = ucwords(stripslashes($name))."|$email|$phone|".ucfirst(stripslashes($message));
        		$datetime = date("Y-m-d H:i:s");
        		$ch = curl_init();
        		curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
        		curl_setopt($ch, CURLOPT_POST, 1);
        		curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=37&project_name=Techflow&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
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

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Untitled Document</title>

</head>

</body>

</body>
</html>