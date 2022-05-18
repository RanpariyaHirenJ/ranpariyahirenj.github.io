<?php 
require("php_class.php");

//error_reporting(0);
session_start();

$photos = "../photos/";
$docs	= "../docs/";
$base_url 		= "/";

date_default_timezone_set('Asia/Kolkata');

$db_object 	= new db_connect();

//$smtp_mailer = new smtp_mailer("webmail.nelito.com","enquiry@nelito.com","nelito12#$");

function redirect($url)
{
	global $db_object;
	header("Location: $url");
}

function gcaptecha($recaptcha){
	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => '6LcKLXQUAAAAACa36cFakd5OyFyQLDDoYME-0hK7',
		'response' => $recaptcha
	);
	$options = array(
		'http' => array (
			'method' => 'POST',
			'content' => http_build_query($data)
		)
	);
	$context  = stream_context_create($options);
	$verify = file_get_contents($url, false, $context);
	$captcha_success=json_decode($verify);
	if ($captcha_success->success==false) {
		return 0;
	} else if ($captcha_success->success==true) {
		return 1;
	}
}

function send_email($to,$from,$subject,$body,$attachments = "")
{				
	global $smtp_mailer;
	//$attachments = "";
	if($smtp_mailer->send_mail($from,$to,$attachments,$subject,$body))
	{
		return true;
	}
	else
	{
		return false;
	}
}
?>
