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
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"><img src="images/top-to-bottom.png"></a></div>');
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
  $(document).on('click', '.close-error', function () {
    $(this).parents('.seisson-message').slideUp();
  })
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
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
}

/*Overlay function end*/

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
      $('.mobileNav').addClass('menubaropen');
    }
    else
    {
      $('.mobileNav').removeClass('menubaropen');
    }
  });
	$(document).on('click', '.hasSubmenu .sub-mobileClick', function () {
		var SubStatus=$(this).next('.submenu').css('display');
		if(SubStatus=='none')
		{
			$(this).next('.submenu').slideDown();
			$(this).parent('.hasSubmenu').addClass('openSubMob');
		}
		else
		{
			$(this).next('.submenu').slideUp();
			$(this).parent('.hasSubmenu').removeClass('openSubMob');
		}
	});
	
	$(document).on('click', '.likebutton span', function () {
   if($(this).hasClass('active'))
	 {
		$(this).removeClass('active');
		}
		else
		{
		$(this).addClass('active');
		}
  }) 
	
	$('#hamburger').click(function(){
    if($(this).hasClass('is-inactive'))
    { 
      $(this).removeClass('is-inactive');
      $(this).addClass('is-active');
			$('.closeNavBar').addClass('openNavBar');
			$('.pageNavigation').addClass('openRound');
     	$('.closeNavBar').css('z-index','999')
    } 
    else
    { $(this).removeClass('is-active');
      $(this).addClass('is-inactive');
			$('.closeNavBar').removeClass('openNavBar');
			$('.pageNavigation').removeClass('openRound');
			setTimeout(function(){ $('.closeNavBar').css('z-index','-1') }, 1000);
      
    }
  });
	
	$(document).on('click', '.mobilFilter', function () {
   if($('.filterOptions').hasClass('menubaropen'))
    {
      $('.filterOptions').removeClass('menubaropen');
      $('.header-menu').removeClass('menubaropen');
    }
    else
    {
      $('.filterOptions').addClass('menubaropen');
      $('.header-menu').addClass('menubaropen');
    }
  })
	
	$(document).on('click', '.mobileClose', function () {
   if($('.filterOptions').hasClass('menubaropen'))
    {
      $('.filterOptions').removeClass('menubaropen');
      $('.header-menu').removeClass('menubaropen');
    }
    else
    {
      $('.filterOptions').addClass('menubaropen');
      $('.header-menu').addClass('menubaropen');
    }
  })
	
	
})();

var stickyNavTop = $('.header').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > (0)) { 
        $('.header').addClass('fixNav');
        $('.header').addClass('filter');
        $('.commonSpace').addClass('addSpacing');
    } else {      
        $('.header').removeClass('fixNav');
        $('.header').removeClass('filter');
        $('.commonSpace').removeClass('addSpacing');
    }
};
stickyNav();
$(window).scroll(function() {
  stickyNav();
});

