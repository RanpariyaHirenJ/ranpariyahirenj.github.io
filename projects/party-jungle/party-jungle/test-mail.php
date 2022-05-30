<?php
require("user_global.php"); 

if(isset($_REQUEST["action"]))
{
		$user_email = $_REQUEST["to"];
		$subject = $_REQUEST["subject"];
		$body = $_REQUEST["body"];
		send_email($user_email,"om.maurya0207@gmail.com",$subject,$body);		
		redirect("test-mail.php?error=Mail has been sent to the specified email address");
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<body>
<form action="test-mail.php" method="post">
<table width="500" border="0" cellspacing="5" cellpadding="0" align="center">
  <tr>
    <td colspan="2">Test Email</td>
  </tr>
  <tr>
    <td width="128">To</td>
    <td width="357"><label>
      <input type="text" name="to" id="to" />
    </label></td>
  </tr>
  <tr>
    <td>Subject</td>
    <td><label>
      <input type="text" name="subject" id="subject" value="This is the test mail body"/>
    </label></td>
  </tr>
  <tr>
    <td>Body</td>
    <td><label>
      <input type="text" name="body" id="body" value="This is the test mail subject" />
    </label></td>
  </tr>
  <tr>
    <td colspan="2" style="text-align:center;"><input type="submit" name="action" id="button" value="Submit" /></td>
  </tr>
</table></form>
<?php 
if(isset($_REQUEST["error"]))
{
?>
	<script type="text/javascript">
		alert("<?php echo $_REQUEST["error"] ?>");
		window.location.assign('test-mail.php');
	</script>
<?php	
}
?>
</body>
</html>