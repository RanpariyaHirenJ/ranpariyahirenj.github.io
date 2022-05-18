!function(t){t.fn.countdown=function(e,i){function n(){var e=Date.parse(s.date)/1e3,n=Math.floor(t.now()/1e3);n>=e&&(i.call(this),clearInterval(interval));var l=e-n,f=Math.floor(l/86400);l-=60*f*60*24;var o=Math.floor(l/3600);l-=60*o*60;var r=Math.floor(l/60);l-=60*r,1==f?thisEl.find(".timeRefDays").text("day"):thisEl.find(".timeRefDays").text("days"),1==o?thisEl.find(".timeRefHours").text("hour"):thisEl.find(".timeRefHours").text("hours"),1==r?thisEl.find(".timeRefMinutes").text("minute"):thisEl.find(".timeRefMinutes").text("minutes"),1==l?thisEl.find(".timeRefSeconds").text("second"):thisEl.find(".timeRefSeconds").text("seconds"),"on"==s.format&&(f=String(f).length>=2?f:"0"+f,o=String(o).length>=2?o:"0"+o,r=String(r).length>=2?r:"0"+r,l=String(l).length>=2?l:"0"+l),thisEl.find(".days").text(f),thisEl.find(".hours").text(o),thisEl.find(".minutes").text(r),thisEl.find(".seconds").text(l)}thisEl=t(this);var s={date:null,format:null};e&&t.extend(s,e),n(),interval=setInterval(n,1e3)}}(jQuery);





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
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  
  $(window).scroll(function () {
    	if ($(this).scrollTop() > 100) {
	  		$('.scrollTop').fadeIn();
			var footer_height = $('.footer').height();
			var window_height = $(document).height() - $('.footer').height() - 665;
			if ($(this).scrollTop() > window_height) {
				$(".community-updates").show();
	  			$(".community-updates").css("bottom", "70px");
			}
			else {
				$(".community-updates").show();
	   			$(".community-updates").css("bottom", "0px");
			}
		}
		else {
      		$('.scrollTop').fadeOut();
		}
  });
  
  
  /*$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });
  */
  
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
}
/*Overlay function end*/

$(function(){
	/*text amoation*/
	$('.countmumber').each(function () {
			$(this).prop('Counter',20).animate({
					Counter: $(this).text()
			}, {
					duration: 2000,
					easing: 'swing',
					step: function (now) {
							$(this).text(Math.ceil(now));
					}
			});
	});
	/*text amoation end*/
	
	/*jQuery tabs */
/*script for append usefull element*/
$('.tabNav li').each(function(){
  var tabContent = $(this).html();
  var relation = $(this).find('a').attr('rel')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
})
/*script for mobile navigation 
$(document).on('click','.mobile-menu',function(){
  if($(this).next('.content').css('display') == 'none')
  {
    $('.tabResult .tabBx .content').slideUp();
    $(this).next('.content').slideDown();
  }
  else
  {
  	$('.tabResult .tabBx .content').slideUp();
  }
})*/
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

$('.select-mascotsbx ul li label').click(function(){
	var ofsetd=$('.registr-asbx ul').offset().top;
		$('body,html').animate({scrollTop: ofsetd}, 800);
	})


	
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
		$('.tabNav ').find('a[rel='+relation+']').parents('li').children('a').removeClass('disabled');
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
			$('.nav-menu').addClass('open-navigation');
		}
		else
		{
			$('.nav-menu').removeClass('open-navigation');
		}
	});
	$('.closebtncom').click(function(){
		$(this).parents('.community-updates').addClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:0})
	})
	$('.communityblockbx dl dt').click(function(){
		$(this).parents('.community-updates').removeClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:1})
	});
	$('.updateslider').bxSlider({
		auto:true,
		pager:false,
		controls:false,
		mode:'fade'
		})
})();


/*$(window).scroll(function () {
  //$(".community-updates").scrollTop(790);
  if($(window).scrollTop() == "546")
  {
	   $(".community-updates").show()
	   $(".community-updates").css("bottom", "70px")
	  }
	else if($(window).scrollTop() <= "546")
	{
	   $(".community-updates").show()
	   $(".community-updates").css("bottom", "0px")
	  }
})*/