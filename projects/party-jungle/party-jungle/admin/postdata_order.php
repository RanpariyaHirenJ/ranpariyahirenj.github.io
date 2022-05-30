<?php	
	require("admin_global.php"); 	
	check_login("login.php");
	
	if(isset($_REQUEST['action']))
	{
		switch($_REQUEST['action'])
		{
			case"Continue":
		
				$order_id		= $db_object->sanatize_value($_REQUEST["order_id"]);
				$items[0]		= $db_object->sanatize_value($_REQUEST["item_id"]);
				$items[1]		= $db_object->sanatize_string($_REQUEST["our_cost"]);
				$items[2]		= $db_object->sanatize_string($_REQUEST["customer_cost"]);
				$items[3]		= $db_object->sanatize_string($_REQUEST["item_note"]);
				$items[5]		= $db_object->sanatize_value($_REQUEST["quantity"]);
				
				$order_master = $db_object->return_query("SELECT * FROM order_master WHERE order_id =".$order_id);
				$_SESSION['client']['client_name'] 		= ucfirst($order_master['client_name']);
				$_SESSION['client']['client_contact'] 	= $order_master['client_contact'];
				$_SESSION['client']['client_email']		= $order_master['client_email'];
				$_SESSION['client']['delivery_date'] 	= date_format(date_create($order_master['delivery_date']), 'd/m/Y');
				$_SESSION['client']['order_date'] 		= $order_master['order_date'];
				$_SESSION['client']['order_note'] 		= ucfirst($order_master['order_note']);
				$_SESSION['form_action']				= "modify";
				$_SESSION['order_id']					= $order_id;
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
		}
	}
				
    ?>
