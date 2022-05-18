<?php 

if(isset($_POST['leadpage']))
{
	if($_POST['leadpage'] == "Get-In-Touch")
	{
			$fname 	= $_POST['fname'];
			$lname 	= $_POST['lname'];
      $company  = $_POST['company'];
      $country  = $_POST['country'];
      $message  = $_POST['message'];
			$email 	= $_POST['email'];
			$phone 	= $_POST['phone'];
			$message 		    = $_POST['message'];
			$member_name    = $fname." ".$lname;
	

			$body = '
         <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
          <tr><td align="left" colspan="3" style="background: #000;"><img src="http://comligo.com/images/Comligo-logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
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
            <td align="left"><strong>Your Company Name </strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$company.'</td>
          </tr>
          <tr>
            <td align="left"><strong>Email Address </strong></td>
            <td align="left"><strong>:</strong></td>
            <td align="left">'.$email.'</td>
          </tr>
          <tr>
            <td align="left"><strong>Contact Number </strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$phone.'</td>
          </tr>
         
           <tr>
            <td align="left"><strong>Country </strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$country.'</td>
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
            <td colspan="3">Kindly contact '.$member_name.' @ '.$phone.' at the earliest.<br/><br/>From,<br/>COMLIGO
            </td>
          </tr>
        </table>
        ';
			
			$subject  = "You have a new enquiry from ".ucwords($member_name);
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: COMLIGO <info@comligo.com>'."\r\n";
			$headers .= "CC: info@intermind.in\r\n";
			
			// 
			mail("info@comligo.com", $subject, $body, $headers);

      sleep(2);

      // Send customer notification

      $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
        <tr><td align="left" colspan="3" style="background: #000;"><img src="http://comligo.com/images/Comligo-logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
        <tr><td align="center" colspan="3">&nbsp;</td></tr>
        <tr>
          <td colspan=\'3\'>Dear '.$member_name.',<br><br/>
            <h2>Thank you for contacting us.</h2></td>
        </tr>

        <tr>
          <td colspan=\'3\'>We have received your enquiry and will respond to you soon.</td>
        </tr>
          <tr>
          <td colspan=\'3\'>&nbsp;</td>
        </tr>
        <tr>
          <td colspan=\'3\'>Warm regards,<br/>COMLIGO
          </td>
        </tr>
      </table>';

      $cus_subject  = "Thank you for contacting us - comligo.com";
      $cus_headers = "MIME-Version: 1.0"."\r\n";
      $cus_headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
      $cus_headers .= 'From: COMLIGO <info@comligo.com>'."\r\n";

      
      mail($email, $cus_subject, $cus_body, $cus_headers);

       // enquiry send to enquiry management for intermind
      $message = ucwords(stripslashes($member_name))."|$email|$phone|$company|$country|$message|Enquiry";
      $myip = $_SERVER['REMOTE_ADDR'];
      $datetime = date("Y-m-d H:i:s");
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=48&project_name=comligo&enquiry_type=For Business&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      $server_output = curl_exec ($ch);
      curl_close ($ch);

      echo "200";

		
	}
  else if($_POST['leadpage'] == "For Business"){

      $fname  = $_POST['fname'];
      $lname  = $_POST['lname'];
      $company  = $_POST['company'];
      $email  = $_POST['email'];
      $phone  = $_POST['phone'];

      $member_name    = $fname." ".$lname;
  

      $body = '
         <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
          <tr><td align="left" colspan="3" style="background: #000;"><img src="http://comligo.com/images/Comligo-logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
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
            <td align="left"><strong>Your Company Name </strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$company.'</td>
          </tr>
          <tr>
            <td align="left"><strong>Email Address </strong></td>
            <td align="left"><strong>:</strong></td>
            <td align="left">'.$email.'</td>
          </tr>
          <tr>
            <td align="left"><strong>Contact Number </strong></td>
            <td align="left"><strong> :</strong></td>
            <td align="left">'.$phone.'</td>
          </tr>
        
          <tr>
            <td colspan="2">&nbsp;</td>
            <td width="75%"">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="3">Kindly contact '.$member_name.' @ '.$phone.' at the earliest.<br/><br/>From,<br/>COMLIGO
            </td>
          </tr>
        </table>
        ';
      
      $subject  = "You have a new business enquiry from ".ucwords($member_name);
      $headers = "MIME-Version: 1.0"."\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
      $headers .= 'From: COMLIGO <info@comligo.com>'."\r\n";
      $headers .= "CC: info@intermind.in\r\n";
      
      
      mail("info@comligo.com", $subject, $body, $headers);

      sleep(2);

      // Send customer notification

      $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
        <tr><td align="left" colspan="3" style="background: #000;"><img src="http://comligo.com/images/Comligo-logo.png" style="margin-top:0px;padding-left:0px;"></td></tr>
        <tr><td align="center" colspan="3">&nbsp;</td></tr>
        <tr>
          <td colspan=\'3\'>Dear '.$member_name.',<br><br/>
            <h2>Thank you for contacting us.</h2></td>
        </tr>

        <tr>
          <td colspan=\'3\'>We have received your enquiry and will respond to you soon.</td>
        </tr>
          <tr>
          <td colspan=\'3\'>&nbsp;</td>
        </tr>
        <tr>
          <td colspan=\'3\'>Warm regards,<br/>COMLIGO
          </td>
        </tr>
      </table>';

      $cus_subject  = "Thank you for contacting us - comligo.com";
      $cus_headers = "MIME-Version: 1.0"."\r\n";
      $cus_headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
      $cus_headers .= 'From: COMLIGO <info@comligo.com>'."\r\n";

      
      mail($email, $cus_subject, $cus_body, $cus_headers);

       // enquiry send to enquiry management for intermind
      $message = ucwords(stripslashes($member_name))."|$email|$phone|$company|Enquiry";
      $myip = $_SERVER['REMOTE_ADDR'];
      $datetime = date("Y-m-d H:i:s");
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=48&project_name=comligo&enquiry_type=Send Enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      $server_output = curl_exec ($ch);
      curl_close ($ch);

      echo "200";

    
  }

  
}


?>

