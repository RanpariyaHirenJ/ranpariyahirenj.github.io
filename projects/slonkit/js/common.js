$(function(){
  	$('.mobile-icon').click(function(){
		var menuMobile= parseInt($('.mobilenav').css('left'));
		if(menuMobile < 0)
		{
			$('.mobilenav').animate({left:'0px'},"slow");
			$(this).css('background','url(images/mobilemenuh.png) center center no-repeat');
		}
		else
		{
			$('.mobilenav').animate({left:'-100%'},"slow");
			$(this).css('background','url(images/mobilemenu.png) center center no-repeat');
		}
	})
	$('.accordion dl dt').click(function(){
	var trigger = $(this);
	var target = trigger.next('dd');
	if(target.css('display') == 'none')
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
	})
	$('.txt-btn').click(function(){
		var botm=parseInt($('.download-app').css('bottom'));
		if(botm < 0)
		{
			$('.download-app').animate({'bottom':0})
			$(this).css({'background':'#e86f21'})
			$('.dwnld-txt').css('background','url(images/down-lineh.png) right center no-repeat');
		}
		else
		{
			$('.download-app').animate({'bottom':'-113px'})
			$(this).css({'background':'none',})
			$('.dwnld-txt').css('background','url(images/line-down.png) right center no-repeat');
		}
	})
	alignments();
})
$(window).resize(function(){
	alignments();
})
$(window).load(function(){
	alignments();
})

function alignments(){
	var win=$(window).outerWidth();
	var dapp=$('.download-app').outerWidth();
	if($(window).width() < 766)
	{
	$('.download-app').css('right',(win-dapp)/2)
	}
	}