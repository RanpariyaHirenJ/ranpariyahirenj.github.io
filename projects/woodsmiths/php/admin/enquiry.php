<?php 
$pageTitle = "Orders";
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
    <form action="enquiry" method="post" enctype="application/x-www-form-urlencoded" name="search-frm" id="frm-search">
     <table width="100%" border="0" cellspacing="5">
        <tr>
          <td style="width: 25%;"><label>Customer Name / Email / Mobile</label>
            <div>
          
              <input name="customer" type="text" value="<?php echo $_SESSION['search_cond_for_enquiry']['customer']; ?>">
            </div></td>
          <td style="width: 25%;"><label>Enquiry No</label>
            <div>
          
              <input name="enquiry_no" type="text" placeholder="ENQXXXX/20-21" value="<?php echo $_SESSION['search_cond_for_enquiry']['enquiry_no']; ?>">
            </div></td>
          <td style="width: 25%;"><label>Order From</label>
            <div>
          
              <input name="fromDate"  id="fromDate" type="text" value="<?php echo $_SESSION['search_cond_for_enquiry']['fromDate'] ?>" >
            </div></td>
          <td style="width: 25%;"><label>Order To</label>            
            <div>
           
              <input name="toDate"  type="text" id="toDate" value="<?php echo $_SESSION['search_cond_for_enquiry']['toDate'] ?>" >
            </div></td>

        </tr>
      <!--   <tr>
          <td style="width: 25%;"><label>Order Type</label>
          <div>
            <select id="drpdown" data-selected="<?php echo $_SESSION['search_cond_for_enquiry']['order_type']; ?>" name="order_type">
            <option value="2">All</option>
            <option value="1">Cart</option>
            <option value="0">Enquiry</option>

          </select>
          </div></td>
          <td style="width: 25%;"><label>Order Status</label>
          <div>
            <select id="drpdown" data-selected="<?php echo $_SESSION['search_cond_for_enquiry']['order_status']; ?>" name="order_status">
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
    
        </tr> -->
      </table> 
    </form>
    <div class="buttonContainer" style="position:relative;width:100%;">
      <div class="float_center">
        <ul class="child">
          <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="frm-search">Search</a></li>
          <li><a href="Orders/sessionResetForEnquiry" title="Button push" class="button btnPush btnBlueGreen">Reset</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<form action="./Transactions/BillingDelete" method="post" enctype="application/x-www-form-urlencoded" id="frm-delete">
  <div class="gridContainer">
    <div class="formTitle">Customer Project Enquiry</div>
    <table class="w3-table-all w3-hoverable">
      <thead>
        <tr class="w3-light-grey">
          <th>Enquiry No.</th>
          <th>Product Name</th>
          <th>Customer Name</th>
          <th>Customer Email</th>
          <th>Mobile No.</th>
          <th>Message</th>
          <th>View</th>
          <th>Enquiry Date</th>
        </tr>
      </thead>
      <tbody>
        <?php 
        if(count($data['enquiries']) > 0){
        foreach ($data['enquiries'] as $value) {
         ?>
         <tr>
          <td>#<?php echo $value['enquiry_no'] ?></td>
          <td><?php echo $value['product_name']; ?></td>
          <td><?php echo $value['name'] ?></td>
          <td><?php echo $value['email']; ?></td>
          <td><?php echo $value['mobile']; ?></td>
          <td><?php echo substr($value['message'], 0,100); ?><?php if(strlen($value['message'])>100){echo "..."; }?></td>
          <td><?php if(strlen($value['message'])>100){?><a href="javascript:void(0)" class="view" data-id="<?php echo $value['enquiry_id'] ?>"><i class="fa fa-eye"></i></a><?php } ?></td>
          <td><?php echo date('d/m/Y',strtotime($value['date_added'])); ?></td>
         </tr>
       <?php } }else{ ?>
        <tr><td colspan="7">Enquiry not found.</td></tr>
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
       <li><a href="enquiry-export" title="Button push" class="button btnPush btnBlueGreen">Export</a></li>
    </ul>
 </div>
</div>
</body>
</html>
<?php include("./shared/CommonFooter.php"); ?>
<script type="text/javascript">
function paid_response(paid)
{
	if(paid != 0)
	{
		alert("Cannot discharge patient as payment is pending!");
		return false;	
	}else{
		return true;
	}
}

if("<?php echo count($_SESSION['search_cond_for_enquiry']) ?>" > 0){
  $(".collapsible").addClass('active');
  $(".collapsible").next().css('max-height','192px');

}

$('.view').click(function(){
  var _this = $(this);
    $.ajax({
        url: 'Orders/getEnquiryMessage',
        type : 'POST',
        data : {'enquiry_id':$(this).data('id')},
        success: function(data) {
            swal(_this.closest('tr').find('td:eq(1)').text()+"!", data);
        }
    });
});
</script>

