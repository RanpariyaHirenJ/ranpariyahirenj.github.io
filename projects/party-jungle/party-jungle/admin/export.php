<?php
include("admin_global.php");
check_login();

if(isset($_SESSION["exportquery"]))
{
	$query = stripslashes(urldecode($_SESSION["exportquery"]));
	unset($_SESSION["exportquery"]);
}
//else
//{
//	die("Some error has occured, cannot export data.");
//}


switch($_REQUEST["action"])
{
	case "enquiry_report":
		$csv_output = "<table border = \"1\" width = \"100%\">
							<tr>								
								<td><strong>Customer Name</strong></td>
								<td><strong>Email ID</strong></td>
								<td><strong>Contact Number</strong></td>
								<td><strong>Enquiry Date</strong></td>	
								<td><strong>Delivery Date</strong></td>							
								<td><strong>No of products</strong></td>
								<td><strong>Status</strong></td>
								<td><strong>Enquiry Note</strong></td>
							</tr>";
			/*$sql = "SELECT *,DATE_FORMAT(em.order_date,'%d-%m-%Y') as o_date,DATE_FORMAT(em.delivery_date,'%d-%m-%Y') as d_date, (
																				SELECT COUNT(*) 
																				FROM enquiry_detail ed
																				WHERE ed.enquiry_id = em.enquiry_id) as total_product
						FROM enquiry_master em 
						ORDER BY em.order_date DESC,em.enquiry_id DESC";*/
			
			$sql = $_SESSION['enquiry_sql']; 
						
			$result = $db_object->execute_query($sql);
				
			while($value = mysqli_fetch_array($result))
			{
				if($value['d_date'] == "00-00-0000" || $value['d_date'] == "")
				{
					$delivery_date = "Not Specified";
				}
				else
				{
					$delivery_date = $value['d_date'];
				}
				
				if($value["enquiry_status"] == 1)
				{
					$status = "Pending";
				}
				else if($value["enquiry_status"] == 2)
				{
					$status = "Confirm";
				}
				else if($value["enquiry_status"] == 3)
				{
					$status = "Confirm";
				}
				$csv_output .= "<tr>
								
								<td align=\"left\">".$value["client_name"]."</td>
								<td align=\"left\">".$value["client_email"]."</td>
								<td align=\"left\">".$value["client_contact"]."</td>
								<td align=\"left\">".$value["date"]."</td>								
								<td align=\"left\">".$delivery_date."</td>
								<td align=\"left\">".$value["total_product"]."</td>
								<td align=\"left\">".$status."</td>
								<td align=\"left\">".$value["enquiry_note"]."</td>
							</tr>";
		}
		
		$csv_output .= "</table>";
		
	break;
	
	case"order_report":
		$csv_output = "<table border = \"1\" width = \"100%\">
							<tr>								
								<td><strong>Customer Name</strong></td>
								<td><strong>Email ID</strong></td>
								<td><strong>Contact Number</strong></td>
								<td><strong>Order Date</strong></td>	
								<td><strong>Delivery Date</strong></td>							
								<td><strong>No of products</strong></td>
								<td><strong>Status</strong></td>
							</tr>";
			 /*$sql = "SELECT *,DATE_FORMAT(om.order_date,'%d-%m-%Y') as date,DATE_FORMAT(om.delivery_date,'%d-%m-%Y') as d_date, (
																				SELECT COUNT(*) 
																				FROM order_detail od
																				WHERE od.order_id = om.order_id) as total_product
						FROM order_master om 
						ORDER BY om.order_date DESC,om.order_id DESC";*/
			$sql = $_SESSION['order_sql']; 			
			$result = $db_object->execute_query($sql);
				
			while($value = mysqli_fetch_array($result))
			{
				if($value['d_date'] == "00-00-0000" || $value['d_date'] == "")
				{
					$delivery_date = "Not Specified";
				}
				else
				{
					$delivery_date = $value['d_date'];
				}
				
				$product_status = 0;
				$product_sql = "SELECT product_status FROM order_detail WHERE order_id=".$value['order_id'];
				$product_result = $db_object->execute_query($product_sql);
				while($product_rows = mysqli_fetch_array($product_result))
				{
					$status_count = $product_status + $product_rows['product_status'];
				}
				
				$order_status = $status_count/$value["total_product"];
				if($order_status == 1)
				{
					$status = "Pending";
				}
				else if($order_status == 7)
				{
					$status = "Completed";
				}
				else
				{
					$status = "Processing";
				}
				$csv_output .= "<tr>
								
								<td align=\"left\">".$value["client_name"]."</td>
								<td align=\"left\">".$value["clent_email"]."</td>
								<td align=\"left\">".$value["client_contact"]."</td>
								<td align=\"left\">".$value["date"]."</td>								
								<td align=\"left\">".$delivery_date."</td>
								<td align=\"left\">".$value["total_product"]."</td>
								<td align=\"left\">".$status."</td>
							</tr>";
		}
		
		$csv_output .= "</table>";
	break;
	
}

//You cannot have the breaks in the same feed as the content. 
	
 	header("Content-type: application/vnd.ms-excel");
 	header("Content-disposition: attachment; filename= document_".date("Ymd").".xls");
	
	header('Pragma: private');
	header('Cache-control: private, must-revalidate');
 	print $csv_output;
 exit;
?>