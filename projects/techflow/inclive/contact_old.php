<?php   		
	$subject  = urldecode($_REQUEST["subject"]);
	$body = urldecode($_REQUEST["mbody"]);
	$headers = "MIME-Version: 1.0"."\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
	$headers .= 'From: Tech Flow <info@techflowengg.com>'."\r\n";
	$headers .= "BCC: info@intermind.in, info@kalptech.com, vighnesh29114@gmail.com, hiren@intermind.in\r\n";
	$headers .= "CC: info@techflowengg.com\r\n";
	
	$to = "harichandra.patil@techflowengg.com";
	mail($to, $subject, $body, $headers);		
?>