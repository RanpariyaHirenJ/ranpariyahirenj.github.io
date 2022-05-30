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
	$order_statusv  = 0;
	
	if(isset($_SESSION['order_sql']))
	{
		unset($_SESSION['order_sql']);
	}
	
 	if(isset($_REQUEST["action"]))
	{
		switch($_REQUEST["action"])
		{	
			
			case"Filter":
 				$order_from 	= $db_object->sanatize_string($_REQUEST["order_from"]);
				$order_to 		= $db_object->sanatize_string($_REQUEST["order_to"]);
				
				$delivery_from 	= $db_object->sanatize_string($_REQUEST["delivery_from"]);
				$delivery_to 	= $db_object->sanatize_string($_REQUEST["delivery_to"]);
				
				$name_email 	= $db_object->sanatize_string($_REQUEST["name_email"]);
				$product_name 	= $db_object->sanatize_string($_REQUEST["product_name"]);
				$order_status	= $db_object->sanatize_value($_REQUEST["order_status"]);
				
				if($product_name != "")
				{
					$whereclause .= " AND order_id IN (SELECT od.order_id FROM order_detail od INNER JOIN craft_items_master cim ON cim.item_id = od.item_id WHERE cim.item_name LIKE '%$product_name%')";
				}
				
				if($order_from != "" && $order_to != "")
				{
					$order_from = explode("/",$order_from);
					$order_from = $order_from[2]."-".$order_from[1]."-".$order_from[0];
						
					$order_to = explode("/",$order_to);
					$order_to = $order_to[2]."-".$order_to[1]."-".$order_to[0];
					$whereclause .= " AND om.order_date BETWEEN '$order_from' AND '$order_to' ";
					
					$order_from 	= $_REQUEST["order_from"];
					$order_to 		= $_REQUEST["order_to"];
				}
				
				if($delivery_from != "" && $delivery_to != "")
				{
					$delivery_from = explode("/",$delivery_from);
					$delivery_from = $delivery_from[2]."-".$delivery_from[1]."-".$delivery_from[0];
						
					$delivery_to = explode("/",$delivery_to);
					$delivery_to = $delivery_to[2]."-".$delivery_to[1]."-".$delivery_to[0];
					$whereclause .= " AND om.delivery_date BETWEEN '$delivery_from' AND '$delivery_to' ";
					
					$delivery_from 	= $_REQUEST["delivery_from"];
					$delivery_to 	= $_REQUEST["delivery_to"];
				}
				
 				if($name_email != "")
				{
					$whereclause .= " AND om.client_name LIKE '%$name_email%' OR om.clent_email = '$name_email' ";
				}
				
				if($order_status != 0)
				{
					if($order_status == 1)
					{
						$whereclause .= " AND ((SELECT SUM(od.product_status) FROM order_detail od WHERE od.order_id = om.order_id)/(SELECT COUNT(*)  FROM order_detail od1 WHERE od1.order_id = om.order_id)) = 1";
					}
					
					if($order_status == 2)
					{
						$whereclause .= " AND ((SELECT SUM(od.product_status) FROM order_detail od WHERE od.order_id = om.order_id)/(SELECT COUNT(*)  FROM order_detail od1 WHERE od1.order_id = om.order_id)) NOT IN (1,7) ";
					}
					
					if($order_status == 3)
					{
						$whereclause .= " AND ((SELECT SUM(od.product_status) FROM order_detail od WHERE od.order_id = om.order_id)/(SELECT COUNT(*)  FROM order_detail od1 WHERE od1.order_id = om.order_id)) = 7 ";
					}
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

function ajax_view_enquiry(getcase,order_id)
{
	$.post("ajax_functions.php",
	{		
		"function": getcase,
		"order_id": order_id
	},
	function(data,status){
		
		if(status == "success")
		{
		  $("#enquiry_details").html(data);
		  overlayBoxNorefresh('enquiry_details')
		}
	});
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

$(function() {
  $( "#delivery_from" ).datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: "c-50:c",	 
	dateFormat: "dd/mm/yy"
	
  });
});

$(function() {
  $( "#delivery_to" ).datepicker({
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
<div class="overlayBox" id="enquiry_details"> </div>
<div class="wraper">
  <h1 class="pageName">Order Report</h1>
  <div class="srchEngn"> <strong>
    <h2>Filter Data</h2>
    </strong>
    <form action="order_report.php" method="get">
      <div class="frm">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="left">Order Date</td>
            <td align="left">:</td>
            <td align="left"><input name="order_from" type="text" id="order_from" placeholder="From Date" style="width:104px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:23px 27px;" value="<?php echo $order_from;?>">
              <input name="order_to" type="text" placeholder="To Date" style="width:104px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:23px 27px;" id="order_to" value="<?php echo $order_to;?>"></td>
            <td align="left">Delivery Date</td>
            <td align="left">:</td>
            <td align="left"><input name="delivery_from" type="text"  id="delivery_from" placeholder="From Date" style="width:104px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:23px 27px;" value="<?php echo $delivery_from;?>">
              <input name="delivery_to" type="text" placeholder="To Date" style="width:104px;background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:23px 27px;" id="delivery_to" value="<?php echo $delivery_to;?>"></td>
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
            <td align="left">Enquiry Status</td>
            <td align="left">:</td>
            <td align="left"><select name="order_status" style="width:220px">
                <option value="0" <?php echo $db_object->return_compare(0,$order_status,"selected","") ?>>All</option>
                <option value="1" <?php echo $db_object->return_compare(1,$order_status,"selected","") ?> >Pending</option>
                <option value="2" <?php echo $db_object->return_compare(2,$order_status,"selected","") ?>>Processing</option>
                <option value="3" <?php echo $db_object->return_compare(3,$order_status,"selected","") ?>>Completed</option>
              </select></td>
            <td colspan="3" align="center"><?php
					  if($whereclause != "")
					  {
						  ?>
              <input type="button" name="action" value="Reset" onClick="location.assign('order_report.php')" style="width:100px;">
              &nbsp;
              <?php
					  }
					  ?>
              <input type="submit" name="action" value="Filter" style="width:100px;"></td>
          </tr>
        </table>
      </div>
    </form>
  </div>
  <br>
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center"><div class="tblCntr" style="padding-top:0; background:none;">
          <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
              <th align="left"><strong>Sr</strong></th>
              <th align="left">Customer Name</th>
              <th align="left">Contact Detail</th>
              <th align="left">Order Note</th>
              <th align="left">Order Date</th>
              <th align="left">Delivery Date</th>
              <th align="left">Quantity</th>
              <th align="left">Status</th>
              <th width="9%" align="center"><strong>View Detail</strong></th>
            </tr>
            <?php 
                $n = 1;
                $sql = "SELECT *,DATE_FORMAT(om.order_date,'%d-%m-%Y') as date,DATE_FORMAT(om.delivery_date,'%d-%m-%Y') as d_date, (
																				SELECT COUNT(*) 
																				FROM order_detail od
																				WHERE od.order_id = om.order_id) as total_product
						
						FROM order_master om 
						WHERE 1=1 $whereclause
						ORDER BY om.order_date DESC,om.order_id DESC";
				//die($sql);
				//((SELECT SUM(od.product_status) FROM order_detail od WHERE od.order_id = om.order_id)/(SELECT COUNT(*) FROM order_detail od1 WHERE od1.order_id = om.order_id)) as total_status
				$_SESSION['order_sql'] = $sql;		
                $objpaging = initialize_paging($sql);
				$objpaging->limit = 25;
				$result = $objpaging->ini_paging();	
				if(mysqli_num_rows($result) > 0)
				{
                	while($value = mysqli_fetch_array($result))
					{
						
						
						/*if($value['total_status'] == "1.0000")
						{
							$status = "Pending";
							$color = "";
						}
						else if($value['total_status'] == "7.0000")
						{
							$status = "Completed";
							$color = "#009900";
						}
						else
						{
							$status = "Processing";
							$color = "#3206FE";
						}*/
						
						
						if($value['order_status'] == 1)
						{
							$status = "Pending";
							$color = "";
						}
						else if($value['order_status'] == 3)
						{
							$status = "Completed";
							$color = "#009900";
						}
						else if($value['order_status'] == 2)
						{
							$status = "Processing";
							$color = "#3206FE";
						}
						else if($value['order_status'] == 4)
						{
							$status = "Cancelled";
							$color = "red";
						}
					?>
            <tr>
              <td width="4%" align="center" style="vertical-align:middle"><?php  echo ((($start * 25) - 25) + $n); $n++; ?></td>
              <td width="12%" align="left" style="vertical-align:middle"><?php echo ucwords($value["client_name"]) ?></td>
              <td width="15%" align="left" style="vertical-align:middle"><?php echo $value["clent_email"]."<br>".$value["client_contact"] ?></td>
              <td width="34%" align="left" style="vertical-align:middle"><?php echo ucfirst($value["order_note"]) ?></td>
              <td width="9%" align="center" style="vertical-align:middle"><?php echo $value["date"] ?></td>
              <td width="9%" align="center" style="vertical-align:middle"><?php echo $value["d_date"] ?></td>
              <td width="6%" align="center" style="vertical-align:middle"><?php echo $value["total_product"] ?></td>
              <td width="9%" align="center" style="vertical-align:middle;color:<?php echo $color ?>"><?php echo $status ?></td>
              <td align="center" style="vertical-align:middle"><a href="javascript:void(0)" title="Click to get enquiry detail" onClick="ajax_view_enquiry('order_details','<?php echo $value["order_id"] ?>')" style="padding:8px 12px; background-color:#CCC;border-radius:5px;color" >Details</a></td>
            </tr>
            <?php
					}
					?>
            <tr>
              <td colspan="9" align="center" style="vertical-align:middle">
              	 <input type="button" name="action" value="Export" onClick="location.assign('export.php?action=order_report')" class="action-button">
              </td>
            </tr>
            <tr>
              <td colspan="9" align="center" style="vertical-align:middle">
              	<div class="pagerCnt"> <?php echo($objpaging->display_paging()) ?> </div>
              </td>
            </tr>
          </table>
          
          <?php 
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
        </div>
  </table>
</div>
<?php include("footer.php"); ?>
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
</body>
</html>
