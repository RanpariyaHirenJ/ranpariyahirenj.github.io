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
				
				/*$sortOrder=SORT_ASC;
				foreach ($_SESSION['order'] as $key => $val)
				{
					$key_arr[$key] = $val[0];
				}
				array_multisort($key_arr, $sortOrder, $_SESSION['order']);*/
				
			break;
			
			case"update":
				$order_detail_id = $db_object->sanatize_value($_REQUEST["order_detail_id"]);
				$status 		= $db_object->sanatize_value($_REQUEST["order_status"]);
				
				$sql = "UPDATE order_detail SET product_status = $status WHERE order_detail_id = $order_detail_id";
				$db_object->execute_query($sql);
			break;
		}
	}
				
    ?>
