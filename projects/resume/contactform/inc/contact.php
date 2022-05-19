<?php 


if(isset($_POST['leadpage']))
{

  if($_POST['leadpage'] == "Contact Page"){

      $fname  = $_POST['member_fname'];
      $lname  = $_POST['member_lname'];
      
      $email  = $_POST['member_email'];
      $mobile  = $_POST['member_phone'];
      $message  = $_POST['message'];

      $member_name    = $fname." ".$lname; 

      $body = '
         <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
          <tr><td align="left" colspan="3" ><img src="http://piscium.in/images/logo.png" style="margin-top:0px;padding-left:0px;width:50%"></td></tr>
          <tr><td align="center" colspan="3"><h2>Enquiry</h2></td></tr>
          <tr>
            <td colspan="3">Dear Admin,<br><br/>
              You have a new business enquiry from '.$member_name.', following are the enquiry details</td>
          </tr>
          <tr>
            <td colspan="2">&nbsp;</td>
            <td width="75%">&nbsp;</td>
          </tr>
          <tr>
            <td width="21%" align="left"><span style="font-weight:bold; width:300px">Full Name </span></td>
            <td width="4%" align="left"><span style="font-weight:bold; width:300px">:</span></td>
            <td align="left">'.$member_name.'</td>
          </tr>
          
          <tr>
            <td align="left"><strong>Email Address </strong></td>
            <td align="left"><strong>:</strong></td>
            <td align="left">'.$email.'</td>
          </tr>
          <tr>
            <td align="left"><strong>Phone</strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$mobile.'</td>
          </tr>
            <tr>
            <td align="left"><strong>Message </strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$message.'</td>
          </tr>
          <tr>
            <td colspan="2">&nbsp;</td>
            <td width="75%"">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="3">Kindly contact '.$member_name.' @ '.$mobile.' at the earliest.<br/><br/>From,<br/>Piscium.in
            </td>
          </tr>
        </table>
        ';
      
      $subject  = "You have a new enquiry from ".ucwords($member_name);


      $mail_data['to'] = 'info@piscium.in';
      $mail_data['from'] = 'info@piscium.in';
      $mail_data['project_name'] = 'Piscium';
      $mail_data['body'] = $body;


      $to = $mail_data['to'];
      $body =  $mail_data['body'];

      $headers = "MIME-Version: 1.0"."\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
      $headers .= 'From: '.$mail_data['project_name'].' <'.$mail_data['from'] .'>'."\r\n";
      $headers .= "BCC: sushil@intermind.in,info@intermind.in\r\n";
      
      mail($to, $subject, $body, $headers);

      // Send customer notification

      $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
        <tr><td align="left" colspan="3" ><img src="http://piscium.in/images/logo.png" style="margin-top:0px;padding-left:0px;width:50%"></td></tr>
        <tr><td align="center" colspan="3">&nbsp;</td></tr>
        <tr>
          <td colspan=\'3\'>Dear '.$member_name.',<br><br/>
            <h2>Thank you for contacting us.</h2></td>
        </tr>
        <tr>
          <td colspan=\'3\'>We have received your enquiry and will respond to you soon.</td>
        </tr>
        <tr>
          <td colspan=\'3\'><b>In case of any queries you can reach out to us @ <a href="tel:9920305144">+91 9920305144</a></b></td>
        </tr>
         <tr>
          <td colspan=\'3\'>&nbsp;</td>
        </tr>
        <tr>
          <td colspan=\'3\'>Warm regards,<br/>Piscium.in
          </td>
        </tr>
      </table>';

      $to = $email;
      $body =  $cus_body;

        
      $subject = "Thank you for contacting us - piscium.in";

      $headers = "MIME-Version: 1.0"."\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
      $headers .= 'From: piscium <info@piscium.in>'."\r\n";
      $headers .= "BCC: sushil@intermind.in,info@intermind.in\r\n";
      
      mail($to, $subject, $body, $headers);

      
      // $ch = curl_init();
      // curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/send_mail/mail-send.php");
      // curl_setopt($ch, CURLOPT_POST, 1);
      // curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
      // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      // $server_output = curl_exec ($ch);
      // curl_close ($ch);

      //  // enquiry send to enquiry management for intermind
      // $message = ucwords(stripslashes($member_name))."|$email|$mobile|$message|Enquiry";
      // $myip = $_SERVER['REMOTE_ADDR'];
      // $datetime = date("Y-m-d H:i:s");
      // $ch = curl_init();
      // curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
      // curl_setopt($ch, CURLOPT_POST, 1);
      // curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=49&project_name=Mystiq Garden&enquiry_type=Send Enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
      // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      // $server_output = curl_exec ($ch);
      // curl_close ($ch);

      echo "200";

    
  }

  
}


?>

