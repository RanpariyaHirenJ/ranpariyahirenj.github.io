/*Doucment resize Function*/
$(window).resize(function () {
	//location.reload();
  	fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
  $(".slider.single-item").css("display","block");
})


$(document).ready(function(){
	var width = $(window).width();
	if (width < 1024) {
		$("div, span, p, a, li, h1, h2, h3").removeClass("wow").removeClass("fadeInLeft").removeClass("fadeInUp").removeClass("fadeInRight").removeClass("fadeInDown").removeAttr("data-wow-delay").removeAttr("data-wow-offset")
		.removeAttr("visibility");
	}
	
	if (sessionStorage.getItem('leadpage') != null) { var pagenamee = sessionStorage.getItem('leadpage'); $('#leadpage').val(pagenamee); } 
	else { var pagenamee = "Contact Page"; $('#leadpage').val(pagenamee); }
});


/*Ready Funtion*/
$(function () {
  fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
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
		$(this).remove();
  });
  

  $(document).on('click', '.overlay-box', function () { return false; });
  $(document).on('click', '.overlay', function () {
      $(".colse-btn").trigger("click")
  });
  
   // $(document).on('click', '.overlay-box', function () {return false;});
  /*$(document).on('click', '.overlay', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
		$('.overlay-box').find('.overlay-content').hide();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });*/
}
/*Overlay function end*/

$(function(){
	/*jQuery tabs */
/*script for append usefull element*/
$('.tabNav li').each(function(){
  var tabContent = $(this).html();
  var relation = $(this).find('a').attr('rel')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
})

/*script for desktop navigation */
$('.tabNav li a').click(function(){
  var relation = $(this).attr('rel')
  var tabNavigation = $(this).parents('.tabNav')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  
  tabNavigation.children().find('a').removeClass('active')
  $(this).addClass('active')
  
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
/*jQuery tabs end */
})

function tabnextclick(relation) {
	var resultCnt = $('.tabResult');

	tab = $('.tabResult').prev('.tabNav').find('a');

	for (var i = 0; i < tab.length; i++) {
		var target = tab.eq(i);
		
		var tab_relation = target.attr('rel');
		if (tab_relation === relation) {
			tab.eq(i).parents('li').removeClass('disabled');
		}
	}
	if (resultCnt.children('div#' + relation).css('display') === 'none') {
		resultCnt.children('div').slideUp();
		$('.tabNav li a').removeClass('active');
		$('.tabNav ').find('a[rel='+relation+']').parents('li').children('a').addClass('active');
		resultCnt.children('div#' + relation).slideDown();
	}
	var ofsetd=$('.tabNav').offset().top;
	$('body,html').animate({scrollTop: ofsetd}, 800);
}


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
			$(".menubar ul li.hasDropDown.active .submenu").css("display", "block");
		}
		else
		{
			$('.menubar').removeClass('open-navigation');
		}
	});
		$(document).on('click','.hasDropDown',function(){
			$('.hasDropDown').removeClass('openHas');
			var _child=$(this).find('.submenu').css('display');
			if(_child=='none')
				{
					$('.submenu').slideUp();
					$(this).find('.submenu').slideDown();
					$(this).addClass('openHas');
				}
				else
				{
					$(this).find('.submenu').slideUp();
					$(this).removeClass('openHas');
				}
		});
		
})();


