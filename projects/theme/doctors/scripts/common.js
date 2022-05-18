$(function() {
    AOS.init({
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
});

setTimeout(function(){ 
	$(".start-page").hide();
}, 1000);

if ($(window).width() < 1024) {
	//$('body').addClass('isscrolled');
	$('.logo img').attr('src','images/logo.png');
}
if ($(window).width() > 1024) {
	$(window).scroll(function(){
		var fromtop = $(window).scrollTop();
		if($(document).scrollTop() > 50)
		{
			$('.logo img').attr('src','images/logo.png');
		}
		else
		{
			$('.logo img').attr('src','images/logo-w.png');
		}
	});
    if ($(window).width() > 1024) {
		if($(document).scrollTop() > 50)
		{
			$('.logo img').attr('src','images/logo.png');
		}
		else
		{
			$('.logo img').attr('src','images/logo-w.png');
		}
    }
        
    if ($(window).width() < 1024) {
		if($(document).scrollTop() > 50)
		{
			$('.logo img').attr('src','images/logo.png');
		}
		else
		{
			$('.logo img').attr('src','images/logo.png');
		}
    }
}
$(function() {
  $('a[href*=#]').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80}, 500, 'linear');
  });
});