<?php 
include("user_global.php");

if(isset($_POST['action'])){
	if($_POST['action'] == "APPLY NOW"){
		$cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1){
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			redirect($url_name[0]."?error");
		}
		else {
			$member_name = $db_object->sanatize_string($_POST['member_name']);
			$apply_for 	= $db_object->sanatize_string($_POST['apply_for']);
			$member_email = $db_object->sanatize_string($_POST['member_email']);
			$member_phone = $db_object->sanatize_string($_POST['member_phone']);
			$location 	= $db_object->sanatize_string($_POST['location']);
			$technical_skills 	= $db_object->sanatize_string($_POST['technical_skills']);
			$work_experience 	= $db_object->sanatize_string($_POST['work_experience']);
			$qualification  = $db_object->sanatize_string($_POST['qualification']);
			$experience 	= $db_object->sanatize_string($_POST['experience']);
			
			$url_name = explode("?",$_SERVER['HTTP_REFERER']);
			
			$file_obj = new file_manup("../templates/");
			$file_obj->extract_html("career.html");
			$body = $file_obj->replace_tags("{name}|{apply_for}|{email}|{phone}|{location}|{technical_skill}|{work_experience}|{qualification}|{experience}","".ucwords(stripslashes($member_name))."|".ucfirst(stripslashes($apply_for))."|".ucfirst(stripslashes($email))."|".ucfirst(stripslashes($phone))."|".ucfirst(stripslashes($location))."|".ucfirst(stripslashes($technical_skills))."|".ucfirst(stripslashes($work_experience))."|".stripslashes($qualification)."|".stripslashes($experience)."");
			
			$subject  = "You have a new job application from ".ucwords($member_name);
		
			if($_FILES["attached_resume"]['name'] != ""){
				$semi_rand = md5(time()); 
				$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
				$from = "Speciality Restaurants Ltd <info@speciality.co.in>";
				$headers = "From: $from";
				//$headers .= "\nBCC: info@intermind.in, ritesh.kalptech@gmail.com";
				$headers .= "\nCC: info@intermind.in, hiren@intermind.in";
				$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
				$message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/html; charset=UTF-8\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $body . "\n\n"; 
				$message .= "--{$mime_boundary}\n";
			
				$filename = "Attachment".date("dmYHis").rand(0,50);
				$file_obj = new file_manup("../uploads/");
				$filename = $file_obj->upload_file($_FILES["attached_resume"]['name'],$_FILES["attached_resume"]['tmp_name'],$filename,"jpeg,jpg,png,doc,docx,xls,xlsx,ppt,pptx,pdf",$_FILES["attached_resume"]['type']);
				
				$file_name = "../uploads/".$filename;
				$file = fopen($file_name,"rb");
				$data = fread($file,filesize($file_name));
				fclose($file);
				$data = chunk_split(base64_encode($data));
				$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"".$filename."\"\n" . 
				"Content-Disposition: attachment;\n" . " filename=\"$filename\"\n" . 
				"Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
				$message .= "--{$mime_boundary}--\n";
			
				$to = "speciality.careers@gmail.com";
				//$to = "careers@speciality.co.in";
				$ok = @mail($to, $subject, $message, $headers, "-f " . $from);
			}
			else
			{
				$to = "speciality.careers@gmail.com";
				//$to = "careers@speciality.co.in";
				send_email($to,'Speciality Restaurants Ltd., info@speciality.co.in',$subject,$body);
			}
			
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
			
			redirect($url_name[0]."?career=succes");
		}
	}
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-143009552-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-143009552-1');
</script>
</head>
<body>
</body>
</html>