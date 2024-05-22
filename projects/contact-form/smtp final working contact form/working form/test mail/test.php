<?php
require('smtp/PHPMailerAutoload.php');

	$mail = new PHPMailer(); 
	$mail->IsSMTP(); 
	$mail->Host = "smtp.gmail.com";
	$mail->SMTPAuth = true; 
	$mail->Username = "hiren.websitedeveloper@gmail.com";
	$mail->Password = "hdwdxtrbqapibesk";
	$mail->SMTPSecure = 'tls'; 
	$mail->Port = 587; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	//$mail->SMTPDebug = 2; 
	
	$mail->setFrom('hiren.websitedeveloper@gmail.com', 'Hiren Rnpariya');
	$mail->addReplyTo('hiren.websitedeveloper@gmail.com', 'Hiren Rnpariya 2');
	$mail->addAddress('hiren.websitedeveloper@gmail.com', 'Hiren Rnpariya 1');     // Add a recipient
	//$mail->addAddress('hiren.websitedeveloper@gmail.com');               // Name is optional
	$mail->addCC('hiren.websitedeveloper@gmail.com');
	$mail->addBCC('hiren.websitedeveloper@gmail.com');
	
	$mail->Subject = 'Here is the subject';
	$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
	
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}
?>