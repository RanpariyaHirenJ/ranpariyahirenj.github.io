$(function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        mirror: false,
        startEvent: 'load',
        disable: 'mobile'
      })

    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrollTop').fadeIn();
            $('.floatingcntr').fadeIn();
            $('body').addClass('isscrolled');
        } else {
            $('.scrollTop').fadeOut();
            $('.floatingcntr').fadeOut();
            $('body').removeClass('isscrolled');
        }
    });
    if ($(this).scrollTop() > 50) {
        $('.scrollTop').fadeIn();
        $('.floatingcntr').fadeIn();
        $('body').addClass('isscrolled');
    } else {
        $('.scrollTop').fadeOut();
        $('.floatingcntr').fadeOut();
        $('body').removeClass('isscrolled');
    }
	
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
    $(document).on('click', '.scrollTop a', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

});

$(window).on('load', function() {
    $(".start-page").hide();
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