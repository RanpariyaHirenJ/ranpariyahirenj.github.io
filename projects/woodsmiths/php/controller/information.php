<?php 

class Information extends Masters
{

	private $error = array();


	public function index($information_id){

		$information_id = $this->xss_clean($information_id); 

		if($information_id > 0){

			$this->getCommonDetails();

			$this->data['info'] = $this->where('information_id',$information_id)->getOne('information');
				
			view('information',$this->data);

		}
		
		
	}

	public function sendEnquiry(){

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);

			$body = '
	         <table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
	          <tr><td align="left" colspan="3"><img src="'.LOGO.'" style="margin-top:0px;padding-left:0px;    width: 21%;"></td></tr>
	          <tr><td align="center" colspan="3"><h2>Enquiry</h2></td></tr>
	          <tr>
	            <td colspan="3">Dear Admin,<br><br/>
	              You have a new enquiry from '.$form_data['member_name'].', following are the enquiry details</td>
	          </tr>
	          <tr>
	            <td colspan="2">&nbsp;</td>
	            <td width="75%">&nbsp;</td>
	          </tr>
	          <tr>
	            <td width="21%" align="left"><span style="font-weight:bold; width:300px">Full Name </span></td>
	            <td width="4%" align="left"><span style="font-weight:bold; width:300px">:</span></td>
	            <td align="left">'.$form_data['member_name'].'</td>
	          </tr>
	          <tr>
	            <td align="left"><strong>Email Address </strong></td>
	            <td align="left"><strong>:</strong></td>
	            <td align="left">'.$form_data['member_email'].'</td>
	          </tr>
	          <tr>
	            <td align="left"><strong>Contact Number </strong></td>
	            <td align="left"><strong> :</strong></td>
	            <td align="left">'.$form_data['member_phone'].'</td>
	          </tr>
	           <tr>
	            <td align="left"><strong>Interested in </strong></td>
	            <td align="left"><strong> :</strong></td>
	            <td align="left">'.$form_data['industry'].'</td>
	          </tr>
	          <tr>
	            <td align="left" style="vertical-align:top"><strong>Message </strong></td>
	            <td align="left" style="vertical-align:top"><strong>:</strong></td>
	            <td align="left">'.$form_data['message'].'</td>
	          </tr>
	          <tr>
	          	<td colspan="2">&nbsp;</td>
	            <td width="75%"">&nbsp;</td>
	          </tr>
	          <tr>
	            <td colspan="3">Kindly contact '.$form_data['member_name'].' @ '.$form_data['member_phone'].' at the earliest.<br/><br/>From,<br/>The Woodsmiths Web Team
	            </td>
	          </tr>
	        </table>
	        ';

		 	$mail['subject'] = "You have a new enquiry from ".ucwords($form_data['member_name']);
			$mail['message'] = $body;
			$mail['to'] = $form_data['member_email'];

	        $this->sendMail($mail);

	        sleep(2);

	        $cus_body = '<table width="600" border="0" cellspacing="5" align="center" style="border:#999 solid 5px;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#333;padding:10px;">
			        <tr><td align="left" colspan="3" ><img src="'.LOGO.'" style="margin-top:0px;padding-left:0px;    width: 21%;"></td></tr>
			        <tr><td align="center" colspan="3">&nbsp;</td></tr>
			        <tr>
			          <td colspan=\'3\'>Dear '.$form_data['member_name'].',<br><br/>
			            <h2>Thank you for contacting us.</h2></td>
			        </tr>

			        <tr>
			          <td colspan=\'3\'>We have received your enquiry and will respond to you soon.</td>
			        </tr>
			          <tr>
			          <td colspan=\'3\'>&nbsp;</td>
			        </tr>
			        <tr>
			          <td colspan=\'3\'>Warm regards,<br/>The Woodsmiths Web Team
			          </td>
			        </tr>
			      </table>';

			$mail['subject'] = "Thank you for contacting us - Woodsmiths";
			$mail['message'] = $cus_body;
			$mail['to'] = $form_data['member_email'];

			$this->sendMail($mail);

			  // enquiry send to enquiry management for intermind
		      $message = ucwords(stripslashes($form_data['member_name']))."|".$form_data['member_email']."|".$form_data['member_phone']."|".$form_data['message']."|Enquiry";
		      $myip = $_SERVER['REMOTE_ADDR'];
		      $datetime = date("Y-m-d H:i:s");
		      $ch = curl_init();
		      curl_setopt($ch, CURLOPT_URL,"https://www.intermind.in/admin/fetch_enquiry.php");
		      curl_setopt($ch, CURLOPT_POST, 1);
		      curl_setopt($ch, CURLOPT_POSTFIELDS, "user_id=50&project_name=woodsmiths&enquiry_type=Send Enquiry&enquiry_details=$message&datetime=$datetime&cust_ip=$myip");
		      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		      $server_output = curl_exec ($ch);
		      curl_close ($ch);

			echo 200;

		}

	}


}