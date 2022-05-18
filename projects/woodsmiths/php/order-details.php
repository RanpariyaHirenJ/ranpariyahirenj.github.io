<!doctype html>
<html>
   <head>
      <?php include('shared/header.php'); ?>
      <style type="text/css">
         thead th{
         font-weight: 600;
         }
      </style>
   </head>
   <body>
      <div class="wrapper">
         <!--Start header area-->
         <header class="header-area">
            <!--Start header lawer-->
            <?php include('shared/TopMenu.php'); ?>
            <!--End header lawer-->
         </header>
         <!--End header area-->
         <div class="mainbody">
            <div class="page-heading pt_40 pb_40">
               <div class="container">
                  <div class="row">
                     <div class="page-heading-position tc">
                        <h2 class="page-title">Order Details</h2>
                     </div>
                     <div class="page-heading-position tc">
                        <nav class="woocommerce-breadcrumb"><a href="<?php echo base_url; ?>">Home</a><span></span></nav>
                     </div>
                  </div>
               </div>
            </div>
            <hr>
            <div class="page-content-inner ">
               <div class="page-container container">
                  <div id="content" class="col-sm-12">
                     <table class="table table-bordered table-hover">
                        <thead>
                           <tr>
                              <th class="text-left" colspan="2">Order Details</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td class="text-left" style="width: 50%;"> <span style="font-weight: 600;">Order ID: </span>  #<?php echo $data['order']['order_details']['order_no']; ?><br>
                                 <span style="font-weight: 600;">Date Added:</span> <?php echo date('d/m/Y',strtotime($data['order']['order_details']['date_added'])); ?>
                              </td>
                              <td class="text-left" style="width: 50%;"><span style="font-weight: 600;"> Order Type:</span> <?php echo $data['order']['order_details']['order_type']?'Cart':'Enquiry'; ?><br>
                                 <span style="font-weight: 600;">Order Status:</span> <?php echo $data['order']['order_details']['status']; ?>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <table class="table table-bordered table-hover">
                        <thead>
                           <tr>
                              <th class="text-left"  style="width: 50%; vertical-align: top;">Communication Address</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td class="text-left"><?php echo $data['order']['order_details']['first_name'].' '.$data['order']['order_details']['last_name']; ?>,<br><?php echo $data['order']['order_details']['address'] ?><br><?php echo $data['order']['order_details']['state'] ?>,<br><?php echo $data['order']['order_details']['country'] ?></td>
                           </tr>
                        </tbody>
                     </table>
                     <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                           <thead>
                              <tr>
                                 <th class="text-left">Product Name</th>
                                 <th class="text-left">Image</th>
                                 <th class="text-right">Quantity</th>
                                 <th class="text-right">Price</th>
                                 <th class="text-right">Total</th>
                                 <!-- <th style="width: 20px;"></th> -->
                              </tr>
                           </thead>
                           <tbody>
                              <?php 
                              foreach ($data['order']['order_items'] as  $value) {
                                
                               ?>
                              <tr>
                                 <td class="text-left"><?php echo $value['name']; ?>
                                 </td>
                                 <td class="text-left"><img src="<?php echo IMAGE_PATH.'uploads/'.$value['image_path'].'/small-'.$value['image']; ?>"></td>
                                 <td class="text-right"><?php echo $value['quantity']; ?></td>
                                 <td class="text-right"><?php echo $value['price']>0?'$'.$value['price']:'-NA-'; ?></td>
                                 <td class="text-right"><?php echo $value['price']>0?'$'.$value['price']*$value['quantity']:'-NA-'; ?></td>
                               
                              </tr>
                           <?php } ?>
                           </tbody>
                           <?php if($data['order']['order_details']['order_type']){ ?>
                           <tfoot>
                              <tr>
                                 <td colspan="3"></td>
                                 <td class="text-right"><b>Total</b></td>
                                 <td class="text-right">$<?php echo $data['order']['order_details']['grand_total'] ?></td>
                              </tr>
                           </tfoot>
                        <?php } ?>
                        </table>
                     </div>
                 
                     <h3>Order Status</h3>
                     <table class="table table-bordered table-hover">
                        <thead>
                           <tr>
                              <th class="text-left">Date Added</th>
                              <th class="text-left">Status</th>
                              <th class="text-left">Comment</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td class="text-left"><?php echo date('d/m/Y',strtotime($data['order']['order_details']['date_added'])); ?></td>
                              <td class="text-left">Pending</td>
                              <td class="text-left"></td>
                           </tr>
                           <?php 
                           foreach ($data['order']['order_history'] as $value) {
                             
                            ?>
                            <tr>
                             <td class="text-left"><?php echo date('d/m/Y',strtotime($value['date_added'])); ?></td>
                              <td class="text-left"><?php echo $value['order_status']; ?></td>
                              <td class="text-left"><?php echo $value['comment'] ?></td>
                           </tr>
                         <?php } ?>
                        </tbody>
                     </table>
                     <div class="buttons clearfix">
                        <div class="pull-right"><a href="order-history" class="btn btn-primary">Continue</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <br>
         <footer id="footer-wrapper" class="footer">
            <?php include('shared/footer.php'); ?>
         </footer>
         <!-- End Footer Top --> 
      </div>
      <?php include('shared/footer_links.php'); ?>
      <!--<script src="scripts/owl.carousel.js"></script> 
         <script src="scripts/owl.carousel.min.js"></script> --> 
      <!--<script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/owl.carousel.min.js'></script> --> 
      <script>
         new WOW().init();
         
      </script>
   </body>
</html>