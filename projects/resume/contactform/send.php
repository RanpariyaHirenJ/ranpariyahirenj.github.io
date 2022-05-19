
<?php

//send.php

if(isset($_POST["contact_name"]))
{
  
 //the subject
$sub = 'New Business Enquiry from ' . $_POST['contact_name'];
//the message
$msg = $_POST["contact_message"];
$msg .=  '<p>With mobile number ' . $_POST["contact_mobile"] . '</p>';
$msg .= "From ".$_POST['contact_name'];
//recipient email here
$rec = "hirenranpariyaofficial@gmail.com";
//send email

// HTML  Content-type 
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
try{
    mail($rec,$sub,$msg, implode("\r\n", $headers));
}catch(Exception $e){
    echo($e);
}
finally{
    
}

 
}

?>