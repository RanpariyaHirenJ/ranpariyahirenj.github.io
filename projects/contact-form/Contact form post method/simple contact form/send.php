<?php
//send.php
if(isset($_POST["contact_name"])) {
    //$sub = 'New Business Enquiry from ' . $_POST['contact_name'];
    $subject = 'New Business Enquiry from ' . $_POST['contact_subject'];
    $to = 'hiren.websitedeveloper@gmail.com';
    $name = $_POST["contact_name"];
    $email= $_POST["contact_email"];
    $phone= $_POST["contact_mobile"];
    $text= $_POST["contact_message"];
    $area= $_POST["contact_area"];
    $tph= $_POST["contact_ph"];
    $twp= $_POST["contact_wp"];
    $tem= $_POST["contact_em"];
    $tnc= $_POST["contact_tnc"];

    $message ='<table style="width:100%">
    <tr><td>Name: '.$name.'</td></tr>
    <tr><td>Email: '.$email.'</td></tr>
    <tr><td>phone: '.$phone.'</td></tr>
    <tr><td>Messege: '.$text.'</td></tr>  
    <tr><td>Area: '.$area.'</td></tr>    
    <tr><td>Contact on Phone: '.$tph.'</td></tr> 
    <tr><td>Contact on Whatsapp: '.$twp.'</td></tr> 
    <tr><td>Contact on Email: '.$tem.'</td></tr> 
    <tr><td>Terms & Conditions: '.$tnc.'</td></tr>       
    </table>';

    // <tr><td>Contact me <b>'.$tph.'</b> Phone </td></tr> 
    // <tr><td>Contact me <b>'.$twp.'</b> Whatsapp</td></tr> 
    // <tr><td>Contact me <b>'.$tem.'</b> Email</td></tr> 
    // <tr><td>I agree to the Terms & Conditions: '.$tnc.'</td></tr>   

    $headers = "MIME-Version: 1.0"."\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
    $headers .= "From: Info HirenRanpariya <hiren.websitedeveloper@gmail.com>"."\r\n";
    $headers .= "CC: hiren.websitedeveloper@gmail.com\r\n";
    //$headers .= 'From: hiren.websitedeveloper@gmail.com'."\r\n";
    //$headers .= "BCC: hiren.websitedeveloper@gmail.com\r\n";
    try{
        mail($to, $subject, $message, $headers);
    }catch(Exception $e){
        echo($e);
    } 
}

?>