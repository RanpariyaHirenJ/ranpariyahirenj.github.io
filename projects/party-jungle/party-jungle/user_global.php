<?php 
require("php_class.php");
error_reporting(0);

$photos = "./item-photos/";
$docs	= "../docs/";
date_default_timezone_set('Asia/Kolkata');

$host			= "localhost";
$username 		= "root";
$password 		= "";
$database		= "party_jungle";

/*$host		= "localhost";
$database	= "kalptech_party_jungle";
$username 	= "kalptech_tech";
$password 	= "tech123*#321";*/

/*$host		= "localhost";
$username 	= "kalpu123_alan";
$password 	= "partyjungle";
$database	= "kalpu123_cfu";*/

$db_object 	= new db_connect("$host","$username","$password","$database");
//$smtp_mailer = new smtp_mailer("relay.jangosmtp.net","Sunil.Kohli","494661HT");

session_start();
//session_regenerate_id();
//$db_object->execute_query("SET time_zone = '+5:30'");

//encrypt start

//function to encrypt the string
	function encode5t($str)
	{
	  for($i=0; $i<5;$i++)
	  {
		$str=strrev(base64_encode($str)); //apply base64 first and then reverse the string
	  }
	  return $str;
	}
	
	//function to decrypt the string
	function decode5t($str)
	{
	  for($i=0; $i<5;$i++)
	  {
		$str=base64_decode(strrev($str)); //apply base64 first and then reverse the string}
	  }
	  return $str;
	}
	
// encrypt end

function check_login()
{	
	global $db_object;	
	if(!$userid = $db_object->check_value($_SESSION,"member_no",false))
	{
		redirect("index.php?error=Invalid login, please login first to access your account.");
		die();
	}
}

function redirect($url)
{
	global $db_object;
	$db_object->con_close();
	header("Location: $url");
}


function initialize_paging($query)
{
	global $host, $username , $password, $database;
	$objpaging = new pagination();
	$objpaging->db_connect($host,$username,$password,$database);			
	$objpaging->limit = 10;
	if(isset($_REQUEST["start"]))
	{		  
		$objpaging->start = $_REQUEST["start"];				
	}					  
	$objpaging->query = $query;
	
	return $objpaging;
}

function resize_photo($filename,$size=100)
{
	if($filename != "blank")
	{
		global $photos;
		$photo_obj = new img_manup($photos);	
		return $photo_obj->imageResize($filename,$size);
	}
}

function delete_image($filename)
{
	global $photos;
	$file_obj = new file_manup($photos);
	return $file_obj->delete_file($filename);
}

function check_error($message = "&nbsp;")
{
	if(isset($_REQUEST["error"]))
	{
		echo($_REQUEST["error"]);
	}
	else
	{
		echo($message);
	}
}

function get_thumbnail($filename)
{
	$file = explode(".",$filename);
	return ($file[0]."_thumb".".".$file[1]);
}

/*function send_email($to,$from,$subject,$body)
{				
	global $smtp_mailer;
	$attachments = "";
	if($smtp_mailer->send_mail($from,$to,$attachments,$subject,$body))
	{
		return true;
	}
	else
	{
		return false;
	}
}*/

function send_email($to,$from,$reply,$subject,$body)
{				
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	
	// More headers
	$headers .= "From: $from"."\r\n"."Reply-To: $reply"."\r\n";						
					
	mail($to,$subject,$body,$headers);
}



function myErrorHandler($error_level,$error_message,$error_file,$error_line)
{
	$error =  ("Date Time : ".date('d-m-Y H:i:s')."\r\nError</strong>: ".$error_message."\r\n File: ".$error_file."\r\n At Line: ".$error_line."\r\n error level: ".$error_level."\r\n Actual Page: ".$_SERVER['PHP_SELF']."\r\n\r\n \r\n\r\n ");
	$file = fopen("error_log.txt","a");		   	
	fwrite($file,$error);
	fclose($file);
	
	$subject = "Website Error Encountered on ".$_SERVER['HTTP_HOST']."!";
	$error =  ("<strong>Error</strong>: ".$error_message."<br/><strong>File</strong>: ".$error_file."<br/><strong>At Line</strong>: ".$error_line."<br/><strong>error level</strong>: ".$error_level."<br/><strong>Actual Page</strong>: ".$_SERVER['PHP_SELF']);
	
	//*************Send Mail****************
	send_email("om.maurya0207@gmail.com","error@thepartyjungl.com,thepartyjungl"."error@thepartyjungl.com",$subject,$error);	
	
	/*$redirect = "<script>window.location.assign('404.html?error_handler=1')</script>";
	die($redirect);*/
}
set_error_handler("myErrorHandler", E_ERROR | E_PARSE | E_CORE_ERROR | E_CORE_WARNING);
?>


