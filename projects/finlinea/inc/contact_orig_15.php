<?php 
include("user_global.php");
if(isset($_REQUEST['action']))
{
	if($_REQUEST['action'] == "Submit")
	{
		$member_name 	= $db_object->sanatize_string($_REQUEST['member_name']);
		$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
		$member_mobile 	= $db_object->sanatize_string($_REQUEST['member_mobile']);
		$comments 		= $db_object->sanatize_string($_REQUEST['member_comment']);

		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		
		//$file_obj = new file_manup("./");
		//$file_obj->extract_html("contact.html");
		//$body = $file_obj->replace_tags("{name}|{email}|{phone}|{comments}","".ucfirst(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($comments))."");
		
		/*$subject  = "You have a new enquiry from ".ucwords($member_name);
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= 'From: Finlinea Healthwits <info@intermind.in>'."\r\n";
		$headers .= "BCC: rajendra@kalptech.com, vighnesh@intermind.in\r\n";
		$headers .= "CC: info@intermind.in, info@kalptech.com\r\n";*/
		//$to = "customercare@finlineahealthwits.com";
		
		/*$to = "rajendra@kalptech.com, vighnesh@intermind.in";
		mail($to, $subject, $body, $headers);*/
		
		$smessage = "http://www.intermind.in/clients/finlinea/html/inc/curl_mail.php?action=sendmail_contact&member_name=".stripslashes(urlencode($member_name))."&member_email=$member_email&member_mobile=$member_mobile&comments=".stripslashes(urlencode($comments))."";
		$url = str_replace(" ", '%20', $smessage);
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$curl_scraped_page = curl_exec($ch);
	
		
		//enquiry send to enquiry management for intermind
		$message = ucfirst(stripslashes($member_name))."|$member_email|$member_mobile|".ucfirst(stripslashes($comments));
		$myip = $_SERVER['REMOTE_ADDR'];
		$datetime = date("Y-m-d H:i:s");
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL,"http://www.intermind.in/admin/fetch_enquiry.php");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=16&project_name=Finlinea Healthwits&enquiry_type=Contact_page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$server_output = curl_exec ($ch);
		curl_close ($ch);
		
		redirect($url_name[0]."?enquiry=succes");
	}
}

else if(isset($_REQUEST['action_buy']))
{
	if($_REQUEST['action_buy'] == "Submit")
	{
		$member_name 	= $db_object->sanatize_string($_REQUEST['member_name']);
		$member_email 	= $db_object->sanatize_string($_REQUEST['member_email']);
		$member_mobile 	= $db_object->sanatize_string($_REQUEST['member_mobile']);
		$member_phone 	= $db_object->sanatize_string($_REQUEST['member_phone']);
		$member_address = $db_object->sanatize_string($_REQUEST['member_address']);
		$member_message = $db_object->sanatize_string($_REQUEST['member_message']);

		$url_name = explode("?",$_SERVER['HTTP_REFERER']);
		
		$aloe_vera_name = "";
		$aloe_vera_price = "";
		$aloe_vera_qty = "";
		$aloevera_totalprice = "0";
		
		$karela_name = "";
		$karela_price = "";
		$karela_qty = "";
		$karela_totalprice = "0";
		
		$jamun_name = "";
		$jamun_price = "";
		$jamun_qty = "";
		$jamun_totalprice = "0";
		
		if(isset($_REQUEST['aloe_vera_name'])){
		$aloe_vera_name = $db_object->sanatize_string($_REQUEST['aloe_vera_name']);
		}
		if(isset($_REQUEST['aloe_vera_price'])){
			$aloe_vera_price = $db_object->sanatize_string($_REQUEST['aloe_vera_price']);
		}
		if(isset($_REQUEST['aloe_vera_qty'])){
			$aloe_vera_qty = $db_object->sanatize_string($_REQUEST['aloe_vera_qty']);
		}
		if(isset($_REQUEST['aloe_vera_totalprice'])){
			$aloevera_totalprice = $db_object->sanatize_string($_REQUEST['aloe_vera_totalprice']);
		}
		
		if(isset($_REQUEST['karela_name'])){
			$karela_name = $db_object->sanatize_string($_REQUEST['karela_name']);
		}
		if(isset($_REQUEST['karela_price'])){
			$karela_price = $db_object->sanatize_string($_REQUEST['karela_price']);
		}
		if(isset($_REQUEST['karela_qty'])){
			$karela_qty = $db_object->sanatize_string($_REQUEST['karela_qty']);
		}
		if(isset($_REQUEST['karela_totalprice'])){
			$karela_totalprice = $db_object->sanatize_string($_REQUEST['karela_totalprice']);
		}
		
		if(isset($_REQUEST['jamun_name'])){
			$jamun_name = $db_object->sanatize_string($_REQUEST['jamun_name']);
		}
		if(isset($_REQUEST['jamun_price'])){
			$jamun_price = $db_object->sanatize_string($_REQUEST['jamun_price']);
		}
		if(isset($_REQUEST['jamun_qty'])){
			$jamun_qty = $db_object->sanatize_string($_REQUEST['jamun_qty']);
		}
		if(isset($_REQUEST['jamun_totalprice'])){
			$jamun_totalprice = $db_object->sanatize_string($_REQUEST['jamun_totalprice']);
		}
		
		if($aloe_vera_price != "" && $aloe_vera_price != "275"){ echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die(); }
		if($karela_price != "" && $karela_price != "255"){ echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die(); }
		if($jamun_price != "" && $jamun_price != "255"){ echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die(); }
		
		if($aloe_vera_qty != ""){
			$checkaloevera_totalprice = $aloe_vera_price * $aloe_vera_qty;
			if($checkaloevera_totalprice != $aloevera_totalprice){
				echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die();
			}
		}
		
		if($karela_qty != ""){
			$checkkarela_totalprice = $karela_price * $karela_qty;
			if($checkkarela_totalprice != $karela_totalprice){
				echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die();
			}
		}
		
		
		if($jamun_qty != ""){
			$checkjamun_totalprice = $jamun_price * $jamun_qty;
			if($checkjamun_totalprice != $jamun_totalprice){
				echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die();
			}
		}
		
		$grand_total_val_check = $aloevera_totalprice + $karela_totalprice + $jamun_totalprice;
		$grand_total_val = $db_object->sanatize_string($_REQUEST['grand_total_val']);
		$discount_val = $db_object->sanatize_string($_REQUEST['discount_val']);
		$payable_amount = $db_object->sanatize_string($_REQUEST['payable_amount']);
		
		if($grand_total_val_check == $grand_total_val){ $grand_total_val = $grand_total_val; } else { echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die(); }
		
		$check_quantity = 0;
		if($aloe_vera_name != "" && $aloe_vera_price != "" && $aloe_vera_qty != "" && $aloevera_totalprice != "") { $check_quantity = $check_quantity + 1; }
		if($karela_name != "" && $karela_price != "" && $karela_qty != "" && $karela_totalprice != "") { $check_quantity = $check_quantity + 1; }
		if($jamun_name != "" && $jamun_price != "" && $jamun_qty != "" && $jamun_totalprice != "") { $check_quantity = $check_quantity + 1; }
		
		$check_discount = 0;
		if($check_quantity > 1){
			$check_discount = sprintf('%0.2f',$grand_total_val * ((10) / 100));
		}
		else
		{
			if($aloe_vera_qty > 1){ $check_discount = sprintf('%0.2f',$grand_total_val * ((10) / 100)); }
			else if($karela_qty > 1){ $check_discount = sprintf('%0.2f',$grand_total_val * ((10) / 100)); }
			else if($jamun_qty > 1){ $check_discount = sprintf('%0.2f',$grand_total_val * ((10) / 100)); }
			else { $check_discount = 0; }
		}
		
		if($check_discount == $discount_val){ $discount_val = $discount_val; } else { echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die(); }
		
		$check_payble_amount = sprintf('%0.2f',$grand_total_val_check - $check_discount); 
		
		if($check_payble_amount == $payable_amount ){ $payable_amount = $payable_amount; } else { echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die(); }
		
		$product_name = "";
		if($aloe_vera_name != "" && $aloe_vera_price != "" && $aloe_vera_qty != "" && $aloevera_totalprice != "") {
			$product_name .= $aloe_vera_name."|Rs.".$aloe_vera_price."|".$aloe_vera_qty."|Rs.".$aloevera_totalprice."|";
		}
		if($karela_name != "" && $karela_price != "" && $karela_qty != "" && $karela_totalprice != "") {
			$product_name .= $karela_name."|Rs.".$karela_price."|".$karela_qty."|Rs.".$karela_totalprice."|";
		}
		if($jamun_name != "" && $jamun_price != "" && $jamun_qty != "" && $jamun_totalprice != "") {
			$product_name .= $jamun_name."|Rs.".$jamun_price."|".$jamun_qty."|Rs.".$jamun_totalprice."|";
		}
		
		$product_name .= "Grand total : Rs.".$grand_total_val."|";
		if($discount_val != "" && $discount_val != "0"){
			$product_name .= "Discount price : Rs. ".$discount_val."|";
		}
		$product_name .= "Payable Amount : Rs. ".$payable_amount;
		//$file_obj = new file_manup("./");
		//$file_obj->extract_html("enquiry.html");
		//$body = $file_obj->replace_tags("{name}|{email}|{phone}|{product}|{address}","".ucfirst(stripslashes($member_name))."|$member_email|$member_mobile|$product_name|".ucfirst(stripslashes($member_address))."");
		
		/*$order_grid = "<table width='600' border='0' cellspacing='5' align='center' style='border:#999 solid 1px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;border-collapse: collapse; border-spacing: 0;'>
		<tr  style='background: #22a947;color: #fff;'>
			<td width='20%' align='left' style='padding: 15px;'><span style='font-weight:bold; width:300px'>Product Image</span></td>
			<td width='20%' align='left' style='padding: 15px;'><span style='font-weight:bold; width:300px'>Product Name</span></td>
			<td width='20%' align='left' style='padding: 15px;'><span style='font-weight:bold; width:300px'>Unit Price</span></td>
			<td width='20%' align='left' style='padding: 15px;'><span style='font-weight:bold; width:300px'>Product Quantity</span></td>
			<td width='20%' align='left' style='padding: 15px;'><span style='font-weight:bold; width:300px'>Total Price</span></td>
		</tr>";
		if($aloe_vera_name != "" && $aloe_vera_price != "" && $aloe_vera_qty != "" && $aloevera_totalprice != "") {
		$order_grid .= "<tr>
		   <td width='20%' align='left' style='padding: 15px;'><span style='width:300px'><a href='http://www.finlineahealthwits.com/products/aloe-vera-juice.html'><img src='http://www.finlineahealthwits.com/images/healthwits-aloe-vera-juice.png' style='height: 75px;'></a></span></td>
			<td width='20%' align='left' style='padding: 15px;'><span style='width:300px'>".ucwords($aloe_vera_name)."</span></td>
			<td width='20%' align='left' style='padding: 15px;'><span style='width:300px'>Rs. ".$aloe_vera_price."/-</span></td>
			<td width='20%' align='center' style='padding: 15px;'><span style='width:300px'>".$aloe_vera_qty."</span></td>
			<td width='20%' align='center' style='padding: 15px;'><span style='width:300px'>Rs. ".$aloevera_totalprice."/-</span></td>
		</tr>";
		}
		if($karela_name != "" && $karela_price != "" && $karela_qty != "" && $karela_totalprice != "") {
		$order_grid .= "<tr style='background-color: #eee;'>
		   <td width='20%' align='left' style='padding: 15px;'><span style='width:300px'><a href='http://www.finlineahealthwits.com/products/karela-juice.html'><img src='http://www.finlineahealthwits.com/images/healthwits-karela-juice.png' style='height: 75px;'></a></span></td>
			<td width='20%' align='left' style='padding: 15px;'><span style='width:300px'>".ucwords($karela_name)."</span></td>
			<td width='20%' align='left' style='padding: 15px;'><span style='width:300px'>Rs. ".$karela_price."/-</span></td>
			<td width='20%' align='center' style='padding: 15px;'><span style='width:300px'>".$karela_qty."</span></td>
			<td width='20%' align='center' style='padding: 15px;'><span style='width:300px'>Rs. ".$karela_totalprice."/-</span></td>
		</tr>";
		}
		if($jamun_name != "" && $jamun_price != "" && $jamun_qty != "" && $jamun_totalprice != "") {
		$order_grid .= "<tr>
		   <td width='20%' align='left' style='padding: 15px;'><span width:300px'><a href='http://www.finlineahealthwits.com/products/jamun-juice.html'><img src='http://www.finlineahealthwits.com/images/healthwits-jamun-juice.png' style='height: 75px;'></a></span></td>
			<td width='20%' align='left' style='padding: 15px;'><span width:300px'>".ucwords($jamun_name)."</span></td>
			<td width='20%' align='left' style='padding: 15px;'><span width:300px'>Rs. ".$jamun_price."/-</span></td>
			<td width='20%' align='center' style='padding: 15px;'><span width:300px'>".$jamun_qty."</span></td>
			<td width='20%' align='center' style='padding: 15px;'><span width:300px'>Rs. ".$jamun_totalprice."/-</span></td>
		</tr>";
		}
		$order_grid .= "<tr style='background-color: #eee;border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;'>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left' style='padding: 10px 0;'><span width:300px'>Grand Total</span></td>
			<td width='20%' align='center' style='padding: 10px 0;'><span width:300px'>Rs. ".$grand_total_val."/-</span></td>
		</tr>";
		if($discount_val != "" && $discount_val != "0"){
		$order_grid .= "<tr style='background-color: #eee;'>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left' style='padding: 10px 0;'><span width:300px'>Discount (10%)</span></td>
			<td width='20%' align='center' style='padding: 10px 0;'><span width:300px'>Rs. ".$discount_val."/-</span></td>
		</tr>";
		}
		$order_grid .= "<tr style='background-color: #eee;border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;'>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left'><span width:300px'>&nbsp;</span></td>
			<td width='20%' align='left' style='padding: 10px 0;'><span width:300px'>Payable Amount</span></td>
			<td width='20%' align='center' style='padding: 10px 0;'><span width:300px'>Rs. ".$payable_amount."/-</span></td>
		</tr></table>";
				
		$body = "<table width='500' border='0' cellspacing='5' align='center' style='border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;'>
			  <tr>
				<td colspan='3'>Dear Admin,<br><br/>
				  You have a new enquiry from ".ucwords($member_name).", following are the enquiry details</td>
			  </tr>
			  <tr>
				<td colspan='2'>&nbsp;</td>
				<td width='75%'>&nbsp;</td>
			  </tr>
			  <tr>
				<td width='21%' align='left'><span style='font-weight:bold; width:300px'>Full Name</span></td>
				<td width='4%' align='left'><span style='font-weight:bold; width:300px'>:</span></td>
				<td align='left'>".ucwords($member_name)."</td>
			  </tr>
			  <tr>
				<td align='left'><strong>Email Address </strong></td>
				<td align='left'><strong>:</strong></td>
				<td align='left'>$member_email</td>
			  </tr>
			  <tr>
				<td align='left'><strong>Mobile Number</strong></td>
				<td align='left'><strong> :</strong></td>
				<td align='left'>$member_mobile</td>
			  </tr>";
			  if($member_phone != ""){
				$body .= "<tr>
				<td align='left'><strong>Phone Number</strong></td>
				<td align='left'><strong> :</strong></td>
				<td align='left'>$member_phone</td>
			  </tr>";
			  }
			  $body .= "<tr>
				<td align='left' style='vertical-align:top'><strong>Address </strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($member_address))."</td>
			  </tr>";
			  if($member_message != ""){
				$body .= "<tr>
				<td align='left' style='vertical-align:top'><strong>Message </strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($member_message))."</td>
			  </tr>";
			  }
			  $body .= "<tr>
				<td colspan='2'>&nbsp;</td>
				<td width='75%'>&nbsp;</td>
			  </tr>
			  <tr><td colspan='3'>".$order_grid."</td>
			  </tr>
			  <tr>
				<td colspan='2'>&nbsp;</td>
				<td width='75%'>&nbsp;</td>
			  </tr>
			  <tr>
				<td colspan='3'>Kindly contact ".ucwords($member_name)." @ $member_mobile at the earliest.<br/><br/>From,<br/>Finlinea Healthwits
				</td>
			  </tr>
			</table>";*/
			
		/*$subject  = "You have a new enquiry for ".$product_name." from ".ucwords($member_name);
		$headers = "MIME-Version: 1.0"."\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
		$headers .= 'From: Finlinea Healthwits <info@intermind.in>'."\r\n";
		$headers .= "BCC: rajendra@kalptech.com, vighnesh@intermind.in\r\n";
		$headers .= "CC: info@intermind.in, info@kalptech.com\r\n";
		$to = "customercare@finlineahealthwits.com";
		
		mail($to, $subject, $body, $headers);*/
		if($grand_total_val_check == $grand_total_val && $check_discount == $discount_val && $check_payble_amount == $payable_amount){
			$smessage = "http://www.intermind.in/clients/finlinea/html/inc/curl_mail.php?action=sendmail_enquiry&member_name=".urlencode($member_name)."&member_email=$member_email&member_mobile=$member_mobile&member_phone=$member_phone&member_address=".urlencode($member_address)."&member_message=".urlencode($member_message)."&aloe_vera_name=$aloe_vera_name&aloe_vera_price=$aloe_vera_price&aloe_vera_qty=$aloe_vera_qty&aloe_vera_totalprice=$aloevera_totalprice&karela_name=$karela_name&karela_price=$karela_price&karela_qty=$karela_qty&karela_totalprice=$karela_totalprice&jamun_name=$jamun_name&jamun_price=$jamun_price&jamun_qty=$jamun_qty&jamun_totalprice=$jamun_totalprice&grand_total_val=$grand_total_val&discount_val=$discount_val&payable_amount=$payable_amount";
			$url = str_replace(" ", '%20', $smessage);
			$ch = curl_init($url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			$curl_scraped_page = curl_exec($ch);
		
			//enquiry send to enquiry management for intermind
			$message = ucfirst(stripslashes($member_name))."|$member_email|$member_mobile|$product_name|".ucfirst(stripslashes($member_address));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"http://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=16&project_name=Finlinea Healthwits&enquiry_type=Enquiry_page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			$server_output = curl_exec ($ch);
			curl_close ($ch);
		}
		else
		{
			echo "<script>window.location='".$url_name[0]."?error=1';</script>"; die();
		}
		
		redirect("../thank-you.html");
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