<?php 

$smessage = "https://www.intermind.in/clients/jusjumping/curl_mail.php?action=sendmail_contact&member_name=".stripslashes(urlencode($member_name))."&member_email=$member_email&member_phone=$member_phone&subject=".stripslashes(urlencode($subject))."&message=".stripslashes(urlencode($message))."";
$url = str_replace(" ", '%20', $smessage);
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$curl_scraped_page = curl_exec($ch);

?>