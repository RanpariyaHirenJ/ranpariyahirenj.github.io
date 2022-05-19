<?php 
ob_start();


include("user_global.php");



if(isset($_POST['action']))
{


	if($_POST['action'] == "Submit")
	{
	
   
		if($_POST['leadpage']=="index"){


        $full_name  = $db_object->sanatize_string($_POST['name']);
        $email  = $db_object->sanatize_string($_POST['email']);
        $phone  = $db_object->sanatize_string($_POST['phone']);
        $message  = $db_object->sanatize_string($_POST['message']);
      
   
        $body = '
           <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
            <tr><td align="left" colspan="3" ><img src="http://blackoctopus.io/assets/img/logo/logo.png" style="margin-top:0px;padding-left:0px;width: 40%;"></td></tr>
            <tr><td align="center" colspan="3"><h2>Enquiry</h2></td></tr>
            <tr>
              <td colspan="3">Dear Admin,<br><br/>
                You have a new enquiry from '.$full_name.', following are the details</td>
            </tr>
            <tr>
              <td colspan="2">&nbsp;</td>
              <td width="75%">&nbsp;</td>
            </tr>
            <tr>
              <td width="21%" align="left"><span style="font-weight:bold; width:300px">Full Name </span></td>
              <td width="4%" align="left"><span style="font-weight:bold; width:300px">:</span></td>
              <td align="left">'.$full_name.'</td>
            </tr>
            
            <tr>
              <td align="left"><strong>Email Address </strong></td>
              <td align="left"><strong>:</strong></td>
              <td align="left">'.$email.'</td>
            </tr>
            <tr>
              <td align="left"><strong>Phone</strong></td>
              <td align="left"><strong> :</strong></td>
              <td align="left">'.$phone.'</td>
            </tr>
            <tr>
              <td align="left"><strong>Message</strong></td>
              <td align="left"><strong> :</strong></td>
              <td align="left">'.$message.'</td>
            </tr>
          
            <tr>
              <td colspan="2">&nbsp;</td>
              <td width="75%"">&nbsp;</td>
            </tr>
            <tr>
              <td colspan="3">Kindly contact '.$full_name.' @ '.$phone.' at the earliest.<br/><br/>From,<br/>blackoctopus.io
              </td>
            </tr>
          </table>
          ';
        
        $subject  = "You have a new enquiry from ".ucwords($full_name);

        // Always set content-type when sending HTML email
        $headers .='Reply-To: '. $email . "\r\n" ;
        $headers .='X-Mailer: PHP/' . phpversion();
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: <info@blackoctopus.io>' . "\r\n";
        //$headers .= 'CC: <hiren.intermind@gmail.com>' . "\r\n";      
        $headers .= 'BCC: <hiren.intermind@gmail.com>' . "\r\n";

        
        mail('info@blackoctopus.io', $subject, $body,$headers);

        // Send customer notification

        $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
          <tr><td align="left" colspan="3" ><img src="http://blackoctopus.io/assets/img/logo/logo.png" style="margin-top:0px;padding-left:0px;width: 40%;"></td></tr>
          <tr><td align="center" colspan="3">&nbsp;</td></tr>
          <tr>
            <td colspan=\'3\'>Dear '.$full_name.',<br><br/>
              <h2>Thank you for contacting us.</h2></td>
          </tr>

          <tr>
            <td colspan=\'3\'>We have received your enquiry and will respond to you soon.</td>
          </tr>
     
           <tr>
            <td colspan=\'3\'>&nbsp;</td>
          </tr>
          <tr>
            <td colspan=\'3\'>Warm regards,<br/>blackoctopus.io
            </td>
          </tr>
        </table>';

          
        $mail_data['member_subject'] = "Thank you for contacting us - blackoctopus.io";
        $mail_data['member_body'] = $cus_body;
        $mail_data['member_email'] = $email;




        mail($email, $mail_data['member_subject'], $mail_data['member_body'],$headers);
    }
	}
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Untitled Document</title>

</head>



<body>

</body>

</body>
</html>