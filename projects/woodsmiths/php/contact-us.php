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
          <h2 class="page-title">CONTACT US</h2>
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
           <div class="col-sm-6 col-xs-12 contact-form">
         <form action="#" method="post" enctype="multipart/form-data" class="form-horizontal">
        <fieldset>
          <legend><h2>Contact Us </h2></legend>
           <p></p>
                  
          <div class="form-group required">
          <div class="col-sm-12">
            <input type="text" name="name" value="" id="input-name" class="form-control" placeholder="Your Name *">
             
          </div>
          </div>
          <div class="form-group required">
          <div class="col-sm-12">
            <input type="text" name="email" value="" id="input-email" class="form-control" placeholder="E-Mail Address *">
             
          </div>
          </div>
          <div class="form-group required">
          <div class="col-sm-12">
            <textarea name="enquiry" value="Enquiry" rows="10" id="input-enquiry" placeholder="Enquiry *" class="form-control"></textarea>
             
          </div>
          </div>
          <script src="//www.google.com/recaptcha/api.js" type="text/javascript"></script>
           
 
        </fieldset>
        <div class="buttons">
          <div class="pull-left">
          <button class="btn btn-info" type="submit"><span>Submit </span></button>
          </div>
        </div>
        </form>
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