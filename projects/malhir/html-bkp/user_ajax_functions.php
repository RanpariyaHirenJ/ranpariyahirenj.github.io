<?php 
include("user_global.php");
include("securimage/securimage.php");
$sec_code = md5(uniqid(time()));
	
$data = "";
$function = $_REQUEST["function"];
switch($function)
{
	case "get_capcha_image":
		$data = "<img src='./securimage/securimage_show.php?sid=".$sec_code."'>";
	break;
	
	case "verify_captcha_code":
		$captcha = trim($_REQUEST["captcha"]);
		if($captcha != "")
		{
			$img = new Securimage();
			$valid = $img->check($_REQUEST["captcha"]);
			if($valid != true) {
				$data = "<img src='./securimage/securimage_show.php?sid=".$sec_code."'>";
			}
			else {
				$data = 0;
			}
		} 
	break;
}
echo $data;
?>