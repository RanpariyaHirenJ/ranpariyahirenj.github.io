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
  
  <!--<div class="page-content-inner ">
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
  </div>-->
  <div class="contact-form-cntr">
    <div class="container">
      <div class="grid-12">
        <div class="contect-details wow animated fadeInLeft" data-wow-delay="0.2s" data-wow-offset="50">
          <div class="middle-div">
            <div class="address-cntr">
            	<div class="">
                	<h3>Woodsmiths</h3>
                    <p class="addressPin">Woodsmiths Harper Plant<br>418 Prospect St NW<br>Lenoir, NC 28645</p>
                    <p class="email-icon"><a href="mailto:sales@woodsmiths.com">sales@woodsmiths.com</a></p>
                    <p class="email-icon"><a href="mailto:customerservice@woodsmiths.com">customerservice@woodsmiths.com</a></p>
                    <p class="phone-icon">1-406-626-3102</p>
                </div>
            </div>
          </div>
        </div>
		<div class="clear mob-view"></div>
  <div id="enquiry"></div>
        <div class="enquiry-form wow animated fadeInRight" data-wow-delay="0.2s" data-wow-offset="50">
          <div class="form-fields">
            <h2>Send Enquiry</h2>
            <form id="contact_form">
            <ul>
              <li>
                <input type="text" title="Name" name="member_name" validation="text" placeholder="Your Name">
              </li>
              <li>
                <input type="text" title="Company Name" name="company_name" validation="text" placeholder="Company Name">
              </li>
              <li>
                <input type="text" maxlength="13" name="member_phone" onKeyPress="return onlyNos(event,this);" title="Telephone" validation="number" placeholder="Telephone">
              </li>
              <li>
                <input type="text" name="member_email" title="Email" validation="email" placeholder="Email">
              </li>
              <li>
                <input type="text" name="industry" title="Industry" validation="text" placeholder="Industry">
              </li>
              <li>
                <textarea name="message" title="Message" validation="text" placeholder="Message"></textarea>
              </li>
              <li>
                 <div class="g-recaptcha" data-sitekey="6Ld6bHcUAAAAAHB22vQt7XM3OzsvHADytvBoLcN2"></div>
              </li>
            </ul>
            <div class="clear"></div>
            <div class="contact-sub">
              <input class="submit-btn" type="submit" name="action" value="Submit">
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
  <div class="contact-form-cntr" style="padding-top:0px;margin:0px;">
    <div class="container">
      <div class="grid-12">
        <div class="contact-map">
    <div id="mapouter">
      <div id="gmap_canvas">
        <iframe frameborder="0" scrolling="no" marginheight="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.246769426548!2d72.85543097028516!3d19.115064983680252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8323c0d96fd%3A0x8c353a64a38cdbed!2sOPC+Asset+Solutions!5e0!3m2!1sen!2sin!4v1533901649721" marginwidth="0"></iframe>
        </div>
    </div>
  </div>
		<div class="clear"></div>        
      </div>
    <div class="clear"></div>
    </div>
    <div class="clear"></div>
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