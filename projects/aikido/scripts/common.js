
  AOS.init();
$(document).ready(function() {
$('.updates-slider').slick({
	lazyLoad: 'ondemand',
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: true,
	//fade: true,
	dots:false,
	infinite: false,
	speed:1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		arrows: false,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,
        infinite: true,
        dots: true
      }
    }
  ]
});
});
	
	
$('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');

if($(window).width()>1024){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.main-menu').addClass("fix-header");
        	$(".core-menu").css("display", "none");
		} else {
			$('.main-menu').removeClass("fix-header");
        	$(".core-menu").css("display", "block");
		}
	});
}

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.scrollTop').fadeIn();
	} else {
		$('.scrollTop').fadeOut();
	}
});


$(window).scroll(function() {
	var toplenght = parseInt($(".updates-cntr ul").offset().top) -40
	if ($(this).scrollTop() > toplenght ) {
		$('.menutab').addClass("open");
	} else {
		$('.menutab').removeClass("open");
	}
});

$(document).on('click', '.scrollTop a', function() {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
});
$(document).ready(function(){
  //the trigger on hover when cursor directed to this class
    $(".core-menu li").hover(
    function(){
      //i used the parent ul to show submenu
        $(this).children('ul').slideDown('fast');
    }, 
      //when the cursor away 
    function () {
        $('ul', this).slideUp('fast');
    });
  //this feature only show on 600px device width
    $(".hamburger-menu").click(function(){
      $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").slideToggle("fast");
      $("body").toggleClass("open-menu");
      $('body').toggleClass('no-scroll');
		$('.onsrcolldesk').toggleClass("open");
    });
	
	$(".forgot-password a").click(function(){
		$(".grid-6.forgot-pass").css("display", "block")
		$(".grid-6.login").css("display", "none")
	});
	
	$('.file-upload input[type=file]').change(function(){
		var fval=$(this).val();
		var filterValue = fval.replace("C:\\fakepath\\", "");
		$(this).parents('.file-upload').find('span').html(filterValue);
	})
});


$(document).ready(function(){
	$('.instructor').click(function(){
      $('html, body').animate({
        scrollTop: $(".top1").offset().top
		}, 500);
    });
});
$(document).ready(function(){
	$('.program').click(function(){
      $('html, body').animate({
        scrollTop: $(".top2").offset().top
		}, 500);
    });
});
$(document).ready(function(){
	$('.Fees').click(function(){
      $('html, body').animate({
        scrollTop: $(".top3").offset().top
		}, 500);
    });
});
if($(window).width()<1024){
$(document).ready(function(){
	$('.Fees').click(function(){
      $('html, body').animate({
        scrollTop: $(".top-mob3").offset().top
		}, 500);
    });
});
}
$(document).ready(function(){
	$('.varanasi').click(function(){
      $('html, body').animate({
        scrollTop: $(".top4").offset().top
		}, 500);
    });
});


function overlayBox(popupID)
{
	target = $('#' + popupID)
		$('html,body').addClass('scroll_hidden');
		target.fadeIn();
	$('.close_btn,.close_box').click(function(){
		$('html,body').removeClass('scroll_hidden');
		target.fadeOut();
	})
	

}