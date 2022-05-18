<?php 
require("php_class.php");
require_once("class.JSON.php");

// error_reporting(E_ALL);


$photos = "../photos/";
$docs	= "../docs/";

date_default_timezone_set('Asia/Kolkata');

$db_object 	= new db_connect(HOST,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
$whereclause = "WHERE 1 = 1";
$max_recs = 25;
//$smtp_mailer = new smtp_mailer("mail.hospitaltech.co.in","membership@hospitaltech.co.in","4?zw7nT{D#wW");

//session_regenerate_id();
$db_object->execute_query("SET time_zone = '+5:30'");

function view($viewName, $data = array()){
	
	 if(file_exists($viewName . ".php")){
		require_once "$viewName.php";
	 } else {
		echo "<div style='margin:0;padding: 10px;background-color:silver;'>Sorry $viewName.php file not found </div>";
		exit();
	 }
}

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

function gcaptecha($recaptcha){
	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => '6LfmOqcUAAAAAAVtVvb3JqRTfoNW_93S516ZKHJB',
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
	
// encrypt end
function check_login()
{	
	global $db_object;	
	if(!$userid = $db_object->check_value($_SESSION,"memberrID",false))
	{
		redirect("index.php?error=Invalid login, please login first to access your account.");
		die();
	}
}

$json = new Services_JSON();		
function generate_output($resname,$result)
{
	global $json;		
	while($arr=mysqli_fetch_assoc($result))
	{			
		$output[]=$arr;
	}	
	return ('{"'.$resname.'":'.json_encode($output).'}');
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
}
*/

function send_email($to,$from,$subject,$body)
{				
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	
	// More headers
	$headers .= "From: $from"."\r\n";						
					
	if(mail($to,$subject,$body,$headers)){
		echo  "Mail Sent";
	}else{
		echo  "Failed";
	}
}

function getBrowser() 
{ 
    $u_agent = $_SERVER['HTTP_USER_AGENT']; 
    $bname = 'Unknown';
    $platform = 'Unknown';
    $version= "";

    //First get the platform?
    if (preg_match('/linux/i', $u_agent)) {
        $platform = 'linux';
    }
    elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
        $platform = 'mac';
    }
    elseif (preg_match('/windows|win32/i', $u_agent)) {
        $platform = 'windows';
    }
    
    // Next get the name of the useragent yes seperately and for good reason
    if(preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent)) 
    { 
        $bname = 'Internet Explorer'; 
        $ub = "MSIE"; 
    } 
    elseif(preg_match('/Firefox/i',$u_agent)) 
    { 
        $bname = 'Mozilla Firefox'; 
        $ub = "Firefox"; 
    } 
    elseif(preg_match('/Chrome/i',$u_agent)) 
    { 
        $bname = 'Google Chrome'; 
        $ub = "Chrome"; 
    } 
    elseif(preg_match('/Safari/i',$u_agent)) 
    { 
        $bname = 'Apple Safari'; 
        $ub = "Safari"; 
    } 
    elseif(preg_match('/Opera/i',$u_agent)) 
    { 
        $bname = 'Opera'; 
        $ub = "Opera"; 
    } 
    elseif(preg_match('/Netscape/i',$u_agent)) 
    { 
        $bname = 'Netscape'; 
        $ub = "Netscape"; 
    } 
    
    // finally get the correct version number
    $known = array('Version', $ub, 'other');
    $pattern = '#(?<browser>' . join('|', $known) .
    ')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
    if (!preg_match_all($pattern, $u_agent, $matches)) {
        // we have no matching number just continue
    }
    
    // see how many we have
    $i = count($matches['browser']);
    if ($i != 1) {
        //we will have two since we are not using 'other' argument yet
        //see if version is before or after the name
        if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
            $version= $matches['version'][0];
        }
        else {
            $version= $matches['version'][1];
        }
    }
    else {
        $version= $matches['version'][0];
    }
    
    // check if we have a number
    if ($version==null || $version=="") {$version="?";}
    
    return array(
        'userAgent' => $u_agent,
        'name'      => $bname,
        'version'   => $version,
        'platform'  => $platform,
        'pattern'    => $pattern
    );
}

function cropimgs($img,$cropWidth,$cropHeight){
	$im = new ImageManipulator($img);
	$orgimgwidth = $im->getWidth();
	$orgimgheight = $im->getHeight();
	
	$heightratio = $cropWidth/$cropHeight;
	$widthratio = $cropHeight/$cropWidth;
	
	if($orgimgwidth < $cropWidth){
		$cropWidth = $orgimgwidth;
		$cropHeight = $orgimgwidth*$widthratio;
	}
	if($orgimgheight < $cropHeight){ 
		$cropHeight = $orgimgheight;
		$cropWidth = $orgimgheight*$heightratio;
	}
	
	$centreX = round($orgimgwidth / 2);
	$centreY = round($orgimgheight / 2);
	$getwidth = round($cropWidth / 2);
	$getheight = round($cropHeight / 2);
	
	$x1 = $centreX - ($getwidth);
	$y1 = $centreY - ($getheight);
	$y2 = $centreY + ($getheight);
	$x2 = $centreX + ($getwidth);
	
	$im->crop($x1, $y1, $x2, $y2);
	$im->save($img);
}

function scale_image($filename, $src_image, $dst_image, $op = 'fit') {
    $src_width = imagesx($src_image);
    $src_height = imagesy($src_image);
 
    $dst_width = imagesx($dst_image);
    $dst_height = imagesy($dst_image);
 
    // Try to match destination image by width
    $new_width = $dst_width;
    $new_height = round($new_width*($src_height/$src_width));
    $new_x = 0;
    $new_y = round(($dst_height-$new_height)/2);
 
    // FILL and FIT mode are mutually exclusive
    if ($op =='fill')
        $next = $new_height < $dst_height; else $next = $new_height > $dst_height;
 
    // If match by width failed and destination image does not fit, try by height 
    if ($next) {
        $new_height = $dst_height;
        $new_width = round($new_height*($src_width/$src_height));
        $new_x = round(($dst_width - $new_width)/2);
        $new_y = 0;
    }
 
    // Copy image on right place
    imagecopyresampled($dst_image, $src_image , $new_x, $new_y, 0, 0, $new_width, $new_height, $src_width, $src_height);
	
	// Output to the browser
	//Header('Content-Type: image/jpeg');
	imagejpeg($dst_image, $filename);
	imagedestroy($dst_image);
}

function merge_image($product_price, $product_discount, $product_orig_image, $product_image) {
			
	 list($width_x, $height_x) = getimagesize($product_orig_image);
	 $image_x = imagecreatefromjpeg($product_orig_image);
	 
	 if($product_discount != 0){
		 list($width_y, $height_y) = getimagesize('./images/discounted.png');
		 $image_y = imagecreatefrompng('./images/discounted.png');
	 }
	 else {
		 list($width_y, $height_y) = getimagesize('./images/non_discounted.png');
		$image_y = imagecreatefrompng('./images/non_discounted.png');
	}
	
	 $white = imagecolorallocate($image_y, 255, 255, 255);
	 $red = imagecolorallocate($image_y, 255, 0, 0);
	 $black = imagecolorallocate($image_y, 0, 0, 0);
	 
	 $string = "₹ ".$product_price;
	 $numlength = strlen((string)$product_price);
	 
	 if($product_discount != 0){
		$discout_price = round($product_price - ($product_price * ($product_discount / 100)));
		$discout_price = "₹ ".$discout_price;
		$discount = $product_discount."%";
	 }
	
	 $font = 22;
	 $width = imagefontwidth($font) * strlen($string) ;
	 $height = imagefontheight($font) ;
	 
	 $x = imagesx($image_y) - $width ;
	 $y = imagesy($image_y) - $height;

	 if($product_discount != 0){
		 switch($numlength){ 
			case "1": $font = 26; $xwidth = 160; break;
			case "2": $font = 26; $xwidth = 140; break; 
			case "3": $font = 24; $xwidth = 135; break; 
			case "4": $font = 24; $xwidth = 130; break; 
			case "5": $font = 22; $xwidth = 128; break; 
			case "6": $font = 22; $xwidth = 120; break;
		}
		imagefttext($image_y, $font, 0, $xwidth, 35, $red, "./styles/fonts/Roboto-Medium.ttf", $string);
	 }
	 else
	 {
		 switch($numlength){ 
			case "1": $font = 30; $xwidth = 105; break;
			case "2": $font = 30; $xwidth = 95; break; 
			case "3": $font = 30; $xwidth = 80; break; 
			case "4": $font = 34; $xwidth = 60; break; 
			case "5": $font = 30; $xwidth = 55; break; 
			case "6": $font = 28; $xwidth = 50; break;
		 }
		 imagefttext($image_y, $font, 0, $xwidth, 52, $black, "./styles/fonts/Roboto-Medium.ttf", $string);
	 }
	 
	 if($product_discount != 0){
		switch($numlength){ 
			case "1": $font = 26; $xwidth = 160; $linestart = 185; $lineend = 210; break;
			case "2": $font = 26; $xwidth = 140; $linestart = 162; $lineend = 212; break; 
			case "3": $font = 24; $xwidth = 135; $linestart = 155; $lineend = 220; break; 
			case "4": $font = 24; $xwidth = 130; $linestart = 152; $lineend = 230; break; 
			case "5": $font = 22; $xwidth = 128; $linestart = 148; $lineend = 235; break; 
			case "6": $font = 22; $xwidth = 120; $linestart = 142; $lineend = 242; break;
		}
		imagelinethick($image_y, $linestart, 24, $lineend, 24, $red, 3);
		imagefttext($image_y, $font, 0, $xwidth, 65, $black, "./styles/fonts/Roboto-Medium.ttf", $discout_price);
		imagefttext($image_y, 20, 0, 25, 35, $white, "./styles/fonts/Roboto-Italic.ttf", $discount);
		imagefttext($image_y, 18, 0, 25, 60, $white, "./styles/fonts/Roboto-Italic.ttf", "Off");
	 }
	 
	 $new_width = ($width_x > $width_y) ? $width_x : $width_y;
	 $new_height = $height_x + $height_y;
	 
	 $new = imagecreate($new_width, $new_height);
	 if($product_discount != 0){
		imagecopymerge($image_x, $image_y, 0, 0, 0, 0, $width_y, $height_y, 100);
	 }
	 else {
		imagecopymerge($image_x, $image_y, 0, 0, 0, 0, $width_y, $height_y, 100); 
	 }
	 
	 imagejpeg($image_x, $product_image);
	 
	 imagedestroy($image_x);
	 imagedestroy($image_y);
}
		
function imagecopymerge_alpha($dst_im, $src_im, $dst_x, $dst_y, $src_x, $src_y, $src_w, $src_h, $pct){
	$cut = imagecreatetruecolor($src_w, $src_h);
	imagecopy($cut, $dst_im, 0, 0, $dst_x, $dst_y, $src_w, $src_h);
	imagecopy($cut, $src_im, 0, 0, $src_x, $src_y, $src_w, $src_h);
	imagecopymerge($dst_im, $cut, $dst_x, $dst_y, 0, 0, $src_w, $src_h, $pct);
}
		
function imagelinethick($image, $x1, $y1, $x2, $y2, $color, $thick = 1)
{
	if ($thick == 1) {
		return imageline($image, $x1, $y1, $x2, $y2, $color);
	}
	$t = $thick / 2 - 0.5;
	if ($x1 == $x2 || $y1 == $y2) {
		return imagefilledrectangle($image, round(min($x1, $x2) - $t), round(min($y1, $y2) - $t), round(max($x1, $x2) + $t), round(max($y1, $y2) + $t), $color);
	}
	$k = ($y2 - $y1) / ($x2 - $x1);
	$a = $t / sqrt(1 + pow($k, 2));
	$points = array(
		round($x1 - (1+$k)*$a), round($y1 + (1-$k)*$a),
		round($x1 - (1-$k)*$a), round($y1 - (1+$k)*$a),
		round($x2 + (1+$k)*$a), round($y2 - (1-$k)*$a),
		round($x2 + (1-$k)*$a), round($y2 + (1+$k)*$a),
	);
	imagefilledpolygon($image, $points, 4, $color);
	return imagepolygon($image, $points, 4, $color);
}

function error_found($error_level,$error_message,$error_file,$error_line){
	$error =  ("Date Time : ".date('d-m-Y H:i:s')."\r\nError</strong>: ".$error_message."\r\n File: ".$error_file."\r\n At Line: ".$error_line."\r\n error level: ".$error_level."\r\n Actual Page: ".$_SERVER['PHP_SELF']."\r\n\r\n \r\n\r\n ");
	$file = fopen("error_log.txt","a");		   	
	fwrite($file,$error);
	fclose($file);
	
	$subject = "Website Error Encountered on ".$_SERVER['HTTP_HOST']."!";
	$error =  ("<strong>Error</strong>: ".$error_message."<br/><strong>File</strong>: ".$error_file."<br/><strong>At Line</strong>: ".$error_line."<br/><strong>error level</strong>: ".$error_level."<br/><strong>Actual Page</strong>: ".$_SERVER['PHP_SELF']);
	
	//*************Send Mail****************
	//send_email("kalpesh@intermind.in","errors@thewritingjunction.com,errors@TWJ",$subject,$error);	
	
	/*$redirect = "<script>window.location.assign('404.php?error_handler=1')</script>";
	die($redirect);*/
	
}

set_error_handler('error_found', E_ERROR | E_PARSE | E_CORE_ERROR | E_CORE_WARNING | E_STRICT);
?>