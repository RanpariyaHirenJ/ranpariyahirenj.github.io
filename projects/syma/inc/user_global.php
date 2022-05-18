<?php 


date_default_timezone_set('Asia/Kolkata');



//$smtp_mailer = new smtp_mailer("webmail.nelito.com","enquiry@nelito.com","nelito12#$");

function redirect($url)
{
	header("Location: $url");
}

//This method is used to snatize a string for safe database entry
function sanatize_string($value)
{		
	$value = htmlentities(addslashes(strip_tags(trim($value))));		
	return $value;
}

function sanatize_value($value)
	{
		$permitted = " 1234567890+";				
		
		$fdata = "";				
		for($i=0; $i < strlen($value);$i++)
		{			
			$char = substr($value,$i,1);						
			if(strpos($permitted,$char))
			{
				$fdata .= $char;												
			}						
		}
		
		if(strlen(trim($fdata)) <= 0)
		{					
			$fdata = "0";
		}
				
		return $fdata;
	}

function gcaptecha($recaptcha){

   $ch = curl_init();
   curl_setopt_array($ch, array(
        CURLOPT_URL => 'https://www.google.com/recaptcha/api/siteverify',
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => array(
            'secret' => '6LerNwYaAAAAADMr6Ii_J47VZ9UDI8-QWQ1bvb3E',
            'response' => $recaptcha,
            'remoteip' => $_SERVER['REMOTE_ADDR']
        ),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYHOST       => 0,
        CURLOPT_SSL_VERIFYPEER  => 0

    ));

  $output = curl_exec($ch);
    curl_close($ch);

  $captcha_success=json_decode($output);
  
  if ($captcha_success->success==false) {
    return 0;
  } else if ($captcha_success->success==true) {
    return 1;
  }
}
?>
