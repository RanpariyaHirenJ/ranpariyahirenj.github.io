 $(window).scroll(function() {
	if ($(this).scrollTop() > 225) 
	{
		//alert("hello")
		$(".header").addClass('header-shadow');
	} 
	else 
	{
	   $(".header").removeClass('header-shadow')
	}
});

if ($(window).width() < 1400) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 120) 
		{
			//alert("hello")
			$(".header").addClass('header-shadow');
		} 
		else 
		{
		   $(".header").removeClass('header-shadow')
		}
	});
}
/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
	alignments();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter();
	alignments();
  $('.loader').fadeOut();
	//$('.header').addClass('wow animated fadeInDown').css('opacity','1');
})

/*Ready Funtion*/
$(function () {
  fixedFooter();
	alignments();
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
	  		$('.scrollTop').fadeIn();
			var footer_height = $('#page-footer').height();
			var window_height = $(document).height() - $('#page-footer').height() - 650;
			if ($(this).scrollTop() > 250 && $(this).scrollTop() < window_height) {
				$('.demolink').fadeIn();	
			}
			else {
				$('.demolink').fadeOut();
			}
	}
	else {
      	$('.scrollTop').fadeOut();
	  	$('.demolink').fadeOut();
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
  $(document).on('click', '.close-error', function () {
    $(this).parents('.seisson-message').slideUp();
  });
  /*Header footer loading*/
  /*accordion start*/
  $('.accordion dl dt').click(function () {
    var trigger = $(this);
    var target = trigger.next('dd');
    if (target.css('display') == 'none')
    {
      $('.accordion dl').removeClass('active');
      $('.accordion dl dd').slideUp();
      target.slideDown();
      trigger.parents('dl').addClass('active');
    }
    else
    {
      $('.accordion dl').removeClass('active');
      $('.accordion dl dd').slideUp();
    }
  });
  /*accordion end*/
	$('.playbtnvdo').click(function(){
        video = '<iframe src="'+ $(this).next('.showvdoryt').attr('data-video') +'"></iframe>';
		$(this).next('.showvdoryt').addClass('showvdorytfull');
        $('.showvdoryt').append(video);
    });
});


/*function fixedFooter()
{
  $('body').css('min-height', $(window).height());
	$(".banner-box ul li").css('min-height', $(window).height());
	$(".vision-mission-cntr").css('min-height', $(window).height());
	$(".banner-box.common-top.programs-banner").css('max-height', $(window).height() -120);
}


if ($(window).width() > 1400) {
	function fixedFooter()
	{
		$(".banner-box ul li").css('min-height', $(window).height() - 200);
		$(".vision-mission-cntr").css('min-height', $(window).height() - 200);
		$(".banner-box.common-top.programs-banner").css('max-height', $(window).height() - 200);
	}
}*/






function alignments(){
	$('.gotopslide').css('top',-($('.header').outerHeight()));
}


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
  target = $('#' + popupID);
  
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
  $('body').append('<div class="overlay-bg"></div>');
  	if(popupID == "video-demo") {
  		$("#youtube_player")[0].src += "&autoplay=1";
  	}
  //$(this).unbind("click");
  target.find('.overlay-box .overlay-body').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display','block').find('.overlay-box').addClass('animated').addClass(animationIn);
  
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $('.closeBtn').remove();
      $('.overlay').css('visibility', 'hidden').css('display','none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
		$("iframe").each(function() {
 		$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
  });
}

$(document).bind('keydown',function(e){
  if ( e.which == 27 ) {
   		$('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    	$('body .overlay-bg').fadeOut(1000, function () {
     	$('.closeBtn').remove();
      	$('.overlay').css('visibility', 'hidden').css('display','none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    	});
		$("iframe").each(function() {
 		$("#youtube_player")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});  
  }
});

/*Overlay function end*/
$(function(){
	/*Animate label form*/
	$('.animate-label .input-group').click(function(){
		if ($(this).find('select').size() > 0) {
		}  
		else {
			$(this).find('input').focus();
			$(this).find('label').addClass('active');
		
		}     
		if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
			$(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
		}
	
	});
	/*$('.animate-label .input-group input,.animate-label .input-group textarea').blur(function(){
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
	});*/
/*Animate label form*/

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
			$('.mainlinks').addClass('open-navigation');
		}
		else
		{
			$('.mainlinks').removeClass('open-navigation');
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
	$('.demolink a').click(function(){
		if($(window).width() < 767)
		{
			$('body,html').animate({scrollTop: 0}, 800);
		}
	});
	
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
			$('.tabResult .tabBx .content').slideUp(500);
			$(this).next('.content').slideDown(500);
		}
		else
		{
			$('.tabResult .tabBx .content').slideUp(500);
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
			resultCnt.children('div').slideUp(500);
			resultCnt.children('div#'+relation).slideDown(500);
		}
		else
		{
			//resultCnt.children('div#'+relation).slideUp();
		}
	})
/*jQuery tabs end */
	
	
	$('.pagelinkfeatures li a').click(function(){
		
		if($(window).width() > 767)
		{
			setTimeout(function(){
				var url = window.location.href;
				var selectedlist = url.split('#');
					$(".tabNav li").each(function(){
							var abcd=$(this).children('div').attr('id');
							if(abcd==selectedlist[1])
							{	
								$(this).children('div').next('a').trigger('click');
							}
					});
			}, 100);
		}
		else
		{		setTimeout(function(){
			
			var url1 = window.location.href;
					var selectedlist1 = url1.split('#');
					var abcdw=$('#'+selectedlist1[1]).next('a').attr('rel');
					
					$('#'+abcdw).find('.mobile-menu').click();
					var ofset=$('.features-tabs').offset();$('body,html').animate({scrollTop: ofset.top-10}, 800);
					
					}, 1200);
		}
	});
	$('.leftTextbox h2').click(function(){
		var h2stus=$(this).next('.hideabut').css('display');
		if(h2stus=='none')
		{ $('.leftTextbox h2').removeClass('active');
			$('.hideabut').slideUp();
			$(this).next('.hideabut').slideDown();
			$(this).addClass('active');
		}
		else
		{ 
			$('.hideabut').slideUp();
			$('.leftTextbox h2').removeClass('active');
		}
		
		
	})
	$('.faqs-cntr h2').click(function(){
		var h2stus=$(this).next('.hideabut').css('display');
		if(h2stus=='none')
		{ $('.faqs-cntr h2').removeClass('active');
			$('.hideabut').slideUp();
			$(this).next('.hideabut').slideDown();
			$(this).addClass('active');
		}
		else
		{ 
			$('.hideabut').slideUp();
			$('.faqs-cntr h2').removeClass('active');
		}
		
		
	})
})

$('.inputType').blur(function(){
	var placeholder = $(this).attr('placeholder');
	if (this.value.length > 0 || placeholder != undefined) {
		$(this).prev().addClass('active');
		return false;
	}
	else
	{
		$(this).prev().removeClass('active');
	}
});

$(window).load(function(){
	if($(window).width() > 768)
		{
			var url2 = window.location.href;
			var selectedlist2 = url2.split('#');
			$('#'+selectedlist2[1]).next('a').trigger('click');
		}
		else
		{
			var url1 = window.location.href;
	var selectedlist1 = url1.split('#');
	var abcdw=$('#'+selectedlist1[1]).next('a').attr('rel');
	
	$('#'+abcdw).find('.mobile-menu').click();
	var ofset=$('.features-tabs').offset();$('body,html').animate({scrollTop: ofset.top-10}, 800);
		}
})

function changecolor(para){
	$('[class*="variescolour"]').removeClass(function(i, c) {
		return c.match(/variescolour\d+/g).join(" ");
	});
	$('#patchboxtabs').addClass('variescolour'+para);
	$('.tabNav li a').removeAttr('class');
	$('.tabNav li').eq(para-1).children('a').addClass('navc'+para);
	
}

