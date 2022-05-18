<?php 
include("user_global.php");

echo $cptcha = gcaptecha($_POST["g-recaptcha-response"]);
