<?php
include("admin_global.php"); 
check_login();
//print_r($_SESSION);
$file_obj = new file_manup($photos);
$photo_obj = new img_manup($photos);

$user_name 	  = $_SESSION['client']['client_name'];
$client_contact = $_SESSION['client']['client_contact'];
$clent_email    = $_SESSION['client']['clent_email'];
$delivery_date = $_SESSION['client']['delivery_date'];

?>
<?php include("header.php"); ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Admin | party jungle</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css">
<script>
 
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
				isselect = 1;
				var x = item_form.our_cost.value;
				var y = item_form.customer_cost.value;
				var z = item_form.quantity.value;
				var return_state = true;
				var invalid_state = true;
 
				if (x == null || x == "") {
				item_form.our_cost.style.borderColor  = "red"; 
				return_state = false;
				 }
				  else
				 {
					  var ourcost = item_form.our_cost.value;
				
					if (isNaN(ourcost)) {
						item_form.our_cost.style.borderColor  = "red"; 
						invalid_state = false;
					} else {
						 item_form.our_cost.style.borderColor  = "green"; 
					}
					
				 }
				 
				 if (y == null || y == "") {
				item_form.customer_cost.style.borderColor  = "red"; 
				return_state = false;
				 }
				 else
				 {
					 var cust_cost = item_form.customer_cost.value;
				
					if (isNaN(cust_cost)) {
						item_form.customer_cost.style.borderColor  = "red"; 
						invalid_state = false;
					} else {
						item_form.customer_cost.style.borderColor  = "green"; 
					}
					 
				 }
				 
				  if (z == null || z == "") {
				item_form.quantity.style.borderColor  = "red"; 
				return_state = false;
				 }
				else
				 {
					var qty = item_form.quantity.value;
				
					if (isNaN(qty) || qty < 1) {
						item_form.quantity.style.borderColor  = "red"; 
						invalid_state = false;
					} else {
						item_form.quantity.style.borderColor  = "green"; 
					}
				 }
				 
				if(return_state == true && invalid_state == true)
				{
					item_form.submit();
				}
				else if(return_state == false)
				{
					alert("Fill all required field");
					return false;
				}
				else if(invalid_state == false)
				{
					alert("Invalid input");
					return false;
				}
				
			}
			else
			{
				item_form.quantity.style.borderColor  = ""; 
				item_form.customer_cost.style.borderColor  = ""; 
				item_form.our_cost.style.borderColor  = ""; 
			}
			currentcnt++;
		}
		
 		if(isselect == 1)
		{
			setTimeout(function(){location.assign('order-confirmation.php')},1000);
			//location.assign('order-confirmation.php');
		}
		else
		{
			currentcnt = 0;
			alert('Select atleast one Product');
			//location.assign('select-item-order.php');
		}
 	}
 }
 
 function cancel_order()
{
	var status = window.confirm('Are you sure you want to cancel this order');
	if (status) {
	location.assign('calendar.php');
	}
	
}
</script>
</script>
</head>
<body>
<div class="wraper">
  <div class="container" style="border:#CCC solid 1px;background-color: #fff;">
    <h1 class="pageName" style="border-bottom:1px solid #ccc; padding:10px;"><u>Select Items For Order</u></h1>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
      <tr>
        <td width="33%" align="left"><strong>
          <label>Client Name :</label>
          </strong>&nbsp;&nbsp; <span><?php echo ucwords($user_name);?></span>&nbsp;&nbsp; </td>
        <td width="33%" align="center"><strong>
          <label>Contact No.</label>
          </strong>&nbsp;&nbsp; <span><?php echo $client_contact;?></span>&nbsp;&nbsp; </td>
        <td width="33%" align="right"><strong>
          <label>Delivery Date</label>
          </strong>&nbsp;&nbsp; <span><?php echo $delivery_date;?></span>&nbsp;&nbsp; </td>
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
        <table width="76%" border="0" cellpadding="0" align="center" cellspacing="0" class="product-list" >
          <tr>
            <td width="10%"><table width="100%" style="text-align:center;">
                <tr>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td><?php 
						if($rows['item_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($rows['item_photo']),100);
						}
						else
						{ 
					?>
                    <img src="../item-photos/no-photo.png" width="100" height="100" />
                    <?php 
						} ?></td>
                </tr>
                <tr>
                  <td><label style="font-size:14px;"><strong><u><?php echo ucwords($rows['item_name']);?></u></strong>
                      <input name="itmid" id="itmid" type="checkbox" style="position:relative; top:3px;" value="<?php echo $rows['item_id'];?>" >
                    </label></td>
                </tr>
                <?php /*?><tr>
                        	<td><label><strong><u><?php echo ucwords($rows['item_name']);?></u></strong></label></td>
                            
                        </tr><?php */?>
              </table></td>
            <td width="90%"><table width="100%">
                <tr>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td><label style="display:block;">Our Cost</label>
                    <input name="our_cost"  type="text" validation="text">
                    <input name="item_id"  type="hidden" value="<?php echo $rows['item_id'] ?>" ></td>
                  <td><label style="display:block;">Customers Cost</label>
                    <input name="customer_cost"  type="text"></td>
                  <td><label style="display:block;">Quantity</label>
                    <input name="quantity"  type="text" validation="text"></td>
                </tr>
                <tr>
                  <?php 
						   $tdcount = 1;
                            $sql1 = "SELECT * FROM craft_items_properties WHERE item_id =".$rows['item_id']." AND property_status = 0" ;
                            $result1 = $db_object->execute_query($sql1);
                            while($value1 = mysqli_fetch_array($result1))
                            {
								$property_id = $value1['property_id']
								
							 	
                             ?>
                  <td><?php echo ucwords($value1['property_name']);?><br>
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
                    </select></td>
                  <?php
                                if($tdcount%3 == 0)
                                {
                                    echo "</tr><tr>";
                                }
                                $tdcount++;
                             } 
							 ?>
                </tr>
                <tr>
                  <td colspan="3"><textarea cols="72" rows="2" placeholder="Enter the customer products notes here" name="item_note"></textarea></td>
                </tr>
              </table></td>
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
          <input type="button" name="action" value="Save & Continue" onClick="submit_order_form()" class="action-button">
          &nbsp;&nbsp;
          <input type="button" value="Cancel Order" onClick="window.location='calendar.php';" class="action-button">
          &nbsp;&nbsp;
          <?php 
				if(isset($_SESSION['order']))
				{
					if(count($_SESSION['order']) > 0)
					{
						?>
          <input type="button" value="View Order" style="float:right" onClick="window.location='order-confirmation.php';" class="action-button";>
          <?php
						}
				}
				?>
        </div>
      </div>
    </div>
  </div>
</div>
<?php /*?>
<?php
  include("footer.php"); 
  ?>
<?php */?>
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