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
  target.find('.overlay-content').prepend('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display','block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display','none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
}
*/
/*Overlay function end*/


/*Overlay function*/
function overlayBox(popUpId){
  overlayPossition(popUpId)
  overlayId = popUpId
  $('body').append('<div class="overlay"></div>')
  $('#'+popUpId).append('<div class="closeBtn">X</div>')
  $('#'+popUpId).fadeIn();
}
var winWidth,winHeight,popId,boxHeight,boxWidth,marginTB,marginLR,overlayId

function overlayPossition(popUp)
{
	winWidth = $(window).width();
	winHeight = $(window).height();
	popId = $('#'+popUp)
	boxHeight = popId.outerHeight();
	boxWidth = popId.outerWidth();
	marginTB = (winHeight-boxHeight)/ 2;
	marginLR = (winWidth-boxWidth)/2;
	if(marginTB<0)
  {
    popId.css({
      'top':'30px',
      'left': marginLR,
      'position':'absolute',
    });
  }
  else
  {
    popId.css({
      'top':marginTB,
      'left': marginLR,
    });
  }
}
$(function(){
	$(document).on('click','.closeBtn',function(){
		$('.overlay-box').fadeOut();
		$('.overlay,.closeBtn').remove();
	}); 
});
/*Overlay function end*/

function initialize_lightbox(containerOrg,float)
{
	//float = fixed / absolute
	if($(window).width() < 768)
	{ 
		$('body,html').animate({scrollTop: 0}, 800);
	}
	var bg_element = $("<div class=\"overlay-background\"></div>")
	$(bg_element).css({
		"position": "fixed",
		top:0,
		left:0,
		"background-color": "#000",
		"opacity":0.4,
		"z-index":10000,
		"display":"none",		
		height:$(window).innerHeight(),
		width:$(window).innerWidth(),	
		
	})
	
	
	var container = $(containerOrg).clone();	
	
	//$(container).data("position",$(container).css("position"))
	//$(container).hide();
		
	var closebtn = $("<div class=\"closeBtn1\">X</div>");
	$(closebtn).click(function(){		
		$(this).parent().fadeOut("slow",function(){
			$(this).remove();
		});
		
		$(bg_element).fadeOut("slow",function(){
			$(this).remove();
			$(closebtn).remove();
			$(container).remove();	
		})			
	})
	
	$(bg_element).click(function(){		
		$(closebtn).trigger("click");		
	})
	
	$("body").append(bg_element)
	$("body").append(container)	
	$(container).append(closebtn)
	
	if(float=="fixed")
	{
		$(container).css("position",float);	
		if(window.innerWidth > 1050)
		{
			$(container).css({"top":((window.innerHeight - $(container).outerHeight())+100)/2,"left":((window.innerWidth - $(container).outerWidth())/2)})
		}
		else
		{
			$(container).css({"top":((window.innerHeight - $(container).outerHeight())+100)/2,"left":((window.innerWidth - $(container).outerWidth())/2)})
		}
	}
	else
	{
		$(container).css("position",float);	
		$(container).css({"top":(window.innerHeight - $(container).outerHeight())/2,"left":((window.innerWidth - $(container).outerWidth())/2)})
	}		
			
	
	$(container).css("z-index",10000);
	$(container).fadeIn("slow");
	$(bg_element).fadeIn("slow");		
	
	/*$('html,body').animate({
          scrollTop: $(container).offset().top
    }, 500);*/		
}
/*---------------------------------------Ajit----------------------------------------------------------*/
$(window).resize(function(){
	alignments();
})
$(window).load(function(){
	alignments();
})
$(document).ready(function() {
	alignments();
	$('.mobile-menuicon a').click(function(){
		var _S=$('.top-nav').css('display');
		if(_S=='none')
		{
			$('.top-nav').addClass('mobilemenu').animate({right:'0'});
			$(this).addClass('active');
		}
		else
		{
			$('.top-nav').animate({right:'-100%'},'slow',function(){
				$('.top-nav').removeClass('mobilemenu');
				})
			$(this).removeClass('active');
		}
	})
})
function alignments(){
 var h=$('.wrapper .cont-left-abt').outerHeight(true);
 
 $('.wrapper .cont-right-abt').css('min-height',h)
 
  $('.wrapper .cont-right-abt').css('background-color','#f9f9f9')
  
  $('.cont-right-abt').css('border-left','1px solid #d0c7c4');
	var h1=$('.header-nav-top').height();
	var h2=$('.header').height();
	var h3=$('.footer').outerHeight();
	var _f=$(window).height()-(h1+h2+h3-2);
	
	$('.commonh').css('min-height',($(window).height()-(h1+h2+h3-2)));
	
	var _c=$('.contact-ryt').outerHeight();
	if(_c > _f)
	{
		$('.contact-left').css('height',_c);
	}
	else
	{
		$('.contact-left').css('height',($(window).height()-(h1+h2+h3-2)));
	}
	if($(window).width() > 1024)
	{
	var liMaxHeight = -1;
var node;
$(".committee .member").each(function(index) {
    if ($(this).outerHeight() > liMaxHeight) {
 liMaxHeight = $(this).outerHeight();
 node = index;
    }
});
/*$(".committee .member").css('min-height',liMaxHeight);*/
}
}

$('.switch').click(function(){

		var show = $(this).attr('show')

		var hide = $(this).attr('hide')
		
		var hide1 = $(this).attr('hide1')

		$('.'+hide).hide()
		
		$('.'+hide1).hide()

		$('.'+show).show()
		
		$(this).closest(".content").find("span").each(function(){

			$(this).removeClass("selectswitch");	

		})
		$(this).addClass("selectswitch");	

});		



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

	
function showfieldsnew(para){
	
	var status=$('.'+para).css('display');
	
	$('.'+para).prev('a').children('dt').addClass('closeh2');	
	
	if(status=='none')
	{
		$('.'+para).slideDown();
		$('.'+para).prev('a').children('dt').removeClass('closeh2');	
	
	}
	else
	{
		$('.'+para).slideUp();	
	}
}


$(window).load(function(){

var slider=$(".bxslider").bxSlider({
	auto: true,
	startSlide: 0,
	pager: false,
	stopAuto: false,
	preloadImages: 'all',
	onSliderLoad: function(){		
	},
    onSlideAfter: function(){
    	$(".title").addClass("visible animated bounceInRight");  	
     },
     onSlideBefore: function(){
    	$(".title").removeClass("visible animated bounceInRight");   	
     }
	 });
	 
	 $('.bx-next, .bx-prev').click(function(){
    // time to wait (in ms)
    var wait = 1000;
    setTimeout(function(){
        slider.startAuto();
    }, wait);
 
});
});


$(document).ready(function(){
$('.menu').click(function(){	
$('.mobNav').stop().slideToggle(500)		  
});
});

$(document).ready(function() {
    $('.bxslider').bxSlider({
        onSliderLoad: function(){
            $(".bx-wrapper").css("visibility", "visible");
        }
    });
});