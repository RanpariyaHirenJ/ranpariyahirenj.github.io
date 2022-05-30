

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Audio Monky - Administrative Suite</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="styles/style.css" rel="stylesheet" type="text/css">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script language="javascript" src="./js/js_class.js"></script>
<script src="./js/common.js" type="text/javascript"></script>
<!--<link rel="stylesheet" type="text/css" media="all" href="JSDatePick/jsDatePick_ltr.min.css" />
<script type="text/javascript" src="JSDatePick/jsDatePick.min.1.3.js"></script>-->
<link rel="stylesheet" href="styles/jquery-ui.css">
<script src="js/jquery-ui.js"></script>
<script language="javascript"> 

/*window.onload = function(){
	new JsDatePick({
		useMode:2,
		target:"expiry_date",
		dateFormat:"%d/%m/%Y"						
	});		
	
	new JsDatePick({
		useMode:2,
		target:"expiry_date1",
		dateFormat:"%d/%m/%Y"						
	});					
};*/
$(function() {
  $( "#expiry_date" ).datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: "c-50:c",	 
	dateFormat: "dd/mm/yy"
	
  });
    $( "#expiry_date1" ).datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: "c-50:c",	 
	dateFormat: "dd/mm/yy"
	
  });
  
});
 </script>
</head>
<body>
<?php include("header.php"); ?>	
<div class="overlay"></div>
	<div class="overlayBox" id="token-entry">
      <div class="formCntr">
        <h2 style="background:#a2a2a2"> Assign Token</h2>
		  <form action="assigned_token.php" method="post" id="myid" onSubmit="return validate_form(this.id,token_element)">
		  <div class="fldCntr" align="center" style="width:600px; margin-top:0px;">
              <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="dvF1">
              <tr>
              	<td>&nbsp;</td>
                <td align="left">Expiry Date</td>
                <td align="left">
					<input type="text" title="Expiry Date" id="expiry_date" name="expiry" style="width:200px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:25px 25px;" value="">
				</td>
              </tr>
              <tr>
              	<td>&nbsp;</td>
                <td align="left">&nbsp;</td>
                <td align="left">
                    <input type="submit" name="action" value="Update">
                </td>
              </tr>
            </table>
              </div>
             </form>
          </div>
       </div>	
        <div class="wraper">
  		<h1 class="pageName">Manage Assigned Token</h1>
        <form action="assigned_token.php" method="get">
              <div class="srchEngn"> <strong>
               <h2>Filter Data</h2>
               </strong>
                <div class="frm">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                 	 <td width="28%" align="right">Token  Name </td>
                      <td width="6%" align="center">: </td>
                      <td width="29%" align="left"><input type="text" value="" name="token_name" style="width:200px;"></td> 
                  
                      <td width="28%" align="right">User Name </td>
                      <td width="6%" align="center">: </td>
                      <td width="29%" align="left"><input type="text" value="" name="user_name" style="width:200px;"></td>
                     
                       <td width="37%" align="center"><input type="submit" name="action" id="action" value="Filter" style="width:100px;"></td>
                     </tr>
                  </table>
                </div>
              </div>
          </form>
          <br>
       <form action="assigned_token.php" method="post" name="myform" id="myFrm" onSubmit="return Data()" target="_self"> 
      	 <div class="tblCntr" style="padding-top:0; background:none;">
			<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
			 
				  <tr>
					<td width="5%" align="center" style="vertical-align:middle">1</td>
					<td width="13%" align="center" style="vertical-align:middle">AAAAAA</td>
					<td width="24%" align="center" style="vertical-align:middle">AAAAAAA</td>
					<td width="21%" align="center" style="vertical-align:middle">AAAAAA</td>
                    
                    
					<td width="15%" align="center" style="vertical-align:middle">AAAAAAAAAA</td>
					<td width="11%" align="center" style="vertical-align:middle">
						<a href="assigned_token.php?action=Modify" target="_self" id="modifybutton">&nbsp;Modify&nbsp;</a>
					</td>
					<td width="11%" align="center" style="vertical-align:middle">
					  <input type="checkbox" name="" value="">
					</td>
				  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td align="left">Expiry Date</td>
                    <td align="left" colspan="6">
                        <input type="text" title="Expiry Date" id="expiry_date1" name="expiry" style="width:200px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:25px 25px;" value="">
                    </td>
                  </tr>
                  <tr>
                    <td width="11%" align="center" style="vertical-align:middle" colspan="7">
                    <input name="" type="button" onClick="overlayBox('token-entry')" VALUE="SAVE">
					</td>           
            </table>
</div>
            </form>
            </div>
        <?php include("footer.php"); 
	  ?>
</body>
</html>
