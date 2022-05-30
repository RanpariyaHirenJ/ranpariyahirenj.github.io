<?php
	include("admin_global.php");
	check_login();
	$file_obj = new file_manup($photos);
	$photo_obj = new img_manup($photos);
	$order_value = 0;
	
	if(!isset($_REQUEST['order_id']) || $_REQUEST['order_id'] == "")
	{
		redirect("calendar.php");
	}
	
	function product_status($status)
	{
		switch($status)
		{
			case"1":
				return "Order Created";
			break;
			
			case"2":
				return "Supply Ordered";
			break;
			
			case"3":
				return "Supply Received";
			break;
			
			case"4":
				return "Items Designed";
			break;
			
			case"5":
				return "Order Ready";
			break;
			
			case"6":
				return "Payment Pending";
			break;
			
			case"7":
				return "Payment Received";
			break;
			
		}
	}
	
	function status_color($status)
	{
		switch($status)
		{
			case"1":
				return "#FF0000";
			break;
			
			case"2":
				return "#FF6B00";
			break;
			
			case"3":
				return "#5EB6E7";
			break;
			
			case"4":
				return "#AE08FF";
			break;
			
			case"5":
				return "#FF00FF";
			break;
			
			case"6":
				return "#4440D7";
			break;
			
			case"7":
				return "#169416";
			break;
			
		}
	}
	
	if($_REQUEST['action'] == "email")
	{
		$sql ="SELECT * FROM order_master WHERE order_id=".$_REQUEST['order_id'];
	
			
   		    $value =$db_object->return_query($sql);
			
 			$username = ucwords($value['client_name']);
			$client_contact = $value['client_contact'];
			$clent_email = $value['clent_email'];
			$product_note = ucfirst($value['product_note']);
	
	
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
                  <span style=\"margin-right:22px\"> ".$clent_email."</span>&nbsp;&nbsp;
              </td>
            </tr> 
      </table>
      
      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"select-order\" style=\"padding-top:8px\">
        <tr>
           <td width=\"33%\" align=\"left\">
              <p><strong><span style=\"margin-left:30px\">Ordered On :</span></strong> <span>".date_format(date_create($order_date),'d/m/Y')." </span></p>
           </td>
           <td width=\"33%\" align=\"right\">
              <p><strong><span>Delivery Date :</span></strong><span style=\"margin-right:32px\"> ".date_format(date_create($delivery_date),'d/m/Y')."</span></p>
              
           </td>
        </tr> 
      </table>
	  </span>";
	 	$sql = "SELECT * FROM order_detail od
				INNER JOIN order_master om ON om.order_id = od.order_id 
				INNER JOIN craft_items_master im ON im.item_id = od.item_id
				WHERE om.order_id = ".$_REQUEST['order_id'];
 		$result = $db_object->execute_query($sql);
		 while($value = mysqli_fetch_array($result))
		 {
			    if($value['product_note'] != "")
				 {
					$note = ucfirst($value['product_note']);
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
                            $sql_property = "SELECT property_id,property_value_id FROM order_property op
											 WHERE op.order_detail_id=".$value['order_detail_id'];
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
				<td><strong>Total Order Value</strong>:</td>
				<td>$".$order_value."</td>
		   </tr>
			</table>";

			$from = "orders@thepartyjungle.com";
			$reply = "funkylinda@verizon.net,kevin.borgersen@gmail.com";
			$to = $clent_email;
			
			send_email($to,$from,$reply,"Order Details from www.thepartyjungle.com",$data);
			
			redirect("viewall.php?order_id=".$_REQUEST['order_id']);

	}
	?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Admin | party jungle</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="stylesheet" type="text/css" href="styles/style.css">
<script src="js/js_class.js" type="text/javascript"></script>
</head>

<body>
<?php include("header.php"); ?>
<div class="wraper">
  <div class="container order">
    <h1 class="pageName"><u></u></h1>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td><table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
            <?php
	if($_REQUEST['order_id'] != "") 
	{
	 	$sql ="SELECT * FROM order_master WHERE order_id=".$_REQUEST['order_id'];
	}
	else
	{
 		redirect("calendar.php");
	}
	
	  $result =$db_object->return_query($sql);
	  ?>
            <tr>
              <td width="33%" align="left"><strong>
                <label>Customer Name :</label>
                </strong>&nbsp;&nbsp; <span><?php echo ucfirst($result['client_name']); ?></span>&nbsp;&nbsp; </td>
              <td width="33%" align="center"><strong>
                <label>Contact No.</label>
                </strong>&nbsp;&nbsp; <span><?php echo $result['client_contact'];?></span>&nbsp;&nbsp; </td>
              <td width="33%" align="right"><strong>
                <label>Email :</label>
                </strong>&nbsp;&nbsp; <span><?php echo $result['clent_email'];?></span>&nbsp;&nbsp; </td>
            </tr>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
            <tr>
              <td width="33%" align="left"><strong><span>Ordered On :</span></strong> <span><?php echo date_format(date_create($result['order_date']),'d/m/Y');?></span></td>
              <td width="33%" align="right"><strong><span>Delivery Date :</span></strong><span><?php echo date_format(date_create($result['delivery_date']),'d/m/Y');?></span>&nbsp;&nbsp; </td>
            </tr>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
            <tr>
              <td width="33%" align="center"><p> 
                <strong>
                <h3>Order Details</h3>
                </strong>
                </p></td>
            </tr>
          </table>
          <div class="contents order-content order-details">
            <?php
	 
	$sql = "SELECT * FROM order_detail od
			INNER JOIN order_master om ON om.order_id = od.order_id 
			INNER JOIN craft_items_master im ON im.item_id = od.item_id
			WHERE om.order_id = ".$_REQUEST['order_id']."
			ORDER BY product_status ASC";
	 
				
	$result = $db_object->execute_query($sql);
	while($value = mysqli_fetch_array($result))
	{
			 
 	 ?>
            <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-product-list">
              <tr>
                <td colspan="2" style="background-color:<?php echo status_color($value['product_status']); ?>;color:#FFF;font-weight:bold; font-size:18px; text-align:center"><?php echo product_status($value['product_status']); ?></td>
              </tr>
              <tr>
                <td width="25%" style="padding:10px !important;vertical-align:top;" align="center"><div>
                    <?php
                   		if($value['item_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($value['item_photo']),140);
						}
						else
						{ 
							?>
                    <img src="../item-photos/no-photo.png" width="140" height="140" />
                    <?php 
						}
					?>
                  </div>
                  <label style="display:block;font-size:14px;"><strong><?php echo ucfirst($value['item_name']);?></strong></label></td>
                <td width="75%" style="vertical-align:top;"><div class="view-all">
                    <table width="100%" style="border:#CCC solid 1px;">
                      <tr>
                      	<td width="30%" height="40%" colspan="3">
                        <?php
							  
							  $td_count = 1;
                            $sql_property = "SELECT property_id,property_value_id FROM order_property op
											 WHERE op.order_detail_id=".$value['order_detail_id'];
							 $result_property = $db_object->execute_query($sql_property);
							 while($value_property = mysqli_fetch_array($result_property))
							 {
								 $property = $db_object->return_query("SELECT property_name 
																		FROM craft_items_properties 
																		WHERE property_id=".$value_property['property_id']);
																		
								 $property_value = $db_object->return_query("SELECT property_value_name 
																			FROM craft_items_properties_value 
																			WHERE property_value_id=".$value_property['property_value_id']);
						?>
                        <div style="width:30%;float:left;height:50px;">
                        	<strong><?php echo ucfirst($property['property_name']);?>:</strong> <?php echo ucfirst($property_value['property_value_name']); ?>
                        </div>
                        <?php 
							 }
						?>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3"><strong>Product Note :</strong>
                          <?php
                                if($value['product_note'] != "")
							 {
								echo $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 echo $note = "Not Specified.";
							 }
							 ?></td>
                      </tr>
                      <tr style="border-top:1px solid #ccc;">
                        <td width="30%"><strong>Quantity&nbsp;:</strong> <?php echo $value['quantity']; ?></td>
                        <td width="30%"><strong>Customer Cost&nbsp;:</strong><?php echo "$" .$value['client_cost']?></td>
                        <td width="30%"><strong>Total Price&nbsp;:</strong><?php echo "$" .$value['client_cost']*$value['quantity']?></td>
                      </tr>
                    </table>
                  </div></td>
              </tr>
            </table>
            <?php
	  $order_value = ($value['client_cost']*$value['quantity']) + $order_value;
      }
      ?>
          </div></td>
      </tr>
    </table>
    <script>
			function email_invoice(order_id)
			{
				var status1 = window.confirm('Are you sure you want to email order invoice to client');
				if (status1) {
        			location.assign('viewall.php?action=email&order_id='+order_id);
    			}				
			}
			
			function print_invoice()
			{				
				window.open('print_invoice.php?order_id=<?php echo $_REQUEST['order_id'] ?>','_blank')	
			}
			
			</script> 
  </div>
</div>
<div class="footer-buttons select-contents" style="width:100%;">
  <div style="width:40%;float:left;text-align:left;margin-top:15px;margin-left:100px;">
    <input type="button" name="action" value="Print" class="action-button" onClick="print_invoice()">
    &nbsp;
    <input type="button" name="action" value="Email" class="action-button" onClick="email_invoice('<?php echo $_REQUEST['order_id'] ?>')">
    &nbsp;
    <input type="submit" value="Back to Calendar" class="action-button" onClick="window.location='calendar.php';">
  </div>
  <div class="buttons fr total-order" style="float:right;"> Total Order Value : $<?php echo $order_value; ?> </div>
</div>
</body>
</html>
