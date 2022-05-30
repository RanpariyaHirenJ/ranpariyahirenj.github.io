<?php
include("admin_global.php"); 
check_login();

$photo_obj = new img_manup($photos);

if(isset($_REQUEST['enquiry_id']))
{
	$_SESSION['enquiry_id'] = $_REQUEST['enquiry_id'];
}

if(!isset($_SESSION['enquiry_id']))
{
	redirect("manage_enquiry.php");
	die();
}

$enquiry_value = $db_object->return_query("SELECT *,DATE_FORMAT(order_date,'%d/%m/%Y') as o_date , DATE_FORMAT(delivery_date,'%d/%m/%Y') AS d_date FROM enquiry_master WHERE enquiry_id=".$_SESSION['enquiry_id']);


if(isset($_REQUEST['action']))
{
	switch($_REQUEST['action'])
	{
		case"update_delivery_date":
			$delivery_date = explode('/',$_REQUEST['delivery_date']);
			$delivery_date = $delivery_date[2]."-".$delivery_date[1]."-".$delivery_date[0];
			
			$db_object->execute_query("UPDATE enquiry_master SET delivery_date = '$delivery_date' WHERE enquiry_id = ".$_SESSION['enquiry_id']);
			redirect("enquiry_detail.php");
		break;
		case"send_quote":
			
		$sql ="SELECT * FROM enquiry_master WHERE enquiry_id=".$_SESSION['enquiry_id'];
	
			
   		    $value =$db_object->return_query($sql);
			
 			$username 		= ucwords($value['client_name']);
			$client_contact = $value['client_contact'];
			$client_email 	= $value['client_email'];
			$product_note 	= ucfirst($value['product_note']);
			$order_date		= $value['order_date'];
			
			if($value['delivery_date'] != "0000-00-00")
			{
				$delivery_date = date_format(date_create($delivery_date),'d/m/Y');
			}
			else
			{
				$delivery_date = "Not Specified";
			}
			
	
	
	  $data .= "<br><table  align=\"center\" width=\"100%\" style=\"border:1px solid #666666\" ><tr><td>";
	 $data .= "<table width=\"95%\" align=\"center\" border=\"0\" cellspacing=\"0\" cellpadding=\"10;\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#666;\" class=\"select-order\">
					  <tr>
						<td colspan=\"4\"><img src=\"http://www.kalptech.com/clients/party-jungle/images/logo.png\" width=\"142\" height=\"82\"></td>
					  </tr>
					  
 					  </table>";
					   $data.="<span style=\" margin-left: 20px;\">";
	 
	 $data.="<table width=\"100%\" border=\"0\" style=\"border-bottom: 1px solid;padding-bottom:8px\">
          <tr>
               <td width=\"40%\" align=\"left\">
                  <strong >
                  <label style=\"margin-left:28px\">Customer Name : </label></strong>
                  <span>".ucwords($username)." </span>
               </td>
               <td width=\"25%\" align=\"center\">
                    <strong><label>Contac No :</label></strong>&nbsp;&nbsp;
                    <span>".$client_contact."</span>&nbsp;&nbsp;
               
               </td>
              <td width=\"35%\" align=\"right\">
                  <strong><label>Email :</label></strong>
                  <span style=\"margin-right:22px\"> ".$client_email."</span>&nbsp;&nbsp;
              </td>
            </tr> 
      </table>
      
      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"select-order\" style=\"padding-top:8px\">
        <tr>
           <td width=\"33%\" align=\"left\">
              <p><strong><span style=\"margin-left:30px\">Ordered On :</span></strong> <span>".date_format(date_create($order_date),'d/m/Y')." </span></p>
           </td>
           <td width=\"33%\" align=\"right\">
              <p><strong><span>Delivery Date :</span></strong><span style=\"margin-right:32px\"> ".$delivery_date."</span></p>
              
           </td>
        </tr> 
      </table>
	  </span>";
	 	$sql = "SELECT * FROM enquiry_detail ed
				INNER JOIN enquiry_master em ON em.enquiry_id = ed.enquiry_id 
				INNER JOIN craft_items_master im ON im.item_id = ed.item_id
				WHERE em.enquiry_id = ".$_SESSION['enquiry_id'];
 		$result = $db_object->execute_query($sql);
		 while($value = mysqli_fetch_array($result))
		 {
			    if($value['enquiry_note'] != "")
				 {
					$note = ucfirst($value['enquiry_note']);
				 }
				 else
				 {
					 $note = "Not Specified.";
				 }
			 		
				if($value['item_photo'] != "")
				{
					$product_img = "<img src=\"http://www.thepartyjungle.com/item-photos/".get_thumbnail($value['item_photo'])."\" width=\"140\" height=\"140\" />";
				}
				else
				{ 
					
					 $product_img = "<img src=\"http://www.thepartyjungle.com/item-photos/no-photo.png\" width=\"140\" height=\"140\" />";
					
		}
			 $data .= "<br><table width=\"95%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" style=\"font-family:Arial, Helvetica, sans-serif;color:#666;border:#333 solid 1px;font-size:14px\">
           <tr>
               <td width=\"20%\" style=\"padding:10px !important;\"><label><strong><u> ".ucfirst($value['item_name'])."</u></strong></label><br><br>
                 ".$product_img."
               </td>
               <td width=\"80%\" >
               		<table style=\"padding:0 !important\" width=\"100%\" style=\"font-family:Arial, Helvetica, sans-serif;color:#000;font-size:12px\">
                    <tr>
                        <td>&nbsp;</td>
                      </tr>
                    	<tr>
                           <td>
                           <table width=\"100%\" style=\"font-family:Arial, Helvetica, sans-serif;color:#000;font-size:14px\">
                             <tr>";
							  
							$td_count = 1;
                            $sql_property = "SELECT property_id,property_value_id FROM enquiry_property 
											 WHERE enquiry_detail_id=".$value['enquiry_detail_id'];
							 $result_property = $db_object->execute_query($sql_property);
							 while($value_property = mysqli_fetch_array($result_property))
							 {
								 $property = $db_object->return_query("SELECT property_name 
																		FROM craft_items_properties 
																		WHERE property_id=".$value_property['property_id']);
																		
								 $property_value = $db_object->return_query("SELECT property_value_name 
																			FROM craft_items_properties_value 
																			WHERE property_value_id=".$value_property['property_value_id']);
								
                               $data .= "<td width=\"33%\"><strong> ".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
                               
                           	 
									if($td_count%3 == 0)
									{
										$data .= "</tr><tr>";
									}
									$td_count++;
							  }
							 
                             $data .= "</tr>
                           </table></td>
                        </tr>
                        <tr>
                           <td height=\"50\">
                               <strong>Product Note :</strong>
                              ".$note."
                           </td>
                        </tr>
                        <tr>
                            <td width=\"70%\" style=\"border-top:1px solid #000000;\">
                                <table width=\"100%\" style=\"font-family:Arial, Helvetica, sans-serif;color:#000;font-size:14px\">
								  <tr>
									   
								   <td  align=\"left\" style=\"float:left;\" width=\"30%\"><strong>Quantity&nbsp;:</strong>".$value['quantity']."</td>
								   <td align=\"left\" style=\"float:left;\"  width=\"30%\"><strong>Product Cost&nbsp;:</strong>$".$value['client_cost']."</td>
								   
								   <td align=\"left\" style=\"float:left;\"  width=\"30%\"><strong>Total Price&nbsp;:</strong>$".$value['client_cost']*$value['quantity']."</td>
								  </tr>
								  
								 
                                </table>
                            </td>
							
                       </tr>
                   </table>
				  
               </td>
           </tr>
       </table>";
		 $order_value = ($value['client_cost']*$value['quantity']) + $order_value;		
			}	
			$data .= "</td></tr>
			<tr style=\"float:right; margin-right: 31px;\">
				<td><strong>Total Order Value</strong>&nbsp;:</td>
				<td style=\"font-size:26px;\">&nbsp;$".$order_value."</td>
		   </tr>
			</table>";
			//die($data);
			$from = "orders@thepartyjungle.com";
			$reply = "funkylinda@verizon.net,kevin.borgersen@gmail.com";
			$to = $clent_email;
			
			send_email($to,$from,$reply,"Order Details from www.thepartyjungle.com",$data);
			
			redirect("viewall.php?order_id=".$_REQUEST['order_id']);

	
		break;
		
		case"confirm_enquiry":
			if(isset($_SESSION['client']))
			{
				unset($_SESSION['client']);
			}
			
			if(isset($_SESSION['order']))
			{
				unset($_SESSION['order']);
			}
			
			$db_object->execute_query("UPDATE enquiry_master SET enquiry_status = 2  WHERE enquiry_id =".$_SESSION['enquiry_id']);
			
			$enquiry_master = $db_object->return_query("SELECT * FROM enquiry_master WHERE enquiry_id =".$_SESSION['enquiry_id']);
			
			$_SESSION['client']['client_name'] 		= ucfirst($enquiry_master['client_name']);
			$_SESSION['client']['client_contact'] 	= $enquiry_master['client_contact'];
			$_SESSION['client']['client_email']		= $enquiry_master['client_email'];
			$_SESSION['client']['delivery_date'] 	= date_format(date_create($enquiry_master['delivery_date']), 'd/m/Y');
			$_SESSION['client']['order_date'] 		= $enquiry_master['order_date'];
			$_SESSION['client']['order_note'] 		= ucfirst($enquiry_master['enquiry_note']);
			
			$sql = "SELECT * FROM enquiry_detail ed
					WHERE enquiry_id=".$enquiry_master['enquiry_id'];
					
			 $result =$db_object->execute_query($sql);
			 while($rows = mysqli_fetch_array($result))
			 {
				$items[0]		= $rows["item_id"];
				$items[1]		= $rows["our_cost"];
				$items[2]		= $rows["client_cost"];
				$items[3]		= $rows["product_note"];
				$items[5]		= $rows["quantity"];
				
				$count = 0;
				$enquiry_property_value = $db_object->execute_query("SELECT * FROM enquiry_property WHERE enquiry_detail_id=".$rows['enquiry_detail_id']);
				while($enquiry_detail_rows = mysqli_fetch_array($enquiry_property_value))
				{
					
					$properties[$count++] = array($enquiry_detail_rows['property_id'],$enquiry_detail_rows['property_value_id']);					
					$items[4]	= $properties;
				}
				
				if(isset($_SESSION['order']))
				{
					$_SESSION['order'] = array_merge($_SESSION['order'],array($items));
				}
				else
				{
					$_SESSION['order'] = array($items);
				}
			 }
			
			 redirect("order-confirmation.php");
			
		break;
		
		case"cancel_enquiry":
			
			$db_object->execute_query("UPDATE enquiry_master SET enquiry_status = 4 WHERE enquiry_id=".$_SESSION['enquiry_id']);
			redirect("manage_enquiry.php");
		break;
	}
}
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
<link rel="stylesheet" href="styles/jquery-ui.css">
<script src="js/jquery-ui.js"></script>
<script>
function check_delivey_date()
{
	if(document.getElementById('delivery_date').value == "")
	{
		alert('Delivery date cannot be blank');
		document.getElementById('delivery_date').style.borderColor  = "red";
		return false;
	}
	else
	{
		return true;
	}
}

function confirm_enquiry()
{
	var date = check_delivey_date();
	if (date) {
		window.location='enquiry_detail.php?action=confirm_enquiry';
	}
}
 
var currentcnt = 0;
function submit_order_form()
{
	//var date = check_delivey_date();
	//if (date) {
		
	if(frmcount > 0)
	{
		while(currentcnt < frmcount)
		{
  			var item_form = document.getElementById("item_form"+currentcnt);
				
				var x = item_form.our_cost.value;
				var y = item_form.customer_cost.value;
				var z = item_form.quantity.value;
				var return_state = true;
				var invalid_state = true;
 
				if (x == null || x == "" || x == 0) {
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
				 
				 if (y == null || y == "" || y == 0) {
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
				 
				  if (z == null || z == "" || z == 0) {
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
				
			
			currentcnt++;
		}
		
		setTimeout(function(){location.assign('enquiry_detail.php?error=Data updated successfully')},1000);
		
 	}
	//}
  	
	
 }
 
function cancel_order()
{
	var status = window.confirm('Are you sure you want to cancel this order');
	if (status) {
	location.assign('calendar.php');
	}
	
}

$(function() {
  $( "#delivery_date" ).datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: "c-50:c",	 
	dateFormat: "dd/mm/yy"
	
  });
});
</script>
</head>
<body>
<div class="wraper">
  <div class="container" style="border:#CCC solid 1px; background-color: #fff;">
    <h1 class="pageName" style="padding:10px;"><u>Selected Items For Order</u></h1>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
      <tr>
        <td width="25%" align="left"><strong>
          <label>Client Name :</label>
          </strong>&nbsp;&nbsp; <span><?php echo ucwords($enquiry_value['client_name']);?></span>&nbsp;&nbsp; </td>
        <td width="25%" align="center"><strong>
          <label>Contact No</label>
          : </strong>&nbsp;&nbsp; <span><?php echo $enquiry_value['client_contact']?></span>&nbsp;&nbsp; </td>
        <form action="enquiry_detail.php?action=update_delivery_date" method="post">
          <td width="25%" align="center"><strong>
            <label>Delivery Date</label>
            : </strong> &nbsp;&nbsp;
            <?php
			   if($enquiry_value['d_date'] == "00/00/0000")
			   {
				   $delivery_date = "";
			   }
			   else
			   {
				   $delivery_date = $enquiry_value['d_date'];
			   }
			   ?>
            <input name="delivery_date" id="delivery_date" placeholder="Select Date" value="<?php echo $delivery_date  ?>" style="width:130px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:20px 20px;font-size:14px;" type="text" onChange="this.form.submit()"></td>
        </form>
        <td width="25%" align="right"><strong>
          <label>Order Date</label>
          : </strong>&nbsp;&nbsp; <span><?php echo $enquiry_value['o_date']?></span>&nbsp;&nbsp; </td>
      </tr>
    </table>
    <div class="contents">
      <?php
	 $frmcount = 0;
	 $total_cost = 0;
     $sql = "SELECT * FROM enquiry_detail ed
	 		INNER JOIN craft_items_master cim ON cim.item_id = ed.item_id 
			WHERE ed.enquiry_id=".$enquiry_value['enquiry_id'];
     $result =$db_object->execute_query($sql);
     while($rows = mysqli_fetch_array($result))
     {
		 $our_cost = $rows['our_cost'];
		 $customer_cost = $rows['client_cost'];
     	?>
      <iframe id="info_save<?php echo $frmcount ?>" name="info_save<?php echo $frmcount ?>" style="display:none;"></iframe>
      <form action="postdata.php?action=update_enquiry" method="post" id="item_form<?php echo $frmcount ?>" target="info_save<?php echo $frmcount ?>" name="myForm">
        <table width="76%" border="0" cellpadding="0" align="center" cellspacing="0" class="product-list">
          <tr>
            <td width="10%"><table width="100%" style="text-align:center;">
                <tr>
                  <td><strong><u><span style="font-size:16px;"><?php echo ($frmcount+1); ?>&nbsp;<?php echo ucwords($rows['item_name']);?></span></u></strong></td>
                </tr>
                <tr>
                  <td><?php 
						if($rows['item_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($rows['item_photo']),150);
						}
						else
						{ 
					?>
                    <img src="../item-photos/no-photo.png" width="150" height="150" />
                    <?php 
						} ?></td>
                </tr>
              </table></td>
            <td width="90%"><table width="100%">
                <tr>
                  <td><strong>Our Cost</strong><br>
                    <input name="our_cost"  type="text" value="<?php echo $our_cost ?>" validation="text">
                    <input name="enquiry_detail_id"  type="hidden" value="<?php echo $rows['enquiry_detail_id'] ?>" ></td>
                  <td><strong>Customers Cost</strong><br>
                    <input name="customer_cost" value="<?php echo $customer_cost ?>"  type="text" validation="text"></td>
                  <td><strong>Quantity</strong><br>
                    <input name="quantity" value="<?php echo $rows['quantity'] ?>"  type="text" validation="text"></td>
                </tr>
                <tr>
                  <?php 
						   $total_cost = ($customer_cost*$rows['quantity']) + $total_cost;
						   $tdcount = 1;
						   $enquiry_property_value = $db_object->execute_query("SELECT * FROM enquiry_property WHERE enquiry_detail_id=".$rows['enquiry_detail_id']);
						   while($enquiry_detail_rows = mysqli_fetch_array($enquiry_property_value))
						   {
						   		
                            	$sql_property = "SELECT property_id,property_name FROM craft_items_properties WHERE property_id =".$enquiry_detail_rows['property_id'];
                            	$result_property = $db_object->return_query($sql_property);
                            
                             ?>
                  <td><strong> <?php echo ucwords($result_property['property_name']);?></strong><br>
                    <select name="<?php echo $enquiry_detail_rows['enquiry_property_id'];?>">
                      <?php
                                    $sql2 = "SELECT * FROM craft_items_properties_value WHERE property_id = ".$result_property['property_id'];
                                    $result2 = $db_object->execute_query($sql2);
                                    while($value2 = mysqli_fetch_array($result2))
                                    {
                                        ?>
                      <option value="<?php echo $value2['property_value_id'];?>" <?php echo $db_object->return_compare($value2['property_value_id'],$enquiry_detail_rows['property_value_id'],"selected",""); ?> ><?php echo ucwords($value2['property_value_name']);?></option>
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
                  <td colspan="3"><textarea style="width:87%; height:70px;" rows="2" placeholder="Enter the customer products notes here" name="item_note"><?php echo ucfirst($rows['product_note']) ?></textarea></td>
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
        <div class="buttons1" style="text-align:center;" >
          <input type="button" value="Back To Enquiry List" onClick="window.location='manage_enquiry.php';" class="action-button">
          &nbsp;&nbsp;
          <input type="button" value="Send Quote" onClick="window.location='enquiry_detail.php?action=send_quote';" class="action-button">
          &nbsp;&nbsp;
          <input type="button" name="action" value="Confirm Enquiry" onClick="confirm_enquiry()" class="action-button">
          &nbsp;&nbsp;
          <input type="button" name="action" value="Update Enquiry" onClick="submit_order_form()" class="action-button">
          &nbsp;&nbsp;
          <input type="button" value="Cancel Enquiry" onClick="location.assign('enquiry_detail.php?action=cancel_enquiry')" class="action-button">
          <div style="font-size:18px;float:right;"> Total Amount ($) : <?php echo $total_cost ?> </div>
        </div>
      </div>
    </div>
  </div>
</div>
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