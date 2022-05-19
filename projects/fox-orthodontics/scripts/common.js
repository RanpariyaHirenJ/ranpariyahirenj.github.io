/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
	alignment();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter();
	alignment();
  $('.loader').fadeOut();
	
})
/*Ready Funtion*/
$(function () {
  fixedFooter();
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
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}

function alignment(){			
var _slideh=$('.slider-box').children('.new-leftbox-img').find('img').height();
//$('.slidertreatment > li').find('.infotxtmain').css('height',_slideh);
var _tileh=$('.tilbox1').height();
$('.tileblue-info').css('height',_tileh);
$('.home-banner').css('min-height',$(window).height());
if($(window).width() > 767)
{
	$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('littleup-nav');
    } else {
      $('.header').removeClass('littleup-nav');
    }
		//var _offsetbanner=$('.treatment-slider').offset().top;
		if ($(this).scrollTop() > 200) {
      $('.header').addClass('fixed-nav');
    } else {
      $('.header').removeClass('fixed-nav');
    }
		
  }).scroll();
	
	$('.scrollindiv').css('top',-($('.header').outerHeight()));
}


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
  $("body").css("overflow","hidden");
  target.find('.iframevideo').css("display","block");
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-content').prepend('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').find('.overlay-box').addClass('animated').addClass(animationIn);
  target.find('.overlay-footer').show();
   
  $(document).on('click', '.closeBtn',  function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $('.closeBtn').remove();
	  target.find('.iframevideo').css("display","none");
	  $('.overlay-box').find('.overlay-footer').hide();
	   $("body").css("overflow","visible");
	  $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
	
	//$('iframe').attr('src', $('iframe').attr('src'));
	$('#youtube_player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	$('#youtube_player1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	$('#youtube_player2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	//$('.overlay-box').fadeOut();
	//$('.overlay').remove();
  });
}
 //$(document).on('click', '.overlay-box', function () {return false;});
  $(document).on('click', '.overlay', function () {
	if($('.overlay-box').click()) {
 		
	}
	else
	{
		$('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
		$('body .overlay-bg').fadeOut(1000, function () {
		   $('.overlay-box').find('#enquiryform img').remove();
		   $("body").css("overflow","visible");
		   $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
		});
		$('#youtube_player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$('#youtube_player1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$('#youtube_player2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	}
	  });
  
   //$(document).on('click', '.overlay-box', function () {return false;});
    $(document).on('click', '.video-overlay', function () {
		
	if($('.overlay-box').click()) {
 		
	}
	else
	{
		$('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
		$('body .overlay-bg').fadeOut(1000, function () {
			$('.overlay-box').find('#enquiryform img').remove();
			$("body").css("overflow","visible");
			$('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
		});
		$('#youtube_player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$('#youtube_player1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$('#youtube_player2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	}
  });
  
  
/*Overlay function end*/




/*Overlay function*/
/*var animationIn, target, animationOut;
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
	  $(".overlay-footer").remove();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
	$('.overlay-box').fadeOut();
	$('.overlay').remove();
  });
}
*/




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
			$('.main-links').addClass('open-navigation');
		}
		else
		{
			$('.main-links').removeClass('open-navigation');
		}
	})
	$('.footerup ul li h2').click(function(){
		if($(window).width() < 768)
		{
			var _statsh=$(this).next('.footer-info').css('display');
			if(_statsh=='none')
			{
				$('.footer-info').slideUp()
				$(this).next('.footer-info').slideDown();
				$('.footerup ul li h2').removeClass('minus-iconmbl');
				$(this).addClass('minus-iconmbl')
			}
			else
			{
				$('.footer-info').slideUp()
				$(this).next('.footer-info').slideUp()
				$(this).removeClass('minus-iconmbl');
				$('.footerup ul li h2').removeClass('minus-iconmbl');
			}
		}
	})
	$('.dropdwon-menu').click(function(){
		if($(window).width() < 767)
		{
			var subStaus=$(this).children('.submenu-dropdwn').css('display');
			if(subStaus=='none')
			{
				$('.submenu-dropdwn').slideUp();
				$('.dropdwon-menu').removeClass('active');
				$(this).addClass('active');
				$(this).children('.submenu-dropdwn').slideDown();
			}
			else
			{	$(this).removeClass('active');
				$(this).children('.submenu-dropdwn').slideUp();
			}
		}
	})
})();
/*=========================== Document ready funtion end here ======================*/
//Slide Function
	jQuery.fn.anchorAnimate = function(settings) {
    settings = jQuery.extend({
        speed : 1100
        }, settings);
        return this.each(function(){
        var caller = this
        $(caller).click(function (event) {
        event.preventDefault()
        var locationHref = window.location.href
        var elementClick = $(caller).attr("href")
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
        });
        return false;
        
        })
    })
}



$(function(){
        $(".slide").anchorAnimate();
});

var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
var decodedparameter = decodeURIComponent(parameter)
var param = decodedparameter.split('=');
if(param[0] == "error")
{
	alert(param[1]);
}

$(function(){
 $('.file-upload input[type=file]').change(function(){
		var fval=$(this).val();
		var filterValue = fval.replace("C:\\fakepath\\", "");
		$(this).parents('.file-upload').find('span').html(filterValue);
	})
});

