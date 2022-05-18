<?php 

session_start();
//ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);


function gcaptecha($recaptcha){

   $ch = curl_init();
   curl_setopt_array($ch, array(
        CURLOPT_URL => 'https://www.google.com/recaptcha/api/siteverify',
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => array(
            'secret' => '6Ld-f90ZAAAAAJd8gWnpxrB7KGxaF5alxo5dRLX5',
            'response' => $recaptcha,
            'remoteip' => $_SERVER['REMOTE_ADDR']
        ),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYHOST       => 0,
        CURLOPT_SSL_VERIFYPEER  => 0

    ));

  $output = curl_exec($ch);
    curl_close($ch);

  $captcha_success=json_decode($output);
  
  if ($captcha_success->success==false) {
    return 0;
  } else if ($captcha_success->success==true) {
    return 1;
  }
}

if(isset($_POST['leadpage']))
{

      $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

        // if(gcaptecha($_POST['g-recaptcha-response']) == 1){


          $full_name  = $_POST['name'];
          $email  = $_POST['email'];
          $leadpage  = ucwords($_POST['leadpage']);
          $message  = $_POST['message'];

          $body = '
             <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
              <tr><td align="left" colspan="3" ><img src="http://dznquotient.com/images/logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
              <tr><td align="center" colspan="3"><h2>'.$leadpage.' Page</h2></td></tr>
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
                <td align="left"><strong>Massage </strong></td>
                <td align="left"><strong> :</strong></td>
                <td align="left">'.$message.'</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
                <td width="75%"">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="3">Kindly contact '.$full_name.' @ '.$email.' at the earliest.<br/><br/>From,<br/>dznquotient.com
                </td>
              </tr>
            </table>
            ';
          
          $subject  = "You have a new enquiry from ".ucwords($full_name);

          $mail_data['action'] = 'mail_send';
          $mail_data['to'] = 'hello@dznquotient.com';
          $mail_data['from'] = 'hello@dznquotient.com';
          $mail_data['project_name'] = 'Dznquotient Enquiry';
          $mail_data['subject'] = $subject;
          $mail_data['body'] = $body;

          // Always set content-type when sending HTML email
          $headers = "MIME-Version: 1.0" . "\r\n";
          $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

          // More headers
          $headers .= 'From: <hello@dznquotient.com>' . "\r\n";
          //$headers .= 'BCC: <sushil@intermind.in>' . "\r\n";


          // mail($mail_data['to'], $subject, $body,$headers);

          // Send customer notification

          $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
            <tr><td align="left" colspan="3" ><img src="http://dznquotient.com/images/logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
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
              <td colspan=\'3\'>Warm regards,<br/>dznquotient.com
              </td>
            </tr>
          </table>';

            
          $mail_data['member_subject'] = "Thank you for contacting us - dznquotient.com";
          $mail_data['member_body'] = $cus_body;
          $mail_data['member_email'] = $email;




          // mail($email, $mail_data['member_subject'], $mail_data['member_body'],$headers);

          // exit();

          
          $ch = curl_init();
          curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/send_mail/mail-send.php");
          curl_setopt($ch, CURLOPT_POST, 1);
          curl_setopt($ch, CURLOPT_POSTFIELDS, $mail_data);
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
          curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
          $server_output = curl_exec ($ch);
          curl_close ($ch);

          // header('location:http://dznquotient.com/contact.html#success');

          exit();

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
        // }else{
        //   header('location:https://www.ess.net.in/contact.html');
        //   exit();
        // }
}


?>

