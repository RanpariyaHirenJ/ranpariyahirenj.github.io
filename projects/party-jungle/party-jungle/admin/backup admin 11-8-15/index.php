<?php 
include("admin_global.php");
include("../securimage/securimage.php");

$sec_code = md5(uniqid(time()));

if(!isset($_REQUEST["action"]))
{
	session_destroy();
}
else if(isset($_REQUEST["action"]))
{
	if(trim($_POST["code"]) != "" && isset($_POST["code"]))
	{
		$img = new Securimage();
		$valid = $img->check($_POST["code"]);
		if($valid != true) 
		{
			redirect("index.php?error=The code is invalid.");
			die("Code invalid");	
		} 
	}
	else
	{
		redirect("index.php?error=The code is invalid.");
		die("Code invalid");
	}
	
	$sql = "SELECT a.admin_id, a.admin_type FROM administrator a WHERE a.`admin_email` = '".$db_object->sanatize_string($_REQUEST["email"])."' 
	AND a.`admin_password` = '".$db_object->sanatize_string($_REQUEST["password"])."'";
	$value = $db_object->return_query($sql);
	
	
	if($value["admin_id"] == "")
	{
		redirect("index.php?error=Invalid username or password");
	} 
	else
	{
		$_SESSION["admin_id"] 	= $value["admin_id"];
		redirect("dashboard.php");
	}		
}	
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Welcome</title>
<link rel="stylesheet" type="text/css" href="styles/style.css">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
	 $(window).load(function(){
    var abc=$(window).height();
		 var dvH=$('.loginCntr').height();
			var bcd=(abc-dvH)/2;
		$('.loginCntr').css("margin-top",bcd);
  });
</script>
</head>
<body>
  <div class="loginCntr">
  	<div class="logoCntr">    	
    </div>
    <form action="index.php" method="post" enctype="application/x-www-form-urlencoded" name="checklogin" target="_self">
    <div class="lognInfo">
    	<h1>Administrator Login</h1>
      <label>User ID</label>
      <input name="email" type="text">
    
      <label>Password</label>
      <input name="password" type="password">
      <div style="margin-top:7px"><img src="../securimage/securimage_show.php?sid=<?php echo $sec_code ?>"></div>
      <label>Enter Captcha</label>
      <input name="code" type="text">
      <br>
      <input type="submit" value="Login" name="action">
    </div></form>
    <div class="clear"></div>
    
  </div><!--<div class="pssLnk"><a href="#">Forgot Password?</a></div>-->
</body>
<?php 
	if(isset($_REQUEST["error"]))
	{
?>
<script type="text/javascript">
	alert('<?php echo $_REQUEST["error"] ?>')
</script>
<?php 
	}
?>
</html>
