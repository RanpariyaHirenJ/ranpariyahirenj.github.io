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
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop floating"><a href="javascript:void(0)"></a></div>');
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
 
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}


/*Overlay function*/

var animationIn, target, animationOut;
function overlayBox(popupID)
{
	
		/*$('body,html').animate({scrollTop: 0}, 800);*/

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

/*Overlay function end*/

$(window).resize(function () {
  alignments();
	whitecolor();

})

$(window).load(function () {
  alignments();
	whitecolor();
	$('body.home-body').addClass('loaded');
	if($(window).width() > 767)
	{
		$('.round-circle').css('height','auto');
		
	}
	if($(window).width() < 768)
	{
		$('.round-circle').css('height','auto');
	}
})

$(function () {
	alignments();
	whitecolor();
	if($(window).width() > 767)
	{
		$('.round-circle').css('height','488px');
		
	}
	if($(window).width() < 768)
	{
		$('.round-circle').css('height','300px');
	}
	var roundh=$('.round-slider').height();
	var roundhght=$('.round-circle').height();
	$('.round-circle').css('margin-top',(roundh-roundhght)/2);
	
})
function alignments(){
	var roundh=$('.round-slider').height();
	var roundhght=$('.round-circle').height();
	$('.round-circle').css('margin-top',(roundh-roundhght)/2);
	$('.common-top').css('padding-top',roundh);
	var newsh=$('.news-img').height();
	$('.news-desc').css('height',newsh);
	var cocth=$('.city-row ul li').height();
	$('.gmap_canvas').css('height',cocth);
	var hdnw=$('#homedown').width();
	//$('.showstopper-slider ul li').css('width',hdnw);
	var hdr=$('.header').height();
	$('.enquiry-top').css('margin-top',hdr);
	
	var winWidth=$(window).outerWidth();
	var winHeight=$(window).outerHeight();
	if(winWidth>winHeight) 
	{
	 // Landscape 
	
	}
	else 
	{ // Portrait
		
	}
	
}

function whitecolor(){
	$(window).scroll(function() {
    if($(this).scrollTop() > 1)
		{
			//$('.white-bg').addClass('show-white');
			$('.logo-band').addClass('small-logo');
			$('.round-slider').addClass('opacity-white');
			if($(window).width() < 1025)
			{
				//$('.my-enquirylnk').addClass('tablet-mob');
			}
			
		}
		else
		{
			//$('.white-bg').removeClass('show-white');
			$('.logo-band').removeClass('small-logo');
			$('.round-slider').removeClass('opacity-white');
			
			if($(window).width() < 1025)
			{
				//$('.my-enquirylnk').removeClass('tablet-mob');
			}
		}
		
		var abcd=$('.common-top .container').offset().top;
		if($(this).scrollTop() > 5)
		{
			$('.down-arrow').hide();
		}
		else
		{
			
			$('.down-arrow').fadeIn();
		}
		
		var f=$('.footer').offset().top;
		var h=$('.header').height();
		var ttl=f-h;
		if($(this).scrollTop() > ttl-500)
		{
			$('.navigation').hide();
		}
		else
		{
			$('.navigation').show();
		}
		
		 if($(this).scrollTop() > 1)
		{
			
			if($(window).width() < 1025)
			{
				$('body').addClass('moblebody');
			}
			
		}
		else
		{

				$('body').removeClass('moblebody');
			
		}
		
  });
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

	$(".down-arrow a").on("click", function(){
		$('a.godown').trigger('click');
	});
	
	$(".career-location ul li").hover(function(){
			$('.career-location ul li').css('opacity','0.2');
			$(this).css("opacity", "1");
			}, function(){
			$('.career-location ul li').css('opacity','1');
			$(this).css("opacity", "1");
	});
	
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
	$('.store-lnk').click(function(){
		$('.shiping-show').hide();
		$('.store-show').hide();
		$(this).parents('.product-row').find('.store-show').show();
	})
	$('.enquiry-lnk').click(function(){
		$('.store-show').hide();
		$('.shiping-show').hide();
		$(this).parents('.product-row').find('.shiping-show').show();
	});
	
	$(".navigation > ul > li.submenu-cntr").hover(function(){
		$('.submenu-box').hide();
		$(this).children('.submenu-box').show();
		
    }, function(){
			$('.submenu-box').hide();
		$(".navigation > ul > li.submenu-cntr.active").children('.submenu-box').show();
			
}); 

});
$(document).bind("contextmenu", function (e) {
        //e.preventDefault();
        //alert("Right Click is Disabled");
    });
function alignments(){

	var winW=$(window).width();

	var winH=$(window).height();

	$('ul.pagebanner li').css('width',winW);

	var cap=$('.captionCntr').width();

	$('.captionCntr').css('left',(winW-cap)/2);

	var orvl=$('.overlayPrice').outerHeight();

	var orvllnk=$('.add-wishbtns').outerHeight();

	var orvllnkiner=$('.quickaddLinks').outerHeight();

	//$('.add-wishbtns').css('margin-top',(orvl-orvllnk)/2);

	//$('.quickaddLinks .add-wishbtns').css('margin-top',(orvllnkiner-orvllnk)/2);

	var orvlw=$('.overlayPrice').outerWidth();

	var awdth=$('.allinfopdct').outerWidth();

	var ahght=$('.allinfopdct').outerHeight();

	//$('.overlayPrice').css('left',(orvlw-awdth)/2);

	//$('.overlayPrice').css('top',(orvl-ahght));

	$('.overlayPrice').css('width',awdth-4);

	$('.overlayPrice').css('height',ahght-4);

	

	if($(window).width() < 840)

	{

		$(".cartbodyCntr li").each(function() {

    if ($(this).outerHeight() > liMaxHeight)

		{

 			liMaxHeight = $(this).outerHeight();

    }

		});

		$(".cartbodyCntr ul li").css('min-height',liMaxHeight);

		

	}

	if($(window).width() < 767)

	{

	$(window).scroll(function(){

			if ($(this).scrollTop() > 190)

			{

				$('.mobile-menuCntr').addClass('fixedmobbile').fadeIn();

			} else 

			{

				$('.mobile-menuCntr').removeClass('fixedmobbile');

			}

		});

	}

}

