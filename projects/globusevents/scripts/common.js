/*Doucment resize Function*/
$(window).resize(function () {
	//location.reload();
  	fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function() {
  fixedFooter()
  $('.loader').fadeOut();
})

/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-76327243-1','auto');ga('send','pageview');*/


$(document).ready(function () {
    var func = "get_capcha_images_nbfc"; $.ajax({ method: "POST", url: "../../ajax_functions.php", data: { "function": func } }).done(function (msg) { if (msg) { $(".captcha_image").empty(); $(".captcha_image").append(msg); } });


    $('.owl-wrapper').find('.owl-item').each(function () {
        $(this).addClass($(this).children().attr('class'));
    })

    $(window).scroll(function () {
            if ($('.div-visible').isOnScreen()) {
                $('.navigation-links').find('li a').removeClass('active')
                $('.navigation-links').find('li:eq(3) a').addClass('active')
            }
            else {
                $('.navigation-links').find('li a').removeClass('active')
                $('.navigation-links').find('li:eq(0) a').addClass('active')
            }
    });

});


$.fn.isOnScreen = function () {
    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(window).scroll(function(){
	if($(this).scrollTop()>100)
		{
			//alert("hello")
			$('.send-enquiery-btn').fadeIn();
			$('.header').addClass('fixed');
		}
	else
		{
			$('.send-enquiery-btn').fadeOut();
			$('.header').removeClass('fixed');
		}
});

$(window).load(function(){
	var parameter=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
	var decodedparameter=decodeURIComponent(parameter)
	var param=decodedparameter.split('=');
	if(param[0]=="enquiry"){ sessionStorage.removeItem('leadpage'); alert("Your enquiry has been submitted successfully. Our team will contact you shortly."); } 
	else if(param[0]=="error"){ alert("The code is invalid."); }
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
			case"email":
				var re = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
				if($(this).val()==$(this).attr("placeholder")||$(this).val()=="")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder",""+title+" cannot be blank!");
					return_state=false;
				}
				else if(!re.test($(this).val()))
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder",""+title+" is not valid email address!");
					return_state=false;
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
		/*(v1) Jquery validation for Captcha*/
		if(return_state==true){
			if(grecaptcha.getResponse() == "") {
				if($(container).find(".g-recaptcha").html() != "" && $(container).find(".g-recaptcha").html() != undefined){
					$(container).find(".g-recaptcha").css("border","1px solid #ff0000");
					return_state = false;
				}
			}
			else
			{
				$(container).find(".g-recaptcha").css("border","1px solid green");
			}
	    }
	});
	return return_state;
}

/*Ready Funtion*/
$(function () {
  fixedFooter()
  
  var liMaxHeight = -1;
    var node;
    $(".gallaryimage-big").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.gallaryimage-small .dis-table').css('min-height', liMaxHeight + 1);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
		
	
	$('#menu').click(function(){
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
	$('.navigation-links ul li a').click(function(){
		$('#menu').removeClass('is-active');
		$('#menu').addClass('is-inactive');
		$('.closeNavBar').removeClass('openNavBar');
		$('.pageNavigation').removeClass('openRound');
		setTimeout(function(){ $('.closeNavBar').css('z-index','-1') }, 1000);
  	});

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
		$(this).remove();
  });
  
   // $(document).on('click', '.overlay-box', function () {return false;});
  /*$(document).on('click', '.overlay', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
		$('.overlay-box').find('.overlay-content').hide();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });*/
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


$(document).ready(function(){
	var wind_height = $(window).height();
	if($(window).width() < 1024){
		$(".nav-menu").css("height", wind_height);
	}
});

$('.mobil-icon-toggle').click(function(){
	if($(this).hasClass('active'))
	{
		$('.nav-menu').addClass('open-navigation');
		$("html").css("overflow", "hidden");
		$('body').append('<div class="overlay-bg"></div>')
	}
	else
	{
		$('.nav-menu').removeClass('open-navigation');
		$("html").css("overflow", "visible");
		$('body .overlay-bg').fadeOut(500, function () {
			$(this).remove();
		  
		});
	}
});
	
	
	$('.closebtncom').click(function(){
		$(this).parents('.community-updates').addClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:0})
	})
	$('.communityblockbx dl dt').click(function(){
		$(this).parents('.community-updates').removeClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:1})
	});
	$('.updateslider').bxSlider({
		auto:true,
		pager:false,
		controls:false,
		mode:'fade'
		})
})();

/*Docuemnt load function*/
$(window).load(function() {
    //fixedFooter()
   // $('.loader').fadeOut();
    /*Maximum height li*/
    var liMaxHeight = -1;
    var node;
    $(".servicelistbox ul li").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });
    //alert("li with index "+node+" has height "+liMaxHeight);
    $('.servicelistbox ul li').css('min-height', liMaxHeight + 1);
    /*Maximum height li*/
})


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-76327243-1','auto');ga('send','pageview');