<?php 
require("php_class.php");
error_reporting(0);

session_start();

$photos = "../photos/";
$docs	= "../docs/";
$base_url 		= "/";

date_default_timezone_set('Asia/Kolkata');
$db_object 	= new db_connect();

function redirect($url)
{
	//echo "hiren";
	global $db_object;
	//header("Location: $url");
	/* echo "<script>window.location.replace(".$url.");</script>"; */
    echo "<script>location.href='".$url."';</script>";
}

$smtp_mailer = new smtp_mailer("webmail.actgroup.in","info@actgroup.in","anil@123!@#");

function gcaptecha($recaptcha){
	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => '6LcLXmQUAAAAAPcizu-bPWjzDMxmcWFagJKmXJxV',
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

function send_email($to,$from,$subject,$body)
{				
	global $smtp_mailer;
	global $attach_file;
	
	if(!isset($attach_file))
	{
		$attachments = "";
	}
	else
	{
		$attachments = $attach_file;
	}
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
