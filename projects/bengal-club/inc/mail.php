<?php
include("user_global.php");


if(isset($_REQUEST['action']))
{
	if($_REQUEST['action'] == "SUBMIT")
	{
		$fname 		= $_REQUEST['fname'];
		$lname 		= $_REQUEST['lname'];
		$name 		= $fname." ".$lname;
		$email 		= $_REQUEST['email'];
		$mobile 		= $_REQUEST['mobile'];
		
		$file_obj = new file_manup("./");

		$file_obj->extract_html("mail-format.html");
		$body = $file_obj->replace_tags("{name}|{email}|{mobile}","".ucfirst($name)."|$email|$mobile");
		$subject = "Member Registration";
		$from = "info@kalptech.com";
		$to = "rajendra@kalptech.com";
		send_email($to,$from,$subject,$body);
		redirect($_SERVER['HTTP_REFERER']."?enquiry=success");
		die();
	}
	if($_REQUEST['action'] == "Submit")
	{
		$name 		= $_REQUEST['name'];
		$email 		= $_REQUEST['email'];
		$mobile 	= $_REQUEST['mobile'];
		
		$file_obj = new file_manup("./");

		$file_obj->extract_html("mail-format.html");
		$body = $file_obj->replace_tags("{name}|{email}|{mobile}","".ucfirst($name)."|$email|$mobile");
		$subject = "Member Registration";
		$from = "info@kalptech.com";
		$to = "rajendra@kalptech.com";
		send_email($to,$from,$subject,$body);
		redirect($_SERVER['HTTP_REFERER']."?enquiry=success");
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