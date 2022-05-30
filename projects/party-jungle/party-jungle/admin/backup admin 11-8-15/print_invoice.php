<?php
	include("admin_global.php");
	check_login();
	$file_obj = new file_manup($photos);
	$photo_obj = new img_manup($photos);
	
	if(!isset($_REQUEST['order_id']) || $_REQUEST['order_id'] == "")
	{
		redirect("calendar.php");
	}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>thepartyjungle.com</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css">

</head>

<body onLoad="window.print()">

<div class="wraper">
	<div class="container order">
  <h1 class="pageName"><u></u></h1>
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
 		redirect("calendar.php");
	}
	
	  $result =$db_object->return_query($sql);
	  ?>
        <tr>
               <td width="33%" align="left">
                  <strong>
                  <label>Customer Name :</label></strong>&nbsp;&nbsp;
                  <span><?php echo $result['client_fname']." ".$result['client_lname'];?></span>&nbsp;&nbsp;
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
              <p><strong><span>Ordered On :</span></strong> <?php echo date_format(date_create($result['order_date']),'d/m/Y');?></p>
           </td>
           <td width="33%" align="right">
              <p><strong><span>Delivery Date :</span></strong><?php echo date_format(date_create($result['delivery_date']),'d/m/Y');?></p>
              
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
       <table width="90%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-product-list">
           <tr>
               <td width="20%" style="padding:10px !important;"><label><strong><u><?php echo ucfirst($value['item_name']);?></u></strong></label><br><br>
                 <!--  <img src="images/prod-photo.jpg">-->
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
               </td>
              
               
               <td width="80%" >
               		<table style="padding:0 !important" width="100%">
                    <tr>
                        <td>&nbsp;
                            
                       </td>
                      </tr>
                    	<tr>
                           <td>
                           <table width="100%">
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
                               <td width="50%"><strong><?php echo ucfirst($property['property_name']);?>:</strong> <?php echo ucfirst($property_value['property_value_name']); ?> </td>
                               
                           	 <?php
									if($td_count%2 == 0)
									{
										echo "</tr><tr>";
									}
									$td_count++;
							  }
							 ?>
                             </tr>
                           </table></td>
                        </tr>
                        <tr>
                           <td height="50">
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
                        <tr>
                            <td width="70%" style="border-top:1px solid #000000;">
                                <table width="100%">
                                      <tr>
                                           
                                           <td  align="left" style="float:left;" width="30%"><strong>Quantity&nbsp;:</strong> <?php echo $value['quantity']?></td>
                                           <td align="left" style="float:left;"  width="30%"><strong>Product Cost&nbsp;:</strong><?php echo "$" .$value['client_cost']?></td>
                                           
                                           <td align="left" style="float:left;"  width="30%"><strong>Total Price&nbsp;:</strong><?php echo "$" .$value['client_cost']*$value['quantity']?></td>
                                      </tr>
                                </table>
                            </td>
                       </tr>
                   </table>
               </td>
           </tr>
  
      </table>
      <?php
	  $order_value = ($value['client_cost']*$value['quantity']) + $order_value;
      }
      ?>
     </div>
      
      </td>
      </tr>
      <tr>
      <td><div align="center">
            	<strong style="font-size:18">Total Order Value : $<?php echo $order_value; ?></strong>
            </div></td>
      </tr>
      <tr>
      <td>&nbsp;</td>
      </tr>
   </table>
  </div> 
   </div>
 </div>
  
</body>
</html>
