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
    } else {
      $('.scrollTop').fadeOut();
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
	
	$(document).on('click', '.signUpbtn', function(){
		var parPostn=parseInt($(this).parents('.aboutSlide').css('right'));
		if(parPostn < 0)
		{
			$(this).parents('.aboutSlide').removeClass('abtMinus');
			$('.registerSlide').removeClass('openRegistr');
		}
		else
		{
			$(this).parents('.aboutSlide').addClass('abtMinus');
			$('.registerSlide').addClass('openRegistr');
		}
	});
	
	$(document).on('click', '.signInbtn', function(){
		var parPostn=parseInt($(this).parents('.aboutSlide').css('right'));
		if(parPostn < 0)
		{
			$(this).parents('.aboutSlide').removeClass('abtMinus');
			$('.loginSlide').removeClass('openRegistr');
		}
		else
		{
			$(this).parents('.aboutSlide').addClass('abtMinus');
			$('.loginSlide').addClass('openRegistr');
		}
	});
	
	var d=new Date();
	var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var monthname=new Array("Jan","Feb","Mar","Apl","May","June","July","Aug","Sep","Oct","Nov","Dec");
	//document.write(weekday[d.getDay()] + " ");
	//document.write(d.getDate() + ". ");
	//document.write(monthname[d.getMonth()] + " ");
	$('.datetxt').html(d.getDate() + " " + monthname[d.getMonth()] + " "+ d.getFullYear());
	$('.daytxt').html(weekday[d.getDay()]);
	
	var timer, counter = $("#hideMsg span").text();
    $('#hideMsg').delay(counter * 1000);
    timer = setInterval(function() {
        $("#hideMsg span").html(--counter);
        if (counter == 0) { clearInterval(timer);  $("#hideMsg").html('Time Over');};
    }, 1000);
		
		$(document).on('click', '.dropdown', function(){
			if($(window).width() < 768)
			{	var msnuStaus=$('.dropdownMenu').css('display');
				if(msnuStaus=="none")
				{
					$('.dropdownMenu').slideDown();
				}
				else
				{
					$('.dropdownMenu').slideUp();
				}
			}
		})
	
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}

function goBack(para){
	$('.aboutSlide').removeClass('abtMinus');
	$('.'+para).removeClass('openRegistr');
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
  });
}

/*Overlay function end*/