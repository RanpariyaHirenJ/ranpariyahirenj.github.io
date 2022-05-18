$(function() {
    AOS.init({
        startEvent: 'load',
        disable: 'mobile'
      });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrollTop').fadeIn();
			$('body').addClass('isscrolled');
           // $('.nav').addClass('fixed');
        } else {
            $('.scrollTop').fadeOut();
			$('body').removeClass('isscrolled');
            //$('.nav').removeClass('fixed');
        }
    });
        if ($(this).scrollTop() > 50) {
            $('.scrollTop').fadeIn();
			$('body').addClass('isscrolled');
           // $('.nav').addClass('fixed');
        } else {
            $('.scrollTop').fadeOut();
			$('body').removeClass('isscrolled');
            //$('.nav').removeClass('fixed');
        }
    $(document).on('click', '.scrollTop a', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
	
    $('.accordion dl dt').click(function() {
        var trigger = $(this);
        var target = trigger.next('dd');
        if (target.css('display') == 'none') {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
            target.slideDown();
            trigger.parents('dl').addClass('active');
        } else {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
        }
    });
	
    $('.toggle-btn').click(function() {
        if ($('.wrapper').hasClass('opened')) {
            $('.wrapper').removeClass('opened');
        } else {
            $('.wrapper').addClass('opened');
        }
    });
    $('.has-sub-menu').click(function() {
        var target = $(this).find('.sub-menu');
        var trigger = $(this);
        if (trigger.hasClass('opened')) {
            $('.has-sub-menu').removeClass('opened');
            trigger.removeClass('opened');
        } else {
            $('.has-sub-menu').removeClass('opened');
            trigger.addClass('opened');
        }
    });
    $('.footer dt').click(function() {
        if ($(window).width() < 769) {
            if ($(this).next('dd').css('display') == 'none') {
                $('.footer dl dd').slideUp();
                $('.footer dl').removeClass('active')
                $(this).parents('dl').addClass('active');
                $(this).next('dd').slideDown();
            } else {
                // return false;
                $(this).parents('dl').removeClass('active');
                $(this).next('dd').slideUp();
            }
        }
    })

   
	// var swiper = new Swiper('.swiper-container-home-banner', {
	//   loop: true,
	//   speed: 1500,
	//   effect: 'fade',
	//   navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	//   },
 //      autoplay: {
 //        delay: 5000,
 //        disableOnInteraction: false,
 //      },
	//   pagination: {
	// 	el: '.swiper-pagination',
	//   },
	//   on: {
	// 	slideChangeTransitionStart: function () {
	// 	  $('.banner-text').hide(0);
	// 	  $('.banner-text').removeClass('aos-init').removeClass('aos-animate');
	// 	},
	// 	slideChangeTransitionEnd: function () {
	// 	  $('.banner-text').show(0);
	// 	  AOS.init();
	// 	},
	//   } 
	// });
	
	var swiper = new Swiper('.swiper-container-testimonial', {
		  loop: true,
		  //speed: 1500,
		  //effect: 'fade',
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		  autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		  },
	});
	
	$(window).on('scroll',function(){
		var trainPosition = Math.round($(window).scrollTop() / $(window).height() * 80);
		//$('.right-text').css('transform','translateX('+(- trainPosition + 600)+'px)');    
		$('#featured-expertise-bg').css({"transform": "translate3d(0px, " + trainPosition + "px, 0px)"});
	});
});


setTimeout(function(){ 
	$(".start-page").hide();
}, 1000);

if ($(window).width() < 1024) {
	//$('body').addClass('isscrolled');
	$('.logo img').attr('src','images/logo-b.png');
}
if ($(window).width() > 1024) {
	$(window).scroll(function(){
		var fromtop = $(window).scrollTop();
		if($(document).scrollTop() > 50)
		{
			$('.logo img').attr('src','images/logo-b.png');
		}
		else
		{
			$('.logo img').attr('src','images/logo-w.png');
		}
	});
		if($(document).scrollTop() > 50)
		{
			$('.logo img').attr('src','images/logo-b.png');
		}
		else
		{
			$('.logo img').attr('src','images/logo-w.png');
		}
}
$(document).ready(function (){
    if ($(window).width() > 1024) {
        $('.post-module').hover(function() {
            $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
            }, 300);
        });
    }
});

$(function() {
  $('a[href*=#]').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80}, 500, 'linear');
  });
});