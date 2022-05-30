<?php
	include("user_global.php"); 
	$fullname = "";
	$email	  = "";
	$phone    = "";
 	$massege  = "";
	$subject  = "";
	$mail     = "";
	
	if(isset($_REQUEST['action']))
	{
		switch($_REQUEST['action'])
		{
			case"Submit";
			$fullname		=	$db_object->sanatize_string($_REQUEST["fullname"]);
			$email			=	$db_object->sanatize_string($_REQUEST["email"]);
			$phone			=	$db_object->sanatize_string($_REQUEST["phone"]);
			 
			$massege		=	$db_object->sanatize_string($_REQUEST["massege"]);
		 	
			
		$mail= "<table class=\"mail-page1\"  width=\"600\" border=\"0\" align=\"center\" style=\" font-size:14px; color:#000;\">
			<tr>    	
				<td style=\" padding:5px 10px;border:1px solid #ccc;\">
					<img src=\"http://www.kalptech.com/clients/party-jungle/images/logo.png\" />
				</td>		
			</tr>
			<tr>
				<td colspan=\"2\" >&nbsp;</td>			
			</tr> 
		</table>
		<table class=\"mail-page\" width=\"600\" border=\"0\" align=\"center\" style=\" font-size:14px; color:#000;\"> 
			<tr>
				<td colspan=\"2\" style=\"background-color:#666;color:#FFF;\" align=\"center\"><strong>WEBSITE CONTACT DATA</strong></td>			
			</tr>
			<tr>
				<td colspan=\"2\" >&nbsp;</td>			
			</tr> 
			<tr>
				<td style=\" padding:5px 10px; border:1px solid #ccc;\"><strong>Name:</strong></td>
				<td style=\"border:1px solid #ccc;\">".ucwords($fullname)."</td>
			</tr>
			<tr>
				<td style=\" padding:5px 10px;border:1px solid #ccc;\"><strong>Email:</strong></td>
				<td style=\"border:1px solid #ccc;\">".$email."</td>
			</tr>
			<tr>
				<td style=\" padding:5px 10px ;border:1px solid #ccc;\"><strong>Phone:</strong></td>
				<td style=\"border:1px solid #ccc;\">".$phone."</td>
			</tr>
			<tr>
			<td style=\" padding:5px 10px;border:1px solid #ccc;\"><strong>Message:</strong></td>
				<td style=\"border:1px solid #ccc;\">".ucfirst($massege)."</td>
			</tr> 
			<tr>
				<td colspan=\"2\" >&nbsp;</td>			
			</tr>  
			<tr>
				<td colspan=\"2\" style=\"background-color:#666;color:#FFF;\" align=\"center\"><strong>--This e-mail was sent from (<a href=\"http://www.thepartyjungle.com/\" style=\"text-decoration:none;color:#FFF;\">http://www.thepartyjungle.com/</a>)</strong></td>			
			</tr>   
		</table>";
		
		
		$from = "webinquiry@thepartyjungle.com";
		$reply = $email;
		$to = "funkylinda@verizon.net,kevin.borgersen@gmail.com";
		//$to = "om.maurya0207@gmail.com,rajendra@kalptech.com";	
		
		send_email($to,$from,$reply,"Contact Email",$mail);
		
		echo "<script type='text/javascript'>window.location.href = 'contact-thankyou.html';</script>";
        exit();
		
		//redirect("contact-thankyou.html");
		
		//header("Location:contact-thankyou.html");
		break;
		}
	}
?>