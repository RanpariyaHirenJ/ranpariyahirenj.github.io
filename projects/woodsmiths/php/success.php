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
          <h2 class="page-title">Order Confirmed</h2>
        </div>
        <div class="page-heading-position tc">
          <nav class="woocommerce-breadcrumb"><a href="<?php echo base_url; ?>">Home</a><span></span></nav>
        </div>
      </div>
    </div>
  </div>
  
  <div class="page-content-inner ">
    <div class="page-container container">
      <div class="row fl-page ">
        <div id="main-content" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb_75">
          <div class="woocommerce">
            <div class="woocommerce-notices-wrapper"></div>
            <div id="content" class="col-sm-12">
      <h1>Your <?php echo $_SESSION['order_type']; ?> #<?php echo $_SESSION['order_no']; ?> has been placed.</h1>
      <p>Our staff is looking into your <?php echo $_SESSION['order_type']; ?> and will respond back ASAP.</p><p>Kindly be on the lookout for the status update of your <?php echo $_SESSION['order_type']; ?>.</p><p>If you have any queries please feel free to contact us at <a style="color: crimson;" href="mailto:customersupport@woodsmiths.com">customersupport@woodsmiths.com</a>.</p>
      <p><a style="color: crimson;"  href="order-history">Click Here!</a> to see your <?php echo $_SESSION['order_type']; ?> in your order history.</p>
     <!--  <div class="buttons">
        <div class="pull-right"><a href="order-history" class="btn btn-primary">View Order</a></div>
      </div> -->
      </div>
          </div>
        </div>
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