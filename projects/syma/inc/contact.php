<?php 

include('user_global.php');
//ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);




if(isset($_POST['leadpage']))
{

  if($_POST['leadpage'] == "Enquiry"){

      $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

        if(gcaptecha($_POST['g-recaptcha-response']) == 1){


          $full_name  = sanatize_string($_POST['name']);
          $email  = sanatize_string($_POST['email']);
          $mobile  = sanatize_value($_POST['phone']);
          $comment  = sanatize_string($_POST['message']);

          $body = '
             <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
              <tr><td align="left" colspan="3" ><img src="http://staging.intermind.in/syma/images/logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
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
                <td align="left"><strong>Mobile</strong></td>
                <td align="left"><strong> :</strong></td>
                <td align="left">'.$mobile.'</td>
              </tr>
                <tr>
                <td align="left"><strong>Comment </strong></td>
                <td align="left"><strong> :</strong></td>
                <td align="left">'.$comment.'</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
                <td width="75%"">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="3">Kindly contact '.$full_name.' @ '.$mobile.' at the earliest.<br/><br/>From,<br/>symaventures.com
                </td>
              </tr>
            </table>
            ';
          
          $subject  = "You have a new enquiry from ".ucwords($full_name);

          $mail_data['action'] = 'mail_send';
          $mail_data['to'] = $email;
          $mail_data['from'] = 'info@symaventures.com';
          $mail_data['project_name'] = 'symaventures Enquiry';
          $mail_data['subject'] = $subject;
          $mail_data['body'] = $body;

          // Always set content-type when sending HTML email
          $headers = "MIME-Version: 1.0" . "\r\n";
          $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

          // More headers
          $headers .= 'From: <info@symaventures.com>' . "\r\n";
          //$headers .= 'BCC: <sushil@intermind.in>' . "\r\n";


          mail($mail_data['to'], $subject, $body,$headers);

          // Send customer notification

          $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
            <tr><td align="left" colspan="3" ><img src="http://staging.intermind.in/syma/images/logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
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
              <td colspan=\'3\'>Warm regards,<br/>symaventures.com
              </td>
            </tr>
          </table>';

            
          $mail_data['member_subject'] = "Thank you for contacting us - symaventures.com";
          $mail_data['member_body'] = $cus_body;
          $mail_data['member_email'] = $email;




          mail($email, $mail_data['member_subject'], $mail_data['member_body'],$headers);

          
          // $ch = curl_init();
          // curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/send_mail/mail-send.php");
          // curl_setopt($ch, CURLOPT_POST, 1);
          // curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
          // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
          // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
          // $server_output = curl_exec ($ch);
          // curl_close ($ch);

           //enquiry send to enquiry management for intermind
          // $message = ucwords(stripslashes($full_name))."|$email|$mobile|$message|Enquiry";
          // $myip = $_SERVER['REMOTE_ADDR'];
          // $datetime = date("Y-m-d H:i:s");
          // $ch = curl_init();
          // curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
          // curl_setopt($ch, CURLOPT_POST, 1);
          // curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=52&project_name=Ess&enquiry_type=Enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
          // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
          // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
          // $server_output = curl_exec ($ch);
          // curl_close ($ch);
        }else{
          exit('404');
        }

    
  }

  
}


?>

