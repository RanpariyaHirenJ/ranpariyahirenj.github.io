<?php
if(isset($_POST["contact_name"])) {

    $name  = $_POST['contact_name'];      
    $email  = $_POST['contact_email'];
    $mobile  = $_POST['contact_mobile'];
    $message  = $_POST['contact_message'];
    $Page_subject  = $_POST['Page_subject'];
    $area= $_POST["contact_area"];
    $tph= $_POST["contact_ph"];
    $twp= $_POST["contact_wp"];
    $tem= $_POST["contact_em"];
    $tnc= $_POST["contact_tnc"];


    $body = '
       <table width="700" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
        <tr><td align="left" colspan="3" ><img src="logo.png" style="margin-top:0px;padding-left:0px;width:80%"></td></tr>
        <tr><td align="center" colspan="5"><h2 style="font-size:26px">'.$Page_subject.'</h2></td></tr>
        <tr>
          <td colspan="5" align="center"><b style="font-size:20px">Dear Admin</b><br><br/>
            You have a new business enquiry from '.$name.', following are the enquiry details</td>
        </tr>
        <tr>
          <td colspan="5">&nbsp;</td>
        </tr>
        <tr>
          <td width="35%" align="left"><span style="font-weight:bold; width:300px">Full Name </span></td>
          <td width="4%" align="left"><span style="font-weight:bold; width:300px">:</span></td>
          <td align="left">'.$name.'</td>
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
        </tr>
          <tr>
          <td align="left"><strong>Area </strong></td>
          <td align="left"><strong> :</strong></td>
          <td align="left">'.$area.'</td>
        </tr>
        </tr>
          <tr>
          <td align="left"><strong>Contact on Phone </strong></td>
          <td align="left"><strong> :</strong></td>
          <td align="left">'.$tph.'</td>
        </tr>
        </tr>
          <tr>
          <td align="left"><strong>Contact on Whatsapp </strong></td>
          <td align="left"><strong> :</strong></td>
          <td align="left">'.$twp.'</td>
        </tr>
        </tr>
          <tr>
          <td align="left"><strong>Contact on Email </strong></td>
          <td align="left"><strong> :</strong></td>
          <td align="left">'.$tem.'</td>
        </tr>
        </tr>
          <tr>
          <td align="left"><strong>I agree to the Terms & Conditions </strong></td>
          <td align="left"><strong> :</strong></td>
          <td align="left">'.$tnc.'</td>
        </tr>
        <tr>
          <td colspan="2">&nbsp;</td>
          <td width="75%"">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="5">Kindly contact '.$name.' @ '.$mobile.' at the earliest.<br/><br/>From,<br/>hiren.websitedeveloper@gmail.com
          </td>
        </tr>
      </table>
      ';
    
    $subject  = "You have a new enquiry from ".ucwords($name);


    $mail_data['to'] = 'hiren.websitedeveloper@gmail.com';
    $mail_data['from'] = 'hiren.websitedeveloper@gmail.com';
    $mail_data['project_name'] = 'Test';
    $mail_data['body'] = $body;


    $to = $mail_data['to'];
    $body =  $mail_data['body'];

    $headers = "MIME-Version: 1.0"."\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
    $headers .= 'From: '.$mail_data['project_name'].' <'.$mail_data['from'] .'>'."\r\n";
    $headers .= "BCC: hiren.websitedeveloper@gmail.com\r\n";
    
    mail($to, $subject, $body, $headers);

    // Send customer notification

    $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
      <tr><td align="left" colspan="3" ><img src="logo.png" style="margin-top:0px;padding-left:0px;width:50%"></td></tr>
      <tr><td align="center" colspan="3">&nbsp;</td></tr>
      <tr>
        <td colspan=\'3\'>Dear '.$name.',<br><br/>
          <h2>Thank you for contacting us.</h2></td>
      </tr>
      <tr>
        <td colspan=\'3\'>We have received your enquiry and will respond to you soon.</td>
      </tr>
      <tr>
        <td colspan=\'3\'><b>In case of any queries you can reach out to us @ <a href="tel:9029043966">+91 9029043966</a></b></td>
      </tr>
       <tr>
        <td colspan=\'3\'>&nbsp;</td>
      </tr>
      <tr>
        <td colspan=\'3\'>Warm regards,<br/>hiren.websitedeveloper@gmail.com
        </td>
      </tr>
    </table>';

    $to = $email;
    $body =  $cus_body;

      
    $subject = "Thank you for contacting us - hiren.websitedeveloper@gmail.com";

    $headers = "MIME-Version: 1.0"."\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
    $headers .= 'From: HirenRanpariya <ihiren.websitedeveloper@gmail.com>'."\r\n";
    $headers .= "CC: hiren.websitedeveloper@gmail.com\r\n";
    
    mail($to, $subject, $body, $headers); 
}

?>