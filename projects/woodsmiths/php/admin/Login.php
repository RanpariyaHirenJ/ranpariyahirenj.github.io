<?php 
$pageTitle = "Login";
?>

<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include("./shared/header.php"); ?>
</head>
<body>
<form action="login" method="post" enctype="application/x-www-form-urlencoded" name="frmLogin" id="login-form" target="_self">
<div class="formContainer" id="loginForm">
  <div class="formTitle">Login</div>
  <div class="errorMessage"><?php echo $data["message"] ?></div>
  <div class="formElement">
    <input type="text" id="userid" name="userid" placeholder="Enter your user ID" validation="text" title="User ID">
    <label for="userid" style="height: 38px;">Login ID</label>
  </div>
  <div class="clear"></div>
  <div class="formElement">
    <input type="password" id="password" style="padding: 10px 10px 9px 169px;" name="password" placeholder="Enter your password" validation="password" title="Password">
    <label for="password" style="height: 38px;">Password</label>
  </div>  
  <div class="clear"></div>
  <div class="buttonContainer">
    <div class="float_center">
      <ul class="child">
        <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="login-form">Login</a></li>
        <!--<li><a href="" title="Button push" class="button btnPush btnBlueGreen">Cancel</a></li>-->
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div></form>
</body>
</html>
