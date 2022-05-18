<?php 
require("php_class.php");
require_once("class.JSON.php");
error_reporting(0);

session_start();
$photos = "../photos/";
$docs	= "../docs/";

date_default_timezone_set('Asia/Kolkata');

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
	if(!$userid = $db_object->check_value($_SESSION,"member_id",false))
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
	$from = explode(",",$from);
	if($from[1]!="")
	{
		$from = $from[0]." <".$from[1]."> ";
	}
	else
	{
		$from = $from[1];
	}
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	$headers .= "CC: vighnesh29114@gmail.com\r\n";
	// More headers
	$headers .= "From: $from"."\r\n".
	'X-Mailer: PHP/' . phpversion();						
					
	mail($to,$subject,$body,$headers);
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

function metadetails($metaid,$prodname)
{
	switch($metaid)
	{
		case 1:
			return "Used premium ".$prodname;
		break;
		case 2:
			return "Second hand premium ".$prodname;
		break;
		case 3:
			return "Used luxury ".$prodname;
		break;
		case 4:
			return "Second hand luxury ".$prodname;
		break;
		case 5:
			return "Used imported ".$prodname;
		break;
		case 6:
			return "Second hand imported ".$prodname;
		break;
		case 7:
			return "Pre owned luxury ".$prodname;
		break;
		case 8:
			return "Pre owned premium ".$prodname;
		break;
		case 9:
			return "Pre owned imported ".$prodname;
		break;
	}
}

function error_found($error_level,$error_message,$error_file,$error_line){
	$error =  ("Date Time : ".date('d-m-Y H:i:s')."\r\nError</strong>: ".$error_message."\r\n File: ".$error_file."\r\n At Line: ".$error_line."\r\n error level: ".$error_level."\r\n Actual Page: ".$_SERVER['PHP_SELF']."\r\n\r\n \r\n\r\n ");
	$file = fopen("error_log.txt","a");		   	
	fwrite($file,$error);
	fclose($file);
	
	$subject = "Website Error Encountered on ".$_SERVER['HTTP_HOST']."!";
	$error =  ("<strong>Error</strong>: ".$error_message."<br/><strong>File</strong>: ".$error_file."<br/><strong>At Line</strong>: ".$error_line."<br/><strong>error level</strong>: ".$error_level."<br/><strong>Actual Page</strong>: ".$_SERVER['PHP_SELF']);
	//*************Send Mail****************
	send_email("vighnesh29114@gmail.com","errors@thewritingjunction.com,errors@TWJ",$subject,$error);	
	
	/*$redirect = "<script>window.location.assign('404.php?error_handler=1')</script>";
	die($redirect);*/
	
}
set_error_handler('error_found', E_ERROR | E_PARSE | E_CORE_ERROR | E_CORE_WARNING);
?>