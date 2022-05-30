<?php	
	require("admin_global.php"); 	
	check_login("login.php");
	
	if(isset($_REQUEST['action']))
	{
		switch($_REQUEST['action'])
		{
			case"Continue":
		
				$items[0]		= $db_object->sanatize_value($_REQUEST["item_id"]);
				$items[1]		= $db_object->sanatize_string($_REQUEST["our_cost"]);
				$items[2]		= $db_object->sanatize_string($_REQUEST["customer_cost"]);
				$items[3]		= $db_object->sanatize_string($_REQUEST["item_note"]);
				$items[5]		= $db_object->sanatize_value($_REQUEST["quantity"]);
				
				$count = 0;
				foreach($_POST as $key => $val)
				{
					if(is_numeric($key))
					{
						$properties[$count++] = array($key,$val);					
					}
				}
				
				$items[4]	= $properties;
				
				
				if(isset($_SESSION['order']))
				{
					$_SESSION['order'] = array_merge($_SESSION['order'],array($items));
				}
				else
				{
					$_SESSION['order'] = array($items);
				}
				
			break;
			
			case"Modify":
		
				$items[0]		= $db_object->sanatize_value($_REQUEST["item_id"]);
				$items[1]		= $db_object->sanatize_string($_REQUEST["our_cost"]);
				$items[2]		= $db_object->sanatize_string($_REQUEST["customer_cost"]);
				$items[3]		= $db_object->sanatize_string($_REQUEST["item_note"]);
				$items[5]		= $db_object->sanatize_value($_REQUEST["quantity"]);
				
				$count = 0;
				foreach($_POST as $key => $val)
				{
					if(is_numeric($key))
					{
						$properties[$count++] = array($key,$val);					
					}
				}
				
				$items[4]	= $properties;
				
				
				if(isset($_SESSION['order']))
				{
					$_SESSION['order'] = array_merge($_SESSION['order'],array($items));
				}
				else
				{
					$_SESSION['order'] = array($items);
				}
				
			break;
			
			case"update":
				$order_detail_id = $db_object->sanatize_value($_REQUEST["order_detail_id"]);
				$status 		= $db_object->sanatize_value($_REQUEST["order_status"]);
				
				$db_object->execute_query("UPDATE order_detail SET product_status = $status WHERE order_detail_id = $order_detail_id");
				
				
				$order = $db_object->return_query("SELECT order_id FROM order_detail WHERE order_detail_id = $order_detail_id");
				
				$order_value = $db_object->return_query("SELECT ((SELECT SUM(od.product_status) FROM order_detail od WHERE od.order_id = om.order_id)/(SELECT COUNT(*) FROM order_detail od1 WHERE od1.order_id = om.order_id)) as total_status FROM order_master om WHERE order_id = ".$order['order_id']);
				if($order_value['total_status'] == "1.0000")
				{
					$db_object->execute_query("UPDATE order_master SET order_status = 1 WHERE order_id =". $order['order_id']);
				}
				else if($order_value['total_status'] == "7.0000")
				{
					$db_object->execute_query("UPDATE order_master SET order_status = 3 WHERE order_id =". $order['order_id']);
				}
				else
				{
					$db_object->execute_query("UPDATE order_master SET order_status = 2 WHERE order_id =". $order['order_id']);
				}
					
			break;
			
			case"update_enquiry":
			
				$enquiry_detail_id	= $db_object->sanatize_value($_REQUEST["enquiry_detail_id"]);
				$our_cost		= $db_object->sanatize_value($_REQUEST["our_cost"]);
				$customer_cost	= $db_object->sanatize_value($_REQUEST["customer_cost"]);
				$item_note		= $db_object->sanatize_string($_REQUEST["item_note"]);
				$quantity		= $db_object->sanatize_value($_REQUEST["quantity"]);
				$delivery_date  = $db_object->sanatize_string($_REQUEST['actual_delivery_date']);
				
				$db_object->execute_query("UPDATE enquiry_detail SET our_cost = $our_cost, client_cost=$customer_cost , product_note = '$item_note', quantity = $quantity  WHERE enquiry_detail_id = $enquiry_detail_id");
				
				foreach($_POST as $key => $val)
				{
					if(is_numeric($key))
					{
						$db_object->execute_query("UPDATE enquiry_property SET property_value_id = $val WHERE enquiry_property_id = $key");					
					}
				}
		
			break;
		}
	}
				
    ?>
