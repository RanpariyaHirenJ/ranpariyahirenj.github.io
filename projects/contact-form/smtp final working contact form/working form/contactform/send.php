<?php
require 'smtp/PHPMailerAutoload.php';

if(isset($_POST["contact_name"])) {
	$mail = new PHPMailer(true); 
	$mail->IsSMTP(); 
	$mail->Host = "smtp.gmail.com";
	$mail->SMTPAuth = true; 
	$mail->Username = "hiren.websitedeveloper@gmail.com";
	$mail->Password = "hdwdxtrbqapibesk";
	$mail->SMTPSecure = 'tls'; 
	$mail->Port = 587; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	//$mail->SMTPDebug = 2; 
	                            
    $mail->setFrom($_POST["contact_email"],$_POST["contact_name"]);
    $mail->addAddress('hiren.websitedeveloper@gmail.com');
    //$mail->addReplyTo('$_POST['contact_email'],$_POST['contact_name']');
    $mail->isHTML(true);
    $mail->Subject='You have a new enquiry from :' .$_POST['Page_subject'];
	
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

    $mail->Body='	
	<table width="700" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
        <tr><td align="left" colspan="3" ><img src="https://whitestag.ae/assets/images/maillogo.png" style="margin-top:0px;padding-left:0px;width:200px"></td></tr>
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
      </table>';

	  if(!$mail->send())
    {
        $error = "Something went worng. Please try again.";
    }
    else 
    {
        $result="Thanks\t" .$_POST['contact_name']. " for contacting us.";
    }
}
?>