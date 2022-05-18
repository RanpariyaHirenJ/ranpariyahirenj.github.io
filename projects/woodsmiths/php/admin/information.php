<?php 
$pageTitle = "Information";
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

</div>
<form action="" method="post" enctype="application/x-www-form-urlencoded" id="frm-delete">
  <div class="gridContainer">
    <div class="formTitle">Information</div>
    <table class="w3-table-all w3-hoverable">
      <thead>
        <tr class="w3-light-grey">
          <th>Information Title</th>
          <th>Link Type</th>
          <th>Sort Order</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <?php 
        if(count($data['informations']) > 0){
        foreach ($data['informations'] as $value) {
         ?>
         <tr>
          <td><?php echo $value['title'] ?></td>
           <td><?php echo $value['link_type']?'Need Help':'Information'; ?></td>
          <td><?php echo $value['sort_order']; ?></td>
          <td><a href="information-toggle-status/<?php echo $value['information_id'] ?>/<?php echo $value['status']?>" ><i class="fa fa-toggle-<?php echo $value['status']?'on':'off'; ?>" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
          <td><a href="edit-information/<?php echo $value['information_id'] ?>" class="editLink" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
         </tr>
       <?php } }else{ ?>
        <tr><td colspan="7">Information not found.</td></tr>
       <?php } ?>
      </tbody>
    </table>
  </div>
</form>
<div class="buttonContainer botCont">
 <!--   <div class="float_center">
    <?php echo $data['pagination']; ?> 
  </div> -->
  <div class="clear"></div>
  <div class="float_center">
    <ul class="child">
      <li><a href="add-information" title="Button push" class="button btnPush btnBlueGreen">Add</a></li>
      <!-- <li><a href="javascript:void(0)" title="Button push" id="delete-record" class="button btnPush btnBlueGreen">Delete</a></li> -->
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

