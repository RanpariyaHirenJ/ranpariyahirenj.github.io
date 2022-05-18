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
  $
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"><i class="fal fa-angle-double-up"></i></a></div>');
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
	
	/*Tabination*/
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
		{
			$(this).closest('.tabResult').find('.content').slideUp();
			$(this).next('.content').slideDown();
		}
		else
		{
			$('.tabResult .tabBx .content').slideUp();
		}
	})
	/*script for desktop navigation */
	$('.tabNav li a').click(function(){
		var relation = $(this).attr('rel')
		var tabNavigation = $(this).parents('.tabNav')
		var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
		
		tabNavigation.children().find('a').removeClass('active');
		tabNavigation.children().find('li').removeClass('activeli')
		$(this).addClass('active');
		$(this).parents('li').addClass('activeli');
		
		if(resultCnt.children('div#'+relation).css('display') == 'none')
		{
			resultCnt.children('div').slideUp();
			resultCnt.children('div#'+relation).slideDown();
		}
		else
		{
			//resultCnt.children('div#'+relation).slideUp();
		}
	})
	/*Tabination end*/
 
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

(function() {
  "use strict";

  var toggles = document.querySelectorAll(".menu-icon");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      
    });
  }
  
$('.mobil-icon-toggle').click(function(){
    if($(this).hasClass('active'))
    {
        $('.header-lower-right').addClass('menubaropen');
		$('.header-lower-right').addClass('fadeInRight');
		$('.header-lower-right').removeClass('fadeOutRight');
    }
    else
    {
		setTimeout(function(){ 
		$('.header-lower-right').removeClass('menubaropen');
		}, 1000);
  
		$('.header-lower-right').removeClass('fadeInRight');
		$('.header-lower-right').addClass('fadeOutRight');
    }
});
$(document).on('click', '.mobileDropDown', function () {			
		$('.rightMenu').removeClass('openSubMob');
		$('.mobileDropDown').children('i').addClass('fa-plus-square');
		$('.mobileDropDown').children('i').removeClass('fa-minus-square');
		if($(this).next('.rightMenu').hasClass('openSubMob')){
		$(this).next('.rightMenu').removeClass('openSubMob');		
	}
	else
	{
		$(this).next('.rightMenu').addClass('openSubMob');
		$(this).children('i').removeClass('fa-plus-square');
		$(this).children('i').addClass('fa-minus-square');
	}
});
	
	$(document).on('click', '.likebutton span', function () {
   if($(this).hasClass('active'))
	 {
		$(this).removeClass('active');
		}
		else
		{
		$(this).addClass('active');
		}
  }) 
	
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
	
})();

var stickyNavTop = $('.header-area').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > (100)) { 
        $('.header-area').addClass('fixed-header');
        $('.commonSpace').addClass('addSpacing');
    } else {
      
        $('.header-area').removeClass('fixed-header');
        $('.commonSpace').removeClass('addSpacing');
    }
};
stickyNav();
$(window).scroll(function() {
  stickyNav();
});

var cart = {
    'add': function(product_id,cart_type,quantity) {
       
        $.ajax({
            url: '/woodsmiths/php/Cart/addToCart',
            type: 'post',
            data: 'product_id=' + product_id + '&cart_type='+ cart_type +'&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
            success: function(json) {
              if(json){
                return true;
              }
            }
        });
    },
    'update': function(key, quantity) {

        $.ajax({
            url: '/woodsmiths/php/Cart/updateCart',
            type: 'post',
            data: 'key=' + key + '&quantity=' + quantity,
            success: function(json) {

                if(json==true){
                  console.log('update');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    },
    'remove': function(key) {
        $.ajax({
            url: '/woodsmiths/php/Cart/removeCart',
            type: 'post',
            data: 'key=' + key,
            success: function(json) {
               
            }
           
        });
    },

    'wishlist': function(key) {
        $.ajax({
            url: '/woodsmiths/php/Cart/wishlist',
            type: 'post',
            data: 'key=' + key,
            success: function(json) {
               
               if(json!="true"){
                window.location.href = json;
               }
            }
           
        });
    }
}

function contact_form_validate_jquery(container) {
    var return_state = true;
    var validation = ['']
    $(container).find("input, select, textarea, checkbox, table , ul").each(function () {
        var title = $(this).attr("title");
        $(this).val($(this).val().trim());
        switch ($(this).attr("validation")) {

            case "text":

                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank.")

                    return_state = false;
                }
                else {
                    $(this).css("border", "1px solid green");
                    $(this).attr("placeholder", title);
                }
                break;
           
            case "email":
                var re = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank.")
                    return_state = false;
                }
                else if (!re.test($(this).val())) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " is not valid email address!")
                    return_state = false;
                }
                else {
                    $(this).css("border", "1px solid green");
                     $(this).attr("placeholder", title);
                }
                break;
         
            case "number":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank.")
                    return_state = false;
                }
                else if (isNaN($(this).val())) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " is not valid number!")
                    return_state = false;
                }
                else {
                    $(this).css("border", "1px solid green");
                     $(this).attr("placeholder", title);
                }
                break;
            case "mobile":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank !")
                    return_state = false;
                }
                else if (isNaN($(this).val())) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " should be numeric !")
                    return_state = false;
                }
                else if ($(this).val().length < 10) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " must be 10 digits !")
                    return_state = false;
                }
                else {
                    $(this).css("border", "1px solid green");
                     $(this).attr("placeholder", title);
                }
            break;

   
        }
    });
    
      if(return_state){

          // $(container).find('label').addClass('active');
          // if(grecaptcha.getResponse() == "") {
          // $(".g-recaptcha").next('span').remove();  
          //    $(".g-recaptcha").after('<span style="color: red;font-size:12px">Google captcha is not selected.</span>');
          // } else {
          //     $(container).find("input[placeholder], textarea[placeholder]").focus().blur();
              overlayBox('loader');
              var formData = $('form').serializeArray();
              $.ajax({
                    url: 'information/sendEnquiry',
                    type : 'POST',
                    data : formData,
                    success: function(data) {
                      console.log(data);
                       if(data=="200"){
                         $('form')[0].reset();
                         $(container).find("input, textarea").removeAttr('style');
                         //  grecaptcha.reset();
                         //  $(container).find('label').removeClass('active');
                         //  $(container).find('.g-recaptcha').next('span').remove();  
                          $("#loader,.overlay-bg").hide(); 
                          swal("Success", "Your Enquiry has been Submitted Successfully. We will contact you shortly.", "success");
                          // $("#overlayQuote").fadeOut();
                          // overlayBox('successfully');
                       }
                    }
                });

          // }
    }

  

  


   console.log(formData);

  return false;
}