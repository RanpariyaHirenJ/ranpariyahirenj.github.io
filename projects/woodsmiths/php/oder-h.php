<!doctype html>
<html>
<head>
<?php include('shared/header.php'); ?>
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
          <h2 class="page-title">Order History</h2>
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
     <div class="table-responsive">
      <?php   
        if(count($data['orders']) > 0 ){
       ?>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th class="text-right">Order ID</th>
              <th class="text-left">Customer</th>
              <th class="text-right">No. of Products</th>
              <th class="text-left">Status</th>
              <th class="text-left">Order Type</th>
              <th class="text-right">Total</th>
              <th class="text-left">Date Added</th>
              <td></td>
            </tr>
          </thead>
            
          <tbody>
            <?php   
              
                foreach ($data['orders'] as $value) {
                
             ?>
              <tr>
              <td class="text-right">#<?php  echo str_pad($value['order_id'], 4, '0', STR_PAD_LEFT) ?></td>
              <td class="text-left"><?php   echo $value['cus_name']; ?></td>
              <td class="text-right"><?php  echo $value['product_count'] ?></td>
              <td class="text-left"><?php   echo $value['status'] ?></td>
              <td><?php echo $value['order_type']?'Cart':'Enquiry'; ?></td>
              <td class="text-right"><?php   echo $value['grand_total']?'$'.$value['grand_total']:'-NA-'; ?></td>
              <td class="text-left"><?php   echo date('d/m/Y',strtotime($value['date_added'])) ?></td>
              <td class="text-right"><a href="order-details/<?php   echo $value['order_id']; ?>" data-toggle="tooltip" title="" class="btn btn-info" data-original-title="View"><i class="fa fa-eye"></i></a></td>
            </tr>
          <?php   } ?>
                      </tbody>
        </table>
      <?php   } ?>
      </div>
      
    </div>
  </div>
  
    
  </div>
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