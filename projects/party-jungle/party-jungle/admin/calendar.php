<?php
include("admin_global.php");
//print_r($_SESSION);
//die(); 
check_login();

if(isset($_SESSION['client']))
{
	unset($_SESSION['client']);
}

if(isset($_SESSION['order']))
{
	unset($_SESSION['order']);
}

 if(isset($_SESSION['enquiry_id']))
 {
	 unset($_SESSION['enquiry_id']);
 }

if(isset($_SESSION['form_action'])) 
{
	unset($_SESSION['form_action']);
}


$whereclause = "";
$month = date('m');
$year = date('Y');
$product_status = 0;

if(isset($_REQUEST["action"]))
{
	$sqlhelper = new sqlhelper("order_master");
	$sqlhelper->db_connect($host,$username,$password,$database);
	
	switch($_REQUEST["action"])
	{
		case "Save":

			$_SESSION['client']['client_name'] 	= $db_object->sanatize_string(ucfirst($_REQUEST["client_name"]));
			$_SESSION['client']['client_contact'] 	= $db_object->sanatize_value($_REQUEST["client_contact"]);
			$_SESSION['client']['clent_email']		= $db_object->sanatize_string($_REQUEST["clent_email"]);
			$_SESSION['client']['delivery_date'] 	= $db_object->sanatize_string($_REQUEST["delivery_date"]);
			$_SESSION['client']['order_date'] 		= date("Y-m-d");
			$_SESSION['client']['order_note'] 		= $db_object->sanatize_string(ucfirst($_REQUEST["order_note"]));
			redirect("select-item-order.php");
			die();
		break;
		
		case"Search":
			$month = $_REQUEST['month'];
			$year = $_REQUEST['year'];
			$product_status = $_REQUEST['product_status'];
			
			if($month != 0 && $year != 0)
			{
				$date = $year."-".$month."-1";
				
				$whereclause = " AND om.delivery_date BETWEEN '$date' AND DATE_ADD('$date', INTERVAL 1 MONTH)";
			}
		break;
	}
}

?>
<?php include("header.php"); ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Admin | party jungle</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css">
<link rel="stylesheet" href="styles/jquery-ui.css">
<script src="js/jquery-ui.js"></script>
<script language="javascript"> 
$(function() {
  $( "#expiry_date" ).datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: "c-50:c",	 
	dateFormat: "dd/mm/yy"
	
  });
});

var currentcnt = 0;
function submit_order_form(frmcount)
{
	if(frmcount > 0)
	{
		while(currentcnt < frmcount)
		{
			var item_form = document.getElementById("item_form"+currentcnt);
			item_form.submit();
			currentcnt++;
		}
		
		alert('Status of the product has been successfully updated');
		setTimeout(function(){location.assign(window.location.href)},1000);
		//window.location.assign("calendar.php");
 	}
 }
 
 function modify_order_form(frmcount)
{
	var isselect = 0;
	if(frmcount > 0)
	{
		while(currentcnt < frmcount)
		{
  			var item_form = document.getElementById("modify_item_form"+currentcnt);
			//alert("modify_item_form"+currentcnt);
			item_form.submit()
			currentcnt++;
		}
		setTimeout(function(){location.assign('order-confirmation.php')},1000);
			//location.assign('order-confirmation.php');

 	}
 
 }
</script>
</head>
<body>
<div class="overlay"></div>
<div class="overlayBox" id="data-entry">
  <div class="formCntr">
    <h2 style="background:#a2a2a2; text-align:center;">New Order</h2>
    <div style="padding:5px 20px; ">
		 <div class="fldCntr" align="center" style="width:800px; margin-top:0px; border:none;">
         <form action="calendar.php" method="post" onSubmit="return form_validate_jquery('.formCntr')">       
		  <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0" class="dvF1" style="border:1px solid #CCC;padding:10px 5px;">
              <tr>
                	<td colspan="3" align="left"><h6 style="border-bottom:1px solid #ccc; margin:0 10px; padding:10px 10px 10px 0;">New Order</h6></td>
              </tr>
              <tr>
                    <td width="17%" style="vertical-align:middle ; padding-left:8px;">Client Name &nbsp;:&nbsp;</td>
                    <td width="30%" colspan="2">
                    	<input name="client_name"  type="text" style="width:450px; margin-right:10px;" title="Client Name" placeholder="Client Name" value="" validation="text"> 
                    </td>
                </tr>
                <tr>
                    <td width="13%" style="vertical-align:middle; padding-left:7px;">Contact No.&nbsp;:&nbsp;</td>
                    <td width="30%" colspan="2">
                    	<input name="client_contact"  type="text" style="width:450px " placeholder="Contact No." title="Contact No." value="" validation="number"> 
                    </td>
                </tr>
                <tr>
                    <td width="13%" style="vertical-align:middle; padding-left:7px;">Email&nbsp;:&nbsp;</td>
                    <td width="30%" colspan="2">
                    	<input name="clent_email"  type="text" style="width:450px" placeholder="Email" title="Email" value="" validation="email"> 
                    </td>
                </tr>
                <tr>
                    <td width="13%" style="vertical-align:middle; padding-left:7px;">Delivery Date&nbsp;:&nbsp;</td>
                    <td width="" >
                    	<input type="text" title="Delivery Date" placeholder="Select Date" id="expiry_date" name="delivery_date" style="width:221px; margin-right:10px; background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:25px 25px;" value="" validation="text">
                    
                    </td>
                    <td width="" >&nbsp;
                    
                    </td>
                </tr>                
                 <tr>
                    <td width="13%" style="vertical-align:middle; padding-left:7px;">Order Note&nbsp;:&nbsp;</td>
                    <td width="30%" colspan="2">
                    	<input name="order_note"  type="text" style="width:450px" placeholder="Order Note" title="Order Note" value="" validation="text"> 
                    </td>
                </tr>
                
                <tr>
                <td colspan="3">
                	<div style="text-align:center;">                
                      	<input type="submit" name="action" value="Save" class="action-button">
                    	<input type="submit" name="Cancel" value="Cancel" onClick="window.location='calendar.php';" class="action-button" />                        
                    </div>
                </td>
                </tr>
            </table>
            </form>
          </div>
    </div>      
     </div>
</div>
<div class="overlayBox" id="order-list">
</div>
<div class="wraper">
<h1 class="pageName">Calendar</h1>
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            
              <form action="calendar.php" method="get">
              <div class="srchEngn1"> 
              <strong>
              <label>Month </label>
               <select class="left-select-M" name="month">
                    <option value="1" <?php echo $db_object->return_compare($month,1,"selected=\"selected\"","") ?>>Jan</option>
                    <option value="2" <?php echo $db_object->return_compare($month,2,"selected=\"selected\"","") ?>>Feb</option>
                    <option value="3" <?php echo $db_object->return_compare($month,3,"selected=\"selected\"","") ?>>Mar</option>
                    <option value="4" <?php echo $db_object->return_compare($month,4,"selected=\"selected\"","") ?>>Apr</option>
                    <option value="5" <?php echo $db_object->return_compare($month,5,"selected=\"selected\"","") ?>>May</option>
                    <option value="6" <?php echo $db_object->return_compare($month,6,"selected=\"selected\"","") ?>>Jun</option>
                    <option value="7" <?php echo $db_object->return_compare($month,7,"selected=\"selected\"","") ?>>Jul</option>
                    <option value="8" <?php echo $db_object->return_compare($month,8,"selected=\"selected\"","") ?>>Aug</option>
                    <option value="9" <?php echo $db_object->return_compare($month,9,"selected=\"selected\"","") ?>>Sep</option>
                    <option value="10" <?php echo $db_object->return_compare($month,10,"selected=\"selected\"","") ?>>Oct</option>
                    <option value="11" <?php echo $db_object->return_compare($month,11,"selected=\"selected\"","") ?>>Nov</option>
                    <option value="12" <?php echo $db_object->return_compare($month,12,"selected=\"selected\"","") ?>>Dec</option>
                    </select>
                    
                     <label>Year </label>
                    <select class="left-select-M" name="year">
                    <?php
						$sql = "SELECT date_format(delivery_date,'%Y') as order_year FROM order_master ORDER BY delivery_date ASC LIMIT 0,1";
						$result 	= $db_object->return_query($sql);
						$order_year = $result['order_year'];
						$current_year = date("Y")+1;
						//die($delivery_date);
						for($i=$order_year; $i<=$current_year; $i++)	
						{
							?>
							<option value="<?php echo $i;?>" <?php echo $db_object->return_compare($year,$i,"selected=\"selected\"","") ?>><?php echo $i; ?></option>
							<?php
						}
                      ?>
                    </select>
                    
                    <!-- <select class="left-select-M" name="year">
                    <option value="2015" <?php echo $db_object->return_compare($year,2015,"selected=\"selected\"","") ?>>2015</option>
                    <option value="2016" <?php echo $db_object->return_compare($year,2016,"selected=\"selected\"","") ?>>2016</option>
                    <option value="2017" <?php echo $db_object->return_compare($year,2017,"selected=\"selected\"","") ?>>2017</option>
                    <option value="2018" <?php echo $db_object->return_compare($year,2018,"selected=\"selected\"","") ?>>2018</option>
                    <option value="2019" <?php echo $db_object->return_compare($year,2019,"selected=\"selected\"","") ?>>2019</option>
                    <option value="2020" <?php echo $db_object->return_compare($year,2020,"selected=\"selected\"","") ?>>2020</option>
                    <option value="2021" <?php echo $db_object->return_compare($year,2021,"selected=\"selected\"","") ?>>2021</option>
                    <option value="2022" <?php echo $db_object->return_compare($year,2022,"selected=\"selected\"","") ?>>2022</option>
                    <option value="2023" <?php echo $db_object->return_compare($year,2023,"selected=\"selected\"","") ?>>2023</option>
                    <option value="2024" <?php echo $db_object->return_compare($year,2024,"selected=\"selected\"","") ?>>2024</option>
                    <option value="2025" <?php echo $db_object->return_compare($year,2025,"selected=\"selected\"","") ?>>2025</option>
                    </select>-->
                    <label>Status</label>
                <select class="left-select-M" name="product_status">
                <option value="0" <?php echo $db_object->return_compare($product_status,0,"selected=\"selected\"","") ?>>All</option>
                <option value="1" <?php echo $db_object->return_compare($product_status,1,"selected=\"selected\"","") ?>>Order Created</option>
                <option value="2" <?php echo $db_object->return_compare($product_status,2,"selected=\"selected\"","") ?>>Supply Ordered</option>
                <option value="3" <?php echo $db_object->return_compare($product_status,3,"selected=\"selected\"","") ?>>Supply Received</option>
                <option value="4" <?php echo $db_object->return_compare($product_status,4,"selected=\"selected\"","") ?>>Items Designed</option>
                <option value="5" <?php echo $db_object->return_compare($product_status,5,"selected=\"selected\"","") ?>>Order Ready</option>
                <option value="6" <?php echo $db_object->return_compare($product_status,6,"selected=\"selected\"","") ?>>Payment Pending</option>
                <option value="7" <?php echo $db_object->return_compare($product_status,7,"selected=\"selected\"","") ?>>Payment Received</option>
                </select>
                    <input name="action" type="submit" value="Search">&nbsp;
                    <input name="action" type="button" value="Create Order" onClick="overlayBoxNorefresh('data-entry')">
               </strong>
                
              </div>
              </form>
            <br>
            <script>
			function ajax_view_order(getcase,order_status,date)
			{
				$.post("ajax_functions.php",
				{		
					"function": getcase,
					"order_status": order_status,
					"day": date
				},
				function(data,status){
					
					if(status == "success")
					{
					  $("#order-list").html(data);
					  overlayBoxNorefresh('order-list')
					}
				});
			}
			</script>
            <form method="post" name="delete_form" onSubmit="return confirm_delete()">
              <div class="tblCntr" style="padding-top:0; background:none;text-transform:capitalize;">
                <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style=" background-color: #fff;">

                  <tr bgcolor="#F5F5F5" style="text-transform:uppercase; font-size:16px; font-weight:bold;">
                  	<th width="4%">Sun</th>
                  	<th width="4%">Mon</th>
                  	<th width="4%">Tue</th>
                    <th width="4%">Wed</th>
                    <th width="4%">Thu</th>
                    <th width="4%">Fri</th>
                    <th width="4%">Sat</th>
                  </tr>
                  <tr style="height:120px; min-height:120px">
                  <?php
				  $timestamp = strtotime($year."-".$month."-1");
					
					$day = date('D', $timestamp);
					switch($day)
					{
						case"Sun":
							$skip = 0;
						break;
						
						case"Mon":
							$skip = 1;
						break;
						
						case"Tue":
							$skip = 2;
						break;
						
						case"Wed":
							$skip = 3;
						break;
						
						case"Thu":
							$skip = 4;
						break;
						
						case"Fri":
							$skip = 5;
						break;
						
						case"Sat":
							$skip = 6;
						break;
					}
					//die($skip."aa");
					
                 	$days = cal_days_in_month(CAL_GREGORIAN, $month, $year);
				  	
					$total_box = $days+$skip;
					if($total_box > 35)
					{
						$total_box = 42;
					}
					else
					{
						$total_box = 35;
					}
					
				  //die($days."aa");
				 // $days = $days+($skip);
				  $i=1;
				  $k=1;
				  while($total_box != 0)
				  {
						if($skip > 0)
						{
							$skip--;
							
							?>
							<td width="5%" align="center" style="vertical-align:middle"></td>
							<?php
							if($k%7 == 0)
							{
								echo "</tr><tr style=\"height:120px; min-height:120px\">";
								
							}
							$k++;
						}
						else if($skip == 0 && $i<= $days)
						{
							?>
							<td width="5%" align="center" style="text-align:left"><?php  printf("%02d\n", $i); ?>
							<ul>
					<?php
						$sql_deliver_date = $year."-".$month."-".$i;
						$count_sql = "SELECT 
							(SELECT COUNT(*) FROM order_detail od 
							 INNER JOIN order_master om ON om.order_id = od.order_id 
							 WHERE od.product_status = 1 AND om.delivery_date  = '$sql_deliver_date' $whereclause) as order_created,
							 
							(SELECT COUNT(*) FROM order_detail od 
							 INNER JOIN order_master om ON om.order_id = od.order_id 
							 WHERE od.product_status = 2 AND om.delivery_date  = '$sql_deliver_date' $whereclause) as order_supply,
							 
							(SELECT COUNT(*) FROM order_detail od 
							 INNER JOIN order_master om ON om.order_id = od.order_id 
							 WHERE od.product_status = 3 AND om.delivery_date  = '$sql_deliver_date' $whereclause) as supply_received,
							 
							(SELECT COUNT(*) FROM order_detail od 
							 INNER JOIN order_master om ON om.order_id = od.order_id 
							 WHERE od.product_status = 4 AND om.delivery_date  = '$sql_deliver_date' $whereclause) as order_designed,
							 
							(SELECT COUNT(*) FROM order_detail od 
							 INNER JOIN order_master om ON om.order_id = od.order_id 
							 WHERE od.product_status = 5 AND om.delivery_date  = '$sql_deliver_date' $whereclause) as order_ready,
							 
							(SELECT COUNT(*) FROM order_detail od 
							 INNER JOIN order_master om ON om.order_id = od.order_id 
							 WHERE od.product_status = 6 AND om.delivery_date  = '$sql_deliver_date' $whereclause) as payment_pending,
							 
							(SELECT COUNT(*) FROM order_detail od 
							 INNER JOIN order_master om ON om.order_id = od.order_id 
							 WHERE od.product_status = 7 AND om.delivery_date  = '$sql_deliver_date' $whereclause) as payment_recieved
							FROM order_master";
							//die($count_sql);
							$total_count = $db_object->return_query($count_sql);
							
							
							if($product_status != 0)
							{
								if($total_count['order_created']>0 && $product_status == 1)
								{
									?>
									<li title="Order Created" class="td1" onClick="ajax_view_order('order_created','1','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['order_created'] ?></li>
									<?php
								}
								if($total_count['order_supply']>0 && $product_status == 2)
								{
									?>
									<li title="Supply Ordered" class="td2" onClick="ajax_view_order('order_supply','2','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['order_supply'] ?></li>
									<?php
								}
								if($total_count['supply_received']>0 && $product_status == 3)
								{
									?>
									<li title="Supply Received" class="td3" onClick="ajax_view_order('supply_received','3','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['supply_received'] ?></li>
									<?php
								}
								if($total_count['order_designed']>0 && $product_status == 4)
								{
									?>
									<li title="Items Designed" class="td4" onClick="ajax_view_order('order_designed','4','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['order_designed'] ?></li>
									<?php
								}
								if($total_count['order_ready']>0 && $product_status == 5)
								{
									?>
									<li title="Order Ready" class="td5" onClick="ajax_view_order('order_ready','5','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['order_ready'] ?></li>
									<?php
								}
								if($total_count['payment_pending']>0 && $product_status == 6)
								{
									?>
									<li title="Payment Pending" class="td6" onClick="ajax_view_order('payment_pending','6','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['payment_pending'] ?></li>
									<?php
								}
								if($total_count['payment_recieved']>0 && $product_status == 7)
								{
									?>
									<li title="Payment Received" class="td7" onClick="ajax_view_order('payment_recieved','7','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['payment_recieved'] ?></li>
									<?php
								}
							}
							else
							{
								if($total_count['order_created']>0)
								{
									?>
									<li title="Order Created" class="td1" onClick="ajax_view_order('order_created','1','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['order_created'] ?></li>
									<?php
								}
								if($total_count['order_supply']>0)
								{
									?>
									<li title="Supply Ordered" class="td2" onClick="ajax_view_order('order_supply','2','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['order_supply'] ?></li>
									<?php
								}
								if($total_count['supply_received']>0)
								{
									?>
									<li title="Supply Received" class="td3" onClick="ajax_view_order('supply_received','3','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['supply_received'] ?></li>
									<?php
								}
								if($total_count['order_designed']>0)
								{
									?>
									<li title="Items Designed" class="td4" onClick="ajax_view_order('order_designed','4','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['order_designed'] ?></li>
									<?php
								}
								if($total_count['order_ready']>0)
								{
									?>
									<li title="Order Ready" class="td5" onClick="ajax_view_order('order_ready','5','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['order_ready'] ?></li>
									<?php
								}
								if($total_count['payment_pending']>0)
								{
									?>
									<li title="Payment Pending" class="td6" onClick="ajax_view_order('payment_pending','6','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['payment_pending'] ?></li>
									<?php
								}
								if($total_count['payment_recieved']>0)
								{
									?>
									<li title="Payment Received" class="td7" onClick="ajax_view_order('payment_recieved','7','<?php echo $year."-".$month."-".$i ?>')"><?php echo $total_count['payment_recieved'] ?></li>
									<?php
								}
							}
							?>
							</ul>
							</td>
							<?php
							if($k%7 == 0 && $i != $days)
							{
								echo "</tr><tr style=\"height:120px; min-height:120px\">";
								
							}
							$k++;
							$i++;
						}
						$total_box--;
				  }
			//die($k."-".$total_box);
				  while($k < $total_box)
				  {
					  ?>
                      <td width="5%" align="center" style="vertical-align:middle"></td>
                      <?php
					  $k++;
				  }
				  ?>
                   </tr> 
                  <tr>
                  	<th class="td1" >Order Created</th>
                  	<th class="td2" >Supply Ordered</th>
                  	<th class="td3" >Supply Received</th>
                    <th class="td4" >Items Designed</th>
                    <th class="td5" >Order Ready</th>
                    <th class="td6" >Payment Pending</th>
                    <th class="td7" >Payment Received</th>
                  </tr>
                </table>
              </div>
            </form>         
          </tr>
      </table>
 </div>  
 <?php
  include("footer.php"); 
  ?>
</body>
</html>
