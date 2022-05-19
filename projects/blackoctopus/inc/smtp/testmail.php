<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->Host = "blackoctopus.io";

$mail->SMTPAuth = true;
//$mail->SMTPSecure = "ssl";
$mail->Port = 25;
$mail->Username = "info@blackoctopus.io";
$mail->Password = "hiren@blackoctopus@7";

$mail->From = "info@blackoctopus.io";
$mail->FromName = "Test from Info";

$mail->AddAddress("hiren.intermind@gmail.com");
$mail->AddAddress("info@blackoctopus.io");
$mail->AddAddress("hiren.ranpariya@blackoctopus.io");
//$mail->AddReplyTo("mail@mail.com");
 
$mail->IsHTML(true);

$mail->Subject = "Test message from server";
$mail->Body = "Test Mail<b>in bold!</b>";
//$mail->AltBody = "This is the body in plain text for non-HTML mail clients";

if(!$mail->Send())
{
echo "Message could not be sent. <p>";
echo "Mailer Error: " . $mail->ErrorInfo;
exit;
}

echo "Message has been sent";

?>