<?PHP
$sender = 'info@hirenranpariyaofficial.com';
$to = 'hirenranpariyaofficial@gmail.com';
$message = "The body of the message";
$headers = 'From: info@hirenranpariyaofficial.com' . "\r\n" .
'Reply-To: info@hirenranpariyaofficial.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();
$mailResult = mail($to, 'Insert a subject here', $message, $headers);

?>