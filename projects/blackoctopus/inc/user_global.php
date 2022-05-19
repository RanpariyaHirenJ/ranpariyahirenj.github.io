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

   $ch = curl_init();
   curl_setopt_array($ch, array(
        CURLOPT_URL => 'https://www.google.com/recaptcha/api/siteverify',
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => array(
            'secret' => '6Lf4CqUUAAAAAMoOIkAYmqLysC36BOc-OCr_nrWE',
            'response' => $recaptcha,
            'remoteip' => $_SERVER['REMOTE_ADDR']
        ),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYHOST       => 0,
        CURLOPT_SSL_VERIFYPEER  => 0

    ));

  $output = curl_exec($ch);
    curl_close($ch);

  $captcha_success=json_decode($output);
  
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
