<?php 
include("user_global.php");

if(isset($_REQUEST['action']))
{
	if($_REQUEST['action'] == "Send Message")
	{
		$firstname 		= $db_object->sanatize_string($_REQUEST['first_name']);
		$lastname 		= $db_object->sanatize_string($_REQUEST['last_name']);
		$member_name 	= ucwords($firstname." ".$lastname);
		$moblie 		= $db_object->sanatize_string($_REQUEST['contact_no']);
		$email 			= $db_object->sanatize_string($_REQUEST['email']);
		$subject_message = $db_object->sanatize_string($_REQUEST['subject']);
		$message 		= $db_object->sanatize_string($_REQUEST['message']);

		$subject = "You have a new appointment request from ".ucwords($member_name);
		$body = "Dear Admin,<br/><br/>
				You have a new appointment request from ".ucwords($member_name).", following are the appointment details<br/><br/>
				Name: ".ucwords($member_name)."<br/>
				Phone: $moblie <br/>
				Email: <a href='mailto:$email'>$email</a><br/>
				Subject: ".stripslashes($subject_message)."<br/>
				Message : ".stripslashes($message)."<br/><br/>
				Kindly contact ".ucwords($member_name)." @ $moblie and confirm the appointment at the earliest.<br/><br/>
				From,<br/>
				iTrust Team";
		
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: iTrust <info@itrust.com>"."\r\n";
		$headers .= "CC: info@kalptech.com\r\n";
		$to = "vighnesh29114@gmail.com, rajendra@kalptech.com";
		mail($to,$subject,$body,$headers);
		
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		echo "<script>location.href = '".$url_name[0]."?error=Your appointment has been submitted successfully and our administrator will contact you shortly.'</script>";
		die();
	}
}

if(isset($_REQUEST['submit']))
{
	if($_REQUEST['submit'] == "Send Message")
	{
		$firstname 		= $db_object->sanatize_string($_REQUEST['first_name']);
		$lastname 		= $db_object->sanatize_string($_REQUEST['last_name']);
		$member_name 	= ucwords($firstname." ".$lastname);
		$moblie 		= $db_object->sanatize_string($_REQUEST['contact_no']);
		$email 			= $db_object->sanatize_string($_REQUEST['email']);
		$service_type   = $db_object->sanatize_string($_REQUEST['service_type']);
		$preferred_time = $db_object->sanatize_string($_REQUEST['preferred_time']);

		$subject = "You have a new enquiry from ".ucwords($member_name);
		$body = "Dear Admin,<br/><br/>
				You have a new enquiry from ".ucwords($member_name).", following are the enquiry details<br/><br/>
				Name: ".ucwords($member_name)."<br/>
				Phone: $moblie <br/>
				Email: <a href='mailto:$email'>$email</a><br/>
				Type Of Service : ".$service_type." <br/>
				Preferred Time to Contact : ".$preferred_time."<br/><br/>
				Kindly contact ".ucwords($member_name)." @ $moblie at the earliest.<br/><br/>
				From,<br/>
				iTrust Team";
		
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: iTrust <info@itrust.com>"."\r\n";
		$headers .= "CC: info@kalptech.com\r\n";
		$to = "vighnesh29114@gmail.com, rajendra@kalptech.com";
		mail($to,$subject,$body,$headers);
		
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		echo "<script>location.href = '".$url_name[0]."?error=Your enquiry has been submitted successfully and our administrator will contact you shortly.'</script>";
		die();
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