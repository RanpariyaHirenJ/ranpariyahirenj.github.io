$(function() {
    $('.tab-link li a').click(function() {
        var tab_name = $(this).attr('for');
        $(this).parents('.grid-6').find('.tab-content').removeClass('active');
        $(this).parents('.grid-6').find("#" + tab_name).addClass('active');
        console.log(tab_name);
        if (tab_name == 'mobile-banking') {
            $(this).parents('.grid-6').find('.tab-content-wrapper').removeClass('second');
        } else {
            $(this).parents('.grid-6').find('.tab-content-wrapper').addClass('second');
        }
    });
	
    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
	
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
    $('.toggle-search').click(function() {
        if ($('.search-container').hasClass('opened')) {
            $('.search-container').removeClass('opened');
        } else {
            $('.search-container').addClass('opened');
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

   
});


