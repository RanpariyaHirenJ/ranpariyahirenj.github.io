<?php
    $to = 'hirenranpariyaofficial@gmail.com';
    $name = $_POST["name"];
    $email= $_POST["email"];
    $subject= $_POST["subject"];
    $text= $_POST["message"];

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: Info HirenRanpariya <hirenranpariyaofficial@gmail.com>'."\r\n";
	$headers .= "To: hirenranpariyaofficial@gmail.com\r\n";
	//$headers .= "To: hjrfifad@gmail.com\r\n";
	$headers .= "BCC: hjrfifad@gmail.com\r\n";

    $message ='<table style="width:100%">
        <tr><td>Name: '.$name.'</td></tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>phone: '.$phone.'</td></tr>
        <tr><td>Messege: '.$text.'</td></tr>        
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
        echo 'The message has been sent Successfully.';
    }else{
        echo 'failed';
    }

?>
