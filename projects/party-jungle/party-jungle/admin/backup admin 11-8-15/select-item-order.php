<?php
include("admin_global.php"); 
check_login();
$file_obj = new file_manup($photos);
$photo_obj = new img_manup($photos);

$client_fname = $_SESSION['client']['client_fname'];
$client_lname = $_SESSION['client']['client_lname'];
$user_name 	  = $client_fname." ".$client_lname;
$client_contact = $_SESSION['client']['client_contact'];
$clent_email    = $_SESSION['client']['clent_email'];
$delivery_date = $_SESSION['client']['delivery_date'];
?>
 
<?php include("header.php"); ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Welcome</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css">
<script>
/*function submit_order_form()
{
	
	var item_form = document.getElementById("item_form");
	item_form.submit();
}*/

 
var currentcnt = 0;
function submit_order_form()
{
  	var isselect = 0;
	if(frmcount > 0)
	{
		while(currentcnt < frmcount)
		{
  			var item_form = document.getElementById("item_form"+currentcnt);
 			
			
			if(item_form.itmid.checked)
			{
		
				var x = document.forms["myForm"]["our_cost"].value;
				var y = document.forms["myForm"]["customer_cost"].value;
				var z = document.forms["myForm"]["quantity"].value;
 
					if (x == null || x == "") {
					alert("Our Cost must be filled out");
					document.forms["myForm"]["our_cost"].focus()
					return false;
					 }
					 
					 if (y == null || y == "") {
					alert("Customers Cost be filled out");
					document.forms["myForm"]["customer_cost"].focus();
					return false;
					 }
					 
					  if (z == null || z == "") {
					alert("Quantity be filled out");
					document.forms["myForm"]["quantity"].focus();
					return false;
					 }
				
				item_form.submit();
				isselect = 1;
			}
			currentcnt++;
		}
		
 		if(isselect == 1)
		{
			location.assign('order-confirmation.php');
		}
		else
		{
			alert('Select atleast one Product');
			location.assign('select-item-order.php');
 			return false;
		}
 	}
 }
</script>
</head>
<body>


<div class="wraper">
	<div class="container" style="border:none;">
  <h1 class="pageName" style="border-bottom:1px solid #000000; padding:10px;"><u>Select Items For Order</u></h1>
		<table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
     
               <td width="33%" align="left">
                  <strong>
                  <label>Client Name :</label></strong>&nbsp;&nbsp;
                  <span><?php echo ucwords($user_name);?></span>&nbsp;&nbsp;
               </td>
               <td width="33%" align="center">
                    <strong><label>Contact No.</label></strong>&nbsp;&nbsp;
                    <span><?php echo $client_contact;?></span>&nbsp;&nbsp;
               </td>
              <td width="33%" align="right">
                  <strong><label>Delivery Date</label></strong>&nbsp;&nbsp; 
                  <span><?php echo $delivery_date;?></span>&nbsp;&nbsp;
              </td>
              
             </tr> 
      </table>
     
     <div class="contents"> 
     
	 <?php
	 $frmcount = 0;
     $sql = "SELECT * FROM craft_items_master";
     $result =$db_object->execute_query($sql);
     while($rows = mysqli_fetch_array($result))
     {
     	?>
         <iframe id="info_save<?php echo $frmcount ?>" name="info_save<?php echo $frmcount ?>" style="display:none;"></iframe>
        <form action="postdata.php?action=Continue" method="post" id="item_form<?php echo $frmcount ?>" target="info_save<?php echo $frmcount ?>" name="myForm">
        
      
       <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="product-list">
           <tr>
               <td width="20%"><label><strong><u><?php echo ucwords($rows['item_name']);?></u></strong></label><br><br>
                    <?php 
						if($rows['item_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($rows['item_photo']),100);
						}
						else
						{ 
					?>
                     	 <img src="../item-photos/no-photo.png" width="100" height="100" />
                    <?php 
						} ?>
               </td>
                <td width="80%">
                		<table>
                    	<tr>
                           <!--<td>
                                <table width="100%">
                                 <tr>-->
                                    <td><label>Our Cost</label>
                                    <input name="our_cost"  type="text" validation="text"> 
                                    <input name="item_id"  type="hidden" value="<?php echo $rows['item_id'] ?>" >
                                    </td>
                                    <td><label>Customers Cost</label>
                                    <input name="customer_cost"  type="text"> 
                                    </td>
                                      <td>
                                       <label>Quantity</label>
                             			<input name="quantity"  type="text" validation="text"> 
                                     </td>
                                     <td><br>
                                    <input name="itmid" id="itmid" type="checkbox" value="<?php echo $rows['item_id'];?>" >
                                    <label>Select This Product</label>
                                    </td>
                                    
                                <!--</tr>
                            </table>
                           </td>-->
                        </tr>
                        <tr>
                          <!--<td>
                              <table width="100%">
                              <tr>-->
						   <?php 
						   $tdcount = 1;
                            $sql1 = "SELECT * FROM craft_items_properties WHERE item_id =".$rows['item_id'];
                            $result1 = $db_object->execute_query($sql1);
                            while($value1 = mysqli_fetch_array($result1))
                            {
								$property_id = $value1['property_id']
                            ?>
                                 
                                <td>
                                <?php echo ucwords($value1['property_name']);?><br>
                                    <select name="<?php echo $value1['property_id'];?>">
                                    <?php
                                    $sql2 = "SELECT * FROM craft_items_properties_value WHERE property_id = $property_id";
                                    $result2 = $db_object->execute_query($sql2);
                                    while($value2 = mysqli_fetch_array($result2))
                                    {
                                        ?>
                                        <option value="<?php echo $value2['property_value_id'];?>"><?php echo ucwords($value2['property_value_name']);?></option>
                                        <?php
                                    }
                                     ?>
                                    </select> 
                                </td> 
                                <?php
                                if($tdcount%2 == 0)
                                {
                                    echo "</tr><tr>";
                                }
                                $tdcount++;
                             } 
							 ?>
                                 <!--</tr>
                            </table>
                           </td>-->
                       </tr>
                        <tr>
                           <!--<td>
                             <table width="100%">
                                <tr>-->
                                    <td colspan="4">
                                    <textarea cols="75" rows="2" placeholder="Enter the customer products notes here" name="item_note"></textarea>
                                    </td>
                              <!-- </tr>
                            </table>
                          </td>-->
                        </tr>
                    </table>
                 </td>
           </tr>
      </table>
     
      </form>
	<?php
	$frmcount++;
    }
    ?>
    <script type="text/javascript">
		var frmcount = <?php echo $frmcount ?>;
	</script>
      <div class="footer-buttons select-contents">
      		<div class="buttons1" style="text-align:center;">
            <!--	<a href="order-confirmation.php"><input type="submit" name="add" value="Continue"></a>-->
              <input type="button" name="action" value="Continue" onClick="submit_order_form()">&nbsp;&nbsp;
                <input type="button" value="Cancel" onClick="window.location='calendar.php';">
            </div>
            
            
            
           <?php
  include("footer.php"); 
  ?>
      </div>
      </div> 
  </div>  
 </div>
 <?php /*?><?php
  include("footer.php"); 
  ?><?php */?>
  
   <?php
	if(isset($_REQUEST['error']))
	{
		?>
		<script type="text/javascript">
			alert('<?php echo addslashes($_REQUEST['error']) ?>');
		</script>
		<?php
	}
	?>     
</body>
</html>
