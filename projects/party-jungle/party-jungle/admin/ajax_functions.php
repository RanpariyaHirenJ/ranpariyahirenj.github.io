<?php 
include("admin_global.php");
$data = "";
$function = $_REQUEST["function"];

$file_obj = new file_manup($photos);
$photo_obj = new img_manup($photos);

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
	
switch($function)
{
	case"order_created":
	
		$status = $_REQUEST['order_status'];
		$delivery_date = $_REQUEST['day'];
		//$delivery_date = date('Y-m')."-".$day;
		
		$frmcount = 0;
 		$sql = "SELECT * FROM order_detail od
				INNER JOIN order_master om ON om.order_id = od.order_id 
				INNER JOIN craft_items_master im ON im.item_id = od.item_id 
				WHERE od.product_status = $status AND om.delivery_date = '$delivery_date'";
		$result = $db_object->execute_query($sql);
		
		$sql1 ="SELECT * FROM order_master where delivery_date = '$delivery_date'";
		$result1 = $db_object->return_query($sql1);
		$order_date = $result1['order_date'] ;
		//l - 
		
		$data ="<h2 style=\"background:#FF0000;padding:12px 16px;font-size:12px\"><span style=\"padding-right:65px\">Created On : ".date_format(date_create( $result1['order_date']),'d M Y')."</span>
  		<span style=\"padding-right:65px\">Delivery On : ".date_format(date_create($delivery_date ),'d M Y')."</span>
    	<span style=\"padding-right:10px\">Status : Order Created</span></h2>
		<div class=\"formCntr\"> 
		
    <div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
				
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
			
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
			   <td style=\"width:98%; border-bottom:1px solid #ccc;\" colspan=\"2\">
			   <label><strong><u>".ucfirst($value['client_name'])."</u></strong>  (".$value['client_contact'].")</label>
			   <span style=\"float: right;\"><a href=\"viewall.php?order_id=".$value['order_id']."\">View Full Order</a></span>
			   </td>
			   
			   
			   </tr>
			   <tr>
				   <td width=\"20%\" style=\"text-align:center; \"><br>
					   ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
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
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							 if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
						</table>
				   </td>
			   </tr>
			   <tr>
				<td width=\"80%\" colspan=\"2\" style=\"border-top:1px solid #CCC;\">
					<table>
							<tr>
							   <td style=\"padding:0px\">
							   <iframe id=\"info_save".$value['order_detail_id']."\" name=\"info_save".$value['order_detail_id']."\" style=\"display:none;\"></iframe>
								  <form action=\"postdata.php?action=update&order_detail_id=".$value['order_detail_id']."\" method=\"post\" id=\"item_form".$frmcount."\" target=\"info_save".$value['order_detail_id']."\">
								  <table width=\"100%\">
									 <tr>
										<td width=\"350px\" align=\"left\" style=\"padding:0px\">
										<strong>Our Cost :</strong> ".$value['our_cost']."$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Qunatity :</strong> ".$value['quantity']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Total = </strong>".$value['our_cost']*$value['quantity']."$</span></td>
										<td align=\"right\" width=\"380px\">
										<strong style=\" margin:01px 0 0 -80px;\">Select State</strong>
										<select name=\"order_status\">
									  <option value=\"1\" ".$db_object->return_compare($value['product_status'],1,"selected=\"selected\"","").">Order Created</option>
									  <option value=\"2\" ".$db_object->return_compare($value['product_status'],2,"selected=\"selected\"","").">Supply Ordered</option>
									  <option value=\"3\" ".$db_object->return_compare($value['product_status'],3,"selected=\"selected\"","").">Supply Received</option>
									  <option value=\"4\" ".$db_object->return_compare($value['product_status'],4,"selected=\"selected\"","").">Items Designed</option>
									  <option value=\"5\" ".$db_object->return_compare($value['product_status'],5,"selected=\"selected\"","").">Order Ready</option>
									  <option value=\"6\" ".$db_object->return_compare($value['product_status'],6,"selected=\"selected\"","").">Payment Pending</option>
									  <option value=\"7\" ".$db_object->return_compare($value['product_status'],7,"selected=\"selected\"","").">Payment Received</option>
											</select>
										</td>
									</tr>
								</table>
								</form>
							   </td>
							</tr>
					 </table>      
				</td>
			   <tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#FF0000;padding:6px 10px; text-align:center;\">
	 <input type=\"button\" name=\"action\" value=\"Done\" style=\"margin-right:10px;padding:4px 25px\" onClick=\"submit_order_form(".$frmcount.")\" class=\"action-button\"> 
	 <input type=\"submit\" name=\"action\" value=\"Close\" style=\"margin-right:10px;\" onClick=\"window.location='calendar.php';\" class=\"action-button\"></h2>";
	break;
	
	
	case"order_supply":
	
		$status = $_REQUEST['order_status'];
		$delivery_date = $_REQUEST['day'];
		 $frmcount = 0;
		$sql = "SELECT * FROM order_detail od
				INNER JOIN order_master om ON om.order_id = od.order_id 
				INNER JOIN craft_items_master im ON im.item_id = od.item_id 
				WHERE od.product_status = $status AND om.delivery_date = '$delivery_date'";
		$result = $db_object->execute_query($sql);
		
		$sql2 ="SELECT * FROM order_master where delivery_date = '$delivery_date'";
		$result2 = $db_object->return_query($sql2);
		$order_date = $result2['order_date'] ;
		
		$data = "<h2 style=\"background:#FF6B01;padding:12px 16px;font-size:12px\"><span style=\"padding-right:65px\">Created On : ".date_format(date_create( $result2['order_date']),'d M Y')."</span>
  		<span style=\"padding-right:65px\">Delivery On : ".date_format(date_create($delivery_date ),'d M Y')."</span>
    	<span style=\"padding-right:10px\">Status : Supply Ordered</span></h2>
		<div class=\"formCntr\">
    	<div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
			   <td style=\"width:98%; border-bottom:1px solid #ccc;\" colspan=\"2\">
			   <label><strong><u>".ucfirst($value['client_name'])."</u></strong>  (".$value['client_contact'].")</label>
			    <span style=\"float: right;\"><a href=\"viewall.php?order_id=".$value['order_id']."\">View Full Order</a></span>
			   </td>
			   
			    
			   </tr>
			   <tr>
				   <td width=\"20%\" style=\"padding-top:10px !important;text-align:center; \"><br>
					   ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
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
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							  if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
						</table>
				   </td>
			   </tr>
			   <tr>
				   
				<td width=\"80%\" colspan=\"2\" style=\"border-top:1px solid #CCC;\">
					<table>
							<tr>
							   <td>
							   <iframe id=\"info_save".$value['order_detail_id']."\" name=\"info_save".$value['order_detail_id']."\" style=\"display:none;\"></iframe>
								  <form action=\"postdata.php?action=update&order_detail_id=".$value['order_detail_id']."\" method=\"post\" id=\"item_form".$frmcount."\" target=\"info_save".$value['order_detail_id']."\">
								  <table width=\"100%\">
									 <tr>
										<td width=\"350px\" align=\"left\" style=\"padding:0px\">
										<strong>Our Cost :</strong> ".$value['our_cost']."$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Qunatity :</strong> ".$value['quantity']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Total = </strong>".$value['our_cost']*$value['quantity']."$</span></td>
										<td align=\"right\" width=\"380px\">
										<strong style=\" margin:01px 0 0 -80px;\">Select State</strong>
										<select name=\"order_status\">
									  <option value=\"1\" ".$db_object->return_compare($value['product_status'],1,"selected=\"selected\"","").">Order Created</option>
									  <option value=\"2\" ".$db_object->return_compare($value['product_status'],2,"selected=\"selected\"","").">Supply Ordered</option>
									  <option value=\"3\" ".$db_object->return_compare($value['product_status'],3,"selected=\"selected\"","").">Supply Received</option>
									  <option value=\"4\" ".$db_object->return_compare($value['product_status'],4,"selected=\"selected\"","").">Items Designed</option>
									  <option value=\"5\" ".$db_object->return_compare($value['product_status'],5,"selected=\"selected\"","").">Order Ready</option>
									  <option value=\"6\" ".$db_object->return_compare($value['product_status'],6,"selected=\"selected\"","").">Payment Pending</option>
									  <option value=\"7\" ".$db_object->return_compare($value['product_status'],7,"selected=\"selected\"","").">Payment Received</option>
											</select>
										</td>
									</tr>
								</table>
								</form>
							   </td>
							</tr>
					 </table>      
				</td>
			   <tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#FF6B01;padding:6px 10px; text-align:center;\">
	 <input type=\"button\" name=\"action\" value=\"Done\" style=\"margin-right:10px;padding:4px 25px\" onClick=\"submit_order_form(".$frmcount.")\" class=\"action-button\"> 
	 <input type=\"submit\" name=\"action\" value=\"Close\" style=\"margin-right:10px;\" onClick=\"window.location='calendar.php';\" class=\"action-button\"></h2>";
	break;
	
	
	case"supply_received":
	
		$status = $_REQUEST['order_status'];
		$delivery_date = $_REQUEST['day'];
		 $frmcount = 0;
		$sql = "SELECT * FROM order_detail od
				INNER JOIN order_master om ON om.order_id = od.order_id 
				INNER JOIN craft_items_master im ON im.item_id = od.item_id 
				WHERE od.product_status = $status AND om.delivery_date = '$delivery_date'";
		$result = $db_object->execute_query($sql);
		
		$sql3 ="SELECT * FROM order_master where delivery_date = '$delivery_date'";
		$result3 = $db_object->return_query($sql3);
		$order_date = $result3['order_date'] ;
		
		$data = "<h2 style=\"background:#5EB6E7;padding:12px 16px;font-size:12px\"><span style=\"padding-right:65px\">Created On : ".date_format(date_create( $result3['order_date']),'d M Y')."</span>
  		<span style=\"padding-right:65px\">Delivery On : ".date_format(date_create($delivery_date ),'d M Y')."</span>
    	<span style=\"padding-right:10px\">Status : Supply Received</span></h2>
		<div class=\"formCntr\">
   		<div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
			   <td style=\"width:98%; border-bottom:1px solid #CCC;\" colspan=\"2\">
			   <label><strong><u>".ucfirst($value['client_name'])."</u></strong>  (".$value['client_contact'].")</label>
			    <span style=\"float: right;\"><a href=\"viewall.php?order_id=".$value['order_id']."\">View Full Order</a></span>
			   </td>
			    
			   </tr>
			   <tr>
				   <td width=\"20%\" style=\"padding-top:10px !important;text-align:center; \"><br>
					   ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
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
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							   if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
						</table>
				   </td>
			   </tr>
			   <tr>
				 
				<td width=\"80%\" colspan=\"2\" style=\"border-top:1px solid #CCC;\">
					<table>
							<tr>
							   <td>
							   <iframe id=\"info_save".$value['order_detail_id']."\" name=\"info_save".$value['order_detail_id']."\" style=\"display:none;\"></iframe>
								  <form action=\"postdata.php?action=update&order_detail_id=".$value['order_detail_id']."\" method=\"post\" id=\"item_form".$frmcount."\" target=\"info_save".$value['order_detail_id']."\">
								  <table width=\"100%\">
									 <tr>
										<td width=\"350px\" align=\"left\" style=\"padding:0px\">
										<strong>Our Cost :</strong> ".$value['our_cost']."$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Qunatity :</strong> ".$value['quantity']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Total = </strong>".$value['our_cost']*$value['quantity']."$</span></td>
										<td align=\"right\" width=\"380px\">
										<strong style=\" margin:01px 0 0 -80px;\">Select State</strong>
										<select name=\"order_status\">
									  <option value=\"1\" ".$db_object->return_compare($value['product_status'],1,"selected=\"selected\"","").">Order Created</option>
									  <option value=\"2\" ".$db_object->return_compare($value['product_status'],2,"selected=\"selected\"","").">Supply Ordered</option>
									  <option value=\"3\" ".$db_object->return_compare($value['product_status'],3,"selected=\"selected\"","").">Supply Received</option>
									  <option value=\"4\" ".$db_object->return_compare($value['product_status'],4,"selected=\"selected\"","").">Items Designed</option>
									  <option value=\"5\" ".$db_object->return_compare($value['product_status'],5,"selected=\"selected\"","").">Order Ready</option>
									  <option value=\"6\" ".$db_object->return_compare($value['product_status'],6,"selected=\"selected\"","").">Payment Pending</option>
									  <option value=\"7\" ".$db_object->return_compare($value['product_status'],7,"selected=\"selected\"","").">Payment Received</option>
											</select>
										</td>
									</tr>
								</table>
								</form>
							   </td>
							</tr>
					 </table>      
				</td>
			   <tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#5EB6E7;padding:6px 10px; text-align:center;\">
	 <input type=\"button\" name=\"action\" value=\"Done\" style=\"margin-right:10px;padding:4px 25px\" onClick=\"submit_order_form(".$frmcount.")\" class=\"action-button\"> 
	 <input type=\"submit\" name=\"action\" value=\"Close\" style=\"margin-right:10px;\" onClick=\"window.location='calendar.php';\" class=\"action-button\"></h2>";
	break;
	
	
	
	case"order_designed":
	
		$status = $_REQUEST['order_status'];
		$delivery_date = $_REQUEST['day'];
		 $frmcount = 0;
		$sql = "SELECT * FROM order_detail od
				INNER JOIN order_master om ON om.order_id = od.order_id 
				INNER JOIN craft_items_master im ON im.item_id = od.item_id 
				WHERE od.product_status = $status AND om.delivery_date = '$delivery_date'";
		$result = $db_object->execute_query($sql);
		
		
		$sql4 ="SELECT * FROM order_master where delivery_date = '$delivery_date'";
		$result4 = $db_object->return_query($sql4);
		$order_date = $result4['order_date'] ;
		
		$data = "<h2 style=\"background:#AE08FF;padding:12px 16px;font-size:12px\"><span style=\"padding-right:65px\">Created On : ".date_format(date_create( $result4['order_date']),'d M Y')."</span>
  		<span style=\"padding-right:65px\">Delivery On : ".date_format(date_create($delivery_date ),'d M Y')."</span>
    	<span style=\"padding-right:10px\">Status : Items Designed</span></h2>
		<div class=\"formCntr\">
   		 <div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
			   <td style=\"width:98%; border-bottom:1px solid #CCC;\" colspan=\"2\">
			   <label><strong><u>".ucfirst($value['client_name'])."</u></strong>  (".$value['client_contact'].")</label>
			    <span style=\"float: right;\"><a href=\"viewall.php?order_id=".$value['order_id']."\">View Full Order</a></span>
			   </td>
			  
			   </tr>
			   <tr>
				   <td width=\"20%\" style=\"padding-top:10px !important;text-align:center; \"><br>
					  ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
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
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							   if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
						</table>
				   </td>
			   </tr>
			   <tr>
				   
				<td width=\"80%\" colspan=\"2\" style=\"border-top:1px solid #CCC;\">
					<table>
							<tr>
							   <td>
							   <iframe id=\"info_save".$value['order_detail_id']."\" name=\"info_save".$value['order_detail_id']."\" style=\"display:none;\"></iframe>
								  <form action=\"postdata.php?action=update&order_detail_id=".$value['order_detail_id']."\" method=\"post\" id=\"item_form".$frmcount."\" target=\"info_save".$value['order_detail_id']."\">
								  <table width=\"100%\">
									 <tr>
										<td width=\"350px\" align=\"left\" style=\"padding:0px\">
										<strong>Our Cost :</strong> ".$value['our_cost']."$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Qunatity :</strong> ".$value['quantity']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Total = </strong>".$value['our_cost']*$value['quantity']."$</span></td>
										<td align=\"right\" width=\"380px\">
										<strong style=\" margin:01px 0 0 -80px;\">Select State</strong>
										<select name=\"order_status\">
									  <option value=\"1\" ".$db_object->return_compare($value['product_status'],1,"selected=\"selected\"","").">Order Created</option>
									  <option value=\"2\" ".$db_object->return_compare($value['product_status'],2,"selected=\"selected\"","").">Supply Ordered</option>
									  <option value=\"3\" ".$db_object->return_compare($value['product_status'],3,"selected=\"selected\"","").">Supply Received</option>
									  <option value=\"4\" ".$db_object->return_compare($value['product_status'],4,"selected=\"selected\"","").">Items Designed</option>
									  <option value=\"5\" ".$db_object->return_compare($value['product_status'],5,"selected=\"selected\"","").">Order Ready</option>
									  <option value=\"6\" ".$db_object->return_compare($value['product_status'],6,"selected=\"selected\"","").">Payment Pending</option>
									  <option value=\"7\" ".$db_object->return_compare($value['product_status'],7,"selected=\"selected\"","").">Payment Received</option>
											</select>
										</td>
									</tr>
								</table>
								</form>
							   </td>
							</tr>
					 </table>      
				</td>
			   <tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#AE08FF;padding:6px 10px; text-align:center;\">
	 <input type=\"button\" name=\"action\" value=\"Done\" style=\"margin-right:10px;padding:4px 25px\" onClick=\"submit_order_form(".$frmcount.")\" class=\"action-button\"> 
	 <input type=\"submit\" name=\"action\" value=\"Close\" style=\"margin-right:10px;\" onClick=\"window.location='calendar.php';\" class=\"action-button\"></h2>";
	break;
	
	
	case"order_ready":
	
		$status = $_REQUEST['order_status'];
		$delivery_date = $_REQUEST['day'];
		 $frmcount = 0;
		$sql = "SELECT * FROM order_detail od
				INNER JOIN order_master om ON om.order_id = od.order_id 
				INNER JOIN craft_items_master im ON im.item_id = od.item_id 
				WHERE od.product_status = $status AND om.delivery_date = '$delivery_date'";
		$result = $db_object->execute_query($sql);
		
		$sql5 ="SELECT * FROM order_master where delivery_date = '$delivery_date'";
		$result5 = $db_object->return_query($sql5);
		$order_date = $result5['order_date'] ;
		
		$data = "<h2 style=\"background:#FF00FF;padding:12px 16px;font-size:12px\"><span style=\"padding-right:65px\">Created On : ".date_format(date_create( $result5['order_date']),'d M Y')."</span>
  		<span style=\"padding-right:65px\">Delivery On : ".date_format(date_create($delivery_date ),'d M Y')."</span>
    	<span style=\"padding-right:10px\">Status : Order Ready</span></h2>
		<div class=\"formCntr\">
    	<div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
			   <td style=\"width:98%; border-bottom:1px solid #CCC;\" colspan=\"2\">
			   <label><strong><u>".ucfirst($value['client_name'])."</u></strong>  (".$value['client_contact'].")</label>
			    <span style=\"float: right;\"><a href=\"viewall.php?order_id=".$value['order_id']."\">View Full Order</a></span>
			   </td>
			   
			  
			   </tr>
			   <tr>
				   <td width=\"20%\" style=\"padding-top:10px !important;text-align:center; \"><br>
					  ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
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
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							   if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
						</table>
				   </td>
			   </tr>
			   <tr>
				 
				<td width=\"80%\" colspan=\"2\" style=\"border-top:1px solid #CCC;\">
					<table>
							<tr>
							   <td>
							   <iframe id=\"info_save".$value['order_detail_id']."\" name=\"info_save".$value['order_detail_id']."\" style=\"display:none;\"></iframe>
								  <form action=\"postdata.php?action=update&order_detail_id=".$value['order_detail_id']."\" method=\"post\" id=\"item_form".$frmcount."\" target=\"info_save".$value['order_detail_id']."\">
								  <table width=\"100%\">
									 <tr>
										<td width=\"350px\" align=\"left\" style=\"padding:0px\">
										<strong>Our Cost :</strong> ".$value['our_cost']."$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Qunatity :</strong> ".$value['quantity']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Total = </strong>".$value['our_cost']*$value['quantity']."$</span></td>
										<td align=\"right\" width=\"380px\">
										<strong style=\" margin:01px 0 0 -80px;\">Select State</strong>
										<select name=\"order_status\">
									  <option value=\"1\" ".$db_object->return_compare($value['product_status'],1,"selected=\"selected\"","").">Order Created</option>
									  <option value=\"2\" ".$db_object->return_compare($value['product_status'],2,"selected=\"selected\"","").">Supply Ordered</option>
									  <option value=\"3\" ".$db_object->return_compare($value['product_status'],3,"selected=\"selected\"","").">Supply Received</option>
									  <option value=\"4\" ".$db_object->return_compare($value['product_status'],4,"selected=\"selected\"","").">Items Designed</option>
									  <option value=\"5\" ".$db_object->return_compare($value['product_status'],5,"selected=\"selected\"","").">Order Ready</option>
									  <option value=\"6\" ".$db_object->return_compare($value['product_status'],6,"selected=\"selected\"","").">Payment Pending</option>
									  <option value=\"7\" ".$db_object->return_compare($value['product_status'],7,"selected=\"selected\"","").">Payment Received</option>
											</select>
										</td>
									</tr>
								</table>
								</form>
							   </td>
							</tr>
					 </table>      
				</td>
			   <tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#FF00FF;padding:6px 10px; text-align:center;\">
	 <input type=\"button\" name=\"action\" value=\"Done\" style=\"margin-right:10px;padding:4px 25px\" onClick=\"submit_order_form(".$frmcount.")\" class=\"action-button\"> 
	 <input type=\"submit\" name=\"action\" value=\"Close\" style=\"margin-right:10px;\" onClick=\"window.location='calendar.php';\" class=\"action-button\"></h2>";
	break;
	
	
	
	case"payment_pending":
	
		$status = $_REQUEST['order_status'];
		$delivery_date = $_REQUEST['day'];
		$frmcount = 0;
		$sql = "SELECT * FROM order_detail od
				INNER JOIN order_master om ON om.order_id = od.order_id 
				INNER JOIN craft_items_master im ON im.item_id = od.item_id 
				WHERE od.product_status = $status AND om.delivery_date = '$delivery_date'";
		$result = $db_object->execute_query($sql);
		
		$sql6 ="SELECT * FROM order_master where delivery_date = '$delivery_date'";
		$result6 = $db_object->return_query($sql6);
		$order_date = $result6['order_date'] ;
		
		$data = "<h2 style=\"background:#4440D7;padding:12px 16px;font-size:12px\"><span style=\"padding-right:65px\">Created On : ".date_format(date_create( $result6['order_date']),'d M Y')."</span>
  		<span style=\"padding-right:65px\">Delivery On : ".date_format(date_create($delivery_date ),'d M Y')."</span>
    	<span style=\"padding-right:10px\">Status : Payment Pending</span></h2>
		<div class=\"formCntr\">
    	<div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
			   <td style=\"width:98%; border-bottom:1px solid #CCC;\" colspan=\"2\">
			   <label><strong><u>".ucfirst($value['client_name'])."</u></strong>  (".$value['client_contact'].")</label>
			    <span style=\"float: right;\"><a href=\"viewall.php?order_id=".$value['order_id']."\">View Full Order</a></span>
			   </td>
			   
			   </tr>
			   <tr>
				   <td width=\"20%\" style=\"padding-top:10px !important;text-align:center; \"><br>
					   ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
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
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							   if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
						</table>
				   </td>
			   </tr>
			   <tr>
				 
				<td width=\"80%\" colspan=\"2\" style=\"border-top:1px solid #CCC;\">
					<table>
							<tr>
							   <td>
							   <iframe id=\"info_save".$value['order_detail_id']."\" name=\"info_save".$value['order_detail_id']."\" style=\"display:none;\"></iframe>
								  <form action=\"postdata.php?action=update&order_detail_id=".$value['order_detail_id']."\" method=\"post\" id=\"item_form".$frmcount."\" target=\"info_save".$value['order_detail_id']."\">
								  <table width=\"100%\">
									 <tr>
										<td width=\"350px\" align=\"left\" style=\"padding:0px\">
										<strong>Our Cost :</strong> ".$value['our_cost']."$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Qunatity :</strong> ".$value['quantity']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Total = </strong>".$value['our_cost']*$value['quantity']."$</span></td>
										<td align=\"right\" width=\"380px\">
										<strong style=\" margin:01px 0 0 -80px;\">Select State</strong>
										<select name=\"order_status\">
									  <option value=\"1\" ".$db_object->return_compare($value['product_status'],1,"selected=\"selected\"","").">Order Created</option>
									  <option value=\"2\" ".$db_object->return_compare($value['product_status'],2,"selected=\"selected\"","").">Supply Ordered</option>
									  <option value=\"3\" ".$db_object->return_compare($value['product_status'],3,"selected=\"selected\"","").">Supply Received</option>
									  <option value=\"4\" ".$db_object->return_compare($value['product_status'],4,"selected=\"selected\"","").">Items Designed</option>
									  <option value=\"5\" ".$db_object->return_compare($value['product_status'],5,"selected=\"selected\"","").">Order Ready</option>
									  <option value=\"6\" ".$db_object->return_compare($value['product_status'],6,"selected=\"selected\"","").">Payment Pending</option>
									  <option value=\"7\" ".$db_object->return_compare($value['product_status'],7,"selected=\"selected\"","").">Payment Received</option>
											</select>
										</td>
									</tr>
								</table>
								</form>
							   </td>
							</tr>
					 </table>      
				</td>
			   <tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#4440D7;padding:6px 10px; text-align:center;\">
	 <input type=\"button\" name=\"action\" value=\"Done\" style=\"margin-right:10px;padding:4px 25px\" onClick=\"submit_order_form(".$frmcount.")\" class=\"action-button\"> 
	 <input type=\"submit\" name=\"action\" value=\"Close\" style=\"margin-right:10px;\" onClick=\"window.location='calendar.php';\" class=\"action-button\"></h2>";
	break;
	
	
	
	case"payment_recieved":
	
		$status = $_REQUEST['order_status'];
		$delivery_date = $_REQUEST['day'];
		 $frmcount = 0;
		$sql = "SELECT * FROM order_detail od
				INNER JOIN order_master om ON om.order_id = od.order_id 
				INNER JOIN craft_items_master im ON im.item_id = od.item_id 
				WHERE od.product_status = $status AND om.delivery_date = '$delivery_date'";
		$result = $db_object->execute_query($sql);
		
		$sql7 ="SELECT * FROM order_master where delivery_date = '$delivery_date'";
		$result7 = $db_object->return_query($sql7);
		$order_date = $result7['order_date'] ;
		
		$data = "<h2 style=\"background:#169416;padding:12px 16px;font-size:12px\"><span style=\"padding-right:65px\">Created On : ".date_format(date_create( $result7['order_date']),'d M Y')."</span>
  		<span style=\"padding-right:65px\">Delivery On : ".date_format(date_create($delivery_date ),'d M Y')."</span>
    	<span style=\"padding-right:10px\">Status : Payment Received</span></h2>
		<div class=\"formCntr\">
    	<div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
			   	<td style=\"width:98%; border-bottom:1px solid #CCC;\" colspan=\"2\">
			   	<label><strong><u>".ucfirst($value['client_name'])."</u></strong>  (".$value['client_contact'].")</label>
			    <span style=\"float: right;\"><a href=\"viewall.php?order_id=".$value['order_id']."\">View Full Order</a></span>
			   </td>
			   </tr>
			   <tr>
				   <td width=\"20%\" style=\"padding-top:10px !important;text-align:center; \"><br>
					   ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
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
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							   if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
						</table>
				   </td>
			   </tr>
			   <tr>
				  
				<td width=\"80%\" colspan=\"2\" style=\"border-top:1px solid #CCC;padding:0px\">
					<table>
							<tr>
							   <td style=\"padding:0px\">
							   <iframe id=\"info_save".$value['order_detail_id']."\" name=\"info_save".$value['order_detail_id']."\" style=\"display:none;\"></iframe>
								  <form action=\"postdata.php?action=update&order_detail_id=".$value['order_detail_id']."\" method=\"post\" id=\"item_form".$frmcount."\" target=\"info_save".$value['order_detail_id']."\">
								  <table width=\"100%\">
									 <tr>
										<td width=\"350px\" align=\"left\" style=\"padding:0px\">
										<strong>Our Cost :</strong> ".$value['our_cost']."$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Qunatity :</strong> ".$value['quantity']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Total = </strong>".$value['our_cost']*$value['quantity']."$</span></td>
										<td align=\"right\" width=\"380px\">
										<strong style=\" margin:01px 0 0 -80px;\">Select State</strong>
										<select name=\"order_status\">
									  <option value=\"1\" ".$db_object->return_compare($value['product_status'],1,"selected=\"selected\"","").">Order Created</option>
									  <option value=\"2\" ".$db_object->return_compare($value['product_status'],2,"selected=\"selected\"","").">Supply Ordered</option>
									  <option value=\"3\" ".$db_object->return_compare($value['product_status'],3,"selected=\"selected\"","").">Supply Received</option>
									  <option value=\"4\" ".$db_object->return_compare($value['product_status'],4,"selected=\"selected\"","").">Items Designed</option>
									  <option value=\"5\" ".$db_object->return_compare($value['product_status'],5,"selected=\"selected\"","").">Order Ready</option>
									  <option value=\"6\" ".$db_object->return_compare($value['product_status'],6,"selected=\"selected\"","").">Payment Pending</option>
									  <option value=\"7\" ".$db_object->return_compare($value['product_status'],7,"selected=\"selected\"","").">Payment Received</option>
											</select>
										</td>
									</tr>
								</table>
								</form>
							   </td>
							</tr>
					 </table>      
				</td>
			   <tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#169416;padding:6px 10px; text-align:center;\">
	 <input type=\"button\" name=\"action\" value=\"Done\" style=\"margin-right:10px;padding:4px 25px\" onClick=\"submit_order_form(".$frmcount.")\" class=\"action-button\"> 
	 <input type=\"submit\" name=\"action\" value=\"Close\" style=\"margin-right:10px;\" onClick=\"window.location='calendar.php';\" class=\"action-button\"></h2>";
	break;
	
	case"enquiry_details":
		$enquiry_id = $_REQUEST['enquiry_id'];
		 
		$sql = "SELECT * FROM enquiry_detail ed
				INNER JOIN craft_items_master cim ON cim.item_id = ed.item_id 
				WHERE ed.enquiry_id = $enquiry_id";
		$result = $db_object->execute_query($sql);
		
		$data = "<div class=\"formCntr\">
		<h2 style=\"background:#999; text-align:center;\">Enquiry Detail</h2>
		<div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
				   <td width=\"20%\" style=\"padding-top:10px !important;text-align:center; \"><br>
					   ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
							 <tr>";
							 $td_count = 1;
							 $sql_property = "SELECT property_id,property_value_id FROM enquiry_property ep
											 WHERE ep.enquiry_detail_id=".$value['enquiry_detail_id'];
							 $result_property = $db_object->execute_query($sql_property);
							 while($value_property = mysqli_fetch_array($result_property))
							 {
								 $property = $db_object->return_query("SELECT property_name 
																		FROM craft_items_properties 
																		WHERE property_id=".$value_property['property_id']);
																		
								 $property_value = $db_object->return_query("SELECT property_value_name 
																			FROM craft_items_properties_value 
																			WHERE property_value_id=".$value_property['property_value_id']);
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							   if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
							<tr>
						   		<td><strong> &nbsp;Quantity :</strong> ".$value['quantity']."</td>
						   </tr>
						</table>
				   </td>
			   </tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#999;padding:6px 10px; text-align:center;\">&nbsp;</h2>";
	break;
	
	case"order_details":
		$order_id = $_REQUEST['order_id'];
		 
		$sql = "SELECT * FROM order_detail od
				INNER JOIN craft_items_master cim ON cim.item_id = od.item_id 
				WHERE od.order_id = $order_id";
		$result = $db_object->execute_query($sql);
		
		$data = "<div class=\"formCntr\">
		<h2 style=\"background:#999; text-align:center;\">Order Detail</h2>
		<div style=\"padding:5px 20px; \">
		 <div class=\"fldCntr order-confirm\" style=\"border:none !important;\" align=\"center\">";
		 
		 while($value = mysqli_fetch_array($result))
		 {
			if($value['item_photo'] != "")
			{
				if(file_exists("../item-photos/".get_thumbnail($value["item_photo"])))
				{
					$product_img = "<img src=\"../item-photos/".get_thumbnail($value['item_photo'])."\" height=\"120\" width=\"120\">";
				}
				else
				{
					$product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				}
			}
			else
			{ 
				
				 $product_img ="<img src=\"../item-photos/no-photo.png\" width=\"120\" height=\"120\" /> ";
				
			}
			
			
			
            $data .= "
			<table width=\"100%\" border=\"0\" cellpadding=\"0\" align=\"center\" cellspacing=\"0\" class=\"order-list\">
			   <tr>
				   <td width=\"20%\" style=\"padding-top:10px !important;text-align:center; \"><br>
					   ".$product_img."<label><strong><u>".ucfirst($value['item_name'])."</u></strong></label>
				   </td>
				   <td width=\"80%\" style=\"padding:0px\">
						   <table width=\"90%\">
							<tr>
							   <td style=\"padding:0px\">&nbsp;</td>
							</tr>
							<tr>
						  <td>
							  <table width=\"100%\">
							  
							 <tr>";
							 $td_count = 1;
							 $sql_property = "SELECT op.property_id,op.property_value_id FROM order_property op
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
																			
								$data .="<td width=\"30%\" style=\"padding: 4px;\"><strong>".ucfirst($property['property_name'])." :</strong> ".ucfirst($property_value['property_value_name'])."</td>";
								if($td_count%3 == 0)
								{
									$data .="</tr><tr>";
								}
								$td_count++;
							 }
							 
							   if($value['product_note'] != "")
							 {
								 $note = ucfirst($value['product_note']);
							 }
							 else
							 {
								 $note = "Not Specified.";
							 }
							  
							$data .= "</tr>
							</table>
						   </td>
						   </tr>
							<tr>
							   <td>
								 <table width=\"100%\" >
									<tr>
										<td style=\"padding: 4px;\"><strong>Order Note :</strong> ".$note."</td>
								   </tr>
								</table>
							  </td>
							</tr>
							<tr>
						   		<td><strong> &nbsp;Quantity :</strong> ".$value['quantity']." <strong style=\"margin-left:120px;\">Status :</strong> ".product_status($value['product_status'])."</td>
						   </tr>
						</table>
				   </td>
			   </tr>
		  </table>"; 
		  $frmcount++;
		 }  
     $data .= "</div></div></div><h2 style=\"background:#999;padding:6px 10px; text-align:center;\">&nbsp;</h2>";
	break;
	
}
echo $data;
?>