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
        $('.send-enquiery-btn').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
        $('.send-enquiery-btn').fadeOut();
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

	if ($(window).width() > 1024) {
		$(window).scroll(function () {
		    if ($(this).scrollTop() > $(".header").outerHeight() - 20 ) {

		        $(".clients-common-menu").addClass('active');
		        $(".clients-common-menu").css("position", "fixed")
		        $(".clients-common-menu").css("top", "0px")
		        $(".clients-common-menu").css("background", "#29236d")
		        $(".clients-common-menu").css("padding", "20px 0")
		        $(".clients-common-menu").css("z-index", "1")
		        $(".clients-common-menu").css("width", "100%")
		        $(".clients-details-cntr").css("margin-top", "293px")
		    }
		    else {
		        $(".clients-common-menu").removeClass('active');
		        $(".clients-common-menu").css("position", "static")
		        $(".clients-common-menu").css("background", "none")
		        $(".clients-common-menu").css("padding", "40px 0 60px")
		        $(".clients-details-cntr").css("margin-top", "0px")
		    }

		})

		
	}

	

	$(".clients-common-menu").find(".container").click(function ()
	{        
	    if ($(window).width() < 1024)
	    {
	        if ($(this).find("ul").css("display") == "none")
	        {
	            $(this).find("ul").css("display", "inline-block")
	        }
	        else
	        {
	            $(this).find("ul").css("display", "none")
	        }      
	    }
	})

	$(".clients-common-menu").find(".container").clickOff(function ()
	{
	    if ($(window).width() < 1024 && $(".clients-common-menu").find(".container").find("ul").css("display") == "inline-block")
	    {	       
	        $(".clients-common-menu").find(".container").trigger("click")
	    }
	});
});

$(window).load(function(){
	var parameter=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
	var decodedparameter=decodeURIComponent(parameter)
	var param=decodedparameter.split('=');
	if(param[0]=="enquiry"){
		alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
	}
	else if(param[0]=="error"){
		alert("The code is invalid.");
	}
});

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
	$(container).find("input, select, textarea").each(function(){
		var title = $(this).attr("title");			
		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "email":
				var re = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if(!re.test($(this).val()))
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" is not valid email address!")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "number":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", "Enter Valid Mobile Number!")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}				
			break;
		}
	});
	return return_state;
}

$.fn.clickOff = function (callback, selfDestroy) {
    var clicked = false;
    var parent = this;
    var destroy = selfDestroy || true;

    parent.click(function () {
        clicked = true;
    });

    $(document).click(function (event) {
        if (!clicked) {
            callback(parent, event);
        }
        if (destroy) {
            //parent.clickOff = function() {};
            //parent.off("click");
            //$(document).off("click");
            //parent.off("clickOff");
        };
        clicked = false;
    });
};


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
		$(this).remove();
  });
  
    $(document).on('click', '.overlay-box', function () { return false; });
    //$(document).on('click', '.overlay-box', function () { return out; });
    //$(document).on('click', '.overlay-box', function () {  e.preventDefault(); });
    //$(document).on('click', '.overlay-box', function () { e.stopPropagation(); });
  $(document).on('click', '.overlay', function () {
      $(".closeBtn").trigger("click")
  });
}
/*Overlay function end*/

$(function(){
	/*jQuery tabs */
/*script for append usefull element*/
$('.tabNav li').each(function(){
  var tabContent = $(this).html();
  var relation = $(this).find('a').attr('rel')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
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
})

function tabnextclick(relation) {
	var resultCnt = $('.tabResult');

	tab = $('.tabResult').prev('.tabNav').find('a');

	for (var i = 0; i < tab.length; i++) {
		var target = tab.eq(i);
		
		var tab_relation = target.attr('rel');
		if (tab_relation === relation) {
			tab.eq(i).parents('li').removeClass('disabled');
		}
	}
	if (resultCnt.children('div#' + relation).css('display') === 'none') {
		resultCnt.children('div').slideUp();
		$('.tabNav li a').removeClass('active');
		$('.tabNav ').find('a[rel='+relation+']').parents('li').children('a').addClass('active');
		resultCnt.children('div#' + relation).slideDown();
	}
	var ofsetd=$('.tabNav').offset().top;
	$('body,html').animate({scrollTop: ofsetd}, 800);
}
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
 
 if($(window).width() < 767){
	
  var wind_height = $(window).height();
	$(".nav-menu").css("height", wind_height);
	
}


	$('.mobil-icon-toggle').click(function(){
		if($(this).hasClass('active'))
		{
			$('.nav-menu').addClass('open-navigation');
			$("html").css("overflow", "hidden");
		}
		else
		{
			$('.nav-menu').removeClass('open-navigation');
			$("html").css("overflow", "visible");
			$("html").css("overflow-x", "hidden");
		}
	});
	
	if ($(window).width() < 1024) {
		$(document).on('click','.hasDropDown',function(){
			$('.hasDropDown').removeClass('openHas');
			var _child=$(this).find('.submenu').css('display');
			if(_child=='none')
				{
					$('.submenu').slideUp();
					$(this).find('.submenu').slideDown();
					$(this).addClass('openHas');
				}
				else
				{
					$(this).find('.submenu').slideUp();
					$(this).removeClass('openHas');
				}
		});
	}
	$('.closebtncom').click(function(){
		$(this).parents('.community-updates').addClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:0})
	})
	$('.communityblockbx dl dt').click(function(){
		$(this).parents('.community-updates').removeClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:1})
	});
})();
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-121967911-1','auto');ga('send','pageview');
