<?php
include("../send-enquiry-php/user_global.php");
//$sec_code = md5(uniqid(time()));

if($_REQUEST["action"]=="add_comment"){
	$blogid 		= $db_object->sanatize_string($_REQUEST['blogid']);
	$username 		= $db_object->sanatize_string($_REQUEST['username']);
	$useremail 		= $db_object->sanatize_string($_REQUEST['useremail']);
	$usercomment 	= $db_object->sanatize_string($_REQUEST['usercomment']);
	
	$url_name = explode("?",$_SERVER['HTTP_REFERER']);
	$current_datetime = date("Y-m-d H:i:s");
	$sqiblog = "INSERT INTO `blog_comments`(`blog_id`, `user_name`, `user_email`, `comment_mess`, `comment_datetime`) VALUES ('$blogid', '$username', '$useremail', '$usercomment', '$current_datetime')";
	$queryres = $db_object->execute_query($sqiblog);
	//$lastinsert_id = mysqli_insert_id($db_object->conn);
	if($queryres){
		
		$sqlblog = "select * from tbl_blog_master where blog_id = ".$blogid;
		$resblog = $db_object->return_query($sqlblog);

		/*$smessage = "http://www.intermind.in/clients/nelito-website/curl_comment.php?action=sendcomment&name=$username&email=$useremail&blog_title=".htmlentities($resblog['blog_title'])."&usercomment=".htmlentities($usercomment);
			
		$url = str_replace(" ", '%20', $smessage);
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$curl_scraped_page = curl_exec($ch);*/

		/*$subject	= "Comment posted on ".ucwords(html_entity_decode($resblog['blog_title']))." blog.";
		$file_obj = new file_manup("../send-enquiry-php/");
	
		$file_obj->extract_html("blog_comment.html");
		$body = $file_obj->replace_tags("{name}|{email}|{blog}|{comment}","".ucfirst(stripslashes($username))."|$useremail|".ucfirst(stripslashes($resblog['blog_title']))."|".ucwords(stripslashes($usercomment))."");
		
		$from = "marketing@nelito.com";
		//$to = "marketing@nelito.com";
		$to = "arya@kalptech.com";
		
		// Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
		$headers .= "From: $from"."\r\n";	
		$headers .= 'Cc: info@kalptech.com, vighnesh29114@gmail.com' . "\r\n";					
		mail($to,$subject,$body,$headers);*/
		
		$data = "";
		$sqlblog = "select *, date_format(comment_datetime, '%d/%m/%Y') as commentdatetime from blog_comments where is_active=0 and blog_id=".$blogid." ORDER BY comment_datetime DESC";
		$queryblog = $db_object->execute_query($sqlblog);
		$numros = mysqli_num_rows($queryblog);
		if($numros>0){
			while($value = mysqli_fetch_array($queryblog)){
				$data .= "<li><label>".ucwords($value["user_name"])." : </label>".ucfirst(nl2br(stripslashes($value["comment_mess"])))." <div class='datelabel'> Posted On : ".$value["commentdatetime"]."</div></li>";	
			}
		}
		
		echo "1|".$data;
	}
}
else
{
	$data = "";
	$blogid = $db_object->sanatize_string($_REQUEST['blogid']);
	$sqi = "select *, date_format(comment_datetime, '%d/%m/%Y') as commentdatetime from blog_comments where is_active=0 and blog_id=".$blogid." ORDER BY comment_datetime DESC";
	$queryblog = $db_object->execute_query($sqi);
	$numros = mysqli_num_rows($queryblog);
	if($numros>0){
		while($value = mysqli_fetch_array($queryblog)){
			$data .= "<li><label>".ucwords($value["user_name"])." : </label>".ucfirst(nl2br(stripslashes($value["comment_mess"])))." <div class='datelabel'> Posted On : ".$value["commentdatetime"]."</div></li>";	
		}
	}else{
	 	$data = 0;
	}
	echo $data;
}
?>