<?php

function send_email($to,$from,$subject,$body)
{				
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	
	// More headers
	$headers .= "From: $from"."\r\n";						
					
	mail($to,$subject,$body,$headers);
}

	$user_name 		= $_REQUEST['user_name'];
	$user_email 	= $_REQUEST['user_email'];
	$user_phone 	= $_REQUEST['user_phone'];
	$user_comments 	= $_REQUEST['user_comments'];
	
	$subject = "Enquiry From Website - www.rajinterior.co.in";
	$mail = "<table width=\"400\" align=\"left\" border=\"1\" cellpadding=\"6\">
  <tr>
    <td width=\"115\">Name</td>
    <td width=\"22\">:</td>
    <td width=\"241\">".$user_name."</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>:</td>
    <td>".$user_email."</td>
  </tr>
  <tr>
    <td>Phone Number</td>
    <td>:</td>
    <td>".$user_phone."</td>
  </tr>
  <tr>
    <td>Message</td>
    <td>:</td>
    <td>".$user_comments."</td>
  </tr>
</table>";
//die($mail);
	//$from = $user_email;
//	$to = "info@rajinteriors.co.in";
	$from = $user_email;
	$to = "info@rajinterior.co.in";
	send_email($to,$from,$subject,$mail);
	header("Location: ./message.html");
	die();
?>