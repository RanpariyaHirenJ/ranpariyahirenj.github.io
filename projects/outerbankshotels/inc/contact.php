<?php 
include('MysqliDb.php');
$db = new MysqliDb();

if(isset($_POST['leadpage']))
{
	if($_POST['leadpage'] == "About Page")
	{
      $_POST          = $db->xss_clean($_POST);
			$member_fname 	= $_POST['member_fname'];
			$member_lname 	= $_POST['member_lname'];
			$member_email 	= $_POST['member_email'];
			$member_phone 	= $_POST['member_phone'];
			$message 		    = $_POST['message'];
			$member_name    = $member_fname." ".$member_lname;
	

			$body = '
         <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
          <tr><td align="left" colspan="3"><img src="https://www.outerbankshotels.org/images/logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
          <tr><td align="center" colspan="3"><h2>Enquiry</h2></td></tr>
          <tr>
            <td colspan="3">Dear Admin,<br><br/>
              You have a new enquiry from '.$member_name.', following are the enquiry details</td>
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
            <td align="left">'.$member_email.'</td>
          </tr>
          <tr>
            <td align="left"><strong>Contact Number </strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$member_phone.'</td>
          </tr>

          <tr>
            <td align="left" style="vertical-align:top"><strong>Message </strong></td>
            <td align="left" style="vertical-align:top"><strong>:</strong></td>
            <td align="left">'.$message.'</td>
          </tr>
          <tr>
          	<td colspan="2">&nbsp;</td>
            <td width="75%"">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="3">Kindly contact '.$member_name.' @ '.$member_phone.' at the earliest.<br/><br/>From,<br/>Outerbankshotels
            </td>
          </tr>
        </table>
        ';
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Outerbankshotels <info@outerbankshotels.org>'."\r\n";
			$headers .= "BCC: sushil@intermind.in,hiren@intermind.in,info@intermind.in\r\n";
			
			mail("rrlhotels@gmail.com", $subject, $body, $headers);


      // enquiry send to enquiry management for intermind
      $message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|Enquiry|".ucfirst(stripslashes($message));
      $myip = $_SERVER['REMOTE_ADDR'];
      $datetime = date("Y-m-d H:i:s");
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=39&project_name=Outerbankshotels&enquiry_type=Enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      $server_output = curl_exec ($ch);
      curl_close ($ch);

			header('location:'.$_SERVER['HTTP_REFERER']."?contact");
		
	}else if($_POST['leadpage'] == "Ask Question"){

      $_POST         = $db->xss_clean($_POST);
 
      $member_name   = $_POST['member_name'];
      $member_email  = $_POST['member_email'];
      $question_for  = $_POST['question_for'];
      $message       = $_POST['message'];
    
      $body = '
         <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
          <tr><td align="left" colspan="3"><img src="https://www.outerbankshotels.org/images/logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
          <tr><td align="center" colspan="3"><h2>Ask a Question( '.$question_for.' )</h2></td></tr>
          <tr>
            <td colspan="3">Dear Admin,<br><br/>
              You have a new ask a question from '.$member_name.', following are the details as below.</td>
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
            <td align="left">'.$member_email.'</td>
          </tr>
         
          <tr>
            <td align="left" style="vertical-align:top"><strong>Message </strong></td>
            <td align="left" style="vertical-align:top"><strong>:</strong></td>
            <td align="left">'.$message.'</td>
          </tr>
          <tr>
            <td colspan="2">&nbsp;</td>
            <td width="75%"">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="3">Kindly contact '.$member_name.' at the earliest.<br/><br/>From,<br/>Outerbankshotels
            </td>
          </tr>
        </table>
        ';
      
      $subject  = "You have a new ask a question from ".ucwords($member_name);
      $headers = "MIME-Version: 1.0"."\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
      $headers .= 'From: Outerbankshotels <info@outerbankshotels.org>'."\r\n";
      $headers .= "BCC: sushil@intermind.in,hiren@intermind.in,info@intermind.in\r\n";
		
      mail("rrlhotels@gmail.com", $subject, $body, $headers);
      //mail($member_email, $subject, $body, $headers);
    

      // enquiry send to enquiry management for intermind
      $message = ucwords(stripslashes($member_name))."|$member_email|".$question_for."|".ucfirst(stripslashes($message));
      $myip = $_SERVER['REMOTE_ADDR'];
      $datetime = date("Y-m-d H:i:s");
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=39&project_name=Outerbankshotels&enquiry_type=Ask a Question&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      $server_output = curl_exec ($ch);
      curl_close ($ch);

      header('location:'.$_SERVER['HTTP_REFERER']."?ask");


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

</html>