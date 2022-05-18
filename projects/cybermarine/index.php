<?php 
	 $url="https://freegeoip.live/json/".$_SERVER['REMOTE_ADDR'];
	 $url = str_replace(" ", '%20', $url);
	 $ch = curl_init($url);
	 curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
	 curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	 $curl_scraped_page = curl_exec($ch);
	 $arrayOfEmails=json_decode($curl_scraped_page, 1 );

	 if($arrayOfEmails['country_code']=="AE" || $arrayOfEmails['country_code']=="TR" || $arrayOfEmails['country_code']=="AL" || $arrayOfEmails['country_code']=="AD" || $arrayOfEmails['country_code']=="AM" || $arrayOfEmails['country_code']=="AT" || $arrayOfEmails['country_code']=="AZ" || $arrayOfEmails['country_code']=="BY" || $arrayOfEmails['country_code']=="BE" || $arrayOfEmails['country_code']=="BA" || $arrayOfEmails['country_code']=="BG" || $arrayOfEmails['country_code']=="HR" || $arrayOfEmails['country_code']=="CY" || $arrayOfEmails['country_code']=="CZ" || $arrayOfEmails['country_code']=="DK" || $arrayOfEmails['country_code']=="EE" || $arrayOfEmails['country_code']=="FI" || $arrayOfEmails['country_code']=="FR" || $arrayOfEmails['country_code']=="GE" || $arrayOfEmails['country_code']=="DE" || $arrayOfEmails['country_code']=="GR" || $arrayOfEmails['country_code']=="HU" || $arrayOfEmails['country_code']=="IS" || $arrayOfEmails['country_code']=="IE" || $arrayOfEmails['country_code']=="IT" || $arrayOfEmails['country_code']=="KZ" || $arrayOfEmails['country_code']=="XK" || $arrayOfEmails['country_code']=="LV" || $arrayOfEmails['country_code']=="LI" || $arrayOfEmails['country_code']=="LT" || $arrayOfEmails['country_code']=="LU" || $arrayOfEmails['country_code']=="MK" || $arrayOfEmails['country_code']=="MT" || $arrayOfEmails['country_code']=="MD" || $arrayOfEmails['country_code']=="MC" || $arrayOfEmails['country_code']=="ME" || $arrayOfEmails['country_code']=="NL" || $arrayOfEmails['country_code']=="NO" || $arrayOfEmails['country_code']=="PL" || $arrayOfEmails['country_code']=="PT" || $arrayOfEmails['country_code']=="RO" || $arrayOfEmails['country_code']=="RU" || $arrayOfEmails['country_code']=="SM" || $arrayOfEmails['country_code']=="RS" || $arrayOfEmails['country_code']=="SK" || $arrayOfEmails['country_code']=="SI" || $arrayOfEmails['country_code']=="ES" || $arrayOfEmails['country_code']=="SE" || $arrayOfEmails['country_code']=="CH" || $arrayOfEmails['country_code']=="TR" || $arrayOfEmails['country_code']=="UA" || $arrayOfEmails['country_code']=="GB" || $arrayOfEmails['country_code']=="VA"){
//		 	echo "<script>document.location.href='uae-turkey-europe/';</ script>";
			 header("Location: uae-turkey-europe/");
		 }
		 elseif($arrayOfEmails['country_code']=="US"){
//		 	echo "<script>document.location.href='united-states/';</sc ript>";
			 header("Location: united-states/");
		 }
	 elseif($arrayOfEmails['country_code']=="IN"){
//		 	echo "<script>document.location.href='india/';</s cript>";
			 header("Location: india/");
		 }else{
//		 	echo "<script>document.location.href='singapore/';</ script>";
			 header("Location: singapore/");
		}
		 


?>