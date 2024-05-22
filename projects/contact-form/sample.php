<?PHP
//$sender = "info@hirenranpariyaofficial.com";
$to = "hiren.websitedeveloper@gmail.com";
$subject = "Test Mail";
$message = "The body of the message";
$from = "hiren.websitedeveloper@gmail.com";
$headers = "From: $from" . "\r\n" .
"Reply-To: info@hirenranpariyaofficial.com" . "\r\n" .
"X-Mailer: PHP/" . phpversion();
//$mailResult = mail($to, "Insert a subject here", $message, $headers);
if(mail($to, $subject, $message, $headers);){
    echo "Mail Sent.";
}
else{
    echo "Mail Failed.";
}
?>