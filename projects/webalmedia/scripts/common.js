

/*Doucment resize Function*/
$(window).resize(function() {
    //fixedFooter();
})


/*Ready Funtion*/

$(function() {
    //fixedFooter();
    /*Back to top Function start*/
    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
    //  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
			//alert("hello")
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });

    $(document).on('click', '.scrollTop a', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

});




/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
    target = $('#' + popupID)
    animationIn = target.attr('data-animation-in');
    animationOut = target.attr('data-animation-out');
    if (typeof(animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '')
    {
        animationIn = 'zoomIn';
    }
    if (typeof(animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '')
    {
        animationOut = 'zoomOut';
    }
    $('body').append('<div class="overlay-bg"></div>')
    target.find('.overlay-header').append('<div class="closeBtn">X</div>');
    target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
    $(document).on('click', '.closeBtn', function() {
        $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
        $('body .overlay-bg').fadeOut(1000, function() {
            $(this).remove();
            $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
        });
    });
}



/*Overlay function end*/


