$(function(){
	$('.scrollTop a').click(function(){
		$('body,html').animate({scrollTop:0},800)
	})
	$('.formRow').append('<div class="clear"></div>');
	$('.inline.multi .clumn').each(function(i) {
    var x = i+1
		var widthValue = (100/x);
		$('.inline .clumn').css('width',widthValue+'%');
  });
})



function overlayBox(popUpId){
	$('.overlay').fadeIn();
	$('#'+popUpId).append('<div class="closeBtn">X</div>')
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var boxHeight = $('#'+popUpId).outerHeight();
	var boxWidth = $('#'+popUpId).outerWidth();
	var marginTB = (winHeight-boxHeight)/ 2;
	var marginLR = (winWidth-boxWidth)/2;
	if(marginTB<0)
	{
		$('#'+popUpId).css('top','30px');
		$('#'+popUpId).css('left',+ marginLR);
		$('#'+popUpId).fadeIn();
	}
	else
	{		
		$('#'+popUpId).css('top',+ marginTB);
		$('#'+popUpId).css('left',+ marginLR);
		$('#'+popUpId).fadeIn();
	}
}
$(document).on('click','.closeBtn',function(){
	$('.overlay,.overlayBox').fadeOut();
});	

$(function(){
	animation(0)
	x = 1
	setInterval(function(){
		animation(x)
		x = x+1
		if(x > 3)
			{
				x=0;
			}
		else
			{
				return false;
			}
	},5000);
})
function animation(count)
{
	$('.sliderCnt ul li').fadeOut()
	$('.sliderCnt ul li').eq(count).fadeIn();
}
$(function(){
	$('.mobileicon a').click(function(){
		var menuMobile= parseInt($('.mobileMenuCntr').css('left'));
		if(menuMobile < 0)
		{
			$('.mobileMenuCntr').animate({left:'0px'},"slow");
			$(this).css('background','url(images/mobilemenuh.png) center center no-repeat');
		}
		else
		{
			$('.mobileMenuCntr').animate({left:'-100%'},"slow");
			$(this).css('background','url(images/mobilemenu.png) center center no-repeat');
		}
	})
})