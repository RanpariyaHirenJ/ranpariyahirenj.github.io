/*Doucment resize Function*/
$(window).scroll(function() {
		if ($(this).scrollTop() > 100) 
		{
			//alert("hello")
			$(".header").addClass('fixNav');
		} 
		else 
		{
			 $(".header").removeClass('fixNav')
		}
	});
$(window).resize(function () {
  fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  setTimeout(function(){ $('.loader').fadeOut(); }, 500);
  
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
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
  
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
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

function onlyNos(e, t) {
	try {
		if (window.event) {
			var charCode = window.event.keyCode;
		}
		else if (e) {
			var charCode = e.which;
		}
		else { return true; }
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				if (charCode == 45 || charCode == 32) {
					return true;
				}
				return false;
			}
			return true;
   }
   catch (err) {
		alert(err.Description);
   }
}

function form_validate_jquery(container)
{
	var return_state = true;		
	$(container).find("input, select, textarea, file").each(function(){
		var title = $(this).attr("title");			
		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					//$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!");
					$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					return_state = false;													
				}
				else
				{
					//$(this).prev().removeClass('active');
					$(this).attr("style","background-image: linear-gradient(#b2b2b2, #b2b2b2), linear-gradient(#b2b2b2, #b2b2b2) !important;");
				}
			break;
			case "email":
				var re = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					//$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!");
					$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");						
					return_state = false;
				}
				else if(!re.test($(this).val()))
				{
					//$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" is not valid email address!");
					$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");							
					return_state = false;
				}
				else
				{
					//$(this).prev().removeClass('active');
					$(this).attr("style","background-image: linear-gradient(#b2b2b2, #b2b2b2), linear-gradient(#b2b2b2, #b2b2b2) !important;");
				}
			break;
			case "number":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					//$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!");
					$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					//$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", "Enter Valid Mobile Number!");
					$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");						
					return_state = false;
				}
				else
				{
					//$(this).prev().removeClass('active');
					$(this).css("background-image","");
					$(this).attr("style","background-image: linear-gradient(#b2b2b2, #b2b2b2), linear-gradient(#b2b2b2, #b2b2b2) !important;");
				}				
			break;
		}
	});
	return return_state;
}

$(function(){
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
	/*$('.animate-label .input-group input,.animate-label .input-group textarea').blur(function(){
		if (this.value.length > 0) {
			return false;
		}
		else
		{
			$(this).prev('label').removeClass('active');
		}
	});*/
	
	$(document).on('blur','.animate-label .input-group input, .input-group select, .animate-label .input-group textarea', function () {
		var placeholder = $(this).attr('placeholder');
        if (this.value.length > 0 || placeholder != undefined) {
            return false;
        }
        else {
            $(this).prev('label').removeClass('active');

            if ($(this).hasClass('hasDatepicker')) {
                $(this).prev('label').removeClass('active1');
            }                        

            if ($(this).parent().find('select').length) {
                if ($(this).parent().find('select').val() == "") {
                    $(this).parent().parent().find('label').removeClass('active');
                }
            }
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
	$('#hamburger').click(function(){
    if($(this).hasClass('is-inactive'))
    { 
      $(this).removeClass('is-inactive');
      $(this).addClass('is-active');
			$('.closeNavBar').addClass('openNavBar');
			$('.pageNavigation').addClass('openRound');
     	$('.closeNavBar').css('z-index','98')
    } 
    else
    { $(this).removeClass('is-active');
      $(this).addClass('is-inactive');
			$('.closeNavBar').removeClass('openNavBar');
			$('.pageNavigation').removeClass('openRound');
			setTimeout(function(){ $('.closeNavBar').css('z-index','-1') }, 1000);
      
    }
  });

})
/*jQuery tabs end */
$(window).load(function(){
	var parameter=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
	var decodedparameter=decodeURIComponent(parameter)
	var param=decodedparameter.split('=');
	if(param[0]=="enquiry"){ alert("Your enquiry has been submitted successfully. Our team will contact you shortly."); } 
	if(param[0]=="newsletter"){ alert("Your signup request has been submitted successfully."); } 
	else if(param[0]=="error"){ alert("The code is invalid."); }
});

var stickyNavTop = $('.header').offset().top;
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > (100)) { 
				$('.header').addClass('fixNav');
		} else {
			
				$('.header').removeClass('fixNav');
		}
};
stickyNav();
$(window).scroll(function() {
	stickyNav();
});

