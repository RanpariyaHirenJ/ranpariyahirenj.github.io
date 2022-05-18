<?php 
$pageTitle = "Dashboard";
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
    <form action="#" method="post" enctype="application/x-www-form-urlencoded" name="search-frm" id="frm-search">
    <!--   <table width="100%" border="0" cellspacing="5">
        <tr>
          <td><label>Patient Name / Bill No / Bed No</label>
            <div>
            <?php 
      			$patient_full_name = "";
      			if(isset($_SESSION["searchParams"]))
      			{
      				$patient_full_name = $_SESSION["searchParams"][0];
      			}        
        	 ?>
              <input name="patient_full_name" type="text" value="<?php echo $patient_full_name ?>">
            </div></td>
          <td><label>Doctor</label>
            <div>
            <?php 
    			$doctor_name = "";
    			if(isset($_SESSION["searchParams"]))
    			{
    				$doctor_name = $_SESSION["searchParams"][1];
    			}        
        	?>
              <input name="doctor_name" type="text" value="<?php echo $doctor_name ?>">
            </div></td>
          <td><label>Admission From</label>
            <div>
            <?php 
    			$admission_date_from = "";
    			if(isset($_SESSION["searchParams"]))
    			{
    				$admission_date_from = $_SESSION["searchParams"][2];
    			}        
        	?>
              <input name="admission_date_from" id="admission_date_from" type="text" value="<?php echo $admission_date_from ?>" isdate="yes">
            </div></td>
          <td><label>Admission To</label>            
            <div>
            <?php 
    			$admission_date_to = "";
    			if(isset($_SESSION["searchParams"]))
    			{
    				$admission_date_to = $_SESSION["searchParams"][3];
    			}        
        	?>
              <input name="admission_date_to" id="admission_date_to" type="text" value="<?php echo $admission_date_to ?>" isdate="yes">
            </div></td>
        </tr>
        <tr>
          <td><label>Is Discharged</label>
            <?php 
      			$is_discharged = 2;
      			if(isset($_SESSION["searchParams"]))
      			{
      				$is_discharged = $_SESSION["searchParams"][4];
      			}
      			?>
            <div class="response">
              <ul>
                <li>
                  <input name="is_discharged" id="is_discharged1" type="radio" value="2" <?php echo $is_discharged == 2 ? "checked=\"checked\"" : "" ?>>
                  <label for="is_discharged1">All</label>
                </li>
                <li>
                  <input name="is_discharged" id="is_discharged2" type="radio" value="1" <?php echo $is_discharged == 1 ? "checked=\"checked\"" : "" ?>>
                  <label for="is_discharged2">Yes</label>
                </li>
                <li>
                  <input name="is_discharged" id="is_discharged3" type="radio" value="0" <?php echo $is_discharged == 0 ? "checked=\"checked\"" : "" ?>>
                  <label for="is_discharged3">No</label>
                </li>
              </ul>
            </div></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </table> -->
    </form>
    <div class="buttonContainer" style="position:relative;width:100%;">
      <div class="float_center">
        <ul class="child">
          <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="frm-search">Search</a></li>
          <li><a href="#" title="Button push" class="button btnPush btnBlueGreen">Reset</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<form action="./Transactions/BillingDelete" method="post" enctype="application/x-www-form-urlencoded" id="frm-delete">
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
          <th>Country</th>
          <th>State</th>
          <th>Order Status</th>
          <th>Order Date</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <?php 
        foreach ($data['orders'] as $value) {
         ?>
         <tr>
          <td>#<?php echo str_pad($value['order_id'], 4, '0', STR_PAD_LEFT); ?></td>
          <td><?php echo $value['first_name'].' '.$value['last_name'] ?></td>
          <td><?php echo $value['mobile']; ?></td>
          <td><?php echo $value['items']; ?></td>
          
          <td><?php echo $value['order_type']?'Cart':'Enquiry'; ?></td>
          <td><?php echo $value['country']; ?></td>
          <td><?php echo $value['state']; ?></td>
          <td><?php echo $value['status']; ?></td>
          <td><?php echo date('d/m/Y',strtotime($value['date_added'])); ?></td>
          <td><a href="order-details/<?php echo $value['order_id']; ?>" class="editLink" title="Edit"><i class="fa fa-eye" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
         </tr>
       <?php } ?>
      </tbody>
    </table>
  </div>
</form>
<!-- <div class="buttonContainer botCont">
  
  <div class="clear"></div>
  <div class="float_center">
    <ul class="child">
      <li><a href="./Transactions/BillingAddEdit" title="Button push" class="button btnPush btnBlueGreen">Add</a></li>
      <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="frm-delete" confirm-delete="true">Delete</a></li>
    </ul>
  </div>
</div> -->
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
</script>

