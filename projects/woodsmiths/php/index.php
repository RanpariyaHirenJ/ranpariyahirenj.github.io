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
    <section class="mainslidercntr paddingBottom70">
        <div class="row">
          <div class="col-md-12 next-prev-arrow inarrow">
            <div class="owl-carousel mainbannerslider owl-theme">
              <?php 
              foreach ($data['banner']['home-slider-1']['slider'] as  $value) {
               
               ?>
              <div class="item bannerbg product-image2">
                <div class="container">
                  <div class="bannerwrapper">
                    <div class="bannerwrapperimage fl deskview"><img src="<?php echo IMAGE_PATH.'uploads/banner/'.$value['image']; ?>"></div>
                    <div class="bannerwrappertxt fr">
                      <h2 data-animation-in="fadeIn" data-animation-out="animate-out fadeOut"><?php echo $value['title']; ?></h2>
                      <p data-animation-in="fadeIn" data-animation-out="animate-out fadeOut"><?php echo $value['description']; ?></p>
                      <p><a href="<?php echo $value['link'] ?>" class="btn" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">View Products</a></p>
                    </div>
                    <div class="bannerwrapperimage fl mobview"><img src="<?php echo IMAGE_PATH.'uploads/banner/'.$value['image']; ?>" alt="<?php echo $value['title']; ?>"></div>
                  </div>
                </div>
              </div>
            <?php } ?>
    
            </div>
          </div>
        </div>
    </section>
    <?php 
    if(count($data['banner']['home-category-banner-1']) > 0){
     ?>
    
    <section class="collectionsslidercntr paddingBottom70">
      <div class="container">
        <div class="row">
          <div class="col-md-12 collections-box next-prev-arrow">
          <div class="row">
                <div class="col-md-12"> 
                    <div class="col-md-12 p-0 fl"> 
                        <h3><?php echo  $data['banner']['home-category-banner-1']['banner_details']['name']; ?></h3>
                    </div>
                </div>
            </div>
            <div id="collections-slider" class="owl-carousel owl-theme">
              <?php 
              foreach ($data['banner']['home-category-banner-1']['slider'] as  $slider_value) {
               
               ?>
              <div class="item-wrap">
                <a href="<?php echo $slider_value['link']; ?>">
                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"> 
                      <img width="300" height="360" src="<?php echo IMAGE_PATH.'uploads/banner/'.$slider_value['image']; ?>" alt="<?php echo $slider_value['title']; ?>" class="secondary-image attachment-shop-catalog"  /> </div>
                      <div class="product-info">
                        <div class="title-product middle-xs between-xs"><?php echo $slider_value['title']; ?></div>
                        <?php if($slider_value['product_count']){ ?>
                        <span class="product-cat db mb_3"><?php echo $slider_value['product_count']; ?> Products</span>
                        <?php } ?>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              </div>
             <?php } ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <?php } ?>
    <?php 
    if(count($data['banner']['home-category-banner-2']) > 0){
     ?>
  <section class="collectionsslidercntr paddingBottom70">
      <div class="container">
        <div class="row">
          <div class="col-md-12 collections-box next-prev-arrow">
          		<div class="row">
                <div class="col-md-12"> 
                    <div class="col-md-3 p-0 fl"> 
                        <h3><?php echo  $data['banner']['home-category-banner-2']['banner_details']['name']; ?></h3>
                    </div>
                    <?php 
                    if($data['banner']['home-category-banner-2']['banner_details']['description']!=""){
                     ?>
                    
                    <div class="col-md-9 pr-0 fl"> 
                        <p><?php echo $data['banner']['home-category-banner-2']['banner_details']['description']; ?></p>
                    </div>
                  <?php } ?>
                </div>
            </div>
            <div id="custom-furniture-slider" class="owl-carousel owl-theme">
               <?php 
              foreach ($data['banner']['home-category-banner-2']['slider'] as  $slider_value) {
              
               ?>
              <div class="item-wrap"> <a href="<?php echo $slider_value['link']; ?>">

                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"><img width="300" height="360" src="<?php echo IMAGE_PATH.'uploads/banner/'.$slider_value['image']; ?>" class="secondary-image attachment-shop-catalog" alt="<?php echo $slider_value['title']; ?>" /> </div>
                      <div class="product-info">
                        <div class="title-product middle-xs between-xs"><?php echo $slider_value['title']; ?></div>
                        <?php if($slider_value['product_count']){ ?>
                        <span class="product-cat db mb_3"><?php echo $slider_value['product_count']; ?> Products</span>
                        <?php } ?>
                      </div>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            <?php } ?>
            </div>
          </div>
        </div>
      </div>
    </section>
  <?php } ?>
  <!--<section class="collectionsslidercntr paddingBottom70">
      <div class="container">
        <div class="row">
          <div class="col-md-12 collections-box next-prev-arrow">
          		<div class="row">
                <div class="col-md-12"> 
                    <div class="col-md-3 p-0 fl"> 
                        <h3>Featured Products</h3>
                    </div>
                </div>
            </div>
            <div id="future-products-slider" class="owl-carousel owl-theme">
              <div class="item-wrap">
                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"> 
                          <i class="far fa-heart"></i>
                          <img width="300" height="360" src="images/future-products/lightweight-sofa.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /> 
                          <img width="300" height="360" src="images/future-products/lightweight-sofa.jpg" class="secondary-image attachment-shop-catalog" alt="" />
                      </div>
                      <div class="product-info">
                        <div class="title-product middle-xs between-xs">Products 1</div>
                        <span class="product-cat db mb_3"> <a href="javascript:void(0);">Lightweight Sofa</a></span>
                        <div class="middle-xs price-box"> <span class="price">Add to Cart</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-wrap">
                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"> 
                          <i class="far fa-heart"></i>
                      <img width="300" height="360" src="images/future-products/lightweight-lounge-chair.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /> 
                      <img width="300" height="360" src="images/future-products/lightweight-lounge-chair.jpg" class="secondary-image attachment-shop-catalog" alt="" /></div>
                      <div class="product-info">
                        <div class="title-product middle-xs between-xs">Products 2</div>
                        <span class="product-cat db mb_3"> <a href="javascript:void(0);">Lightweight Lounge Chair</a></span>
                        <div class="middle-xs price-box"> <span class="price">Add to Cart</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-wrap">
                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"> 
                          <i class="far fa-heart"></i>
                      <img width="300" height="360" src="images/future-products/lightweight-bedframe.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /> 
                      <img width="300" height="360" src="images/future-products/lightweight-bedframe.jpg" class="secondary-image attachment-shop-catalog" alt="" /></div>
                      <div class="product-info">
                        <div class="title-product middle-xs between-xs">Products 3</div>
                        <span class="product-cat db mb_3"> <a href="javascript:void(0);">Lightweight Bedframe</a></span>
                        <div class="middle-xs price-box"> <span class="price">Add to Cart</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-wrap">
                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"> 
                          <i class="far fa-heart"></i>
                      <img width="300" height="360" src="images/future-products/lightweight-side-table.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /> 
                      <img width="300" height="360" src="images/future-products/lightweight-side-table.jpg" class="secondary-image attachment-shop-catalog" alt="" /></div>
                      <div class="product-info">
                        <div class="title-product middle-xs between-xs">Products 4</div>
                        <span class="product-cat db mb_3"> <a href="javascript:void(0);">Lightweight Side Tables</a></span>
                        <div class="middle-xs price-box"> <span class="price">Add to Cart</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-wrap">
                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"> 
                          <i class="far fa-heart"></i>
                      <img width="300" height="360" src="images/future-products/lightweight-dining-tables.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /> 
                      <img width="300" height="360" src="images/future-products/lightweight-dining-tables.jpg" class="secondary-image attachment-shop-catalog" alt="" /></div>
                      <div class="product-info">
                        <div class="title-product middle-xs between-xs">Products 5</div>
                        <span class="product-cat db mb_3"> <a href="javascript:void(0);">Lightweight Dining Table</a></span>
                        <div class="middle-xs price-box"> <span class="price">Add to Cart</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-wrap">
                <div class="item product-style-1">
                  <div class="product-box">
                    <div class="style-2 ">
                      <div class="product-thumb pr oh"> 
                          <i class="far fa-heart"></i>
                      <img width="300" height="360" src="images/future-products/lightweight-coffee-tables.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /> 
                      <img width="300" height="360" src="images/future-products/lightweight-coffee-tables.jpg" class="secondary-image attachment-shop-catalog" alt="" /></div>
                      <div class="product-info">
                        <div class="title-product middle-xs between-xs">Products 6</div>
                        <span class="product-cat db mb_3"> <a href="javascript:void(0);">Lightweight Coffee Table</a></span>
                        <div class="middle-xs price-box"> <span class="price">Add to Cart</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
  <!--<section class="projectsslidercntr paddingBottom70">
      <div class="row">
          <div class="col-md-12 p-md-0 next-prev-arrow projectssliderarrow">
          <div class="container">
          		<div class="row">
                <div class="col-md-12"> 
                    <div class="col-md-3 p-0 fl"> 
                        <h3>Projects</h3>
                    </div>
                </div>
            </div>
          </div>
        <div class="col-md-12 ">
          <div id="project-slider">
            <div class="item"> <img src="images/projects/project-banner1.jpg" alt="Owl Image">
              <div class="content">
                <p class="lead name">Marriot Hotel, Los Angeles</p>
                <a href="javascript:void(0);" class="btn">View Details</a>
              </div>
            </div>
            <div class="item"> <img src="images/projects/project-banner2.jpg" alt="Owl Image">
              <div class="content">
                <p class="lead name">Royal Park Hotel, Detroit</p>
                <a href="javascript:void(0);" class="btn">View Details</a>
              </div>
            </div>
            <div class="item"> <img src="images/projects/project-banner3.jpg" alt="Owl Image">
              <div class="content">
                <p class="lead name">Mandalay Bay Resort, California</p>
                <a href="javascript:void(0);" class="btn">View Details</a>
              </div>
            </div>
            <div class="item"> <img src="images/projects/project-banner4.jpg" alt="Owl Image">
              <div class="content">
                <p class="lead name">The William Vale, New York</p>
                <a href="javascript:void(0);" class="btn">View Details</a>
              </div>
            </div>
            <div class="item"> <img src="images/projects/project-banner5.jpg" alt="Owl Image">
              <div class="content">
                <p class="lead name">Hilton Hotel and Resort, Brooklyn</p>
                <a href="javascript:void(0);" class="btn">View Details</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  </section>-->
  
  <section class="AboutBlock">
		<div class="container">
			<div class="AboutBox d-flex">
				<div class="align-self-center AboutTextBx">
                <img src="images/about-mob.jpg" class="mobview">
					<h3>About Woodsmiths</h3>
					<p>Woodsmiths is a family owned company operating out of the 350,000 sq. ft. Harper Manufacturing Plant. We are located in the foothills of the Appalachian Mountains in Western North Carolina, USA. Woodsmiths produces American-Made commercial grade furniture custom built to designer specifications, and running line lightweight furniture.</p>
                    <p>Woodsmiths uses sustainably harvested woods, along with stone, metal, and glass in our creations. We, and our predecessors have been offering fine furniture to the trade since 1976. </p>
				</div>
			</div>
		</div>
	</section>
  
  
  </div>
  
<footer id="footer-wrapper" class="footer">  
  <?php include('shared/footer.php'); ?>
 </footer>
<!-- End Footer Top -->




</div>
<?php include('shared/footer_links.php'); ?>

<script>
new WOW().init();
// wow Animations
$('.collections-box .product-box .product-thumb i.fa-heart').click(function(){
  $(this).addClass('fas');
})
$(document).ready(function (){
  // Declare Carousel jquery object
  var owl = $('.mainbannerslider');

  // Carousel initialization
  owl.owlCarousel({
  loop:true,
  margin:0,
  navSpeed:1000,
    autoplayTimeout:6000,
  slideSpeed : 6000,
  paginationSpeed : 500,
  nav:true,
  dots: true,
  autoplay: true,
  rewind: true,
  items:1,
  lazyLoad:true,
  mouseDrag : true,
  touchDrag : true,
  responsive:{
        600:{
        nav:true,
        }
    }
  });


  // add animate.css class(es) to the elements to be animated
  function setAnimation ( _elem, _InOut ) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

// Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  var round = 0;
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
    
      setAnimation ($elemsToanim, 'in');
  })
  
  owl.on('translated.owl.carousel', function(event) {
    console.log (event.item.index, event.page.count);
    
      if (event.item.index == (event.page.count - 1))  {
        if (round < 1) {
          round++
          console.log (round);
        } else {
          owl.trigger('stop.owl.autoplay');
          var owlData = owl.data('owl.carousel');
          owlData.settings.autoplay = false; //don't know if both are necessary
          owlData.options.autoplay = false;
          owl.trigger('refresh.owl.carousel');
        }
      }
  });

});
$(document).ready(function() {  
if($(window).width() > 1024){
$("#custom-furniture-slider").owlCarousel({ 
  items : 3,
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
            items:3
        }
    } 
});


$("#collections-slider").owlCarousel({ 
  items : 3,
    loop:true,
    margin:20,
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:false,
  slideSpeed : 500,
  dots: false,
  paginationSpeed : 500,  
  
  singleItem:true,
    lazyLoad:true,
    mouseDrag : false,
    touchDrag : false,
    responsive:{
        0:{
            items:1,
      dots: true,
        autoplay:true,
      mouseDrag : true,
      touchDrag : true,
        },
        600:{
            items:1,
      dots: true,
        autoplay:true,
      mouseDrag : true,
      touchDrag : true,
        },
        1200:{
            items:3
        }
    } 
});
}
});

</script>
</body>
</html>