<?php
	include("admin_global.php");
	check_login();
	$file_obj = new file_manup($photos);
	$photo_obj = new img_manup($photos);
	
	$order_value = 0;
	$itemkey 	= "";
	$itemid 	= "";
	$ourcost 	= "";
	$customercost = "";
	$itemnote 	= "";
	
	$order_date 	= $_SESSION['client']['order_date'] ;
	$delivery_date  = $_SESSION['client']['delivery_date'];
	$user_name 	  	= $_SESSION['client']['client_name'];
	$client_contact = $_SESSION['client']['client_contact'];

	$client_email    = $_SESSION['client']['client_email'];
	$delivery_date  = $_SESSION['client']['delivery_date'];
	$order_note     = $_SESSION['client']['order_note'];

	if(isset($_REQUEST['action']))
	{
			$sqlhelper = new sqlhelper("order_master");
			$sqlhelper->db_connect($host,$username,$password,$database);
			
			$sqlhelper1 = new sqlhelper("order_detail");
			$sqlhelper1->db_connect($host,$username,$password,$database);
			
		switch($_REQUEST['action'])
		{
			case "Save":
					
					$delivery_date = explode("/",$delivery_date);
					$delivery_date = $delivery_date[2]."-".$delivery_date[1]."-".$delivery_date[0];
					
					$sqlhelper->adddata("client_name,client_contact,clent_email,delivery_date,order_date,order_note",  "'$user_name',$client_contact,'$client_email','$delivery_date','$order_date','$order_note'");
					$order_id = mysqli_insert_id($sqlhelper->conn);
					
					if(isset($_SESSION['order']))
					  {
							foreach($_SESSION['order'] as $key => $val)
							{
								$sqlhelper1->adddata("order_id, item_id, our_cost, client_cost, product_note,quantity","$order_id, $val[0], '$val[1]', '$val[2]', '$val[3]','$val[5]'");
								$order_detail_id = mysqli_insert_id($sqlhelper1->conn);
								
								foreach($val[4] as $keys => $vals)
								{
									$sql = "INSERT INTO order_property (order_detail_id, property_id, property_value_id)
											VALUES ($order_detail_id, $vals[0], $vals[1])";	
									$db_object->execute_query($sql);
								}
							}
					  }
					// unset($_SESSION['order']);
					 //unset($_SESSION['client']);
					 //redirect("order-confirmation.php?error=Order has been added successfully");
					 if(isset($_SESSION['enquiry_id']))
					 {
						 $db_object->execute_query("UPDATE enquiry_master SET enquiry_status = 3  WHERE enquiry_id =".$_SESSION['enquiry_id']);
					 }
					redirect("order-summary.php?order_id=".$order_id);
					die();
			break;
			
			case "Modify":
					//echo "ORDER ID ::".$_SESSION['order_id'];
					//unset($_SESSION['form_action']);
					if(isset($_SESSION['order']))
					  {
						  foreach($_SESSION['order'] as $key => $val)
						  {
							$item_id .= $val[0].",";
						  }
							$item_id = rtrim($item_id,",");
							$sql_item_delete = "DELETE FROM order_detail WHERE order_id =".$_SESSION['order_id']." AND item_id NOT IN (".$item_id.")";
						  	$result = $db_object->execute_query($sql_item_delete);
							
							$sql_item = "SELECT order_detail_id, item_id FROM order_detail WHERE order_id =".$_SESSION['order_id']." AND item_id IN (".$item_id.")";
						  	$result_select = $db_object->execute_query($sql_item);
							while($value_select = mysqli_fetch_array($result_select))
								{
									$sql_item = "UPDATE order_detail SET our_cost=".$val[1].", client_cost=".$val[2].", product_note='".$val[3]."', quantity=".$val[5]." WHERE order_id =".$_SESSION['order_id']." AND item_id =".$value_select['item_id'];
									$result_select = $db_object->execute_query($sql_item);
									
									$xitem_id .= $value_select['item_id'].",";
									foreach($_SESSION['order'] as $key => $val)
						  			{
										foreach($val[4] as $keys => $vals)
										{
											$sql_item = "UPDATE order_property SET property_id=".$vals[0].", property_value_id=".$vals[1]." WHERE order_detail_id =".$value_select['order_detail_id']." AND property_id=".$vals[0];
											$result_select = $db_object->execute_query($sql_item);
										}
									}
								}
								//echo $xitem_id;
								$sql_item = "SELECT order_detail_id, item_id FROM order_detail WHERE order_id =".$_SESSION['order_id']."";
						  		$result_select = $db_object->execute_query($sql_item);
								while($xresult = mysqli_fetch_array($result_select)){
										$xresultas .= $xresult['item_id'].",";
									}

								$xitem_id = rtrim($xresultas,",");
								$arrayitem = explode(",",$xitem_id);
								
								$arrxitem = explode(",",$item_id);
								$numxitem = count($arrxitem);
								
								foreach($_SESSION['order'] as $key => $val)
						  			{
										
								if (!in_array($val[0], $arrayitem)){
									
								$sqlhelper1->adddata("order_id, item_id, our_cost, client_cost, product_note,quantity","".$_SESSION['order_id'].", $val[0], '$val[1]', '$val[2]', '$val[3]','$val[5]'");
								$order_detail_id = mysqli_insert_id($sqlhelper1->conn);

								foreach($val[4] as $keys => $vals)
								{
									$sql = "INSERT INTO order_property (order_detail_id, property_id, property_value_id) VALUES ($order_detail_id, $vals[0], $vals[1])";	
									$db_object->execute_query($sql);
								}
									echo $val[0];
								//	die();
							}
						}

						unset($_SESSION['order']);
						
					  }
			break;
			
			case"email":
				$sql ="SELECT * FROM order_master WHERE order_id=".$_REQUEST['order_id'];
				
			
   		    $value =$db_object->return_query($sql);
			
 			$username = ucwords($value['client_name']);
			$client_contact = $value['client_contact'];
			$client_email = $value['clent_email'];
			$order_date = $value['order_date'];
			$delivery_date = $value['delivery_date'];
			$product_note = ucfirst($value['product_note']);
		
	 $data .= "<br><table  align=\"center\" width=\"95%\" style=\"border:1px solid #666666\" ><tr><td>";
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
			$to = $client_email;
			
			send_email($to,$from,$reply,"Order Details from www.thepartyjungle.com",$data);
		
			redirect("order-summary.php?order_id=".$_REQUEST['order_id']);
			break;
		}
	}

	?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Admin | party jungle</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css">

</head>

<body>
<?php include("header.php"); ?>
<div class="wraper">
	<div class="container order">
  <h1 class="pageName"><u>Order Summary</u></h1>
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
   <tr>
     <td>
     
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
      
 <?php
	if($_REQUEST['order_id'] != "") 
	{
	 	$sql ="SELECT * FROM order_master WHERE order_id=".$_REQUEST['order_id'];
	}
	else
	{
		echo "<script> window.location.href='calendar.php';</script>";
 		//redirect("calendar.php");
		die();
	}
	
	  $result =$db_object->return_query($sql);
	  ?>
        <tr>
               <td width="33%" align="left">
                  <strong>
                  <label>Customer Name :</label></strong>&nbsp;&nbsp;
                  <span><?php echo $result['client_name']?></span>&nbsp;&nbsp;
               </td>
               <td width="33%" align="center">
                    <strong><label>Contact No.</label></strong>&nbsp;&nbsp;
                    <span><?php echo $result['client_contact'];?></span>&nbsp;&nbsp;
               
               </td>
              <td width="33%" align="right">
                  <strong><label>Email :</label></strong>&nbsp;&nbsp;
                  <span><?php echo $result['clent_email'];?></span>&nbsp;&nbsp;
              </td>
              
            </tr> 
      </table>
      
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
           <td width="33%" align="left">
              <p><strong><span>Ordered On :</span></strong><span> <?php echo date_format(date_create($result['order_date']),'d/m/Y');?></span></p>
           </td>
           <td width="33%" align="right">
              <p><strong><span>Delivery Date :</span></strong><span><?php echo date_format(date_create($result['delivery_date']),'d/m/Y');?></span></p>
              
           </td>
        </tr> 
      </table>
      
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
           <td width="33%" align="center">
              <p><strong><h3>Product Details</h3></strong></p>
           </td>
        </tr> 
      </table>
      
     <div class="contents order-content order-details"> 
     <?php
	 
	$sql = "SELECT * FROM order_detail od
			INNER JOIN order_master om ON om.order_id = od.order_id 
			INNER JOIN craft_items_master im ON im.item_id = od.item_id
			WHERE om.order_id = ".$_REQUEST['order_id'];
	 
				
	$result = $db_object->execute_query($sql);
	while($value = mysqli_fetch_array($result))
	{
			 
 	 ?>
       <table width="70%" border="0" cellpadding="0" style="text-align:center;" align="center" cellspacing="0" class="order-product-list">
           <tr>
               <td width="20%"><br><br>
                 <!--  <img src="images/prod-photo.jpg">-->
                  <?php
                   		if($value['item_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($value['item_photo']),140);
						}
						else
						{ 
							?>
                           
                     		 <img src="../item-photos/no-photo.png" class="prod-img" width="140" height="140" />
                   		 	<?php 
						}
					?><br>
                    <label style="text-decoration:underline; font-weight:bold"><?php echo ucfirst($value['item_name']);?></label>
               </td>
              
               
               <td width="80%" >
               <div class="order-summary">
               		<table width="100%">
                    <!--<tr>
                        <td>&nbsp;
                            
                       </td>
                      </tr>-->
                      
                      <label>&nbsp;</label>
                    	<tr>
                          
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
                               <td width="30%"><strong><?php echo ucfirst($property['property_name']);?>:</strong> <?php echo ucfirst($property_value['property_value_name']); ?> </td>
                               
                           	 <?php
									if($td_count%3 == 0)
									{
										echo "</tr><tr>";
									}
									$td_count++;
							  }
							 ?>
                             
                        </tr>
                        <tr>
                           <td colspan="3">
                               <strong> &nbsp;Product Note :</strong>
                               <?php
                                if($value['product_note'] != "")
							 {
								echo $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 echo $note = "Not Specified.";
							 }
							 ?>
                           </td>
                        </tr>
                        <?php /*?><tr style="border-top:1px solid #000;">
                                           
                         <td align="left" style="float:left;" width="30%"><strong>Quantity&nbsp;:</strong> <?php echo $value['quantity']?></td>
                         <td align="left" style="float:left;"  width="30%"><strong>Product Cost&nbsp;:</strong><?php echo "$" .$value['client_cost']?></td>
                         
                         <td align="left" style="float:left;"  width="30%"><strong>Total Price&nbsp;:</strong><?php echo "$" .$value['client_cost']*$value['quantity']?></td>
                                     
                       </tr><?php */?>
                   </table>
                   <div class="">
                    <table width="95%" style="border-top:1px solid #000;">
                        <tr>
                          <td width="30%"><strong>Quantity&nbsp;:</strong> <?php echo $value['quantity']?></td>
                         <td width="30%"><strong>Product Cost&nbsp;:</strong><?php echo "$" .$value['client_cost']?></td>
                         <td width="30%"><strong>Total Price&nbsp;:</strong><?php echo "$" .$value['client_cost']*$value['quantity']?></td>
                       </tr>
                       
                     </table>
                 </div> 
               </div>    
               </td>
           </tr>
  
      </table>
      <?php
	  $order_value = ($value['client_cost']*$value['quantity']) + $order_value;
      }
      ?>
     </div>
      <script>
			function email_invoice(order_id)
			{
				var status1 = window.confirm('Are you sure you want to email order invoice to client');
				if (status1) {
        		location.assign('order-summary.php?action=email&order_id='+order_id);
    			}
				
			}
			
			</script>
      <div class="footer-buttons select-contents">
      		<div class="buttons btn-confirm fl" style="width:500px;">
            	<a href="print_invoice.php?order_id=<?php echo $_REQUEST['order_id'] ?>" target="_new" style="    background: none repeat scroll 0 0 #424647;border: medium none;color: #FFFFFF;font-family: Arial,Helvetica,sans-serif;font-size: 14px;font-weight: bold;padding: 4px 8px;border-radius: 4px; margin-top:10px; text-align:center; width:120px; display:block;" onClick="return confirm_delete()">Print</a>
                
                <input type="button" name="action" class="order-sum-btn btn-summary" value="Email" onClick="email_invoice('<?php echo $_REQUEST['order_id'] ?>')">
                <input type="submit" value="Back to Calendar" class="order-con-btn btn-summary" onClick="window.location='calendar.php';">
            </div>
            <div class="buttons fr total-order" >
            	<p>Total Order Value : $<?php echo $order_value; ?></p>
            </div>
            <div class="clear"></div>
      </div>
      </td>
      </tr>
   </table>
  </div> 
   </div>
 </div>
  
</body>
</html>
