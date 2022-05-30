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
$client_fname   = $_SESSION['client']['client_fname'];
$client_lname   = $_SESSION['client']['client_lname'];
$user_name 	    = $client_fname." ".$client_lname;
$client_contact = $_SESSION['client']['client_contact'];

$clent_email    = $_SESSION['client']['clent_email'];
$delivery_date  = $_SESSION['client']['delivery_date'];
$order_note     = $_SESSION['client']['order_note'];
 
/*echo "<pre>";
print_r($_SESSION['order']);
die();*/

 

if(isset($_REQUEST['action']))
{
		$sqlhelper = new sqlhelper("order_master");
		$sqlhelper->db_connect($host,$username,$password,$database);
		
		$sqlhelper1 = new sqlhelper("order_detail");
		$sqlhelper1->db_connect($host,$username,$password,$database);
		
	switch($_REQUEST['action'])
	{
		case "Confirm Order":
				
				$delivery_date = explode("/",$delivery_date);
				$delivery_date = $delivery_date[2]."-".$delivery_date[1]."-".$delivery_date[0];
				
				
 				$sqlhelper->adddata("client_fname,client_lname,client_contact,clent_email,delivery_date,order_date,order_note",  "'$client_fname','$client_lname',$client_contact,'$clent_email','$delivery_date','$order_date','$order_note'");
				
				$order_id = mysqli_insert_id($sqlhelper->conn);
				
				
/*echo "<pre>";
print_r($_SESSION['order']);
die();*/

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
				 unset($_SESSION['order']);
				 unset($_SESSION['client']);
				 //redirect("order-confirmation.php?error=Order has been added successfully");
 				redirect("calendar.php?error=Order has been added successfully");
				die();
		break;
		
  		case"delete":
			
			if (isset($_REQUEST['item'])) 
			{
				unset($_SESSION['order'][$_REQUEST['item']]);
			}
			
			$count = count($_SESSION['order']);
			if($count == 0 || $count == "")
			{ 
				unset($_SESSION['order']);
				header('Location: select-item-order.php?error=Empty order list!!');
				die();
			}
			
 			header('Location: order-confirmation.php?error=Product has been removed from list');
			die();
 		break;
		
		case"Modify":
			if(isset($_REQUEST['item'])) 
			{
				$itemkey 	= $_REQUEST['item'];
				/*echo"<pre>";
				print_r($itemkey[4]);
				die();*/
				
				$itemid 	= $_SESSION['order'][$_REQUEST['item']][0];
				$ourcost 	= $_SESSION['order'][$_REQUEST['item']][1];
				$customercost = $_SESSION['order'][$_REQUEST['item']][2];
				$itemnote 	= $_SESSION['order'][$_REQUEST['item']][3];
				$quantity 	= $_SESSION['order'][$_REQUEST['item']][5];
			}
			
			/*$sortOrder=SORT_ASC;
			foreach ($_SESSION['order'] as $key => $val)
			{
				$key_arr[$key] = $val[0];
			}
			array_multisort($key_arr, $sortOrder, $_SESSION['order']);*/
			 
		break;
		
		case"Update":
			$items[0] 	 = $_SESSION['order'][$_REQUEST['itemkey']][0];
			
			$items[1]	 = $db_object->sanatize_string($_REQUEST['our_cost']); 
			$items[2] 	 = $db_object->sanatize_string($_REQUEST['customer_cost']);
			$items[3]	 = $db_object->sanatize_string($_REQUEST['item_note']);
			$items[5]	 = $db_object->sanatize_value($_REQUEST["quantity"]);
			$count = 0;
			foreach($_POST as $key => $val)
			{
				if(is_numeric($key))
				{
					$properties[$count++] = array($key,$val);					
				}
			}
			
			$items[4]	= $properties;
			
			$_SESSION['order'][$_REQUEST['itemkey']][0] = $items[0];
			$_SESSION['order'][$_REQUEST['itemkey']][1] = $items[1];
			$_SESSION['order'][$_REQUEST['itemkey']][2] = $items[2];
			$_SESSION['order'][$_REQUEST['itemkey']][3] = $items[3];
			$_SESSION['order'][$_REQUEST['itemkey']][4] = $items[4];
			$_SESSION['order'][$_REQUEST['itemkey']][5] = $items[5];
			
			/*if(isset($_SESSION['order']))
			{
				unset($_SESSION['order'][$_REQUEST['itemkey']]);
				$_SESSION['order'] = array_merge($_SESSION['order'],array($items));
			}
			else
			{
				$_SESSION['order'] = array($items);
			}*/
			
			redirect("order-confirmation.php?error=Order has been Modify successfully!");
			die();
		break;
	}
}
   
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
</head>
<body>
<div class="overlay"></div>
<div class="overlayBox" id="data-entry" style="display:none;">
  <div class="formCntr" id="library-history">
    <h2 style="background:#a2a2a2; text-align:center;">Confirm Order</h2>
    <div style="padding:5px 20px; ">
		 <div class="fldCntr order-confirm" style="border:none !important;" align="center">
           <form action="order-confirmation.php?itemkey=<?php echo $itemkey ?>" method="post" onSubmit="return form_validate_jquery('.formCntr')">
           <div class="formCntr">
            <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="product-edit">
            <?php
			$item_value = $db_object->return_query("SELECT * FROM craft_items_master WHERE item_id =".$itemid);
			?>
           <tr style="border-bottom:1px solid #000000;">
               <td width="20%"><label><strong><u><?php echo ucwords($item_value['item_name']) ?></u></strong></label><br><br>
                  <?php /*?> <img src="../item-photos/<?php echo $item_value['item_photo'] ?>" width="100" height="100" /><?php */?>
                  
                   <?php 
						if($item_value['item_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($item_value['item_photo']),140);
						}
						else
						{ 
							?>
                     		<img src="../item-photos/no-photo.png" width="140" height="140" />
                    		<?php 
						} ?>
               </td>
               <td width="80%">
               		<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td width="30%"><label>Our Cost ($)</label><br>
                                    <input name="our_cost"  type="text" value="<?php echo $ourcost ?>" title="Our Cost" validation="text"> 
                                    </td>
                                    <td width="30%"><label>Customers Cost ($)</label>
                                    <input name="customer_cost"  type="text" value="<?php echo $customercost ?>" title="Customers Cost" validation="text"> 
                                    </td>
                                    
                                    <td width="30%"><label>Quantity</label>
                                    <input name="quantity"  type="text" value="<?php echo $quantity  ?>" title="Quantity" validation="text"> 
                                    </td>
                                    
                                    
                                </tr>
                            </table>
                           </td>
                        </tr>
                        <tr>
                          <td>
                              <table width="100%">
                              <tr>
								<?php
								$tdcount = 1;
                                foreach($_SESSION['order'][$itemkey][4] as $keys => $vals)
                                {
									$sql1 = "SELECT * FROM craft_items_properties WHERE property_id=".$vals[0];
									$result1 = $db_object->return_query($sql1);
									
									$sql2 = "SELECT * FROM craft_items_properties_value WHERE property_value_id=".$vals[1];
									$result2 = $db_object->return_query($sql2);
									?>
									 
                                      <td><?php echo ucwords($result1['property_name']);?><br>
                                      <select name="<?php echo $result1['property_id'] ?>"> 
                                      <?php
                                        $sql_properties_value = "SELECT * FROM craft_items_properties_value WHERE property_id = ".$vals[0];
										$result_properties_value = $db_object->execute_query($sql_properties_value);
										while($value_properties_value = mysqli_fetch_array($result_properties_value))
										{
											?>
                                          <option value="<?php echo $value_properties_value['property_value_id'] ?>"<?php echo $value_properties_value['property_value_id'] !=  $vals[1] ? "":"selected=\"selected\"" ?>><?php echo ucwords($value_properties_value['property_value_name']);?></option>
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
                                </tr>
                            </table>
                            </td>
                       </tr>
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                
                                    <td>
                                    <textarea cols="48" rows="5" placeholder="Enter the customer products notes here" name="item_note"><?php echo $itemnote ?></textarea>
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                    </table>
               </td>
           </tr>
           
           <tr>
           	<td width="20%">&nbsp;</td>
            <td width="80%" style="border-top:1px solid #000000; padding-top:10px;">
            	<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td align="left" style="float:right;">
                                    </td>
                                    <td><input type="submit" name="action" value="Update"></td>
                                     <td><input type="button" value="Cancel" onClick="window.location='order-confirmation.php';"></td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        
                       
                 </table>       
            </td>
           </tr>
      </table>
      
      </div>
        	</form>
           </div>
   		 </div>      
     </div>
</div>
<div class="wraper">
	<div class="container order">
  <h1 class="pageName"><u>Order Confirmation</u></h1>
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
   <tr>
     <td>
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
               <td width="33%" align="left">
                  <strong>
                  <label>Customer Name :</label></strong>&nbsp;&nbsp;
                  <span><?php echo ucwords($user_name);?></span>&nbsp;&nbsp;
               </td>
              
              <td width="33%" align="right">
                  <strong><label>Contact No.</label></strong>&nbsp;&nbsp;
                  <span><?php echo $client_contact;?></span>&nbsp;&nbsp;
              </td>
              
             </tr> 
      </table>
      
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
           <td width="33%" align="left">
              <strong><span>Ordered On : </span></strong><?php echo date_format(date_create($order_date),'d/m/Y') ?>
           </td>
           <td width="33%" align="right">
              <strong><span>Delivery Date : </span></strong><?php echo $delivery_date;?>
              
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
	<div class="contents order-content"> 
     <?php
 	  if(isset($_SESSION['order']))
	  {
 			foreach($_SESSION['order'] as $key => $val)
			{
				$sql = "SELECT * FROM craft_items_master WHERE item_id = $val[0]";
				$result = $db_object->return_query($sql);
 				?>
      <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-product-list">
           <tr>
               <td width="20%" style="padding-top:10px !important;"><label><strong><u><?php echo ucwords($result['item_name']); ?></u></strong></label><br><br>
                  <?php 
				  if($result['item_status'] == "0")
					{
						if($result['item_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($result['item_photo']),140);
						}
						else
						{ 
					?>
                     	 <img src="../item-photos/no-photo.png" width="140" height="140" />
                    <?php 
						}
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
                		<table width="90%">
                        <tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td width="30%">&nbsp; 
                                    </td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        <tr>
                          <td>
                              <table width="100%">
                                 <tr>
                                  <?php
								  $tdcount = 1;
									foreach($val[4] as $keys => $vals)
									{
										$sql1 = "SELECT * FROM craft_items_properties WHERE property_id=".$vals[0];
										$result1 = $db_object->return_query($sql1);
										
										$sql2 = "SELECT * FROM craft_items_properties_value WHERE property_value_id=".$vals[1];
										$result2 = $db_object->return_query($sql2);
									?>
                                    <td width="50%"><strong><?php echo ucwords($result1['property_name']) ?> :</strong> <?php echo ucwords($result2['property_value_name']) ?></td>
                                    
                                    <!--<td>&nbsp;</td>-->
                                     <?php 
									 if($tdcount%2 == 0)
									 {
										 echo "</tr><tr>";
									 }
									 $tdcount++;
									} 
									?>
                                 </tr>
                            </table>
                           </td>
                       </tr>
                        <tr>
                           <td>
                             <table>
                                 <tr>
                                   <td>
                                    <?php echo ucfirst($val[3]); ?>
                                   </td>
                                 </tr>
                             </table>
                          </td>
                       </tr>
                    </table>
               </td>
           </tr>
          
           
           <tr>
           	<td width="20%">&nbsp;</td>
            <td width="80%" style="border-top:1px solid #000000; padding-top:10px;">
            <script>
			function remove_item(key)
			{
				var status2 = window.confirm('Are you sure you want to remove this product');
				if (status2) {
        		location.assign('order-confirmation.php?action=delete&item='+key);
    			}
				
			}
			</script>
            	<table width="95%">
                    <tr>
                       <td>
                          <table width="100%">
                              <tr>
                                  <td  width="20%"><strong>Unit Price</strong>:<?php echo "$".$val[2]; ?></td>
                                 <td  width="20%"><strong>Quantity</strong> : <?php echo $val[5]; ?></td>
                                 <td  width="20%"><strong>Total Price</strong> :<?php echo "$".($val[2]*$val[5]); ?></td>
                               </tr>
                               <tr>
                                 <td colspan="3">
                                	<div style="text-align:right; margin-top:15px;">
                                        <input type="button" value="Remove" onClick="remove_item('<?php echo $key ?>')">&nbsp;&nbsp;
                                        <input type="button" value="Edit" onClick="location.assign('order-confirmation.php?action=Modify&item=<?php echo $key ?>')">
                                    </div>
                                </td>
                              </tr>
                        </table>
                       </td>
                    </tr>
                 </table>       
            </td>
           </tr>
           
      </table>

      <?php
	  		$order_value = ($val[2]*$val[5]) + $order_value;
			
			}
	  }
	  ?>

      </div>
      <div class="footer-buttons select-contents">
      		<div class="buttons btn-confirm fl">
            <script>
			function cancel_order()
			{
				var status = window.confirm('Are you sure you want to cancel this order');
				if (status) {
        		location.assign('calendar.php');
    			}
				
			}
			
			function perform_back()
			{
				var status1 = window.confirm('Are you sure you want to go back');
				if (status1) {
        		location.assign('select-item-order.php');
    			}
				
			}
			</script>
            	<!--<input type="submit" name="action" value="Confirm Order">-->
                <input type="button" value="Back" onClick="perform_back()">&nbsp;
                <input type="submit" name="action" value="Confirm Order" onClick="location.assign('order-confirmation.php?action=Confirm Order')">&nbsp;
                <input type="button" value="Cancel Order"  onClick="cancel_order()">
                
            </div>
            <div class="buttons fr total-order" >
            	<p>Total Order Value :<?php echo "$".$order_value ?></p>
            </div>
            <div class="clear"></div>
            <?php include("footer.php"); ?>
            <?php
			if(isset($_REQUEST["action"]))		
			{	
				if($_REQUEST["action"] == "Modify")
				{
				?>
					<script type="text/javascript">
						overlayBox('data-entry')
					</script>        
				<?php	
				}
			} 
			?>
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
      </div>
      </td>
      </tr>
   </table>
  </div> 
 </div>
</body>
</html>
