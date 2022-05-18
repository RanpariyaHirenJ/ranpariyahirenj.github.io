$(function() {
    AOS.init({
        startEvent: 'load',
        disable: 'mobile'
      });

    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrollTop').fadeIn();
            $('body').addClass('isscrolled');
        } else {
            $('.scrollTop').fadeOut();
            $('body').removeClass('isscrolled');
        }
    });
    if ($(this).scrollTop() > 50) {
        $('.scrollTop').fadeIn();
        $('body').addClass('isscrolled');
    } else {
        $('.scrollTop').fadeOut();
        $('body').removeClass('isscrolled');
    }
	
    $('.toggle-btn').click(function() {
        if ($('.wrapper').hasClass('opened')) {
            $('.wrapper').removeClass('opened');
        } else {
            $('.wrapper').addClass('opened');
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
