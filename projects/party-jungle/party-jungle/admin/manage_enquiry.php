<?php
	include("admin_global.php");
	check_login();
 	if(isset($_REQUEST['start']))
	{
		$start = $_REQUEST['start'];
	}
	else
	{
		$start = 1;
	}
	$whereclause 	= "";
	$order_from 	= "";
	$order_to 		= "";
	$delivery_from 	= "";
	$delivery_to 	= "";
	$name_email 	= "";
	$enquiry_status = 0;
	
 	if(isset($_REQUEST["action"]))
	{
		$sqlhelper = new sqlhelper("manage_category");
		$sqlhelper->db_connect($host,$username,$password,$database);
		
		switch($_REQUEST["action"])
		{
			case "Delete":
					foreach($_POST as $key => $val)
					{						
 						if(is_numeric($val))
						{
							$db_object->execute_query("DELETE FROM  enquiry_property WHERE enquiry_detail_id IN (SELECT enquiry_detail_id FROM enquiry_detail WHERE enquiry_id = $val)");	
							$db_object->execute_query("DELETE FROM  enquiry_detail WHERE enquiry_id = $val");
							$db_object->execute_query("DELETE FROM  enquiry_master WHERE enquiry_id = $val");	
						}				
					}		
					
			break;
			
			case"Filter":
 				$order_from 	= $db_object->sanatize_string($_REQUEST["order_from"]);
				$order_to 		= $db_object->sanatize_string($_REQUEST["order_to"]);
				
				$name_email 	= $db_object->sanatize_string($_REQUEST["name_email"]);
				$product_name 	= $db_object->sanatize_string($_REQUEST["product_name"]);
				$enquiry_status = $db_object->sanatize_value($_REQUEST["enquiry_status"]);
				
				if($enquiry_status != 0)
				{
					$whereclause .= " AND em.enquiry_status = $enquiry_status ";
				}
				
				if($product_name != "")
				{
					$whereclause .= " AND enquiry_id IN (SELECT ed.enquiry_id FROM enquiry_detail ed INNER JOIN craft_items_master cim ON cim.item_id = ed.item_id WHERE cim.item_name LIKE '%$product_name%')";
				}
				
				
				if($order_from != "" && $order_to != "")
				{
					$order_from = explode("/",$order_from);
					$order_from = $order_from[2]."-".$order_from[1]."-".$order_from[0];
						
					$order_to = explode("/",$order_to);
					$order_to = $order_to[2]."-".$order_to[1]."-".$order_to[0];
					$whereclause .= " AND em.order_date BETWEEN '$order_from' AND '$order_to' ";
					
					$order_from 	= $_REQUEST["order_from"];
					$order_to 		= $_REQUEST["order_to"];
				}
				
 				if($name_email != "")
				{
					$whereclause .= " AND em.client_name LIKE '%$name_email%' OR em.client_email = '$name_email' ";
				}
				
			break;			
		}
	}	
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Admin | party jungle</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="styles/style.css" rel="stylesheet" type="text/css">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script language="javascript" src="./js/js_class.js"></script>
<script src="./js/common.js" type="text/javascript"></script>

<script src="./js/jquery-ui.js"></script>
<link rel="stylesheet" href="./styles/jquery-ui.css">

<script language="javascript">
function Data() 
{
	var x=document.getElementById("myFrm");
	var cont = 0;
	for (var i=0;i<x.length;i++)
  	{
		var j = x.elements[i];
  		if(j.type =="checkbox")
		{
			if(j.checked==true)
			{
				cont++;
			}
		}
  	}
	if(cont > 0)
	{
		//alert("Are you sure want to delete selected record");
		return confirm("Are you sure want to delete selected record");
	}
	else
	{
		alert("Check any one box to delete record");
		return false;
	}
return true;
}

$(function() {
  $( "#order_from" ).datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: "c-50:c",	 
	dateFormat: "dd/mm/yy"
	
  });
});

$(function() {
  $( "#order_to" ).datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: "c-50:c",	 
	dateFormat: "dd/mm/yy"
	
  });
});


</script>
</head>
<body>
<?php include("header.php"); ?>		
<div class="overlay"></div>
        <div class="wraper">
  		<h1 class="pageName">Manage Enquiry</h1>
        <div class="srchEngn"> <strong>
               <h2>Filter Data</h2>
               </strong>
                <form method="get">
                <div class="frm">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="left">Enquiry Date</td>
                      <td align="left">:</td>
                      <td align="left"><input name="order_from" type="text" id="order_from" placeholder="From Date" style="width:104px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:23px 27px;" value="<?php echo $order_from;?>"><input name="order_to" type="text" placeholder="To Date" style="width:104px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:23px 27px;" id="order_to" value="<?php echo $order_to;?>"></td>
                      <td align="left">Enquiry Statuse</td>
                      <td align="left">:</td>
                      <td align="left"><select name="enquiry_status" style="width:220px">
                        <option value="0" <?php echo $db_object->return_compare(0,$enquiry_status,"selected","") ?>>All</option>
                        <option value="1" <?php echo $db_object->return_compare(1,$enquiry_status,"selected","") ?> >Pending</option>
                        <option value="2" <?php echo $db_object->return_compare(2,$enquiry_status,"selected","") ?>>Processing</option>
                        <option value="3" <?php echo $db_object->return_compare(3,$enquiry_status,"selected","") ?>>Completed</option>
                      </select></td>
                    </tr>
                    <tr>
                    <td width="15%" align="left">Client Name / Email </td>
                    <td width="3%" align="left">: </td>
                    <td width="37%" align="left"><input  name="name_email" type="text" value="<?php echo $name_email; ?>" placeholder="Enter Name Or Email" style="width:220px"></td>
                    <td width="10%" align="left">Product Name </td>
                    <td width="3%" align="left">:</td>
                    <td width="30%" align="left"><input  name="product_name" type="text" placeholder="Enter Product Name" id="item_name" value="<?php echo $product_name; ?>" style="width:220px"></td>
                    </tr>
                    <tr>
                      <td colspan="3" align="right">
                      <?php
					  if($whereclause != "")
					  {
						  ?>
                      	<input type="button" value="Reset" onClick="location.assign('manage_enquiry.php')" style="width:100px;">&nbsp;&nbsp;&nbsp;&nbsp;
					  <?php
					  }
					  ?></td>
                      <td colspan="3" align="left"><input type="submit" name="action" value="Filter" style="width:100px;"></td>
                    </tr>
                  </table>
                </div>
                </form>
              </div>
              <br>
       <form action="manage_enquiry.php" method="post" name="myform" id="myFrm" onSubmit="return Data()" target="_self"> 
      	 <div class="tblCntr" style="padding-top:0; background:none;">
			<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <th align="left"><strong>Sr</strong></th>
                <th align="left">Customer Name</th>
                <th align="left">Contact Detail</th>
                <th align="left">Enquiry Note</th>
                <th align="left">Enquiry Date</th>
                <th align="left">Quantity</th>
            
                <th align="left">Status</th>
                <th align="center"><strong>View</strong></th>
                <th align="center"><strong>Select</strong></th>
              </tr>
			
				<?php 
                $n = 1;
                $sql = "SELECT *,DATE_FORMAT(em.order_date,'%d-%m-%Y') as date, (
																				SELECT COUNT(*) 
																				FROM enquiry_detail ed
																				WHERE ed.enquiry_id = em.enquiry_id) as total_product
						FROM enquiry_master em 
						WHERE em.enquiry_status IN (1,2)  $whereclause 
						ORDER BY em.enquiry_status ASC,em.order_date DESC,em.enquiry_id DESC";
				$objpaging = initialize_paging($sql);
				$objpaging->limit = 25;
				$result = $objpaging->ini_paging();			
				if(mysqli_num_rows($result) > 0)
				{
                	while($value = mysqli_fetch_array($result))
					{
						if($value["enquiry_status"] == 1)
						{
							$status = "Pending";
							$color = "";
						}
						else if($value["enquiry_status"] == 2)
						{
							$status = "Confirm";
							$color = "#E0DBF7";
						}
					?>
				  <tr bgcolor="<?php echo $color ?>">
					<td width="4%" align="center" style="vertical-align:middle"><?php  echo ((($start * 25) - 25) + $n); $n++; ?></td>
					<td width="12%" align="left" style="vertical-align:middle"><?php echo ucwords($value["client_name"]) ?></td>
					<td width="15%" align="left" style="vertical-align:middle"><?php echo $value["client_email"]."<br>".$value["client_contact"] ?></td>
					<td width="33%" align="left" style="vertical-align:middle"><?php echo ucfirst($value["enquiry_note"]) ?></td>
					<td width="9%" align="center" style="vertical-align:middle"><?php echo $value["date"] ?></td>
					<td width="5%" align="center" style="vertical-align:middle"><?php echo $value["total_product"] ?></td>
					<td width="6%" align="center" style="vertical-align:middle"><?php echo $status ?></td>
						
					
					<td width="6%" align="center" style="vertical-align:middle">
						<a href="enquiry_detail.php?enquiry_id=<?php echo $value["enquiry_id"] ?>" target="_self" style="padding:8px 12px; background-color:#CCC;border-radius:5px;color" >Details</a></td>
					<td width="5%" align="center" style="vertical-align:middle">
					  <input type="checkbox" name="<?php echo $value["enquiry_id"]?>" value="<?php echo $value["enquiry_id"] ?>">
					</td>
				  </tr>
                  
               <?php 
					}
				}
				else
				{
					?>
                     <tr>
                        <td colspan="9" align="center">Enquiry Not Available</td>
                      </tr> 
                    <?php
				}
			  ?>
                  
				  <tr>
			  	<td colspan="9" align="center">
                <input type="submit" name="action" id="Delete" value="Delete" >&nbsp;&nbsp;</td>
			  </tr>              
              <tr align="right">
                <td colspan="9">
	   				<div class="pagerCnt"> <?php echo($objpaging->display_paging()) ?> </div>
	   			</td>
              </tr>
			
			 
			  
            </table>
</div>
            </form>
            </div>
<?php include("footer.php"); 

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
