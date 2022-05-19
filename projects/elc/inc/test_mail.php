<?php
$to = "vighnesh29114@gmail.com";
$subject = "My subject";
$txt = "Hello world!";
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

// More headers
$headers .= 'BCC: vighnesh29114@gmail.com'."\r\n";
$headers .= "From: info@elceducation.com"."\r\n".
'X-Mailer: PHP/' . phpversion();

mail($to,$subject,$txt,$headers);
?>