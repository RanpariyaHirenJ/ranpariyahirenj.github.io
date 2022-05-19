
/*Doucment resize Function*/
$(window).resize(function(){
	overlayPossition(overlayId);
})
/*Docuemnt load function*/
$(window).load(function(){
	$('.loader').fadeOut();
})
/*Ready Funtion*/
$(function(){
	/*Back to top Function start*/
	$('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
	$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
					$('.scrollTop').fadeIn();
			} else {
					$('.scrollTop').fadeOut();
			}
	});
	$(document).on('click', '.scrollTop a', function() {
			$('body,html').animate({scrollTop: 0}, 800);
	});
	/*Back to top Function End*/
	$(document).on('click','.close-error',function(){
		$(this).parents('.seisson-message').slideUp();
	})
})



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
//Slide Function
	
/*Star Rating js*/
$(function(){
	/*$('.rating ol li button').click(function(event){
		event.preventDefault();
		var clickIndex = $(this).parent('li').index() + 1;
		$(this).parents('.rating').attr('data-count',clickIndex)
		$(this).parents('ol').children('li').find('button').removeClass('active')
		$(this).parents('ol').children('li').each(function(i){
			$(this).find('button').addClass('active')
			if((i+1)  == clickIndex)
			{
				return false;
			}
		})
	})
	
	$(".rating ol li").hover(function(event){
    event.preventDefault();
		$(this).prevAll('li').children('button').addClass('active1')
		
    }, function(){
    $(this).parents('ol').children('li').find('button').removeClass('active1')
	});*/
		
	/*$('.book-list li img').load(function() {
		$(this).fadeIn(1000);
	});
	$("img.lazy").lazyload({
    effect : "fadeIn",
		threshold : 50,
		container: $(".book-list")
	});*/
	$("img.lazy").lazyload({
		 event: "lazyload",
		 effect: "fadeIn",
		 threshold : 50,
		 /*effectspeed: 2000,*/
		 container: $(".book-list")
}).trigger("lazyload");
	
	/*$(".book-list ul li").hover(function(){
    $(this).children('.tooltip').stop().fadeIn().css('display','block');
    }, function(){
    $(this).children('.tooltip').fadeOut();
	});
	$(".book-list ul li .rating").hover(function(){
    $(this).parent('li').children('.tooltip').fadeOut();
    }, function(){
    $(this).parent('li').children('.tooltip').fadeOut();
	});
	$(".revie-links").hover(function(){
    $(this).parent('li').children('.tooltip').fadeOut();
    }, function(){
    $(this).parent('li').children('.tooltip').fadeOut();
	});*/
		
		
});
/*Star Rating js end*/
$(window).load(function(){
	alignments();
	
});
	
$(window).resize(function(){
	alignments();
})

$(document).ready(function() {
	alignments();

})
function alignments(){
 var h=$('.authod-profile .book-desc').outerHeight();
 var lg=$('.header').outerHeight();
 $('.authod-profile .book-brif-ryt').css('min-height',h)
 $('.book-briefcntr').css('margin-top',($('.header').outerHeight()+$('.briefBand').outerHeight()))
 $('.briefBand').css('top',lg)

 $('.scroll-down').css('top',-($('.header').outerHeight() + $('.briefBand').outerHeight()));
 var bkheght=$('.book-cntr').outerHeight();
 $('.tooltip').css('min-height',bkheght);
}

function showbooklist(para,para1){
	$( ".home-tabs ul li span").removeClass('active');
	
	$('.hidebooklist').hide();
	$('.'+para).show();
	$( ".home-tabs ul li:eq("+para1+") span").addClass('active');
	/*$(window).scrollTop($(window).scrollTop()-2);*/
}



$(function(){
		
	$(window).scroll(function() {
		 var scrollPosition = $(window).scrollTop();
		if(scrollPosition > 1)
		{
		
		$('.menu-search').addClass('scroll-width');
		}
		else
		{
			$('.menu-search').removeClass('scroll-width');
		}

	});
	
	$('.selectMenuCnt h3').click(function(){
		$(this).next('.selectMenuList').slideToggle();
		$(this).css({'border-bottom-left-radius':'0px','border-bottom-right-radius':'0px','background-color':'#f7d213'});
		$('.selectMenuList').css({'background':'#f7d213'});
	})
	$('.selectMenuList ul li').click(function(){
		var menu = $(this).html()
		var menuid=$(this).attr('id');
		$(this).parents('.selectMenuList').slideUp();
		$(this).parents('.selectMenuList').css({'background-color':'#f0f0f0'})
		$(this).parents('.selectMenuList').prev('h3').html(menu);
		$(this).parents('.selectMenuList').prev('h3').attr('id',menu);
		$(this).parents('.selectMenuList').prev('h3').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background-color':'#f0f0f0'})
	})
	
	$('body').click(function(e){

target = $(e.target).attr('class');
if (target != 'h3' && target !='selectMenuCnt')
{
$('.selectMenuList').slideUp();
$('.selectMenuList').prev('h3').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background-color':'#f0f0f0'})
$('.selectMenuList').css({'background-color':'#f0f0f0'})
}

})

$('.loginpopup').click(function(){
	$('#view-join').fadeOut();
})

$('.mobile-icon a').click(function(){
	var statsM=parseInt($('.menu-catgry-drop').css('right'));
	if(statsM < 0)
	{
		$('.menu-catgry-drop').animate({right:'0'});
		$(this).addClass('activem');
	}
	else
	{
		$('.menu-catgry-drop').animate({right:'-102%'});
		$(this).removeClass('activem');
	}
})
/*$('.select-values input[type="checkbox"]').click(function(){

			if($(this).prop("checked") == true){
					var genTxt=$(this).next('label').html();
					$(this).parents('.select-values').prev('.select-display').find('span').append(' ' + genTxt+ ','); 

			}

			else if($(this).prop("checked") == false){


			}

	});*/
});

$(".select-values input:checkbox").on("change", function() {
	var generallen = $(this).parents('.select-values').find("input[name='wpmm[]']:checked").length;
	var genTxt=$(this).next('label').html();
	
	if (generallen > 0) {
		$(this).parents('.select-values').prev('.select-display').find('input').val(genTxt); 
		
	}
	else 
	{
	
		$(this).parents('.select-values').prev('.select-display').find('input').val('Select');

	}
});