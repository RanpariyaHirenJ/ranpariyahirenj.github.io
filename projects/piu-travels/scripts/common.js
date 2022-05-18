/*Doucment resize Function*/
$(window).resize(function () {
  //fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  //fixedFooter()
  $('.loader').fadeOut();
})
/*Ready Funtion*/
$(function () {
 //fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
  
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      		$('.scrollTop').fadeIn();
			$('.header').addClass('fixed-nav');
    } else {
      		$('.scrollTop').fadeOut();
			$('.header').removeClass('fixed-nav');
    }
  });
  
$(window).scroll(function () {
    if ($(this).scrollTop() > 350 && $(this).scrollTop() < 4900) {
      		$('.fl-join-us').fadeIn();
			$('.fl-join-us .join-us-btn').css("visibility", "visible");
    } else {
      		$('.fl-join-us').fadeOut();
			$('.fl-join-us .join-us-btn').css("visibility", "hidden");
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
  $(document).on('click', '.close-error', function () {
    $(this).parents('.seisson-message').slideUp();
  })
  /*Header footer loading*/
	
	/*Slider bg*/
	$( ".bxslider li" ).each(function() {
		var attr = $(this).attr('data-image-src');
	
		if (typeof attr !== typeof undefined && attr !== false) {
				$(this).css('background-image', 'url('+attr+')');
		}
	});
	/*Slider bg end*/
	$(document).on('click', '.mobile-only ul li a', function(){
    
    $('#hamburger').removeClass('is-active');
    $('#hamburger').addClass('is-inactive');
    $('.navigation-overlay').fadeOut();
    $('.main-nav-container').removeClass('open-nav-cntr bounceInRight')
  });
	$('#hamburger').click(function(){
    if($(this).hasClass('is-inactive'))
    { 
      $(this).removeClass('is-inactive');
      $(this).addClass('is-active');
      $('.navigation-overlay').fadeIn();
      $('.main-nav-container').addClass('open-nav-cntr bounceInRight')
    } 
    else
    { $(this).removeClass('is-active');
      $(this).addClass('is-inactive');
      $('.navigation-overlay').fadeOut();
      $('.main-nav-container').removeClass('open-nav-cntr bounceInRight')
    }
  });
  
	/*jQuery tabs */
	/*script for append usefull element*/
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
		{ $('.mobile-menu a').removeClass('active');
			$(this).find('a').addClass('active');
			$('.tabResult .tabBx .content').slideUp();
			$(this).next('.content').slideDown();
		}
		else
		{ $('.mobile-menu a').removeClass('active');
			$('.tabResult .tabBx .content').slideUp();
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
			resultCnt.children('div').slideUp();
			resultCnt.children('div#'+relation).slideDown();
		}
		else
		{
			resultCnt.children('div#'+relation).slideUp();
		}
	})
/*jQuery tabs end */
	
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}
