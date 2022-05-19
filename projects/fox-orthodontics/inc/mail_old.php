<?php 
include("user_global.php");
if(isset($_REQUEST['action']))
{
	if($_REQUEST['action'] == "SUBMIT")
	{
		$name 	= $db_object->sanatize_string($_REQUEST['name']);
		$email 	= $db_object->sanatize_string($_REQUEST['email']);
		$subject = "We have a newsletter signup request from ".ucwords($name);
		$body = "Dear Admin,<br/><br/>
				We have a newsletter signup request from ".ucwords($name)." and following are the signup details<br/><br/>
				Name: ".ucwords($name)."<br/>
				Email : <a href='mailto:$email'>$email</a><br/><br/>
				Kindly make sure you are connected with ".ucwords($name)." on a monthly basis.<br/><br/>
				From,<br/>
				Fox Orthodontics Online";
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: Fox Orthodontics Online <info@foxorthodontics.com.au>"."\r\n";
		$headers .= "CC: info@kalptech.com\r\n";
		$to = "reception@foxorthodontics.com.au, info@foxorthodontics.com.au, drrajivahuja@gmail.com";
		mail($to,$subject,$body,$headers);
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		//redirect($_SERVER['HTTP_REFERER']."?enquiry=Thank you for signing up with us, \r\nwe will keep you posted about our latest news and updates.");
		echo "<script>location.href = '".$url_name[0]."?enquiry=Thank you for signing up with us, we will keep you posted about our latest news and updates.'</script>";
		die();
	}
	if($_REQUEST['action'] == "Send")
	{
		$sendto 					= $db_object->sanatize_string($_REQUEST['to']);
		$email_to 				= $db_object->sanatize_string($_REQUEST['email_to']);
		$patients_contact_no 	= $db_object->sanatize_string($_REQUEST['patients_contact_no']);
		$from 					= $db_object->sanatize_string($_REQUEST['from']);
		$from_email 			= $db_object->sanatize_string($_REQUEST['from_email']);
		$referrers_contact_no 	= $db_object->sanatize_string($_REQUEST['referrers_contact_no']);
		$note 					= $db_object->sanatize_string($_REQUEST['note']);
		
		/* Mail Sent to Patient */
		$subject1 = "You have been referred for an orthodontic treatment by ".ucwords($from);
		$body1 = "Dear ".ucwords($sendto).",<br/><br/>
				Dr ".ucwords($from)." has referred you to Fox Orthodontics for an orthodontic assessment.<br/><br/>
				Fox Orthodontics is a family run practice that was established over 30 years ago. Dr. Robert (Roy) Fox is one of the most experienced orthodontists in the Hills, Hornsby Shire and the Lower North Shore. After joining the practice, Dr. Rajiv Ahuja has continued with the practice philosophy of provision of quality orthodontic services in a friendly, personalised environment.<br/><br/>
				Our representative will get back to you as soon as possible to organise an appointment for your orthodontic assessment.<br/><br/>
				Meanwhile if you have any queries please logon to our website <a href='http://www.foxorthodontics.com.au' target='_blank'>www.foxorthodontics.com.au</a> or call us at:<br/><br/>
				<strong>Fox Orthodontics Baulkham Hills</strong>: (02) 9686 1200<br/>
				<strong>Fox Orthodontics Hornsby</strong>: (02) 9476 3266<br/><br/>
				Looking forwards to seeing you soon at Fox Orthodontics.<br/><br/>
				Warm regards,<br/>
				The Fox Orthodontics Team";
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: Fox Orthodontics Online <info@foxorthodontics.com.au>"."\r\n";
		$headers .= "BCC: info@kalptech.com\r\n";
		$to = $email_to;
		//mail($to,$subject1,$body1,$headers);
				
		//* Mail Sent to admin  */
		echo $subject = "Message from Dr ".ucwords($from);
		$body = "Dr Rajiv,<br/><br/>";
		$body .= "Thank you for seeing ".ucwords($sendto).".".ucwords($sendto)." presents \"".stripslashes($note)."\",<br /> Kind regards Dr ".ucwords($from)."<br/><br/>
				Referrer's contact no. : $patients_contact_no<br />
				Patient's contact no. : $referrers_contact_no<br />
				Patient's Email : <a href='mailto:$email_to'>".$email_to."</a><br /><br />
				Warm regards,<br/>";
		echo $body .= "Dr ".ucwords($from);
		
		die();
		if($_FILES["Attachment"]['name'] != "")
		{
			$semi_rand = md5(time()); 
			$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
			$from = "Fox Orthodontics Online <info@foxorthodontics.com.au>";
			$headers = "From: $from";
			$headers .= "\nCC: info@kalptech.com";
			$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
			$message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/html; charset=UTF-8\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $body . "\n\n"; 
			$message .= "--{$mime_boundary}\n";
		
			$filename = "Attachment".date("dmYHis").rand(0,50);
			$file_obj = new file_manup("../uploads/");
			$filename = $file_obj->upload_file($_FILES["Attachment"]['name'],$_FILES["Attachment"]['tmp_name'],$filename,"jpeg,jpg,png,gif,doc,docx,xls,xlsx,ppt,pptx,pdf",$_FILES["Attachment"]['type']);
			
			$file_name = "../uploads/".$filename;
			$file = fopen($file_name,"rb");
			$data = fread($file,filesize($file_name));
			fclose($file);
			$data = chunk_split(base64_encode($data));
			$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"".$filename."\"\n" . 
			"Content-Disposition: attachment;\n" . " filename=\"$filename\"\n" . 
			"Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
			$message .= "--{$mime_boundary}--\n";
			
			$to = "reception@foxorthodontics.com.au, info@foxorthodontics.com.au, drrajivahuja@gmail.com";
			$ok = @mail($to, $subject, $message, $headers, "-f " . $from);
		}
		else
		{
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= "From: Fox Orthodontics Online <info@foxorthodontics.com.au>"."\r\n";
			$headers .= "CC: info@kalptech.com\r\n";
			$to = "reception@foxorthodontics.com.au, info@foxorthodontics.com.au, drrajivahuja@gmail.com";
			mail($to,$subject,$body,$headers);
		}
		
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		echo "<script>location.href = '".$url_name[0]."?enquiry=Your Message has been Sent Successfully.'</script>";
		die();
	}
}

if(isset($_REQUEST['apppointment']))
{
	if($_REQUEST['apppointment'] == "SUBMIT")
	{
		$firstname 		= $db_object->sanatize_string($_REQUEST['firstname']);
		$lastname 		= $db_object->sanatize_string($_REQUEST['lastname']);
		$member_name 	= ucwords($firstname." ".$lastname);
		$moblie 		= $db_object->sanatize_string($_REQUEST['moblie']);
		$appoint_date 	= $db_object->sanatize_string($_REQUEST['appoint_date']);
		$email 			= $db_object->sanatize_string($_REQUEST['email']);
		$gender 		= $db_object->sanatize_string($_REQUEST['gender']);
		$message 		= $db_object->sanatize_string($_REQUEST['message']);

		$subject = "We have a new appointment request from ".ucwords($member_name);
		$body = "Dear Admin,<br/><br/>
				We have a new appointment request from ".ucwords($member_name)." for ".$appoint_date.", following are the appointment details<br/><br/>
				Name: ".$gender." ".ucwords($member_name)."<br/>
				Phone: $moblie <br/>
				Email: <a href='mailto:$email'>$email</a><br/>
				Date: $appoint_date <br/>
				Message : $message<br/><br/>
				Kindly contact ".ucwords($member_name)." @ $moblie and confirm the appointment at the earliest.<br/><br/>
				From,<br/>
				Fox Orthodontics Online";
		
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= "From: Fox Orthodontics Online <info@foxorthodontics.com.au>"."\r\n";
		$headers .= "CC: info@kalptech.com\r\n";
		$to = "reception@foxorthodontics.com.au, info@foxorthodontics.com.au, drrajivahuja@gmail.com";
		
		mail($to,$subject,$body,$headers);
		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		echo "<script>location.href = '".$url_name[0]."?enquiry=Your appointment has been successfully placed and we will get in touch with you soon.'</script>";
		//redirect($_SERVER['HTTP_REFERER']."?enquiry=Thank you for signing up with us, \r\nwe will keep you posted about our latest news and updates.");
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