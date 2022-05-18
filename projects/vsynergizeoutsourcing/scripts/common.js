function vqTrackId(){return 'cc8a444f-420c-4124-b32c-424266a4111c';} (function(d, e) { var el = d.createElement(e); el.sa = function(an, av){this.setAttribute(an, av); return this;}; el.sa('id', 'vq_tracking').sa('src', '//t.visitorqueue.com/p/tracking.min.js?id='+vqTrackId()).sa('async', 1).sa('data-id', vqTrackId()); d.getElementsByTagName(e)[0].parentNode.appendChild(el); })(document, 'script');
<!-- Global site tag (gtag.js) - Google Analytics -->
var imported = document.createElement('script');
imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-120527915-1';
document.head.appendChild(imported);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-120527915-1');


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
$('.file-upload input[type=file]').change(function(){
	//alert("hello")
	var fval=$(this).val();
	var filterValue = fval.replace("C:\\fakepath\\", "");
	$(this).parents('.file-upload').find('span').html(filterValue);
});

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
	$('.tabResult h2').click(function(){
		//alert("hello")
		var relation = $(this).attr('rel')
		var tabNavigation = $(this).parents('.tabResult')
		var resultCnt =  $(this).parents('.tabBx').find('.listPointer');
		
		tabNavigation.children().find('h2').removeClass('active');
		$(this).addClass('active');
		
		if(resultCnt('div#'+relation).css('display') == 'none')
		{
			resultCnt('div').slideUp();
			resultCnt('div#'+relation).slideDown();
		}
		else
		{
			resultCnt('div#'+relation).slideUp();
		}
	})
	/*Tabination end*/
 
  });



$(document).ready(function() {
    var width = $(window).width();
    if (width < 1024) {
        $("div, span, p, a, li, h1, h2, h3").removeClass("wow").removeClass("fadeInLeft").removeClass("fadeInUp").removeClass("fadeInRight").removeClass("fadeInDown").removeAttr("data-wow-delay").removeAttr("data-wow-offset").removeAttr("visibility");
    }
    if (sessionStorage.getItem('leadpage') != null) {
        var pagenamee = sessionStorage.getItem('leadpage');
        $('#leadpage').val(pagenamee);
    } else {
        var pagenamee = "Contact Page";
        $('#leadpage').val(pagenamee);
    }
});
$(document).on('click', ".get-started a", function() {
    var url = window.location.pathname;
    var urlname = window.location.href;
    if (urlname == "https://www.vsynergizeoutsourcing.com/") {
        sessionStorage.setItem('leadpage', 'index');
    } else {
        var filename = url.substring(url.lastIndexOf('/') + 1);
        filename = filename.substr(0, filename.lastIndexOf('.'));
        var page_name = filename.replace(/\-/g, " ");
        sessionStorage.setItem('leadpage', page_name);
    }
});
$(document).on('click', "#get_started", function() {
    var url = window.location.pathname;
    var urlname = window.location.href;
    if (urlname == "https://www.vsynergizeoutsourcing.com/") {
        sessionStorage.setItem('leadpage', 'index');
    } else {
        var filename = url.substring(url.lastIndexOf('/') + 1);
        filename = filename.substr(0, filename.lastIndexOf('.'));
        var page_name = filename.replace(/\-/g, " ");
        sessionStorage.setItem('leadpage', page_name);
    }
});
$(function() {
    fixedFooter()
    $('.input-type-select span').click(function() {
        $(this).parents('.input-type-select').find('select').trigger('click');
    })
    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });
    $(document).on('click', '.scrollTop a', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    $('.accordion dl dt').click(function() {
        var trigger = $(this);
        var target = trigger.next('dd');
        if (target.css('display') == 'none') {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
            target.slideDown();
            trigger.parents('dl').addClass('active');
        } else {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
        }
    });
    $('.animate-label .input-group').click(function() {
        if ($(this).find('select').size() > 0) {} else {
            $(this).find('input').focus();
            $(this).find('label').addClass('active');
        }
        if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
            $(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
        }
    });
    $('.animate-label .input-group input,.animate-label .input-group textarea').blur(function() {
        if (this.value.length > 0) {
            return false;
        } else {
            //console.log("test");
            var attr = $(this).attr('style');
            if (typeof attr !== typeof undefined && attr !== false) {
                //console.log("exist");
                $(this).prev('label').addClass('active');
            }else{
                $(this).prev('label').removeClass('active');
            }
        }
    });
    $('.input-group').on('focus', 'input, select, textarea', function() {
        $(this).prev('label').addClass('active');
    });
    $('.input-group textarea, .input-group input,.input-group select').each(function() {
        if (this.value.length > 0) {
            var div = $(this).prev('label').addClass('active');
        }
    });
    $('.input-group').click(function() {
        $(this).find('input').focus();
        $(this).find('label').addClass('active');
    });
});
$(document).on('click', ".apply_now", function() {
    var job_desc = $.trim($(this).parent().parent().find('.grid-3').clone().children().remove().end().text());
    $("select[name='interested_in']").val(job_desc);
});

function onlyNos(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            if (charCode == 45 || charCode == 32) {
                return true;
            }
            return false;
        }
        return true;
    } catch (err) {
        alert(err.Description);
    }
}


function form_validate_jquery(container) {
    var return_state = true;
    $(container).find("input, select, textarea, file").each(function() {
        var title = $(this).attr("title");
        $(this).prev('label').removeAttr('class');
        switch ($(this).attr("validation")) {
            case "text":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {

                    $(this).val('');

                    if(container != "#header_contact_form"){
                        $(this).css("border", "1px solid red");
                    }

                    $(this).prev().addClass('error');

                    
                    $(this).attr("placeholder", "" + title + " cannot be blank!")
                    return_state = false;
                } else {

                    if(container != "#header_contact_form"){
                        $(this).css("border", "1px solid green");
                    }

                    $(this).prev().addClass('active');
                   
                }
            break;
            case "select":
              if($(this).val() == "")
              {
                $(this).css("border","1px solid red");
   
                $(this).val('');
                $(this).prev().addClass('active');
                $(this).find('option:first').text(""+title+" cannot be blank!")
                
                return_state = false;                         
              }
              else
              {
                $(this).find('option:first').text("");
                $(this).css("border","1px solid green");
              }
            break;
            case "password":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank!")
                    return_state = false;
                } else if ($(this).val().length < 6) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", "" + title + " should be min 6 char!")
                    $(this).prev().addClass('active');
                    return_state = false;
                } else {
                    $(this).css("border", "1px solid green");
                }
                break;
            case "email":

                var ext_arr = ['gmail','yahoo','hotmail']; 

                var ext = $(this).val().split('@').pop().toLowerCase();
                ext = ext.split('.');
                ext = ext[0].toLowerCase();


                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {

                    $(this).val('');

                    if(container != "#header_contact_form"){
                        $(this).css("border", "1px solid red");
                    }

                    $(this).prev().addClass('error');
                  
                    $(this).attr("placeholder", "" + title + " cannot be blank!")
                    return_state = false;
                } else if ($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1) {
                    
                    if(container != "#header_contact_form"){
                        $(this).css("border", "1px solid red");
                    }
                    $(this).val('');
                    $(this).prev().addClass('error');
                    $(this).attr("placeholder", "" + title + " is not valid email address!")
                    return_state = false;
                } else if($.inArray(ext, ext_arr) >= 0) {
                    if(container != "#header_contact_form"){
                        $(this).css("border", "1px solid red");
                    }
                    $(this).val('');
                    $(this).prev().addClass('error');
                    $(this).attr("placeholder", "Please enter your company email")
                    return_state = false;
                }else {
                    if(container != "#header_contact_form"){
                        $(this).css("border", "1px solid green");
                    }

                    $(this).prev().addClass('active');
                }
                break;
            case "number":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank!")
                    return_state = false;
                } else if ($(this).val().length < 10) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "Enter Valid Mobile Number!")
                    return_state = false;
                } else {
                    $(this).css("border", "1px solid green");
                }
                break;
            case "mobile":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank !")
                    return_state = false;
                } else if ($(this).val().length < 10) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " must be 10 digits !")
                    return_state = false;
                } else {
                    $(this).css("border", "1px solid green");
                }
                break;
            case "file":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).prev().css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    return_state = false;
                } else {
                    var extension = $(this).val().split('.').pop().toLowerCase();
                    if ($.inArray(extension, ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'jpg', 'jpeg']) == -1) {
                        $(this).prev().css("border", "1px solid red");
                        $(this).val('');
                        $(this).prev().addClass('active');
                        $(this).parents('.file-upload').find('span').html('Please upload valid file format');
                        return_state = false;
                    } else {
                        $(this).prev().css("border", "1px solid green");
                    }
                }
                break;
        }
    });

    var grecaptcha = false;

    var formData = $(container).serializeArray();
    for (var i = 0; i < formData.length; i++) {
        if(formData[i]['name'] =="g-recaptcha-response" && formData[i]['value']!=""){
            grecaptcha = true;
        }
    }
        
    if(grecaptcha == false) {
        
        // $('.g-recaptcha').children().css('border','1px solid red;');
        $(container+" .g-recaptcha").next('span').remove();    
        $(container+" .g-recaptcha").after('<span style="color: red;font-size:12px">Google captcha is not selected.</span>');
        return_state = false;
    }else{
        $(container+" .g-recaptcha").next('span').remove(); 
    }

   

    return return_state;
}

/*$(this).focusout(function() {
	//alert("hello")
	if($(this).val() == ''){
      //alert('Input can not be left blank');
	  $(this).prev().addClass('active');
   }
});*/


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
      $('.mobileNav').addClass('menubaropen');
    }
    else
    {
      $('.mobileNav').removeClass('menubaropen');
    }
  });
	$(document).on('click', '.hasSubmenu .sub-mobileClick', function () {
		var SubStatus=$(this).next('.submenu').css('display');
		if(SubStatus=='none')
		{
			$(this).next('.submenu').slideDown();
			$(this).parent('.hasSubmenu').addClass('openSubMob');
		}
		else
		{
			$(this).next('.submenu').slideUp();
			$(this).parent('.hasSubmenu').removeClass('openSubMob');
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

var stickyNavTop = $('.header').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > (0)) { 
        $('.header').addClass('fixNav');
        $('.commonSpace').addClass('addSpacing');
    } else {
      
        $('.header').removeClass('fixNav');
        $('.commonSpace').removeClass('addSpacing');
    }
};
stickyNav();
$(window).scroll(function() {
  stickyNav();
});

 $.ajax({
        url: 'https://www.vsynergizeoutsourcing.com/comman/success-popup.html',
        type : 'POST',
        success: function(data) {

          $("#overlayQuote").after(data);
        }
    });


$(window).load(function() {

   

    var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var decodedparameter = decodeURIComponent(parameter)
    var param = decodedparameter.split('=');
    if (param[0] == "enquiry") {
        sessionStorage.removeItem('leadpage');
        // alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
       setTimeout(function () {
        window.location.href = "https://www.vsynergizeoutsourcing.com/thankyou.html";
        // overlayBox('overlayQuotes');
    }, 500);
    } else if (param[0] == "career") {
        // alert("Your application has been Submitted Successfully.");
        setTimeout(function () {
            window.location.href = "https://www.vsynergizeoutsourcing.com/thankyou.html";
        // overlayBox('overlayQuotes');
    }, 500);
    } else if (param[0] == "error") {
        alert("The code is invalid.");
    }
});