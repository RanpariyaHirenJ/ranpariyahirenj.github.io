<?php 
$pageTitle = "Orders List";
?>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include("./shared/header.php"); ?>
</head>
<body>
<?php include("./shared/TopMenu.php"); ?>
<div class="searchContainer">
  <button class="collapsible">Search</button>
  <div class="content">
    <form action="order-list" method="post" enctype="application/x-www-form-urlencoded" name="search-frm" id="frm-search">
     <table width="100%" border="0" cellspacing="5">
        <tr>
          <td style="width: 25%;"><label>Customer Name / Email / Mobile</label>
            <div>
          
              <input name="customer" type="text" value="<?php echo $_SESSION['search_cond_for_order']['customer']; ?>">
            </div></td>
          <td style="width: 25%;"><label>Order No</label>
            <div>
          
              <input name="order_no" type="text" placeholder="ORDXXXX/20-21" value="<?php echo $_SESSION['search_cond_for_order']['order_no']; ?>">
            </div></td>
          <td style="width: 25%;"><label>Order From</label>
            <div>
          
              <input name="fromDate"  id="fromDate" type="text" value="<?php echo $_SESSION['search_cond_for_order']['fromDate'] ?>" >
            </div></td>
          <td style="width: 25%;"><label>Order To</label>            
            <div>
           
              <input name="toDate"  type="text" id="toDate" value="<?php echo $_SESSION['search_cond_for_order']['toDate'] ?>" >
            </div></td>

        </tr>
        <tr>
          <td style="width: 25%;"><label>Order Type</label>
          <div>
            <select id="drpdown" data-selected="<?php echo $_SESSION['search_cond_for_order']['order_type']; ?>" name="order_type">
            <option value="2">All</option>
            <option value="1">Cart</option>
            <option value="0">Enquiry</option>

          </select>
          </div></td>
          <td style="width: 25%;"><label>Order Status</label>
          <div>
            <select id="drpdown" data-selected="<?php echo $_SESSION['search_cond_for_order']['order_status']; ?>" name="order_status">
            <option value="All">All</option>
            <option value="Canceled">Canceled</option>
            <option value="Complete">Complete</option>
            <option value="Denied">Denied</option>
            <option value="Failed">Failed</option>
            <option value="Pending">Pending</option>
            <option value="Processed">Processed</option>
            <option value="Processing">Processing</option>
            <option value="Refunded">Refunded</option>
            <option value="Shipped">Shipped</option>

          </select>
          </div></td>
         
          <td>&nbsp;</td>
          <td>&nbsp;</td>
    
        </tr>
      </table> 
    </form>
    <div class="buttonContainer" style="position:relative;width:100%;">
      <div class="float_center">
        <ul class="child">
          <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="frm-search">Search</a></li>
          <li><a href="Orders/sessionReset" title="Button push" class="button btnPush btnBlueGreen">Reset</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<form action="#" method="post" enctype="application/x-www-form-urlencoded" id="frm-delete">
  <div class="gridContainer">
    <div class="formTitle">Customer Enquiry</div>
    <table class="w3-table-all w3-hoverable">
      <thead>
        <tr class="w3-light-grey">
          <th>Order No.</th>
          <th>Customer Name</th>
          <th>Mobile No.</th>
          <th>Item Products</th>
          <th>Order Type</th>
          <th>Total</th>
          <th>Country</th>
          <th>State</th>
          <th>Order Status</th>
          <th>Order Date</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <?php 
        if(count($data["orders"]) > 0){
        foreach ($data["orders"] as $value) {
         ?>
         <tr>
          <td>#<?php echo $value["order_no"]; ?></td>
          <td><?php echo $value["first_name"]." ".$value["last_name"] ?></td>
          <td><?php echo $value["mobile"]; ?></td>
          <td><?php echo $value["items"]; ?></td>
          
          <td><?php echo $value["order_type"]?"Cart":"Enquiry"; ?></td>
          <td><?php echo $value["grand_total"]>0?"$".$value["grand_total"]:"-NA-"; ?></td>
          <td><?php echo $value["country"]; ?></td>
          <td><?php echo $value["state"]; ?></td>
          <td><?php echo $value["status"]; ?></td>
          <td><?php echo date("d/m/Y",strtotime($value["date_added"])); ?></td>
          <td><a href="order-details/<?php echo $value["order_id"]; ?>" class="editLink" title="Edit"><i class="fa fa-eye" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
         </tr>
       <?php }}else{ ?>
          <tr><td colspan="10">Orders not found.</td></tr>
       <?php } ?>
      </tbody>
    </table>
  </div>
</form>
<div class="buttonContainer botCont">
  <div class="float_center">
    <?php echo $data['pagination']; ?> 
  </div>
  <div class="clear"></div>
  <div class="float_center">
    <ul class="child">
       <li><a href="order-export" title="Button push" class="button btnPush btnBlueGreen">Export</a></li>
    </ul>
 </div>
</div>
</body>
</html>
<?php include("./shared/CommonFooter.php"); ?>
<script type="text/javascript">

if("<?php echo count($_SESSION['search_cond_for_order']) ?>" > 0){
  $(".collapsible").addClass('active');
  $(".collapsible").next().css('max-height','192px');

}
</script>

