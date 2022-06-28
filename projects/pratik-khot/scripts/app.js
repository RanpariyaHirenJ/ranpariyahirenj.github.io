$(function(){
  $(window).load(function(){
    $('.loader').fadeOut();
  })
  $('.top_banner').on('init', function(e, slick) {
       var $firstAnimatingElements = $('div.slider-row:first-child').find('[data-animation]');
       doAnimations($firstAnimatingElements);
   });
   $('.top_banner').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.slider-row[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
             doAnimations($animatingElements);
   });
   $('.top_banner').slick({
     autoplay: true,
			 arrows:false,
			 speed:1000,
       autoplaySpeed: 5000,
       dots: true,
       fade: true,
			 pauseOnHover:false
   })
   function doAnimations(elements) {
       var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
       elements.each(function() {
           var $this = $(this);
           var $animationDelay = $this.data('delay');
           var $animationType = 'animated ' + $this.data('animation');
           $this.css({
               'animation-delay': $animationDelay,
               '-webkit-animation-delay': $animationDelay
           });
           $this.addClass($animationType).one(animationEndEvents, function() {
               $this.removeClass($animationType);
           });
       });
   };


    $(window).scroll(function(){
      if($(this).scrollTop()>= 150){
          $('.header').addClass('shrink');
      }
      else{
        $('.header').removeClass('shrink');
    }
    });

    $('.toggle_btn').click(function(){
  		$(this).toggleClass('open');
      $('.for_mobile_nav').toggleClass('show');
  	});

  $('.specialization_slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    prevArrow: $(".cust_prev"),
    nextArrow: $(".cust_next"),
  })

  $('.testimonial_slider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  })

  $('.main_nav a').click(function(){
    var target_div = $(this).attr('data-target')
    var scroll_pos = $("#"+target_div).offset();
    $("html, body").animate({ scrollTop: scroll_pos.top });
    $('.for_mobile_nav').removeClass('show');
    $('.toggle_btn').removeClass('open')
  })
  if(window.outerWidth > 768) {
    setTimeout(function(){
      $(".projects_list").mCustomScrollbar({
          axis:"x",
          theme:"dark-3",
          advanced:{ autoExpandHorizontalScroll:true }
      },2000);
    })
  } else {
      $(".projects_list").mCustomScrollBar('destroy');
  }



})
