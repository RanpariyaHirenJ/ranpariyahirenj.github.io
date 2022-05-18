<!doctype html>
<html>
<head>
<?php include('shared/header.php'); ?>
<style type="text/css">
  .sort_content{
      display: -webkit-box !important;
      line-height: 22px;
      min-height: 70px;
      max-height: 70px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
  }
</style>
</head>

<body class="productinnerpage">

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
            <nav class="woocommerce-breadcrumb"><a href="<?php echo base_url; ?>">Home</a><span></span>
              <?php 
              foreach ($data['breadcrumbs'] as  $value) {
                
               ?>
              <a href="<?php echo base_url.$value['keyword']; ?>"><?php echo $value['name']; ?></a><span></span>
            <?php } ?>
            <?php echo $data['products_details']['name']; ?>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <section class="collectionsslidercntr paddingBottom70">
      <div class="container">
        <div class="row">
          <div class="col-md-12 collections-box next-prev-arrow inarrow">
            <div class="col-md-6 fl productphoto silly_scrollbar">    
                    <div class="col-md-12 productphotoimage">
                    <div class="itemdetails">
                      <div class="item"> <a href="<?php echo base_url.'uploads/'.$data['image_path'].'/'.$data['products_details']['image']; ?>" data-imagelightbox="c"> <img src="<?php echo base_url.'uploads/'.$data['image_path'].'/'.$data['products_details']['image']; ?>" class="desktop-view" alt="<?php echo $data['products_details']['name']; ?>" title="<?php echo $data['products_details']['name']; ?>">
                        <div class="industry-hovrband">
                          <div class="distable">
                            <div class="distable-cell"><img src="images/zoom.png" class="zoom" alt="Zoom Logo" title="Zoom Logo"></div>
                          </div>
                        </div>
                        </a> </div>
                    </div>
                    </div>
                    <?php 

                    foreach ($data['products_details']['product_images'] as $value) {
                    
                     ?>
                    <div class="col-md-12 productphotoimage">
                    <div class="itemdetails">
                      <div class="item"> <a href="<?php echo base_url.'uploads/'.$data['image_path'].'/'.$value['image']; ?>" data-imagelightbox="c"> <img src="<?php echo base_url.'uploads/'.$data['image_path'].'/'.$value['image']; ?>" class="desktop-view" alt="<?php echo $data['products_details']['name']; ?>" title="<?php echo $data['products_details']['name']; ?>">
                        <div class="industry-hovrband">
                          <div class="distable">
                            <div class="distable-cell"><img src="images/zoom.png" class="zoom" alt="Zoom Logo" title="Zoom Logo"></div>
                          </div>
                        </div>
                        </a> </div>
                    </div>
                    </div>
                  <?php } ?>
            </div>
            <div class="col-md-6 fl">
              <div class="summary entry-summary">
                <h1 class="product_title entry-title"><?php echo $data['products_details']['name']; ?></h1>
                <?php 
                if($data['products_details']['price'] > 0 && $data['cart_type']==1){
                 ?> 
                <p class="price">
                  <span style="font-weight: 600;">MSRP :</span>
                  <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span><?php echo $data['products_details']['price']; ?></span>
                </p>
                <?php } ?> 
                  
                <div class="woocommerce-product-details__short-description">
                 <?php echo $data['products_details']['short_description']; ?>
                </div>
                 <?php 
                  if ($data['products_details']['dimensions']!="") {
                   ?>
                  <p class="tagged_as"><b>Dimensions</b> : 
                  <span><?php echo $data['products_details']['dimensions']; ?></span>
                  </p>
                  <?php } ?>
                
                <form class="cart flex">
                   <?php if($data['enquiry_type']!=1){ ?>
                  <div class="quantity pr fl mr_10">
                    <input type="number"  class="input-text tc" step="1" min="1" id="quantity"  name="quantity" value="1" title="Qty" size="4" />
                    <div class="qty tc"> <a class="plus db pa" href="javascript:void(0);"> <i class="icon-plus"></i> </a> <a class="minus db pa" href="javascript:void(0);"> <i class="icon-minus"></i> </a> </div>
                  </div>
                    <button type="button" name="add-to-cart" data-cart-type="<?php echo $data['cart_type']; ?>" onclick="cart.add(<?php echo $data['products_details']['product_id'] ?>,<?php echo $data['cart_type'] ?>,$('#quantity').val())" class="single_add_to_cart_button button alt"><?php echo $data['cart_type']?"Add To Cart":'Add To Enquiry' ?></button>
                  <?php }else{ ?>
                  <button type="button" name="add-to-cart" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#enquiry-model-popup"   class="single_enquiry_button button alt">Project Enquiry</button>
                <?php } ?>
                </form>
                <?php if($data['enquiry_type']!=1){ ?>
                
                <div class="yith-wcwl-add-to-wishlist add-to-wishlist-393">
                  <div class="yith-wcwl-add-button pr show"> 
                      <a href="javascript:void(0);" onclick="cart.wishlist(<?php echo $data['products_details']['product_id'] ?>)" class="button add_to_wishlist <?php echo $data['products_details']['wishlist']?'active':''; ?>" > <span class="text-hidden"><i class="far fa-heart <?php echo $data['products_details']['wishlist']?'fas':''; ?>"></i> <span class="wishlisttag"><?php echo $data['products_details']['wishlist']?'Added':'Add'; ?> to wishlist</span></span></a> 
                  </div>
                  
                </div>

                <?php } ?> 
                  
                <?php 

                if(count($data['tag'])>0){
                 ?>
                
                <ul class="product_meta">
                  <li class="tagged_as">Tags: 
                  <?php 
                  foreach ($data['tag'] as  $value) {
                   ?>
                  <a href="javascript:void(0);"><?php echo $value; ?></a>, 
                  <?php } ?>
                
                  </li>
                </ul>
              <?php } ?>
                <div class="col-md-12 p-0 download-file">
                  <?php  if($data['products_details']['pdf_file']!="" || $data['products_details']['sketch_file']!="" || $data['products_details']['revit_file']!=""){ ?>
                  <h3>Download File</h3>
                  <ul class="">
                   
                    <li style="display: <?php echo $data['products_details']['pdf_file']?'':'none'; ?>"><a download="<?php echo $data['products_details']['pdf_file']; ?>" href="<?php echo base_url.'uploads/'.$data['image_path'].'/'.$data['products_details']['pdf_file']; ?>"><i></i>PDF</a></li>
                   
                   
                      <li style="display: <?php echo $data['products_details']['sketch_file']?'':'none'; ?>"><a download="<?php echo $data['products_details']['sketch_file']; ?>" href="<?php echo base_url.'uploads/'.$data['image_path'].'/'.$data['products_details']['sketch_file']; ?>"><i></i>SKETCH</a></li>
                   
                  
                      <li style="display: <?php echo $data['products_details']['revit_file']?'':'none'; ?>"><a download="<?php echo $data['products_details']['revit_file']; ?>" href="<?php echo base_url.'uploads/'.$data['image_path'].'/'.$data['products_details']['revit_file']; ?>"><i></i>REVIT</a></li>
                   
                    </ul>
                     <?php } ?>  
                </div>
                <div class="addthis_inline_share_toolbox_abpr"></div>
              </div>
              <!-- .summary --> 
            </div>
          </div>
          <div class="col-md-12 productdetailsbox">
            <div class="bs-component">
              <ul class="nav nav-tabs">
                <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#Description">Description</a> </li>
              </ul>
              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade show active" id="Description">
                 <?php echo $data['products_details']['description']; ?>
                </div>
              </div>
            </div>
            <?php 
                 if(count($data['related']) > 0){
             ?>  
            <div class="collectionsslidercntr paddingBottom70 mt-5">
                <div class="row">
                  <div class="col-md-12 collections-box next-prev-arrow">
                  <h2 class="pl-2">Related Products</h2>
                    <div id="custom-furniture-slider" class="owl-carousel owl-theme">  

                      <?php 
                 

                      foreach ($data['related'] as $value) {
                        
                      ?>
                      <div class="item-wrap"> 
                        <div class="addtowishlist"><i class="far fa-heart <?php echo $value['wishlist']?'fas':''; ?>" onclick="cart.wishlist(<?php echo $value['product_id'] ?>)"></i></div>
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
                        <div class="addtocart"><a href="javascript:void(0);" data-cart-type="<?php echo $value['cart_type']; ?>" onclick="cart.add(<?php echo $value['product_id']; ?>,<?php echo $value['cart_type']; ?>)"><i class="<?php echo $value['cart_type']?"fal fa-cart-plus":'fal fa-envelope-open-text' ?>"></i> <p>Add to <?php echo $value['cart_type']?"Cart":'Enquiry' ?></p></a></div>
                      </div>
                      <?php } ?>          
                  
                  
                    </div>
                  </div>
              </div>
            </div>
            <?php } ?>
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
            <div class="icon-notice" bis_skin_checked="1"><i class="<?php echo $data['cart_type']?"fal fa-cart-plus":'fal fa-envelope-open-text' ?>" style="color:#fff;"></i></div>
            <div class="text-notice" bis_skin_checked="1">
                <div bis_skin_checked="1">Product successfully added to your <?php echo $data['cart_type']?'Cart':'Enquiry'; ?></div>
                <a class="db" href="<?php echo $data['cart_type']?'cart':'enquiry' ?>">View all</a>
            </div>
        </div>
    </div>

</div>


  <!-- Modal -->
  <div class="modal fade" id="enquiry-model-popup" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Product Enquiry For <?php echo $data['products_details']['name']; ?></h4>
           <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
         <form id="popup-enquiry" action="#" method="post"  enctype="multipart/form-data" >
          <div class="form-group">
            <!-- <label for="name">Name:</label> -->
            <input type="text" name="name" value="<?php echo trim($data['customer_details']['first_name'].' '.$data['customer_details']['last_name']) ?>" validation="text" class="form-control" placeholder="Name" title="Name" id="name">
          </div>
          <div class="form-group">
            <!-- <label for="email">Email Id:</label> -->
            <input type="email" name="email" value="<?php echo $data['customer_details']['email']; ?>" class="form-control" validation="email" title="Email" placeholder="Email" id="email">
          </div>
          <div class="form-group">
            <!-- <label for="phone">Phone:</label> -->
            <input type="text" name="mobile" class="form-control" value="<?php echo $data['customer_details']['mobile']; ?>"  placeholder="Phone" id="phone">
          </div>
           <div class="form-group">
            <!-- <label for="message">Message:</label> -->
            <!-- <input type="text" class="form-control" placeholder="Message" id="message"> -->
            <textarea class="form-control" name="message" placeholder="Message" id="message" validation="text" title="Message"></textarea>
          </div>
          <input type="hidden" name="product_id" value="<?php echo $data['products_details']['product_id'] ?>">
           <input type="hidden" name="customer_id" value="<?php echo $data['customer_id']; ?>">
          <button type="submit" class="btn btn-primary float-right submit-enquiry">Submit Enquiry</button>
        </form>
        </div>
      <!--   <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div> -->
      </div>
      
    </div>
  </div>
<?php include('shared/footer_links.php'); ?>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script> 
<link rel="stylesheet" type="text/css" href="styles/imagelightbox.css">
<script src="scripts/imagelightbox.js"></script> 
<script src="scripts/js_class.js"></script> 
<!--
<link rel="stylesheet" type="text/css" href="styles/owl.carousel.css">
<link rel="stylesheet" type="text/css" href="styles/owl.theme.css">
<script src="scripts/owl.carousel.min.js"></script>

-->
<script>



$(document).ready(function() {  

<?php 
if(count($data['products_details']['product_images']) > 0){

 ?>

$(".silly_scrollbar").owlCarousel({ 
  items : 1,
    loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
  slideSpeed : 500,
  dots: false,
  paginationSpeed : 500,
  //animateOut: 'slideOutUp',
  //animateIn: 'slideInUp', 
  
  singleItem:true,
    lazyLoad:true,
    mouseDrag : false,
    touchDrag : false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1200:{
            items:1
        }
    } 
});
<?php } ?>
if($(window).width() > 1024){
$("#custom-furniture-slider").owlCarousel({ 
  items : 4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
  slideSpeed : 500,
  dots: false,
  paginationSpeed : 500,  
  
  singleItem:true,
    lazyLoad:true,
    mouseDrag : false,
    touchDrag : false,
    responsive:{
        1200:{
            items:4
        }
    } 
});
}
});


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
  var owl = $("#dance-gallery");
  owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [400, 2],
    [450, 2],
    [568, 3],
    [767, 3],
    [768, 4],
    [1000, 6]
    ],
    navigation:true,
  });
});

$(function () {
  var activityIndicatorOn = function () {
    $('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
  },
  activityIndicatorOff = function () {
    $('#imagelightbox-loading').remove();
  },

  overlayOn = function () {
    $('<div id="imagelightbox-overlay"></div>').appendTo('body');
  },
  overlayOff = function () {
    $('#imagelightbox-overlay').remove();
  },

  closeButtonOn = function (instance) {
    $('<a href="#" id="imagelightbox-close"></a>').appendTo('body').on('click', function () {
      $(this).remove();
      instance.quitImageLightbox();
      return false;
    });
  },
  closeButtonOff = function () {
    $('#imagelightbox-close').remove();
  },
  captionOff = function () {
    $('#imagelightbox-caption').remove();
  },
        arrowsOn = function( instance, selector ) {
    var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button>' +
             '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );
    $arrows.appendTo( 'body' );
    $arrows.on( 'click touchend', function( e ) {
      e.preventDefault();
      var $this = $( this );

      if( $this.hasClass('imagelightbox-arrow-left')) {
        instance.loadPreviousImage();
      } else {
        instance.loadNextImage();
      }

      return false;
    });
  },
        arrowsOff = function() {
    $('.imagelightbox-arrow').remove();
  };
  //  WITH "CLOSE" BUTTON & ACTIVITY INDICATION

  var selectorG = 'a[data-imagelightbox="c"]';
  var instanceG = $( selectorG ).imageLightbox(
  {
    onStart:    function(){ arrowsOn( instanceG, selectorG );closeButtonOn(instanceG);overlayOn(); },
    onEnd:      function(){ arrowsOff(); activityIndicatorOff(); closeButtonOff();overlayOff();},
    onLoadStart:  function(){ activityIndicatorOn(); },
    onLoadEnd:    function(){ $( '.imagelightbox-arrow' ).css( 'display', 'block' ); activityIndicatorOff(); }
  });
   

});
</script> 
<script>
new WOW().init();


var evalue = $(".enquiry-count").text();
var avalue = $(".acart-count").text();

// wow Animations
$('.collections-box .product-box .product-thumb i.fa-heart').click(function(){
  $(this).addClass('fas');
})
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
  //$('.wc-notice-cart-outer').addClass('active');
});

$(document).on('click','.productinnerpage #custom-furniture-slider .item-wrap .addtocart',function(){
  $(this).addClass('active');
  $(this).find("i").attr('class','fal fa-check');

  if($(this).children('a').data('cart-type')==1){

    avalue++;
    $(".fa-cart-plus .cart-count").html(avalue);
  }else{
    evalue++;
    $(".fa-envelope-open-text .cart-count").html(evalue);
  }

  $(this).find("p").html("<?php echo $data['cart_type']?'Added to Cart':'Added to Enquiry'; ?>");
  $('.wc-notice-wishlist-outer').addClass('active');
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
  $('.single_add_to_cart_button').click(function () {
    $('.wc-notice-cart-outer').addClass('active');

      if($(this).data('cart-type')==1){
        avalue++;
        $(".fa-cart-plus .cart-count").html(avalue);
      }else{
        evalue++;
        $(".fa-envelope-open-text .cart-count").html(evalue);
      }

    $('.single_add_to_cart_button').html("<?php echo $data['cart_type']?'Added to Cart':'Added to Enquiry'; ?>");
    $('.single_add_to_cart_button').addClass('active');
  });
  
  $('a.add_to_wishlist').click(function() {

    var wishlist = $(".wishlist-count").find('span').text();
    
    if ($('a.add_to_wishlist').hasClass('active')){
      $('.add_to_wishlist').removeClass('active');
      $(".wishlisttag").html(" Add to wishlist");

      wishlist--;
      $(".wishlist-count").find('span').text(wishlist);
      
    }else {    
      $('.add_to_wishlist').addClass('active');
      $(".wishlisttag").html(" Added to wishlist");

      wishlist++;
      $(".wishlist-count").find('span').text(wishlist);

    }
  });
  setInterval(function(){ 
    setTimeout(function(){ 
      $('.wc-notice-cart-outer').removeClass('active');
    }, 1000);
  }, 3000);

});


$('.submit-enquiry').on('click', function() {

  if(form_validate_jquery('#popup-enquiry')){

      $.ajax({
        url: 'product/addProjectEnquiry',
        type: 'post',
        dataType: 'json',
        data: $("#popup-enquiry").serialize(),
       
        success: function(json) {
          console.log(json);
          if (json['error']) {
            swal("Alert!", "Something went wrong.", "warning");
          }

          if (json['success']) {
             swal("Thank you for your enquiry for project <?php echo $data['products_details']['name']; ?>!", "This has been sent to our sales team and we will get in touch with you soon.", "success");
             $("#enquiry-model-popup").modal("hide");
             $("#popup-enquiry textarea").val();

          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      });

  }



  return false;
});
</script>
</body>
</html>