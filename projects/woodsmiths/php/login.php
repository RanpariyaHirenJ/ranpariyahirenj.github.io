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
  <div class="page-heading pt_20 pb_20">
    <div class="container">
      <div class="row">
        <div class="page-heading-position tc">
          <h2 class="page-title"><?php echo $data['form']['title'];?></h2>
        </div>
        <div class="page-heading-position tc">
          <nav class="woocommerce-breadcrumb"><a href="<?php echo base_url; ?>">Home</a><span></span></nav>
        </div>
      </div>
    </div>
  </div>
  
  <section class="signup-login-cntr parallax">
    <div class="container">
      <div class="grid-12 p0">
        <?php 
        if($data['form']['type']=="Add"){
         ?>
        
        <div class="grid-6 login" >
          <h2>Login</h2>
          <div class="login-cntr">
          <form id="login" action="login" method="post"  enctype="multipart/form-data" onsubmit="return form_validate_jquery('#login')">
            <div class="grid-layout">
              <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                    <div class="input-group">
                      <label>Email ID</label>
                      <input type="text" name="email" validation="email" class="inputType inputTypeblack" title="Email ID">
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                    <div class="input-group">
                      <label>Password</label>
                      <input type="password" name="password"  class="inputType inputTypeblack" validation="text" title="Password">
                    </div>
                  </div>
                  <div class="forgot-password"><a href="javascript:void(0)">Forgot Password?</a></div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="form-row">
                <div class="grid-12">
                  <div class="submitformbtn text-center spacingtopbot">
                    <input type="submit" name="login" value="Login" class="box-btn">
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </form>
          </div>
        </div>
        <div class="grid-6 forgot-pass" style="display:none;">
          <h2>Forgot Password</h2>
          <div class="login-cntr">
           <form id="forgot-password" action="reset-passowrd" method="post"  enctype="multipart/form-data" onsubmit="return form_validate_jquery('#forgot-password')">
            <div class="grid-layout">
              <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                    <div class="input-group">
                      <label>Email ID</label>
                      <input type="text" name="email" class="inputType inputTypeblack" validation="email" title="Email ID">
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="form-row">
                <div class="grid-12">
                  <div class="submitformbtn text-center spacingtopbot">
                    <input type="submit" value="Submit" class="box-btn" name="forgot">
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
		      </form>
          </div>
        </div>
      <?php } ?>
       <?php 
        if(in_array($data['form']['type'], array('Add','Edit'))){
         ?>
        <div class="grid-6 sign-up" <?php echo $data['form']['type']=="Add"?'':'style="margin: 0 auto; float: none;"' ?>>
   
          <div class="grid-12"><h1><?php echo $data['form']['title'] ?></h1></div>

          <div class="sign-up-cntr">
          <form id="register" action="<?php echo $data['form']['action']; ?>" method="post"  enctype="multipart/form-data" onsubmit="return form_validate_jquery('#register')">
            <div class="grid-layout">
              <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                  <div class="grid-6">
                    <div class="input-group">
                      <label>First Name *</label>
                      <input type="text" name="first_name" class="inputType inputTypeblack" validation="text" value="<?php echo $data['user_details']['first_name'] ?>" title="First Name">
                    </div>
                  </div>
                  <div class="grid-6">
                    <div class="input-group">
                      <label>Last Name *</label>
                      <input type="text" name="last_name" class="inputType inputTypeblack" validation="text" value="<?php echo $data['user_details']['last_name'] ?>" title="Last Name">
                    </div>
                  </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              
              <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                  <div class="grid-6">
                    <div class="input-group">
                      <label>Email Address *</label>
                      <input type="text" name="email" id="email" class="inputType inputTypeblack" value="<?php echo $data['user_details']['email'] ?>" validation="email" title="Email Id">
                    </div>
                  </div>
                  <div class="grid-6">
                    <div class="input-group">
                      <label>Mobile No. *</label>
					             <input type="text" name="mobile" id="mobile" class="inputType inputTypeblack" validation="number" title="Mobile No." value="<?php echo $data['user_details']['mobile'] ?>" maxlength="10">
                    </div>
                  </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
               <?php 
              if(in_array($data['form']['type'], array('Add'))){
               ?>
              <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                  <div class="grid-6">
                    <div class="input-group">
                      <label>Password *</label>
                      <input type="password" id="password" name="password" class="inputType inputTypeblack" validation="<?php echo $data['user_details']['status']?'u-password':'password'; ?>" title="Password">
                    </div>
                  </div>
                  <div class="grid-6">
                    <div class="input-group">
                      <label>Confirm Password *</label>
                      <input type="password" id="confpass" class="inputType inputTypeblack" validation="<?php echo $data['user_details']['status']?'u-match_password':'match_password'; ?>" title="Confirm Password">
                    </div>
                  </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <?php } ?>
               <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                  <div class="grid-6">
                    <div class="input-group">
                      <label>Country *</label>
                      <select name="country" data-selected="<?php echo $data['user_details']['country']?$data['user_details']['country']:'India'; ?>"  class="inputType inputTypeblack">
                        <?php   
                          $json = file_get_contents('country.json');
                          $json = json_decode($json,true);
                          foreach ($json as $value) {
                           ?>
                           <option value="<?php  echo $value['country']; ?>"><?php  echo $value['country']; ?></option>
                           <?php
                          }
                         ?>
                      </select>
                    </div>
                  </div>
                  <div class="grid-6">
                    <div class="input-group">
                      <label>State *</label>
                      <input type="text" id="state" name="state" class="inputType inputTypeblack" value="<?php echo $data['user_details']['state']; ?>" validation="text" title="State">
                    </div>
                  </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="form-row ">
                <div class="form-field">
                 
                  <div class="grid-12">
                    <div class="input-group">
                      <label>Address *</label>
                      <textarea name="address" class="inputType inputTypeblack" validation="text" placeholder="Address" title="Address"><?php echo $data['user_details']['address']; ?></textarea>
                    </div>
                  </div>
                  
                  
                  <div class="clear"></div>
                </div>
              </div>
              <div class="form-row">
                <div class="grid-12">
                  <div class="submitformbtn text-center spacingtopbot">
                    <input type="submit" value="<?php echo $data['form']['type']=="Add"?'Register':'Update';?>"  class="box-btn">
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </form>
          </div>
        </div>
      <?php } ?>

       <?php 
        if($data['form']['type']=="password"){
         ?>
           <div class="grid-6 login change-password" style="margin: 0 auto; float: none;" >
          <h4>Enter your new password</h4>
          <div class="login-cntr">
          <form id="change-password" action="change-password" method="post"  enctype="multipart/form-data" onsubmit="return form_validate_jquery('#change-password')">
            <div class="grid-layout">
              <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                    <div class="input-group">
                      <label>Password</label>
                      <input type="password" name="password" validation="password" id="password" autocomplete="off" class="inputType inputTypeblack" title="Password">
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="form-row ">
                <div class="form-field">
                  <div class="grid-12">
                    <div class="input-group">
                      <label>Password Confirm</label>
                      <input type="password"  class="inputType inputTypeblack" validation="match_password" autocomplete="off" title="Password Confirm">
                    </div>
                  </div>
                
                  <div class="clear"></div>
                </div>
              </div>
              <div class="form-row">
                <div class="grid-12">
                  <div class="submitformbtn text-center spacingtopbot">
                    <input type="submit"  value="Submit" class="box-btn">
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </form>
          </div>
        </div>
        <?php   } ?> 
      </div>
      <div class="clear"></div>
    </div>
  </section>
  
  </div>
  <footer id="footer-wrapper" class="footer">
    <?php include('shared/footer.php'); ?>
  </footer>
  <!-- End Footer Top --> 
  
</div>
<?php include('shared/footer_links.php'); ?>
<script src="scripts/js_class.js"></script> 
<!-- <script src="scripts/owl.carousel.min.js"></script>   -->

<!--<script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/owl.carousel.min.js'></script> --> 

<script>
new WOW().init();
// wow Animations

$(".forgot-password a").click(function(){
	$(".grid-6.forgot-pass").css("display", "block")
	$(".grid-6.login").css("display", "none")
});
	
$('.collections-box .product-box .product-thumb i.fa-heart').click(function(){
	$(this).addClass('fas');
})
$(window).load(function () {
  $('.plus').click(function(){
    var target =  $(this).parents('.quantity').find('input[type="number"]');
    var target_value = parseInt(target.val());
    target.val(target_value + 1)
  });

  $('.minus').click(function(){
    var target =  $(this).parents('.quantity').find('input[type="number"]');
    var target_value = parseInt(target.val());
    target.val(target_value - 1)
  });
})
$(document).ready(function() {
	$('.product-remove a').click(function () {
		//alert("hello");
		$(this).parent().parent('.cart_item').remove();
		//alert($('.removeproductbox').parent())
	});
});
$(window).load(function() {

});
</script>
</body>
</html>