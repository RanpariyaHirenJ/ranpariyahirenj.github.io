<?php
$to = "sushil@intermind.in";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: info@piscium.in" . "\r\n" .
"CC: sushil@intermind.in";

echo mail($to,$subject,$txt,$headers);
?>