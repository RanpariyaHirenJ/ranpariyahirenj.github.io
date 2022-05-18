<!doctype html>
<html>
<head>
<?php include('shared/header.php'); ?>
</head>

<body class="productinnerpage wishlistpage">

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
            <h2 class="page-title">Wishlist</h2>
          </div>
          <div class="page-heading-position tc">
            <nav class="woocommerce-breadcrumb"><a href="">Home</a><span></span></nav>
          </div>
        </div>
      </div>
    </div>
    
    
    <section class="collectionsslidercntr paddingBottom70">
      <div class="container">
        <div class="row">
          <div class="col-md-12 collections-box next-prev-arrow">            
            <div id="custom-furniture-slider" class="owl-carousel owl-theme">


              <?php 
              
              if(count($data['wishlist_details']) > 0){

              foreach ($data['wishlist_details'] as $value) {
                
              ?>
              <div class="item-wrap"> 
                <div class="addtowishlist"><i class="far fa-heart fas" onclick="cart.wishlist(<?php echo $value['product_id'] ?>)"></i></div>
                 <a href="<?php echo base_url.$data['image_path'].'/'.$value['keyword']; ?>">
                  <div class="item product-style-1">
                    <div class="product-box">
                      <div class="style-2 ">
                        <div class="product-thumb pr oh"> 
                            <img width="300" height="360" src="<?php echo IMAGE_PATH.'uploads/'.$value['image_path'].'/medium-'.$value['image']; ?>" class="secondary-image attachment-shop-catalog" alt="" /> </div>
                        <div class="product-info">
                              <div class="title-product middle-xs between-xs"><?php echo $value['name']; ?></div>
                              <div class="middle-xs price-box">
                                <?php 
                                if($value['price'] > 0 && $value['cart_type']==1){
                                 ?>
                                  <span class="price">
                                      <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span><?php echo $value['price']; ?></span>
                                  </span>
                                <?php }else{ ?>
                                  
                                <?php } ?>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  </a>
                 <div class="addtocart" data-id="<?php echo $value['product_id'] ?>"><a href="javascript:void(0);"  data-cart-type="<?php echo $value['cart_type']; ?>" onclick="cart.add(<?php echo $value['product_id']; ?>,<?php echo $value['cart_type']; ?>)"><i class="<?php echo $value['cart_type']?"fal fa-cart-plus":'fal fa-envelope-open-text' ?>"></i> <p>Move to <?php echo $value['cart_type']?"Cart":'Enquiry' ?></p></a></div>
              </div>
              <?php } }else{ ?>   
                <div style="width: 100%;font-size: 20px;font-weight: 600"><center>There are no products saved in your wish list, kindly click on the "heart" on the product to add it to your wish list.</center> </div> 
              <?php }   ?>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer id="footer-wrapper" class="footer">
    <?php include('shared/footer.php'); ?>
  </footer>
  <!-- End Footer Top --> 
   <div class="wc-notice-cart-outer">
        <div class="wc-notice-cart">
            <span class="close-notice pe-7s-close"> X </span>
            <div class="icon-notice" bis_skin_checked="1"><i class="fal fa-cart-plus" style="color:#fff;"></i></div>
            <div class="text-notice" bis_skin_checked="1">
                <div bis_skin_checked="1">Product successfully added to your Enquiry</div>
                <a class="db" href="cart.html">View all</a>
            </div>
        </div>
    </div>
    
    <!--<div class="wc-notice-wishlist-outer">
        <div class="wc-notice-cart">
            <span class="close-notice pe-7s-close"> X </span>
            <div class="icon-notice" bis_skin_checked="1"><i class="fal fa-cart-plus" style="color:#fff;"></i></div>
            <div class="text-notice" bis_skin_checked="1">
                <div bis_skin_checked="1">Product successfully added to your cart</div>
                <a class="db" href="cart.html">View all</a>
            </div>
        </div>
    </div>--> 
</div>
<?php include('shared/footer_links.php'); ?>
<!--<script src="scripts/owl.carousel.js"></script> 
<script src="scripts/owl.carousel.min.js"></script> --> 

<!--<script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/owl.carousel.min.js'></script> --> 

<script>
new WOW().init();
// wow Animations

var evalue = $(".enquiry-count").text();
var avalue = $(".acart-count").text();

$('.productinnerpage #custom-furniture-slider .item-wrap .addtocart').click(function(){
	$(this).addClass('active');
	$(this).find("i").attr('class','fal fa-check');
	

  if($(this).children('a').data('cart-type')==1){

    avalue++;
    $(".fa-cart-plus .cart-count").html(avalue);
    $(this).find("p").html(" Moved to Cart");
  }else{
    evalue++;
    $(".fa-envelope-open-text .cart-count").html(evalue);
    $(this).find("p").html(" Moved to Enquiry");
  }

  cart.wishlist($(this).data('id'));

    $(this).closest('.item-wrap').fadeOut(1000, function(){ $(this).remove();});


	$('.wc-notice-wishlist-outer').addClass('active');
});




$('.close-notice').click(function () {
	$('.wc-notice-wishlist-outer').removeClass('active');
	$('.wc-notice-cart-outer').removeClass('active');
});

setInterval(function(){ 
	setTimeout(function(){ 
		$('.wc-notice-cart-outer').removeClass('active');
		$('.wc-notice-wishlist-outer').removeClass('active');	}, 2000);
}, 7000);
$(document).ready(function() {
	$('.shop-filter-toggle span.filter-text').click(function () {
		$('.shop-filter').toggleClass('open');
	});
	$('.close-filter').click(function () {
		$('.shop-filter').removeClass('open');
	});
});

$('div.addtowishlist .fa-heart').click(function() {

  var wishlist = $(".wishlist-count").find('span').text();
  
  if ($(this).hasClass('fas')){
    $(this).removeClass('fas');
   
    wishlist--;
    $(".wishlist-count").find('span').text(wishlist);

    $(this).closest('.item-wrap').remove();
    
  }else {    
    $(this).addClass('fas');
    $(".wishlisttag").html(" Added to wishlist");

    wishlist++;
    $(".wishlist-count").find('span').text(wishlist);

  }

  if($('.item-wrap').length <= 0 ){
    location.reload();
  }


});


</script>
</body>
</html>