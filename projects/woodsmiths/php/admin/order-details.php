<?php 
   $pageTitle = "Order Details";
   
   ?>
<!DOCTYPE html>
<html>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <?php include("shared/header.php"); ?>
      <link rel="stylesheet" type="text/css" href="styles/bootstrap.css">
   </head>
   <body>
      <?php include("shared/TopMenu.php"); ?>
      <div class="searchContainer">
      </div>
      <div class="gridContainer">
         <div class="formTitle">Customer Order details</div>
         <br>
         <div class="row" style="    margin-left: 0;margin-right: 0;">
            <div class="col-md-3">
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title"><i class="fa fa-shopping-cart"></i> Order Details</h3>
                  </div>
                  <table class="table">
                     <tbody>
                        <tr>
                           <td style="width: 10px;"><button data-toggle="tooltip" title="" class="btn btn-info btn-xs" data-original-title="Date Added"><i class="fa fa-calendar fa-fw"></i></button></td>
                           <td><?php echo date('d/m/Y',strtotime($data['order_details']['order_date'])); ?></td>
                        </tr>
                        <tr>
                           <td><button data-toggle="tooltip" title="" class="btn btn-info btn-xs" data-original-title="Payment Method"><i class="fa fa-first-order fa-fw"></i></button></td>
                           <td><?php echo $data['order_details']['order_type']?'Cart':'Enquiry'; ?></td>
                        </tr>
                        <tr>
                           <td><button data-toggle="tooltip" title="" class="btn btn-info btn-xs" data-original-title="Shipping Method"><i class="fa fa-info-circle fa-fw"></i></button></td>
                           <td><?php echo $data['order_details']['order_status'] ?></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div class="col-md-3">
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title"><i class="fa fa-user"></i> Customer Details</h3>
                  </div>
                  <table class="table">
                     <tbody>
                        <tr>
                           <td style="width: 1%;"><button data-toggle="tooltip" title="" class="btn btn-info btn-xs" data-original-title="Customer"><i class="fa fa-user fa-fw"></i></button></td>
                           <td> <a ><?php echo $data['order_details']['first_name'].' '.$data['order_details']['last_name'] ?></a> </td>
                        </tr>
                        <tr>
                           <td><button data-toggle="tooltip" title="" class="btn btn-info btn-xs" data-original-title="E-Mail"><i class="fa fa-envelope-o fa-fw"></i></button></td>
                           <td><a href="mailto:<?php echo $data['order_details']['email']; ?>"><?php echo $data['order_details']['email']; ?></a></td>
                        </tr>
                        <tr>
                           <td><button data-toggle="tooltip" title="" class="btn btn-info btn-xs" data-original-title="Telephone"><i class="fa fa-phone fa-fw"></i></button></td>
                           <td><?php echo $data['order_details']['mobile']; ?></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div class="col-md-6">
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title"><i class="fa fa-map-marker"></i> Shipping Address</h3>
                  </div>
                  <table class="table">
                     <tbody>
                        <tr>
                           <td>Address</td>
                           <td>:</td>
                           <td  class="text-left"><?php echo $data['order_details']['address']; ?></td>
                           <td style="width: 1%;" class="text-center"></td>
                        </tr>
                        <tr>
                           <td>State</td>
                           <td>:</td>
                           <td class="text-left"><?php echo $data['order_details']['state']; ?></td>
                           <td class="text-center"> </td>
                        </tr>
                        <tr>
                           <td>Country</td>
                           <td>:</td>
                           <td class="text-left"><?php echo $data['order_details']['country']; ?></td>
                           <td class="text-center"> </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         <div class="panel panel-default">
            <div class="panel-heading">
               <h3 class="panel-title"><i class="fa fa-info-circle"></i> Order (#<?php echo $data['order_details']['order_no']; ?>)</h3>
            </div>
            <div class="panel-body">
               <table class="table table-bordered">
                <?php 
                $total = 0;
                foreach ($data['order_products'] as $key => $order_type) {
                  if($key == 1){
                 ?>
                  <thead>
                     <tr>
                        <td class="text-left">Product</td>
                        <td class="text-right">Quantity</td>
                        <td class="text-right">Unit Price</td>
                        <td class="text-right">Total</td>
                     </tr>
                  </thead>
                  <tbody>
                   <?php 
                      
                    foreach ($order_type as $value) {
                    
                     $total = $value['grand_total'];
                    ?>
                     <tr>
                        <td class="text-left"><a href="<?php echo DOMAIN.$value['pro_cat'].'/'.$value['keyword']; ?>" target="_blank"><?php echo $value['name']; ?></a> <br>
                        </td>
                        <td class="text-right"><?php echo $value['quantity']; ?></td>
                        <td class="text-right">$<?php echo $value['price']; ?></td>
                        <td class="text-right">$<?php echo $value['price']*$value['quantity']; ?></td>
                     </tr>
                   <?php }  ?>
                   <tr>
                   <td colspan="3" class="text-right">Total</td>
                   <td class="text-right">$<?php echo $total; ?></td>
                   </tr>
                  </tbody>
                <?php }else{ ?>
                   <thead>
                     <tr>
                        <td class="text-left">Product</td>
                        <td class="text-right">Quantity</td>
                     </tr>
                  </thead>
                  <tbody>
                   <?php 
                      
                    foreach ($order_type as $value) {
                    
                     
                    ?>
                     <tr>
                        <td class="text-left"><a href="<?php echo DOMAIN.$value['pro_cat'].'/'.$value['keyword']; ?>" target="_blank"><?php echo $value['name']; ?></a> <br>
                        </td>
                        <td class="text-right"><?php echo $value['quantity']; ?></td>
                       
                     </tr>
                   <?php }  ?>
                   
                  </tbody>
                <?php } } ?>
               </table>
            </div>
         </div>
         <div class="panel panel-default">
            <div class="panel-heading">
               <h3 class="panel-title"><i class="fa fa-comment-o"></i> Order History</h3>
            </div>
            <div class="panel-body">
               <ul class="nav nav-tabs">
                  <li class="active"><a href="#tab-history" data-toggle="tab" aria-expanded="true">History</a></li>
               </ul>
               <div class="tab-content">
                  <div class="tab-pane active" id="tab-history">
                     <div id="history">
                        <div class="table-responsive">
                           <table class="table table-bordered">
                              <thead>
                                 <tr>
                                    <td class="text-left">Date Added</td>
                                    <td class="text-left">Comment</td>
                                    <td class="text-left">Status</td>
                                    <td class="text-left">Customer Notified</td>
                                 </tr>
                              </thead>
                              
                                 <tr>
                                    <td class="text-left"><?php echo date('d/m/Y',strtotime($data['order_details']['order_date'])); ?></td>
                                    <td class="text-left"></td>
                                    <td class="text-left">Pending</td>
                                    <td class="text-left">No</td>
                                 </tr>
                              <tbody id="tbody-history">
                                <?php if ($data['histories']) { ?>
                                  <?php foreach ($data['histories'] as $history) { ?>
                                  <tr>
                                    <td class="left"><?php echo date('d/m/Y',strtotime($history['date_added'])); ?></td>
                                    <td class="left"><?php echo $history['comment']; ?></td>
                                    <td class="left"><?php echo $history['order_status']; ?></td>
                                    <td class="left"><?php echo $history['notify']?"Yes":'No'; ?></td>
                                  </tr>
                                  <?php } ?>
                                  <?php } else { ?>
                                 
                                  <?php } ?>
                              </tbody>
                           </table>
                        </div>
                       
                     </div>
                     <br>
                     <fieldset>
                        <legend>Add Order History</legend>
                        <form class="form-horizontal">
                           <div class="form-group">
                              <label class="col-sm-2 control-label" for="input-order-status">Order Status</label>
                              <div class="col-sm-10">
                                 <select name="order_status" data-selected="<?php echo $data['order_details']['order_status']; ?>" id="input-order-status" class="form-control">
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
                              </div>
                           </div>
                          
                           <div class="form-group">
                              <label class="col-sm-2 control-label" for="input-notify">Notify Customer</label>
                              <div class="col-sm-10">
                                
                                 <input type="checkbox" name="notify" id="sel" checked="checked" value="1"><label for="sel">&nbsp;</label>
                              </div>
                           </div>
                           <div class="form-group">
                              <label class="col-sm-2 control-label" for="input-comment">Comment</label>
                              <div class="col-sm-10">
                                 <textarea name="comment" rows="8" id="input-comment" class="form-control"></textarea>
                              </div>
                           </div>
                        </form>
                     </fieldset>
                     <div class="text-right">
                        <button id="button-history" data-loading-text="Loading..." class="btn btn-primary"><i class="fa fa-plus-circle"></i> Add History</button>
                     </div>
                  </div>
                
               </div>
            </div>
         </div>
      </div>
          <div class="buttonContainer botCont">
               <div class="clear"></div>
               <div class="float_center">
                  <ul class="child">

                     <li><a href="order-list<?php echo $_SESSION['page']>1?'/'.$_SESSION['page']:''?>" title="Button push" class="button btnPush btnBlueGreen">Back</a></li>
                  </ul>
               </div>
            </div>
   </body>
</html>
<script type="text/javascript">
  
$('#button-history').on('click', function() {
  $.ajax({
    url: 'Orders/updateOrderHistory/'+"<?php echo $data['order_details']['order_id'];  ?>",
    type: 'post',
    dataType: 'json',
    data: 'order_status=' + encodeURIComponent($('select[name=\'order_status\']').val()) + '&notify=' + ($('input[name=\'notify\']').prop('checked') ? 1 : 0) + '&comment=' + encodeURIComponent($('textarea[name=\'comment\']').val()),
    beforeSend: function() {
      $('#button-history').text('loading...');
    },
    complete: function() {
      $('#button-history').html('<i class="fa fa-plus-circle"> Add History</i>');
    },
    success: function(json) {
      $('.alert-dismissible').remove();

      if (json['error']) {
        $('#history').before('<div class="alert alert-danger alert-dismissible"><i class="fa fa-exclamation-circle"></i> Something went wrong. <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
      }

      if (json['success']) {
        $('#tbody-history').load('Orders/getOrderHistory/'+"<?php echo $data['order_details']['order_id'];  ?>");

        $('#history').before('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> Success: You have modified orders! <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

        $('textarea[name=\'comment\']').val('');
        // if($('#sel').prop('checked')){
        //   $('#sel').click();
        // }
        
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    }
  });
});
</script>