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
  
  
  
	$('.selectMenuCnt h3').click(function(){
		$(this).next('.selectMenuList').slideToggle();
	})
	$('.selectMenuList ul li').click(function(){
		var menu = $(this).html()
		var menuid=$(this).attr('id');
		$(this).parents('.selectMenuList').slideUp();
		$(this).parents('.selectMenuList').prev('h3').html(menu);
		$(this).parents('.selectMenuList').prev('h3').attr('id',menu);
	})
	
		$('body').click(function(e){

target = $(e.target).attr('class');
if (target != 'h3' && target !='selectMenuCnt')
{
$('.selectMenuList').slideUp();
}

})
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
  /*var height = $(window).height();
  alert(height);*/
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

// function for alert message Start

var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
var decodedparameter = decodeURIComponent(parameter)
var param = decodedparameter.split('=');
if(param[0] == "error")
{
	alert(param[1]);
}

// function for alert message end

function alignment(){			
	if($(window).width() > 980)
	{
		$(window).scroll(function () {
			if ($(this).scrollTop() > 450) {
				$('.Navigation').addClass('fixed-nav');
			} else {
				$('.Navigation').removeClass('fixed-nav');
			}
			
		}).scroll();
		
	}
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
			$('.linksholder').addClass('open-navigation');
		}
		else
		{
			$('.linksholder').removeClass('open-navigation');
		}
	})
	$('.footerbox dl dt').click(function(){
		if($(window).width() < 768)
		{
			var _statsh=$(this).next('.footerbox dl dd').css('display');
			if(_statsh=='none')
			{
				$('.footerbox dl dd').slideUp()
				$(this).next('dd').slideDown();
				
			}
			else
			{
				$('.footerbox dl dd').slideUp()
				$(this).next('dd').slideUp()
				
			}
		}
	})
	
	/*Animate label form*/
		$('.animate-label .input-group').click(function(){
		 if ($(this).find('select').size() > 0) {
        // $(this).find('label').addClass('active');
         
        // var id = $(this).find('select').attr('id');
        // console.log(id);
          
         
        }  else {
                $(this).find('input').focus();
                $(this).find('label').addClass('active');
          
        }     
        if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
				$(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
		}
       
	});
	$('.animate-label .input-group input,.animate-label .input-group textarea').blur(function(){
		if (this.value.length > 0) {
			return false;
		}
		else
		{
			$(this).prev('label').removeClass('active');
		}
		});
		
		
		
  
    $('.input-group').on('focus', 'input, select, textarea', function () {
        $(this).prev('label').addClass('active');
    });
	
  $('.input-group textarea, .input-group input,.input-group select').each(function () {
        if (this.value.length > 0) {
            var div = $(this).prev('label').addClass('active');
        }
    });
		$('.input-group').click(function(){
			$(this).find('input').focus();
			$(this).find('label').addClass('active');
    });
	/*Animate label form*/
	
	$(".col-color").hover(function(){
			$('.col-color').css("opacity", "0.7");
			$(this).css("opacity", "1");
			}, function(){
			$('.col-color').css("opacity", "1");
	});
	$('.get-quotelink a').click(function(){
		if($(window).width() < 768)
		{
			$('body,html').animate({scrollTop: 0}, 800);
		}
	})
	
})();

    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.request-quote').fadeIn();
			$('.nav').addClass('fixed');
    } else {
      $('.request-quote').fadeOut();
			$('.nav').removeClass('fixed');
    }
  });