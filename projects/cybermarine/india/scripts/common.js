(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86227503-1', 'auto');
  ga('send', 'pageview');
  
/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
	fixedHeader();
	alignments();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter();
	fixedHeader();
	alignments();
  $('.loader').fadeOut();
})
/*Ready Funtion*/
$(function () {
  fixedFooter();
	fixedHeader();
	alignments();
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
  $(document).on('click', '.close-error', function () {
    $(this).parents('.seisson-message').slideUp();
  })
    /*Header footer loading*/
    // Testimonials menu hide
  $(".subdrop-down:eq(0)").addClass("hide-menu");
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
  /*mobile Navigation*/
  $('.toggle-btn').click(function () {
    if ($('.wrapper').hasClass('opened'))
    {
      $('.wrapper').removeClass('opened');
    }
    else
    {
      $('.wrapper').addClass('opened');
    }

  });
  $('.has-sub-menu').click(function () {
    var target = $(this).find('.sub-menu');
    var trigger = $(this);
    if (trigger.hasClass('opened')) {
      trigger.removeClass('opened');
    }
    else {
      trigger.addClass('opened');
    }

  });
  /*Mobile navigation end*/
});

// Start for get captcha code
$(document).ready(function() {
		var func  = "get_capcha_images";
		$.ajax({
			method: "POST",
			url: "../ajax_functions.php",
			data: { "function": func }
		})
		.done(function(msg) {
			if(msg)
			{
				$(".captcha_image").empty();
				$(".captcha_image").append(msg);
			}
		});
});
// End for get captcha code

// // Display Alert for captcha code Start

var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
var decodedparameter = decodeURIComponent(parameter)
var param = decodedparameter.split('=');
if(param[0] == "error")
{
	alert(param[1]);
}
// Display Alert for captcha code End

function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}

function alignments(){
	var winWidth=$(window).outerWidth();
	var winHeight=$(window).outerHeight();
	
	if(winWidth < 767)
	{
		if(winWidth>winHeight) 
		{
		 // Landscape 
		 $('.navigation').css('height',(winHeight-53));
		}
		else 
		{ // Portrait
			$('.navigation').css('height',(winHeight-53));
		}
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
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  $(".overlay-footer").show();
  target.css('visibility', 'visible').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
	  $(".overlay-footer").hide();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
}

function fixedHeader(){
	var wwdith=$(window).width();
	var hhgt=$('.header').outerHeight();
	$('body').css('padding-top',hhgt);
	$('.section-rowsdown h2 strong').css('top',-hhgt-20);
	$('.expertise-box h2 strong').css('top',-hhgt-20);
	if(wwdith > 1024)
	{
		/*$(".custom-dropdown").hover(function(){
        $(this).find('.custom-subdrop').slideDown()
        }, function(){
        $(this).find('.custom-subdrop').fadeOut();
    });*/
	}
	else
	{
		$(".custom-dropdown").click(function(){
			var _ddstatus=$(this).find('.custom-subdrop').css('display');
			if(_ddstatus=='none')
			{
				$(this).find('.custom-subdrop').slideDown()
			}
		})
	}
}
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
        var elementClick = $(caller).attr("href");
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
       	 window.location.hash = elementClick;
				 
        });
				if($(window).width() < 981)
				 {
						$('.gotosection-box.findgoto-url').slideUp();
						var htmtxt=$('.gotosection-box ul li a.active').html();
						$('.mobilefilter a').html(htmtxt)
				 }
        return false;
        
        })
    })
}

$(document).ready(function(){
    
		$('.custom-subdrop li').click(function(){
			var srcs=$(this).find('img').attr('src');
			$(this).parents('.custom-dropdown').find('dt').find('img').attr('src',srcs);
			$(this).parents('.custom-subdrop').fadeOut()
		});
		/*var maxHeight = 0;
		$(".comonboxtwo").each(function(){
			 if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
		});
		$(".comonboxtwo").height(maxHeight);*/
		
		$('.gotosection-box li a').click(function(){
			$('.gotosection-box li a').removeClass('active');
			$(this).addClass('active');
		})
		$(".slide").anchorAnimate();
		$('.subdrop-down').click(function(){
			var wwdith=$(window).width();
			if(wwdith < 768)
				{
					
					var statD=$(this).children('.sub-menudrop').css('display');
					if(statD=='none')
					{
						$('.sub-menudrop').slideUp();
						$('.subdrop-down').removeClass('mobileactive');
						$(this).addClass('mobileactive');
						$(this).children('.sub-menudrop').slideDown();
					}
					else
					{
						$('.sub-menudrop').slideUp();
						$('.subdrop-down').removeClass('mobileactive');
						$(this).removeClass('mobileactive');
						$(this).children('.sub-menudrop').slideUp();
					}
				}
				
		})
});
$(window).load(function(){
	var url=window.location.href;
	var selectedlist=url.split('#');
	var selecto=selectedlist[1];
	if(selecto==undefined)
	{
		
	}
	else
	{
		$('.findgoto-url li a').removeClass('active');
		$('.findgoto-url a[href$="'+selecto+'"]').addClass('active');
	}
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

})();
$('.mobil-icon-toggle').click(function(){
	if($(this).hasClass('active'))
	{
		$('.navigation').addClass('open-navigation');
	}
	else
	{
		$('.navigation').removeClass('open-navigation');
	}
});
$('.footerlinks > ol > li dl dt').click(function(){
		
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
	});
	
$(document).on('click', '.mobilefilter a', function(){
	var _status=$('.downlinkscntr .gotosection-box').css('display');
	if(_status =='none')
	{
		$('.downlinkscntr .gotosection-box').slideDown()
		
	}
	else
	{
		$('.downlinkscntr .gotosection-box').slideUp()
		
	}
});
$(document).on('click', '.closefilter', function(){
	$('.closefilter').remove('.closefilter');
	$('.downlinkscntr .gotosection-box').animate({left:'-102%'});
});



$(document).ready(function(){

$('.filter-select').click(function(){

$('.select-item').parent('').find("a").each(function(){
$(this).removeClass("active-select");	
})

$(this).addClass("active-select");	
});		
});

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.send-enquiery-btn').fadeIn();
			$('.nav').addClass('fixed');
    } else {
      $('.send-enquiery-btn').fadeOut();
			$('.nav').removeClass('fixed');
    }
  });