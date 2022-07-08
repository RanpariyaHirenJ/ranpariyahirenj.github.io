/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
	alignment();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  alignment();
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
  alignment();
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
	
 	$('#mobile-nav').click(function(){
		
		var mstatus=parseInt($('.request-btn-hm').css('right'));
		if(mstatus < 0)
		{
			$('.request-btn-hm').animate({right:'0'});
			$(this).addClass('open');
		}
		else
		{
			$('.request-btn-hm').animate({right:'-100%'});
			$(this).removeClass('open');
		}
	});
	
	$('.filter-mobile').click(function(){
		
		var mstatus=parseInt($('.filter-menu').css('left'));
		if(mstatus < 0)
		{
			$('.filter-menu').animate({left:'0'});
			$(this).html('FILTER -');
		}
		else
		{
			$('.filter-menu').animate({left:'-104%'});
			$(this).html('FILTER +');
		}
	});
	
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
  target = $('#' + popupID)
  animationIn = target.attr('data-animation-in');
  animationOut = target.attr('data-animation-out');
  if (typeof (animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '')
  {    
    animationIn = 'zoomIn';
  }
  if (typeof (animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '')
  {
    animationOut = 'zoomOut';
  }
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
}

/*Overlay function end*/

function alignment(){

var hheader=$('.header').outerHeight();
$('.common-top').css('margin-top',hheader);

var rbox=$('.rqst-access-box').outerHeight();
$('.login-box').css('min-height',rbox)
}