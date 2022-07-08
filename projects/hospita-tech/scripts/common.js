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
		$('body,html').animate({scrollTop: 0}, 800)
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

$(document).ready(function(){
			
	$('.tab-button').click(function(){
		var show = $(this).attr('show')
		var hide = $(this).attr('hide')
		var hide1 = $(this).attr('hide1')
		$('.'+hide).hide()
		$('.'+show).show()
		$('.'+hide1).hide()
		
		$('.member-list').parent('').find("a").each(function(){
			$(this).removeClass("active-btn");	
		})
		
		$(this).addClass("active-btn");	
	});		
});







    function toggle_visibility480(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
		  e.style.position = 'relative';
    }



/*-------------------bxslider n+2 child hidden---------------------------------*/
  var $j = jQuery.noConflict();

  $j(document).ready(function(){
    var homeSlider = $j('.bxslider').bxSlider();
  });



/*$(document).ready(function(){
			
	$('.tab-button').click(function(){
		var show = $(this).attr('show')
		var hide = $(this).attr('hide')
		var hide1 = $(this).attr('hide1')
		$('#'+hide).hide()
		$('#'+show).show()
		$('#'+hide1).hide()
		
		$('.member-list').parent('').find("a").each(function(){
			$(this).removeClass("active-btn");	
		})
		
		$(this).addClass("active-btn");	
	});		
});

$(document).ready(function(){
			
	$('.tab-button').click(function(){
		var show = $(this).attr('show')
		var hide = $(this).attr('hide')
		var hide1 = $(this).attr('hide1')
		var hide2 = $(this).attr('hide2')
		$('.'+hide).hide()
		$('.'+show).show()
		$('.'+hide1).hide()
		
		$('.member-list').parent('').find("a").each(function(){
			$(this).removeClass("active-btn");	
		})
		
		$(this).addClass("active-btn");	
	});		
});
*/