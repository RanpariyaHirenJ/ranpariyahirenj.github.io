/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
	fixedHeader();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter();
	fixedHeader();
  $('.loader').fadeOut();
})
/*Ready Funtion*/
$(function () {
  fixedFooter();
	fixedHeader();
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

function fixedHeader(){
	var wwdith=$(window).width();
	var hhgt=$('.header').outerHeight();
	if(wwdith > 767)
	{
		$('body').css('padding-top',hhgt);
	}
	else{
		$('body').css('padding-top','0');
		}
		
		/*iframe height*/
		var _height=$('.model-cars li img').height();
		setTimeout(function(){ 
			$('.model-infoslider iframe').removeAttr('height')
			$('.model-infoslider iframe').css('height',_height-60);
		}, 1000);
	
}

function fixedFooter()
{
  $('body').css('min-height', $(window).height());
	if($(window).width() < 1025)
	{
		$('.removelink-mbl').attr('href','javascript:void(0)');
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
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-content').prepend('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
	$('.overlay-box').find('.overlay-content').hide();
    $('body .overlay-bg').fadeOut(1000, function () {
		$('.overlay-box').find('.overlay-content').hide();
		$('.overlay-box').find('#send_enquiry img').remove();
      $('.closeBtn').remove();
	  
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
	  //$('#iframe-hondacity')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
  });
   $(document).on('click', '.overlay-box', function () {return false;});
  $(document).on('click', '.overlay', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
		$('.overlay-box').find('#send_enquiry img').remove();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
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

})();
$(function(){
	$('.dropdown-menu > a').click(function(){
		if($(window).width() < 767)
		{
			$('.submenu-dropdown').removeClass('fadeInDown');
			$('.submenu-dropdown').addClass('noposinmbl');
			var _substatus=$('.submenu-dropdown').css('display');
			if(_substatus=='none'){
				$('.submenu-dropdown').slideDown();
			}
			else
			{
				$('.submenu-dropdown').slideUp();
				
			}
		}
	})
	$('.mobil-icon-toggle').click(function(){
		if($(this).hasClass('active'))
		{
			$('.navigation').addClass('open-navigation');
		}
		else
		{
			$('.navigation').removeClass('open-navigation');
		}
	})
	$('.footer-links > ul > li dl dt').click(function(){
		
		if($(window).width() < 767)
		{ var target=$(this).next('dd');
			var sStatus=$(this).next('dd').css('display'); 
			target.removeClass('openmbltab')
			if(sStatus=='none')
			{
				
				$(this).addClass('openmbltab');
				target.slideUp();
				$(this).next('dd').slideDown();
				
			}
			else
			{
				target.slideUp();
				$(this).removeClass('openmbltab');
				
			}
		}
	})
	$('.uploadBtn').change(function(){
		var fval=$(this).val();
		var filterValue = fval.replace("C:\\fakepath\\", "");
		$(this).next('span').html(filterValue);
		});
	/*jQuery tabs */
	/*script for append usefull element*/
		$('.tabNav li').each(function(){
		var tabContent = $(this).html();
		var relation = $(this).find('a').attr('rel')
		var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
		resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
	})
	/*script for mobile navigation */
	$(document).on('click','.mobile-menu',function(){
		if($(this).next('.content').css('display') == 'none')
		{
			//$('.tabResult > .tabBx > .content').slideUp();
			$(this).next('.content').slideDown();
		}
		else
		{
			$(this).next('.content').slideUp();
		}
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
			resultCnt.children('.tabBx').slideUp();
			resultCnt.children('div#'+relation).slideDown();
		}
		else
		{
			//resultCnt.children('div#'+relation).slideUp();
		}
	})
	/*jQuery tabs end */
	$("#owl-demo .owl-item").hover(function(){  
		$("#owl-demo .owl-item").css('opacity','0.4');
		$(this).css('opacity','1');
    }, function(){
    $("#owl-demo .owl-item").css('opacity','1');
		$(this).css('opacity','1');
		});
		
		$(".main-imge-menu ul li").hover(function(){  
		$(".main-imge-menu ul li").css('opacity','0.4');
		$(this).css('opacity','1');
    }, function(){
    $(".main-imge-menu ul li").css('opacity','1');
		$(this).css('opacity','1');
		});
		
/*	$(".main-imge-menu ul li").hover(function(){  
		$(".main-imge-menu ul li").css('opacity','0.4');
		$(this).css('opacity','1');
    }, function(){
    //$(".main-imge-menu ul li").css('opacity','1');
		$(this).css('opacity','0.4');
		});*/
})

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
	/**/
	$('.shwovdo-box').click(function(){
		$('#vdosee').find('iframe').attr('src','https://www.youtube.com/embed/69_ATZO8WBM?autoplay=1');
	})
	$(document).on('click','.closeBtn',function(){
		$('#vdosee').find('iframe').attr('src','');
	})
});



/*Google Analytics CODE */

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-76237262-1', 'auto');
  ga('send', 'pageview');

