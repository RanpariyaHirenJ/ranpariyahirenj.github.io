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
	$('.dropDownCnt h2').click(function(){
		$(this).next('.dropDownList').slideDown();
	})
	$('.dropDownList ul li').click(function(){
		$('.dropDownList').slideUp();
		$(this).parents('.dropDownCnt').children('h2').text($(this).text());
		$(this).parents('.dropDownCnt').children('h2').attr('id',$(this).attr('id'));
	})
	$('body,html').click(function(e){
		var target = $(e.target).attr('class');
		if(target != 'ddHead')
		{
			$('.dropDownList').slideUp();
		}
	})
})



function overlayBox(popUpId){
	$('.overlay').fadeIn();
	/*$('.overlayBox').css("margin-top", "100px");*/
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
	$('html,body').animate({
          scrollTop: $('#'+popUpId).offset().top
    }, 500);
	
}
$(document).on('click','.closeBtn',function(){
	$('.overlay,.overlayBox').fadeOut();
	var page = document.URL;
	var page = page.split("?")[0];
	location.assign(page);
});	

////overlay without refresh on close action
function overlayBoxNorefresh(popUpId){
	$('.overlay').fadeIn();
	/*$('.overlayBox').css("margin-top", "100px");*/
	$('#'+popUpId).append('<div class="closeBtn1">X</div>')
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
	$('html,body').animate({
          scrollTop: $('#'+popUpId).offset().top
    }, 500);
	
}
$(document).on('click','.closeBtn1',function(){
	$('.overlay,.overlayBox').fadeOut();
});	


var liWidth = $('.slider > ul> li').width()
var liCount = $('.slider > ul > li:last').index();
$(function(){
	var ulWidth = liWidth * parseInt(liCount+1)
	$('.slider > ul').css('width',parseInt(ulWidth))
	animation(0)
	x = 1
	setInterval(function(){
		animation(x)
		x = x+1
		if(x > liCount)
		{
			x=0;
		}
		else
		{
			return false;
		}
	},5000);
})

$('.controls .prev').live('click',function(){
	animation($(this).attr('slideCount'))
})
$('.controls .next').live('click',function(){
	animation($(this).attr('slideCount'))
})
function animation(count){
	var nextCount = parseInt(count)+1;
	var prevCount = parseInt(count)-1;
	if(count == 0){$('.controls .prev').hide();}else{$('.controls .prev').show()}
	if(count == liCount){$('.controls .next').hide();}else{$('.controls .next').show()}
	$('.controls .next').attr('slideCount',nextCount)
	$('.controls .prev').attr('slideCount',prevCount)
	var slideMargin = liWidth * count;
	$('.slider > ul').animate({marginLeft:-slideMargin},500);
}



$(document).ready(function () {
	$('#prod-name').click(function(){
	    $('#itmid').prop('checked',true);
		
	})
	
	
});