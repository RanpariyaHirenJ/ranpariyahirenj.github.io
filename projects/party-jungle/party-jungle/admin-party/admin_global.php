<?php 
require("../php_class.php");
error_reporting(0);

$photos 		= "../item photos/";
$curURL 		= "../";

$host			= "localhost";
$username 		= "root";
$password 		= "";
$database		= "party_jungle_db";

/*$host		= "localhost";
$username 	= "kalpu123_alan";
$password 	= "partyjungle";
$database	= "kalpu123_cfu";*/

$db_object 	= new db_connect("$host","$username","$password","$database");
session_start();

function redirect($url)
{
	global $db_object;
	$db_object->con_close();
	header("Location: $url");
}

function upload_photo($filefield)
{
	global $photos;
	$photoname = date("dmYHis").rand(0,50);		

	if($_FILES[$filefield]['name'] == "")
	{
		return "blank";
	}
	
	$file_obj = new file_manup($photos);		
	$photoname = $file_obj->upload_file($_FILES[$filefield]['name'],$_FILES[$filefield]['tmp_name'],$photoname,".jpg,.gif,.png");		
	if($photoname != "")
	{
		$photo_obj = new img_manup($photos);
		$photo_obj->createThumbs($photoname,500, "--");		
		return $photoname;
	}
	else
	{
		return false;
	}		
}

function get_thumbnail($filename)
{
	$file = explode(".",$filename);
	return ($file[0]."_thumb".".".$file[1]);
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

function check_login()
{	
	global $db_object;	
	if(!$userid = $db_object->check_value($_SESSION,"admin_id",false))
	{
		redirect("index.php?error=Please enter your username and password");
		die();
	}
}

function get_username($userid)
{
	global $db_object;
	$sql = "SELECT a.`admin_name` FROM administrator a WHERE a.`admin_id` = $userid";
	$value = $db_object->return_query($sql);
	return $value["admin_name"];
}

function send_email($to,$from,$subject,$body)
{				
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	
	// More headers
	$headers .= "From: $from"."\r\n";						
					
	mail($to,$subject,$body,$headers);
}

function modify_image($image_width,$image_height,$image_file_path,$image_name)
{
	$image = imagecreatetruecolor($image_width,$image_height);
	imagealphablending($image, false);
	$col=imagecolorallocatealpha($image,255,255,255,127);
	imagefilledrectangle($image,0,0,$image_width,$image_height,$col);
	imagealphablending($image,true);
	/* add door glass */
	list($width, $height) = getimagesize($image_file_path.$image_name);
	$new_w = ($image_width - $width)/2;
	$new_h = ($image_height - $height)/2;
	$ext = explode(".",$image_name);
	if($ext[1] == "jpg" || $ext[1] == "jpeg")
	{
		$img_doorGlass = imagecreatefromjpeg($image_file_path.$image_name);
	}
	else if($ext[1] == "png")
	{
		$img_doorGlass = imagecreatefrompng($image_file_path.$image_name);
	}
	
	imagecopyresampled($image, $img_doorGlass, $new_w, $new_h, 0, 0, $width, $height, $width, $height);
	imagealphablending($image,true);
	imagesavealpha($image,true);
	if($ext[1] == "jpg" || $ext[1] == "jpeg")
	{
		imagepng($image, $image_file_path.$ext[0].".png", 1);	
		unlink($image_file_path.$image_name);					
	}
	else if($ext[1] == "png")
	{
		imagepng($image, $image_file_path.$ext[0].".png", 1);	
	}
	imagedestroy($image);
	
	return($ext[0].".png");
}

?>
