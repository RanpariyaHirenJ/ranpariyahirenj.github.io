<!doctype html>
<html>
<head>
<?php include('shared/header.php'); ?>
</head>

<body class="productinnerpage">

<div class="wrapper"> 
  <!--Start header area-->
  <header class="header-area">
    <!--Start header lawer-->
    <div class="header-lower">
     <?php include('shared/TopMenu.php'); ?>
    </div>
    <!--End header lawer-->
  </header>
  <!--End header area-->
  
  <div class="mainbody">
  
    <div class="page-heading pt_40 pb_40">
      <div class="container">
        <div class="row">
          <div class="page-heading-position tc">
            <h2 class="page-title"><?php echo $data['heading']['name']; ?></h2>
          </div>
          <div class="page-heading-position tc">
            <nav class="woocommerce-breadcrumb"><a href="<?php echo base_url; ?>">Home</a><span></span>
              <?php 
              foreach ($data['breadcrumbs'] as  $value) {
                
               ?>
              <a href="<?php echo base_url.$value['keyword']; ?>"><?php echo $value['name']; ?></a>
            <?php } ?>
            </nav>
          </div>
        </div>
      </div>
    </div>
<!--     
    <div class="shop-action">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="shop-action-inner flex between-xs pb_10 ">
                        <div class="action-right">
                            <div class="shop-filter-toggle filter-off-canvas"> <span class="hamburger-box pr"> <span class="hamburger-inner"></span> </span> <span class="filter-text">Filter</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      <div class="shop-filter">
        <div class="filter-title flex between-xs">
          <h2 class="dib">Filter</h2>
          <span class="pe-7s-close dib close-filter"> X </span> </div>
        <div class="shop-filters filter-sidebar clearfix">
          <aside id="woocommerce_product_categories-2" class="widget woocommerce widget_product_categories">
            <div class="widget-title">
              <h3>Product categories</h3>
            </div>
            <ul class="product-categories">
              <li class="cat-item cat-item-35"><label class="container">Slab Tables<input type="checkbox"> <span class="checkmark"></span></label></li>
              <li class="cat-item cat-item-34"><label class="container">Communal / Chef Tables<input type="checkbox"> <span class="checkmark"></span></label></li>
              <li class="cat-item cat-item-63"><label class="container">Dining Tables<input type="checkbox"> <span class="checkmark"></span></label></li>
              <li class="cat-item cat-item-36"><label class="container">Occasional Tables<input type="checkbox"> <span class="checkmark"></span></label></li>
              <li class="cat-item cat-item-37"><label class="container">Game Tables<input type="checkbox"> <span class="checkmark"></span></label></li>
              <li class="cat-item cat-item-62"><label class="container">Conference Tables<input type="checkbox"> <span class="checkmark"></span></label></li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
     -->
    <section class="collectionsslidercntr paddingBottom70">
      <div class="container">
        <div class="row">
          <div class="col-md-12 collections-box next-prev-arrow">
            <div id="custom-furniture-slider" class="owl-carousel owl-theme">
            <?php 
            if(count($data['category_products']) > 0){
            
            foreach ($data['category_products'] as $value) {
                
            
            ?>
            <div class="item-wrap"> 
              <?php if($value['enquiry_type']!=1){ ?>
              <div class="addtowishlist"><i class="far fa-heart <?php echo $value['wishlist']?'fas':''; ?>" onclick="cart.wishlist(<?php echo $value['product_id'] ?>)"></i></div>
              <?php } ?>
               <a href="<?php echo base_url.$data['heading']['keyword'].'/'.$value['keyword']; ?>">
                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"> 
                          <img width="300" height="360" src="<?php echo IMAGE_PATH.'uploads/'.$value['dir_path'].'/medium-'.$value['image']; ?>" class="secondary-image attachment-shop-catalog" alt="" /> </div>
                      <div class="product-info">
                            <div class="title-product middle-xs between-xs"><?php echo $value['name']; ?></div>
                            <?php
                              if($value['cart_type']){
                               ?>
                            <div class="middle-xs price-box">
                              
                                <span class="price">
                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span><?php echo $value['price']; ?></span>
                                </span>
                            
                            </div>
                              <?php }else{ ?>
                               <br>
                              <?php } ?>
                        </div>
                    </div>
                  </div>
                </div>
                </a>
                 <?php if($value['enquiry_type']!=1){ ?>
              <div class="addtocart"><a href="javascript:void(0);" onclick="cart.add(<?php echo $value['product_id']; ?>,<?php echo $value['cart_type']; ?>)" data-cart-type="<?php echo $value['cart_type']; ?>">
                <i class="<?php echo $value['cart_type']?"fal fa-cart-plus":'fal fa-envelope-open-text' ?>" ></i> <p ><?php echo $value['cart_type']?"Add to Cart":'Add to Enquiry' ?></p></a></div>
              <?php } ?>
            </div>
            <?php } }else{ ?>
             <div style="width: 100%;font-size: 20px;font-weight: 600"><center>There no products available here as of now, please come back later and we will surely have something for you.</center> </div> 
            <?php } ?>
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
            <div class="icon-notice" bis_skin_checked="1"><i class="<?php echo $data['category_products'][0]['cart_type']?"fal fa-cart-plus":'fal fa-envelope-open-text' ?>" style="color:#fff;"></i></div>
            <div class="text-notice" bis_skin_checked="1">
                <div bis_skin_checked="1">Product successfully added to your <?php echo $data['category_products'][0]['cart_type']?'Cart':'Enquiry'; ?></div>
                <a class="db" href="<?php echo $data['category_products'][0]['cart_type']?'cart':'enquiry'; ?>">View all</a>
            </div>
        </div>
    </div>
    
    <!--<div class="wc-notice-wishlist-outer">
        <div class="wc-notice-cart">
            <span class="close-notice pe-7s-close"> X </span>
            <div class="icon-notice" bis_skin_checked="1"><i class="far fa-heart" style="color:#fff;"></i></div>
            <div class="text-notice" bis_skin_checked="1">
                <div bis_skin_checked="1">Product successfully added to your cart</div>
                <a class="db" href="cart.html">View all</a>
            </div>
        </div>
    </div>-->
</div>
<?php include('shared/footer_links.php'); ?>

<script>
new WOW().init();
// wow Animations
$('.productinnerpage #custom-furniture-slider .item-wrap .addtowishlist i.fa-heart').click(function(){


   var wishlist = $(".wishlist-count").find('span').text();
  
  if($(this).hasClass('fas')){
    $(this).removeClass('fas');
   
    wishlist--;
    $(".wishlist-count").find('span').text(wishlist);
    
  }else {    
    $(this).addClass('fas');
  
    wishlist++;
    $(".wishlist-count").find('span').text(wishlist);

  }



  // $(this).addClass('fas');
})

$('.productinnerpage #custom-furniture-slider .item-wrap .addtocart').click(function(){
  $(this).addClass('active');
  $(this).find("i").attr('class','fal fa-check');
  $(this).find("p").html("<?php echo $data['category_products'][0]['cart_type']?'Added to Cart':'Added to Enquiry'; ?>");
  $('.wc-notice-cart-outer').addClass('active');
})

$('.close-notice').click(function () {
  //$('.wc-notice-wishlist-outer').removeClass('active');
  $('.wc-notice-cart-outer').removeClass('active');
});

setInterval(function(){ 
  setTimeout(function(){ 
    $('.wc-notice-cart-outer').removeClass('active');
    //$('.wc-notice-wishlist-outer').removeClass('active'); }, 2000);
    }, 2000);
}, 7000);

$(document).ready(function() {
  $('.shop-filter-toggle span.filter-text').click(function () {
    $('.shop-filter').toggleClass('open');
  });
  $('.close-filter').click(function () {
    $('.shop-filter').removeClass('open');
  });
});
$(window).load(function() {
  var value = 0;
  $(".fa-heart").click(function(){
    value++;
    $(".fa-heart .cart-count").html(value);
  });

  var evalue = $(".enquiry-count").text();
  var avalue = $(".acart-count").text();

  $(".addtocart").click(function(){
   
    if($(this).children('a').data('cart-type')==1){
      avalue++;
      $(".fa-cart-plus .cart-count").html(avalue);
    }else{
      evalue++;
      $(".fa-envelope-open-text .cart-count").html(evalue);
    }
    
  });
});
</script>
</body>
</html>