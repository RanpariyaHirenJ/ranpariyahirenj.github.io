/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter();
	 setTimeout(function() {
        $('#load-page').addClass('loaded');
    }, 300)
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
  $
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"><i class="fas fa-angle-double-up"></i></a></div>');
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
	
	/*Tabination*/
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
			//resultCnt.children('div#'+relation).slideUp();
		}
	})
	/*Tabination end*/
 
  });


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
  
}


/*Overlay function*/
/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
    sessionStorage.setItem("CloseFlag", "true")
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
  target.find('.overlay-header').append('<div class="closeBtn">×</div>');
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
      if (sessionStorage.getItem("CloseFlag") == "false") {
          sessionStorage.removeItem("CloseFlag")
      }
      else
      {
          $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
          $('body .overlay-bg').fadeOut(1000, function () {
              $(this).remove();
              $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
          });
          $(this).remove();
          $(".send-enquiry").show()
          sessionStorage.removeItem("CloseFlag")
      }    
  });
}

/*remove pop up on click of outside*/

    $(document).on('click', '.overlay-box', function () {
        sessionStorage.removeItem("CloseFlag")
        sessionStorage.setItem("CloseFlag", "false")
    });

    $(document).on('click', '.overlay', function () {
        if (sessionStorage.getItem("CloseFlag") == null) {
            sessionStorage.setItem("CloseFlag", "true")
            //closeButton();
            $(".closeBtn").trigger("click")
        }
        else if (sessionStorage.getItem("CloseFlag") == "true") {
            //closeButton();
            $(".closeBtn").trigger("click")
        }
        else {
            sessionStorage.removeItem("CloseFlag")
        }
    });

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
      $('.menubar').addClass('menubaropen');
    }
    else
    {
      $('.menubar').removeClass('menubaropen');
    }
  });
	$(document).on('click', '.mobileDropDown', function (e) {
		$('.submenu').slideUp();
		$('.mobileDropDown').children('i').addClass('fa-plus-square');
		
		if($(this).next('.submenu').css('display')=='none'){
			$(this).children('i').removeClass('fa-plus-square');
			$(this).children('i').addClass('fa-minus-square');
			$(this).next('.submenu').slideDown();
			}
			else{
				$(this).children('i').removeClass('fa-minus-square');
				$(this).children('i').addClass('fa-plus-square');
				$(this).next('.submenu').slideUp();
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
	
})();

window.sr = ScrollReveal(), sr.reveal("[data-animation-ref]", {
    origin: "bottom",
    distance: "25px",
    duration: 1e3,
    delay: 180,
    scale: 1,
    opacity: 0,
    easing: "ease-out",
    beforeReveal: function(t) {
        $(t).addClass("is-visible")
    }
}), sr.reveal("[data-animation-service]", {
    origin: "left",
    distance: "25px",
    duration: 1e3,
    delay: 30,
    scale: 1,
    opacity: 0,
    easing: "cubic-bezier(0.49, 0.99, 0.54, 0.98)"
}, 180), sr.reveal("[data-animation-service-general]", {
    origin: "left",
    distance: "25px",
    duration: 1e3,
    delay: 30,
    scale: 1,
    opacity: 0,
    easing: "cubic-bezier(0.49, 0.99, 0.54, 0.98)"
}, 180), sr.reveal("[data-animation-parallax]", {
    origin: "bottom",
    distance: "0",
    duration: 0,
    delay: 0,
    scale: 1,
    opacity: 1,
    beforeReveal: function(t) {
        $(t).addClass("is-visible")
    }
}), sr.reveal("[data-animation-hp-girl]", {
    origin: "bottom",
    distance: "0",
    duration: 0,
    delay: 0,
    scale: 1,
    opacity: 1,
    beforeReveal: function(t) {
        $(t).addClass("is-visible")
    }
}), sr.reveal("[data-animation-headline]", {
    origin: "bottom",
    distance: "10px",
    duration: 1e3,
    delay: 130,
    scale: 1,
    opacity: 0,
    easing: "ease-out"
}), sr.reveal("[data-animation-text]", {
    origin: "bottom",
    distance: "25px",
    duration: 1e3,
    delay: 130,
    scale: 1,
    opacity: 0,
    easing: "ease-out"
}), sr.reveal("[data-animation-column-text]", {
    origin: "left",
    distance: "25px",
    duration: 1e3,
    delay: 130,
    scale: 1,
    opacity: 0,
    easing: "ease-out"
}), sr.reveal("[data-animation-column-text-rev]", {
    origin: "right",
    distance: "25px",
    duration: 1e3,
    delay: 130,
    scale: 1,
    opacity: 0,
    easing: "ease-out"
}), sr.reveal("[data-animation-column-img]", {
    origin: "left",
    distance: "0",
    duration: 1e3,
    delay: 130,
    scale: 1,
    opacity: 0,
    easing: "ease-out"
}), sr.reveal("[data-animation-showcase-block]", {
    origin: "left",
    distance: "0",
    duration: 1e3,
    delay: 400,
    scale: 1,
    opacity: 0,
    easing: "ease-out"
}), sr.reveal("[data-animation-showcase-text]", {
    origin: "bottom",
    distance: "25px",
    duration: 1e3,
    delay: 400,
    scale: 1,
    opacity: 0,
    easing: "ease-out"
}), sr.reveal("[data-animation-services-header]", {
    origin: "bottom",
    distance: "25px",
    duration: 1e3,
    delay: 0,
    scale: 1,
    opacity: 0,
    easing: "cubic-bezier(0.49, 0.99, 0.54, 0.98)",
    beforeReveal: function(t) {
        $(t).addClass("is-visible")
    }
})

var stickyNavTop = $('.header').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > (50)) { 
        $('.header').addClass('fixed');
        //$('.commonSpace').addClass('addSpacing');
    } else {
      
        $('.header').removeClass('fixed');
        //$('.commonSpace').removeClass('addSpacing');
    }
};
stickyNav();
$(window).scroll(function() {
  stickyNav();
});

//Slide Function
jQuery.fn.anchorAnimate = function (settings) {
  settings = jQuery.extend({
      speed: 1100
  }, settings);
  return this.each(function () {
      var caller = this
      $(caller).click(function (event) {
          event.preventDefault()
          var locationHref = window.location.href
          var elementClick = $(caller).attr("href")
          var destination = $(elementClick).offset().top;
          $("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
          }, settings.speed, function () {
              window.location.hash = elementClick
          });
          return false;

      })
  })
}

$(function () {
  $(".slide").anchorAnimate();
});