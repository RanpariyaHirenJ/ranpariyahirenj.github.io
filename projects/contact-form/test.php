<?php
$to = "hiren.websitedeveloper@gmail.com";
$subject = "My subject";
$message = "Hello world!";
$headers = "From: hiren.websitedeveloper@gmail.com" . "\r\n" .
$headers = "cc: hiren.websitedeveloper@gmail.com";
echo mail($to,$subject,$message,$headers);
if(mail($to,$subject,$message,$headers)){
    echo "Mail Sent.";
}
else{
    echo "Mail Failed.";
}
?>