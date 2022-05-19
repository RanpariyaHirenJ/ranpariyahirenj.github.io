<?php 
include("user_global.php");

if(isset($_POST['action'])){
	if($_POST['action'] == "SUBMIT"){
		/*$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1){
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else {*/
			$b_denominations = $db_object->sanatize_string($_POST['b_denominations']);
			$b_type = $db_object->sanatize_string($_POST['b_type']);
			$b_quantity 	= $db_object->sanatize_string($_POST['b_quantity']);
			
			$b_first_name 	= $db_object->sanatize_string($_POST['b_first_name']);
			$b_last_name 	= $db_object->sanatize_string($_POST['b_last_name']);
			$b_address  = $db_object->sanatize_string($_POST['b_address']);
			$b_country 	= $db_object->sanatize_string($_POST['b_country']);
			$b_state 	= $db_object->sanatize_string($_POST['b_state']);
			$b_city 	= $db_object->sanatize_string($_POST['b_city']);
			$b_pincode 	= $db_object->sanatize_string($_POST['b_pincode']);
			$b_mobile_number 	= $db_object->sanatize_string($_POST['b_mobile_number']);
			$b_email_address 	= $db_object->sanatize_string($_POST['b_email_address']);
			
			$s_first_name 	= $db_object->sanatize_string($_POST['s_first_name']);
			$s_last_name 	= $db_object->sanatize_string($_POST['s_last_name']);
			$s_address  = $db_object->sanatize_string($_POST['s_address']);
			$s_country 	= $db_object->sanatize_string($_POST['s_country']);
			$s_state 	= $db_object->sanatize_string($_POST['s_state']);
			$s_city 	= $db_object->sanatize_string($_POST['s_city']);
			$s_pincode 	= $db_object->sanatize_string($_POST['s_pincode']);
			$s_mobile_number 	= $db_object->sanatize_string($_POST['s_mobile_number']);
			$s_email_address 	= $db_object->sanatize_string($_POST['s_email_address']);
			
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$body = "<table width='600' border='0' cellspacing='5' align='center' style='border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;'>
			  <tr><td align='left' colspan='3'><img src='http://staging.intermind.in/speciality/html/images/logo.png' style='margin-top:0px;width:25%;padding-left:0px;'></td></tr>
			  <tr><td colspan='3' align='center'>&nbsp;</td></tr>
			  <tr><td colspan='3'>Dear Administrator,<br>You have a new gift voucher enquiry from ".ucfirst(stripslashes($b_first_name." ".$b_last_name)).", following are the details.</td></tr>
			  <tr><td colspan='2'>&nbsp;</td><td width='73%'>&nbsp;</td></tr>
			  <tr>
				<td width='23%' align='left'><span style='font-weight:bold; width:300px'>Denominations</span></td>
				<td width='4%' align='left'><span style='font-weight:bold; width:300px'>:</span></td>
				<td align='left'>Rs.".$b_denominations."/-</td>
			  </tr>
			   <tr>
				<td width='23%' align='left'><span style='font-weight:bold; width:300px'>Type</span></td>
				<td width='4%' align='left'><span style='font-weight:bold; width:300px'>:</span></td>
				<td align='left'>".$b_type."</td>
			  </tr>
			  <tr>
				<td align='left' width='30%'><strong>Quantity</strong></td>
				<td align='left'><strong>:</strong></td>
				<td align='left'>".$b_quantity."</td>
			  </tr>
			  <tr><td colspan='3'><h3 style='color:#db9e28'>Billing Information</h3></td></tr>
			  <tr>
				<td width='23%' align='left'><span style='font-weight:bold; width:300px'>Full Name</span></td>
				<td width='4%' align='left'><span style='font-weight:bold; width:300px'>:</span></td>
				<td align='left'>".ucfirst(stripslashes($b_first_name." ".$b_last_name))."</td>
			  </tr>
			  <tr>
				<td align='left' width='30%'><strong>Address </strong></td>
				<td align='left'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($b_address))."</td>
			  </tr>
			  <tr>
				<td align='left' width='30%'><strong>Country</strong></td>
				<td align='left'><strong> :</strong></td>
				<td align='left'>".ucfirst(stripslashes($b_country))."</td>
			  </tr>
			  <tr>
				<td align='left' width='30%' style='vertical-align:top'><strong>State</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($b_state))."</td>
			  </tr>
			  <tr>
				<td align='left' width='30%' style='vertical-align:top'><strong>City</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($b_city))."</td>
			  </tr>
			  <tr>
				<td align='left' width='30%' style='vertical-align:top'><strong>Pincode</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$b_pincode."</td>
			  </tr>
			  <tr>
				<td align='left' width='30%' style='vertical-align:top'><strong>Mobile No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$b_mobile_number."</td>
			  </tr>
			  <tr>
				<td align='left' width='30%' style='vertical-align:top'><strong>Email</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$b_email_address."</td>
			  </tr>";
			  if($s_email_address != "" && $s_first_name != "" && $s_last_name != "" && !isset($_POST['shipping_billing'])){
				  $body .= "<tr><td colspan='3'><h3 style='color:#db9e28'>Shipping Address</h3></td></tr>
				  <tr>
					<td width='23%' align='left'><span style='font-weight:bold; width:300px'>Full Name</span></td>
					<td width='4%' align='left'><span style='font-weight:bold; width:300px'>:</span></td>
					<td align='left'>".ucfirst(stripslashes($s_first_name." ".$s_last_name))."</td>
				  </tr>
				  <tr>
					<td align='left' width='30%'><strong>Address </strong></td>
					<td align='left'><strong>:</strong></td>
					<td align='left'>".ucfirst(stripslashes($s_address))."</td>
				  </tr>
				  <tr>
					<td align='left' width='30%'><strong>County</strong></td>
					<td align='left'><strong> :</strong></td>
					<td align='left'>".ucfirst(stripslashes($s_country))."</td>
				  </tr>
				  <tr>
					<td align='left' width='30%' style='vertical-align:top'><strong>State</strong></td>
					<td align='left' style='vertical-align:top'><strong>:</strong></td>
					<td align='left'>".ucfirst(stripslashes($s_state))."</td>
				  </tr>
				  <tr>
					<td align='left' width='30%' style='vertical-align:top'><strong>City</strong></td>
					<td align='left' style='vertical-align:top'><strong>:</strong></td>
					<td align='left'>".ucfirst(stripslashes($s_city))."</td>
				  </tr>
				  <tr>
					<td align='left' width='30%' style='vertical-align:top'><strong>Pincode</strong></td>
					<td align='left' style='vertical-align:top'><strong>:</strong></td>
					<td align='left'>".$s_pincode."</td>
				  </tr>
				  <tr>
					<td align='left' width='30%' style='vertical-align:top'><strong>Mobile No.</strong></td>
					<td align='left' style='vertical-align:top'><strong>:</strong></td>
					<td align='left'>".$s_mobile_number."</td>
				  </tr>
				  <tr>
					<td align='left' width='30%' style='vertical-align:top'><strong>Email</strong></td>
					<td align='left' style='vertical-align:top'><strong>:</strong></td>
					<td align='left'>".$s_email_address."</td>
				  </tr>";
			  }
			  $body .= "<tr>
				<td align='left' width='30%' style='vertical-align:top'>&nbsp;</td>
				<td align='left' style='vertical-align:top'>&nbsp;</td>
				<td align='left'>&nbsp;</td>
			  </tr>
			  <tr>
				<td colspan='3'>Kindly contact ".ucfirst(stripslashes($b_first_name." ".$b_last_name))." @ ".$b_mobile_number." at the earliest.
				<br/><br/>From,<br/>Speciality Restaurants Ltd.
				</td>
			  </tr>
			</table>";
			
			$subject  = "You have a new gift voucher enquiry from ".ucwords(stripslashes($b_first_name." ".$b_last_name));
			
			//$to = "ritesh.kalptech@gmail.com";
			$to = "giftvouchers@speciality.co.in";
			
			send_email($to,'Speciality Restaurants Ltd.,info@speciality.co.in',$subject,$body);
			
			//enquiry send to enquiry management for intermind
			$message = $b_denominations."|".$b_type."|".$b_quantity."|".ucwords(stripslashes($b_first_name." ".$b_last_name))."|".ucfirst(stripslashes($b_address))."|$b_country|$b_state|".ucfirst(stripslashes($b_city))."|$b_pincode|$b_mobile_number|$b_email_address";
			if($s_email_address != "" && $s_first_name != "" && $s_last_name != "" && !isset($_POST['shipping_billing'])){
			    $message .= "|".ucwords(stripslashes($s_first_name." ".$s_last_name))."|".ucfirst(stripslashes($s_address))."|$s_country|$s_state|".ucfirst(stripslashes($s_city))."|$s_pincode|$s_mobile_number|$s_email_address";
			}
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=33&project_name=Speciality&enquiry_type=Gift Voucher&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
			
			redirect($url_name[0]."?gift_voucher=succes");
		//}
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