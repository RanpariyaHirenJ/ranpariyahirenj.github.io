/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
 
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
  /*Back to top Function End*/
  
  /*Header footer loading*/
  /*accordion start*/
  $('.accordion dl dt').click(function () {
    var trigger = $(this);
    var target = trigger.next('dd');
    if (target.css('display') == 'none')
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
      target.slideDown();
      trigger.parents('dl').addClass('active');
    }
    else
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
    }
  });
  /*accordion start*/


  /*jQuery tabs */
  /*script for append usefull element*/
  $('.tabNav li').each(function(){
    /*$(this).css({
      'width' : (100 / ( $('li:last-child').index('li') + 1 ) ) +  '%'
    })*/
    var tabContent = $(this).html();
    var relation = $(this).find('a').attr('rel')
    var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
    resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
  })
  /*script for mobile navigation */
  $(document).on('click','.mobile-menu',function(){
    if($(this).next('.content').css('display') == 'none')
    {
      $(this).closest('.tabResult').find('.content').slideUp();
      $(this).next('.content').slideDown();
    }
    else
    {
      $('.tabResult .tabBx .content').slideUp();
    }
  })
  /*script for desktop navigation */
  $('.tabNav li a').click(function(){
    var relation = $(this).attr('rel')
    var tabNavigation = $(this).parents('.tabNav')
    var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
    
    tabNavigation.children().find('a').removeClass('active');
    tabNavigation.children().find('li').removeClass('activeli')
    $(this).addClass('active');
    $(this).parents('li').addClass('activeli');
    
    if(resultCnt.children('div#'+relation).css('display') == 'none')
    {
      resultCnt.children('div').slideUp();
      resultCnt.children('div#'+relation).slideDown();
    }
    else
    {
      resultCnt.children('div#'+relation).slideUp();
    }
  })
  /*jQuery tabs */
  
  /*$(document).on('click', '.footer-cntr dl dt', function () {
    if($(window).width() < 980)
	{
		var stutusDD=$(this).next('dd').css('display');
		if(stutusDD=='none')
		{
			$('.footer-cntr dl').removeClass('active');
			$('.footer-cntr dl dd').slideUp();
			$(this).next('dd').slideDown();
			$(this).parents('dl').addClass('active');
		}
		else
		{
			$(this).next('dd').slideUp();
			$(this).parents('dl').removeClass('active');
		}
	}
  });*/
  
});

(function() {
  "use strict";

  var toggles = document.querySelectorAll(".menu-icon");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			
    });
  }

	$('.mobil-icon-toggle').click(function(){
		if($(this).hasClass('active'))
		{
			$('.menubar').addClass('open-navigation');
		}
		else
		{
			$('.menubar').removeClass('open-navigation');
		}
	}); 
	
})();

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