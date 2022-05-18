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
  $
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"><i class="fas fa-arrow-up"></i></a></div>');
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
      $('.right-colum').addClass('menubaropen');
			$('.right-colum').addClass('fadeInRight');
			$('.right-colum').removeClass('fadeOutRight');
    }
    else
    {
			setTimeout(function(){ 
			$('.right-colum').removeClass('menubaropen');
			}, 1000);
      
			$('.right-colum').removeClass('fadeInRight');
			$('.right-colum').addClass('fadeOutRight');
    }
  });
	$(document).on('click', '.mobileDropDown', function () {
			
				$('.rightMenu').removeClass('openSubMob');
				$('.mobileDropDown').children('i').addClass('fa-plus-square');
				$('.mobileDropDown').children('i').removeClass('fa-minus-square');
				if($(this).next('.rightMenu').hasClass('openSubMob')){
					$(this).next('.rightMenu').removeClass('openSubMob');
					
					}
					else
					{
					$(this).next('.rightMenu').addClass('openSubMob');
					$(this).children('i').removeClass('fa-plus-square');
					$(this).children('i').addClass('fa-minus-square');
					}
			
	});
	
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
// $("#parent").find("#element:hover").length;
// 	$(".menubar ul li a")
// 	.mouseenter(function() {
// 		var lftB = $(".menubar ul li a:hover").length;
// 		console.log(lftB);
// 		$('.start-home').css('left',)
// 	})
// 	.mouseleave(function() {
		
//   });
  
	
})();

var stickyNavTop = $('.header').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > (100)) { 
        $('.header').addClass('fixed');
        $('.commonSpace').addClass('addSpacing');
    } else {
      
        $('.header').removeClass('fixed');
        $('.commonSpace').removeClass('addSpacing');
    }
};


stickyNav();
$(window).scroll(function() {
  stickyNav();
});

var a = 0;
var counterFn = function(){
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 1000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
}
counterFn();
$(window).scroll(function() {

  counterFn();

});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 15,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ff7e00","#00bda6","#f0f0f0"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#b6b2b2"
      }
    },
    "opacity": {
      "value": 0.5211089197812949,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#c8c8c8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});