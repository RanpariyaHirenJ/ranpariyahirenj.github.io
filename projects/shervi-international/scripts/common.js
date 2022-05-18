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
		$(".closemenu").addClass('menuopen');
    }
    else
    {
		setTimeout(function(){ 
			$('.right-colum').removeClass('menubaropen');
		}, 1000);
  
		$('.right-colum').removeClass('fadeInRight');
		$('.right-colum').addClass('fadeOutRight');
		$(".closemenu").removeClass('menuopen');
    }
  });

$(window).scroll(function() { 
	//$('.mobil-icon-toggle').addClass('active'); 
	//$(".closemenu").addClass('menuopen');  
    if ($(this).scrollTop() > 0) {
    } else { 
		$('.mobil-icon-toggle').removeClass('active');
		$(".closemenu").removeClass('menuopen');      
    }
    if ($(this).scrollTop() >= 1 && $(this).scrollTop() <= 100) {
		$('.mobil-icon-toggle').addClass('active'); 
		$(".closemenu").addClass('menuopen');
    }
});

/*
$(window).scroll(function() {  
    if ($(this).scrollTop() >= 100 && $('.mobil-icon-toggle').not('active')) {
		$('.mobil-icon-toggle').addClass('active');
		$(".closemenu").addClass('menuopen');
		console.log("down")
    } else { 
		$('.mobil-icon-toggle').removeClass('active');
		$(".closemenu").removeClass('menuopen');
		console.log("up")        
    }
});
*/
  /*(':not(.closedTab)')
$(window).scroll(function() {  
		$('.mobil-icon-toggle').addClass('active');  
    if ($(this).scrollTop() > 100 && $('.mobil-icon-toggle').hasClass('active')) {
		$(".closemenu").addClass('menuopen');
		$('.mobil-icon-toggle').addClass('active');
		console.log("down")
    } else { 
		$(".closemenu").removeClass('menuopen'); 
		$('.mobil-icon-toggle').removeClass('active'); 
		console.log("up")        
    }
});
*/
	$(document).on('click', '.mobileDropDown', function () {
			/*if($(window).width() > 980){
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
			}
			if($(window).width() < 981){
				$('.rightMenu').removeClass('openSubMob');
				$('.mobileDropDown').children('i').addClass('fa-plus-square');
				$('.mobileDropDown').children('i').removeClass('fa-minus-square');
				if($(this).next('.rightMenu').hasClass('openSubMob'))
				 {
					$(this).next('.rightMenu').removeClass('openSubMob');
					}
					else
					{
					$(this).next('.rightMenu').addClass('openSubMob');
					$(this).children('i').removeClass('fa-plus-square');
					$(this).children('i').addClass('fa-minus-square');
					}
			}*/
			
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
$(window).ready(function () {
  var liMaxHeight = -1;
    var node;
    $(".level1 a").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.level1 a').css('height', liMaxHeight);
})

$(window).ready(function () {
  var liMaxHeight = -1;
    var node;
    $(".level2 a").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.level2 a').css('height', liMaxHeight);
})

$(window).ready(function () {
  var liMaxHeight = -1;
    var node;
    $(".level3 a").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.level3 a').css('height', liMaxHeight);
})

$(window).ready(function () {
  var liMaxHeight = -1;
    var node;
    $(".level4 a").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.level4 a').css('height', liMaxHeight);
})

$(window).ready(function () {
  var liMaxHeight = -1;
    var node;
    $(".level5 a").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.level5 a').css('height', liMaxHeight);
})
$(window).ready(function () {
  var liMaxHeight = -1;
    var node;
    $(".level6 a").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.level6 a').css('height', liMaxHeight);
})
var stickyNavTop = $('.header-area').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > (100)) { 
        $('.header-area').addClass('fixed-header');
        $('.commonSpace').addClass('addSpacing');
    } else {
      
        $('.header-area').removeClass('fixed-header');
        $('.commonSpace').removeClass('addSpacing');
    }
};
stickyNav();
$(window).scroll(function() {
  stickyNav();
});