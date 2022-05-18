<?php 
include("user_global.php");

if(isset($_POST['action'])){
	if($_POST['action'] == "Submit"){
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1){
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else {
			//Company Details
			$registered_company_name = $db_object->sanatize_string($_POST['registered_company_name']);
			$director_name 	= $db_object->sanatize_string($_POST['director_name']);
			$company_legal_status 	= $db_object->sanatize_string($_POST['company_legal_status']);
			$establishment_year 	= $db_object->sanatize_string($_POST['establishment_year']);
			$bussiness_type  = $db_object->sanatize_string($_POST['bussiness_type']);
			
			//HO / Registered Office
			$contact_person 	= $db_object->sanatize_string($_POST['contact_person']);
			$address 	= $db_object->sanatize_string($_POST['address']);
			$phone_number 	= $db_object->sanatize_string($_POST['phone_number']);
			$mobile_number 	= $db_object->sanatize_string($_POST['mobile_number']);
			$fax_number 	= $db_object->sanatize_string($_POST['fax_number']);
			$email_id 	= $db_object->sanatize_string($_POST['email_id']);
			$product_manufactured 	= $db_object->sanatize_string($_POST['product_manufactured']);
			$annual_turnover 	= $db_object->sanatize_string($_POST['annual_turnover']);
			$tax_registration_details  = $db_object->sanatize_string($_POST['tax_registration_details']);
			$pre_fin_year 	= $db_object->sanatize_string($_POST['pre_fin_year']);
			$last_fin_year 	= $db_object->sanatize_string($_POST['last_fin_year']);
			$current_fin_year 	= $db_object->sanatize_string($_POST['current_fin_year']);
			
			//Financial Position
			$bankers_name 	= $db_object->sanatize_string($_POST['bankers_name']);
			$bankers_address 	= $db_object->sanatize_string($_POST['bankers_address']);
			$banker_account_number 	= $db_object->sanatize_string($_POST['banker_account_number']);
			$neft_code 	= $db_object->sanatize_string($_POST['neft_code']);
			$ifsc_code 	= $db_object->sanatize_string($_POST['ifsc_code']);
			
			//Income tax Details
			$pan_number 	= $db_object->sanatize_string($_POST['pan_number']);
			$last_assessment_order 	= $db_object->sanatize_string($_POST['last_assessment_order']);
			$gst_registration_no 	= $db_object->sanatize_string($_POST['gst_registration_no']);
			$hsn_sac_code 	= $db_object->sanatize_string($_POST['hsn_sac_code']);
			$esic_number 	= $db_object->sanatize_string($_POST['esic_number']);
			$pf_number 	= $db_object->sanatize_string($_POST['pf_number']);
			// For File $income_tax_file 	= $db_object->sanatize_string($_POST['income_tax_file']);
			
			//Associate Companies
			$assoc_company_name 	= $db_object->sanatize_string($_POST['assoc_company_name']);
			$assoc_address 	= $db_object->sanatize_string($_POST['assoc_address']);
			
			$assoc_contact_person 	= $db_object->sanatize_string($_POST['assoc_contact_person']);
			$assoc_telephone_number 	= $db_object->sanatize_string($_POST['assoc_telephone_number']);
			$assoc_fax_number 	= $db_object->sanatize_string($_POST['assoc_fax_number']);
			$assoc_email 	= $db_object->sanatize_string($_POST['assoc_email']);
			// for File $associative_companies 	= $db_object->sanatize_string($_POST['associative_companies']);
			
			// PAN india presence
			$pan_india_presence 	= $db_object->sanatize_string($_POST['pan_india_presence']);
			// for file $pan_card_scan_copy	  = $db_object->sanatize_string($_POST['pan_card_scan_copy']);
			// for file $gstin_copy	  = $db_object->sanatize_string($_POST['gstin_copy']);
			
			$last_3_years_turnover = "";
			if($pre_fin_year != ""){ $last_3_years_turnover .= "Pre. Fin Year : ".$pre_fin_year; }
			if($last_fin_year != ""){ $last_3_years_turnover .= ", Last Fin Year : ".$last_fin_year; }
			if($current_fin_year != ""){ $last_3_years_turnover .= ", Current Fin Year : ".$current_fin_year; } 
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$body = "<table width='600' border='0' cellspacing='5' align='center' style='border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;'>
			  <tr><td align='left' colspan='3'><img src='http://staging.intermind.in/speciality/html/images/logo.png' style='margin-top:0px;width:25%;padding-left:0px;'></td></tr>
			  <tr><td colspan='3' align='center'>&nbsp;</td></tr>
			  <tr><td colspan='3'>Dear Administrator,<br>You have a new vender registration request, following are the details.</td></tr>
			  <tr><td colspan='2'>&nbsp;</td><td width='73%'>&nbsp;</td></tr>
			  <tr><td colspan='3'><h3 style='color:#db9e28'>Company Details</h3></td></tr>
			  <tr>
				<td width='23%' align='left'><span style='font-weight:bold; width:300px'>Registerd Company Name</span></td>
				<td width='4%' align='left'><span style='font-weight:bold; width:300px'>:</span></td>
				<td align='left'>".ucfirst(stripslashes($registered_company_name))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%'><strong>Directors / Partners Name</strong></td>
				<td align='left'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($director_name))."</td>
			  </tr>
			  <tr>
				<td width='23%' align='left'><span style='font-weight:bold; width:300px'>Legal Status of Company</span></td>
				<td width='4%' align='left'><span style='font-weight:bold; width:300px'>:</span></td>
				<td align='left'>".$company_legal_status."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%'><strong>Establishment Year</strong></td>
				<td align='left'><strong>:</strong></td>
				<td align='left'>".$establishment_year."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%'><strong>Business Type</strong></td>
				<td align='left'><strong> :</strong></td>
				<td align='left'>".$bussiness_type."</td>
			  </tr>
			  <tr><td colspan='3'><h3 style='color:#db9e28'>HO / Registered Office Details</h3></td></tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Contact Person</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($contact_person))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Address</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($address))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Phone No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$phone_number."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Mobile No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$mobile_number."</td>
			  </tr>";
			  if($fax_number != ""){
			  $body .= "<tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Fax No</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$fax_number."</td>
			  </tr>";
			  }
			  $body .= "<tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Email ID</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$email_id."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Products manufactured</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucwords(stripslashes($product_manufactured))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Annual Turnover</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$annual_turnover."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Tax Registration Details</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$tax_registration_details."</td>
			  </tr>";
			  if($pre_fin_year != "" || $last_fin_year != "" || $current_fin_year != ""){
				  $body .= "<tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Last 3 Year Turnover</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$last_3_years_turnover."</td>
			  	</tr>";
			  }
			  if($bankers_name != "" || $bankers_address != "" || $banker_account_number != "" || $neft_code != "" || $ifsc_code != ""){
			  $body .= "<tr><td colspan='3'><h3 style='color:#db9e28'>Financial Position</h3></td></tr>
			  <tr>
				<td width='23%' align='left'><span style='font-weight:bold; width:300px'>Bankers Name</span></td>
				<td width='4%' align='left'><span style='font-weight:bold; width:300px'>:</span></td>
				<td align='left'>".ucwords(stripslashes($bankers_name))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%'><strong>Bankers Address</strong></td>
				<td align='left'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($bankers_address))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%'><strong>Bank A/C No</strong></td>
				<td align='left'><strong> :</strong></td>
				<td align='left'>".$banker_account_number."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>NEFT Code</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$neft_code."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>IFCS Code</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$ifsc_code."</td>
			  </tr>";
			  }
			  if($pan_number != "" || $last_assessment_order != "" || $gst_registration_no != "" || $hsn_sac_code != "" || $esic_number != "" || $pf_number != ""){
			  $body .= "<tr><td colspan='3'><h3 style='color:#db9e28'>Income tax Details</h3></td></tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>PAN No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$pan_number."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Last Assessment Order</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$last_assessment_order."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>GST Registration No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$gst_registration_no."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>HSN/ SAC Code</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$hsn_sac_code."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>ESIC No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$esic_number."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>PF No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$pf_number."</td>
			  </tr>";
			  }
			  if($assoc_company_name != "" || $assoc_address != "" || $assoc_contact_person != "" || $assoc_telephone_number != "" || $assoc_fax_number != "" || $assoc_email != ""){
			  $body .= "<tr><td colspan='3'><h3 style='color:#db9e28'>Associate Companies Details</h3></td></tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Name</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucwords(stripslashes($assoc_company_name))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Address</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucfirst(stripslashes($assoc_address))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Contact Person</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".ucwords(stripslashes($assoc_contact_person))."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Telephone No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$assoc_telephone_number."</td>
			  </tr>";
			  if($assoc_fax_number != ""){
			  $body .= "<tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Fax No.</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$assoc_fax_number."</td>
			  </tr>";
			  }
			  $body .= "<tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>Email ID</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$assoc_email."</td>
			  </tr>";
			  }
			  $body .= "<tr><td colspan='3' align='center'>&nbsp;</td></tr><tr>
				<td align='left' width='35%' style='vertical-align:top'><strong>PAN India Presence</strong></td>
				<td align='left' style='vertical-align:top'><strong>:</strong></td>
				<td align='left'>".$pan_india_presence."</td>
			  </tr>
			  <tr>
				<td align='left' width='35%' style='vertical-align:top'>&nbsp;</td>
				<td align='left' style='vertical-align:top'>&nbsp;</td>
				<td align='left'>&nbsp;</td>
			  </tr>
			  <tr>
				<td colspan='3'>From,<br/>Speciality Restaurants Ltd.
				</td>
			  </tr>
			</table>";
			
			$semi_rand = md5(time()); 
			$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
			
			if($_FILES["income_tax_file"]['name'] != "" || $_FILES["associative_companies"]['name'] != "" || $_FILES["pan_card_scan_copy"]['name'] != "" || $_FILES["gstin_copy"]['name'] != ""){
				
				$from = "Speciality Restaurants Ltd <info@speciality.co.in>";
				$headers = "From: $from";
				$headers .= "\nBCC: info@intermind.in, hiren@intermind.in";
				//$headers .= "\nBCC: ritesh.kalptech@gmail.com";
				$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
				
				$message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/html; charset=UTF-8\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $body . "\n\n"; 
				$message .= "--{$mime_boundary}\n";
				
				
				if($_FILES["income_tax_file"]['name'] != ""){
					
					$filename = "Income_Tax_".date("dmYHis").rand(0,50);
					$file_obj = new file_manup("../uploads/");
					$filename = $file_obj->upload_file($_FILES["income_tax_file"]['name'],$_FILES["income_tax_file"]['tmp_name'],$filename,"jpeg,jpg,png,doc,docx,xls,xlsx,ppt,pptx,pdf",$_FILES["income_tax_file"]['type']);
					
					$file_name = "../uploads/".$filename;
					$file = fopen($file_name,"rb");
					$data = fread($file,filesize($file_name));
					fclose($file);
					$data = chunk_split(base64_encode($data));
					$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"".$filename."\"\n" . 
					"Content-Disposition: attachment;\n" . " filename=\"$filename\"\n" . 
					"Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
					$message .= "--{$mime_boundary}--\n";
				}
				
				if($_FILES["associative_companies"]['name'] != ""){
				
					$filename1 = "Associative_Companies_".date("dmYHis").rand(0,50);
					$file_obj = new file_manup("../uploads/");
					$filename1 = $file_obj->upload_file($_FILES["associative_companies"]['name'],$_FILES["associative_companies"]['tmp_name'],$filename1,"jpeg,jpg,png,doc,docx,xls,xlsx,ppt,pptx,pdf",$_FILES["associative_companies"]['type']);
					
					$file_name1 = "../uploads/".$filename1;
					$file1 = fopen($file_name1,"rb");
					$data1 = fread($file1,filesize($file_name1));
					fclose($file1);
					$data1 = chunk_split(base64_encode($data1));
					$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"".$filename1."\"\n" . 
					"Content-Disposition: attachment;\n" . " filename=\"$filename1\"\n" . 
					"Content-Transfer-Encoding: base64\n\n" . $data1 . "\n\n";
					$message .= "--{$mime_boundary}--\n";
				}
				
				if($_FILES["pan_card_scan_copy"]['name'] != ""){
				
					$filename2 = "PAN_CARD_".date("dmYHis").rand(0,50);
					$file_obj = new file_manup("../uploads/");
					$filename2 = $file_obj->upload_file($_FILES["pan_card_scan_copy"]['name'],$_FILES["pan_card_scan_copy"]['tmp_name'],$filename2,"jpeg,jpg,png,doc,docx,xls,xlsx,ppt,pptx,pdf",$_FILES["pan_card_scan_copy"]['type']);
					
					$file_name2 = "../uploads/".$filename2;
					$file2 = fopen($file_name2,"rb");
					$data2 = fread($file2,filesize($file_name2));
					fclose($file2);
					$data2 = chunk_split(base64_encode($data2));
					$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"".$filename2."\"\n" . 
					"Content-Disposition: attachment;\n" . " filename=\"$filename2\"\n" . 
					"Content-Transfer-Encoding: base64\n\n" . $data2 . "\n\n";
					$message .= "--{$mime_boundary}--\n";
				}
				
				if($_FILES["gstin_copy"]['name'] != ""){
				    
					$filename3 = "GSTIN_".date("dmYHis").rand(0,50);
					$file_obj = new file_manup("../uploads/");
					$filename3 = $file_obj->upload_file($_FILES["gstin_copy"]['name'],$_FILES["gstin_copy"]['tmp_name'],$filename3,"jpeg,jpg,png,doc,docx,xls,xlsx,ppt,pptx,pdf",$_FILES["gstin_copy"]['type']);
					
					$file_name3 = "../uploads/".$filename3;
					$file3 = fopen($file_name3,"rb");
					$data3 = fread($file3,filesize($file_name3));
					fclose($file3);
					$data3 = chunk_split(base64_encode($data3));
					$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"".$filename3."\"\n" . 
					"Content-Disposition: attachment;\n" . " filename=\"$filename3\"\n" . 
					"Content-Transfer-Encoding: base64\n\n" . $data3 . "\n\n";
					$message .= "--{$mime_boundary}--\n";
				}
				
				$subject  = "You have new vender registration request";
				$to = "hiren@intermind.in";
				//$to = "robin@speciality.co.in";
				$ok = @mail($to, $subject, $message, $headers, "-f " . $from);
			}
			else {
				$subject  = "You have new vender registration request";
				$to = "hiren@intermind.in";
				//$to = "robin@speciality.co.in";
				send_email($to,'Speciality Restaurants Ltd.,info@speciality.co.in',$subject,$body);
			}
			
			//send_email($to,'Speciality Restaurants Ltd.,info@intermind.in',$subject,$body);
			/*$file_obj1 = new file_manup("./");
			$file_obj1->extract_html("career-customer.html");
			$body_cust = $file_obj1->replace_tags("{name}","".ucwords(stripslashes($member_name))."");
			
			$subject_cust  = "Your Job application has been submitted successfully.";
			$headers = "MIME-Version: 1.0"."\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
			$headers .= 'From: Dominion <info@intermind.in>'."\r\n";
			$headers .= "BCC: vighnesh29114@gmail.com, ritesh.kalptech@gmail.com\r\n";
			$to_cust = $member_email;
			
			mail($to_cust, $subject_cust, $body_cust, $headers);*/
			
			/*//enquiry send to enquiry management for intermind
			$message = ucwords(stripslashes($member_name))."|$member_email|$member_phone|".ucfirst(stripslashes($pagename_leadfrom))."|".ucfirst(stripslashes($message));
			$myip = $_SERVER['REMOTE_ADDR'];
			$datetime = date("Y-m-d H:i:s");
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=24&project_name=VSynergize&enquiry_type=Contact page&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			$server_output = curl_exec ($ch);
			curl_close ($ch);*/
			
			redirect($url_name[0]."?vendor=succes");
		}
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