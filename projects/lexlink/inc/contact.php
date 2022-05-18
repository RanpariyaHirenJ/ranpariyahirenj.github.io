<?php 


if(isset($_POST['leadpage']))
{

      $fname  = $_POST['f_name'];
      $lname  = $_POST['l_name'];
      $email  = $_POST['email'];
      $mobile  = $_POST['mobile'];
      $interest  = $_POST['interest'];
      $message  = $_POST['message'];

      $member_name    = $fname." ".$lname;
  

      $body = '
         <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
          <tr><td align="left" colspan="3" ><img src="https://lexlink.com.au/images/logo-b.png" style="margin-top:0px;padding-left:0px;"></td></tr>
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
            <td align="left"><strong>Interest </strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$interest.'</td>
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
            <td colspan="3">Kindly contact '.$member_name.' @ '.$mobile.' at the earliest.<br/><br/>From,<br/>Lexlink
            </td>
          </tr>
        </table>
        ';
      
      $subject  = "You have a new enquiry from ".ucwords($member_name);

      $mail_data['action'] = 'mail_send';
      $mail_data['to'] = 'info@lexlink.com.au';
      $mail_data['cc'] = 'shefalikum@gmail.com';
      $mail_data['from'] = 'on-reply@lexlink.com.au';
      $mail_data['project_name'] = 'Lexlink';
      $mail_data['subject'] = $subject;
      $mail_data['body'] = $body;
           

      // Send customer notification

      $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
        <tr><td align="left" colspan="3" ><img src="https://lexlink.com.au/images/logo-b.png" style="margin-top:0px;padding-left:0px;"></td></tr>
        <tr><td align="center" colspan="3">&nbsp;</td></tr>
        <tr>
          <td colspan=\'3\'>Dear '.$member_name.',<br><br/>
            <h2>Thank you for contacting us.</h2></td>
        </tr>

        <tr>
          <td colspan=\'3\'>We have received your enquiry and will respond to you soon.</td>
        </tr>
        <tr>
          <td colspan=\'3\'><b>In case of any queries you can reach out to us @ <a href="tel:8775722004">+91 8775722004</a></b></td>
        </tr>
         <tr>
          <td colspan=\'3\'>&nbsp;</td>
        </tr>
        <tr>
          <td colspan=\'3\'>Warm regards,<br/>Lexlink
          </td>
        </tr>
      </table>';

        
      $mail_data['member_subject'] = "Thank you for contacting us - lexlink.com.au";
      $mail_data['member_body'] = $cus_body;
      $mail_data['member_email'] = $email;



      
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/send_mail/mail-send.php");
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      $server_output = curl_exec ($ch);
      curl_close ($ch);

       // enquiry send to enquiry management for intermind
      $message = ucwords(stripslashes($member_name))."|$email|$mobile|$interest|$message|Enquiry";
      $myip = $_SERVER['REMOTE_ADDR'];
      $datetime = date("Y-m-d H:i:s");
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=51&project_name=lexlink&enquiry_type=Send Enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      $server_output = curl_exec ($ch);
      curl_close ($ch);

      echo "200";
  
}else if(isset($_POST['leadpage-newsletter'])){

      $full_name  = $_POST['full_name'];
      $email  = $_POST['email'];
      $company  = $_POST['company'];

      $body = '
         <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
          <tr><td align="left" colspan="3" ><img src="https://lexlink.com.au/images/logo-b.png" style="margin-top:0px;padding-left:0px;"></td></tr>
          <tr><td align="center" colspan="3"><h2>Subscribe for Newsletter</h2></td></tr>
          <tr>
            <td colspan="3">Dear Admin,<br><br/>
              You have a new subscribe for newsletter from '.$full_name.', following are the subscriber details.</td>
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
            <td align="left"><strong>Company</strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$company.'</td>
          </tr>
          <tr>
            <td colspan="2">&nbsp;</td>
            <td width="75%"">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="3">Kindly contact '.$email.' at the earliest.<br/><br/>From,<br/>Lexlink
            </td>
          </tr>
        </table>
        ';
      
      $subject  = "You have a new subscribe for newsletter from ".ucwords($full_name);

      $mail_data['action'] = 'mail_send';
       $mail_data['to'] = 'info@lexlink.com.au';
      $mail_data['cc'] = 'shefalikum@gmail.com';
      $mail_data['from'] = 'on-reply@lexlink.com.au';
      $mail_data['project_name'] = 'Lexlink';
      $mail_data['subject'] = $subject;
      $mail_data['body'] = $body;
           

      // // Send customer notification

      // $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
      //   <tr><td align="left" colspan="3" ><img src="https://lexlink.com.au/images/logo-b.png" style="margin-top:0px;padding-left:0px;"></td></tr>
      //   <tr><td align="center" colspan="3">&nbsp;</td></tr>
      //   <tr>
      //     <td colspan=\'3\'>Dear '.$full_name.',<br><br/>
      //       <h2>Thank you for contacting us.</h2></td>
      //   </tr>

      //   <tr>
      //     <td colspan=\'3\'>We have received your Newsletter and will respond to you soon.</td>
      //   </tr>
      //   <tr>
      //     <td colspan=\'3\'><b>In case of any queries you can reach out to us @ <a href="tel:8775722004">+91 8775722004</a></b></td>
      //   </tr>
      //    <tr>
      //     <td colspan=\'3\'>&nbsp;</td>
      //   </tr>
      //   <tr>
      //     <td colspan=\'3\'>Warm regards,<br/>Lexlink
      //     </td>
      //   </tr>
      // </table>';

        
      // $mail_data['member_subject'] = "Thank you for contacting us - lexlink.com.au";
      // $mail_data['member_body'] = $cus_body;
      // $mail_data['member_email'] = $email;



      
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/send_mail/mail-send.php");
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      $server_output = curl_exec ($ch);
      curl_close ($ch);

       // enquiry send to enquiry management for intermind
      $message = ucwords(stripslashes($full_name))."|$email|$company|Newsletter";
      $myip = $_SERVER['REMOTE_ADDR'];
      $datetime = date("Y-m-d H:i:s");
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=51&project_name=lexlink&enquiry_type=NewsLetter&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      $server_output = curl_exec ($ch);
      curl_close ($ch);

      echo "200";
  
}


?>

