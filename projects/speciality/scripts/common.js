$(window).load(function () {  
	setTimeout(function() {
		//alert("hello")
		$("header.header + .top-circle-slider").css("display", "block");
	}, 300);
});



/*Doucment resize Function*/
$(window).resize(function () {
	//location.reload();
  	fixedFooter();
})

/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
  $(".slider.single-item").css("display","block");
  $(".search-btn").on('click', function(event) {
	  if($(this).hasClass('active'))
		{
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
		}
});
  
  
  
  
  $(document).on("click",".restaurants-menu ul li a", function() {
	  $(".restaurants-menu ul li").removeClass('active')
	  $(this).parent().addClass('active')
  });
  
  
  
  $(document).on("click","#b_agree_checkbox", function() {
	  if(this.checked){
		  $('#s_agree_checkbox').prop('checked', true);
	  }
	  else {
		  $('#s_agree_checkbox').prop('checked', false);
	  }
  });
 

  $(document).on("click","#s_agree_checkbox", function() {
	  if(this.checked){
		  $('#b_agree_checkbox').prop('checked', true);
	  }
	  else {
		  $('#b_agree_checkbox').prop('checked', false);
	  }
  });

  

  $(".Shift-address input").on('click', function(event) {
	  if(this.checked){
		  //$('.b_google_recaptcha').css("display", "block");
		  $('.s_google_recaptcha').empty();
		  $('.b_google_recaptcha').html("<div class='form-field' style='padding-bottom: 20px;'><div class='grid-4'><div class='g-recaptcha' id='b_captcha_div' data-sitekey='6Lctz5IUAAAAAFh8hosPzif2G9nuGizFmKfUfr7i'></div></div><div class='clear'></div></div>");
		  setTimeout(function() {
			grecaptcha.render('b_captcha_div', {
			  'sitekey': '6Lctz5IUAAAAAFh8hosPzif2G9nuGizFmKfUfr7i'
			});
		  }, 100);
		  //$('.s_google_recaptcha').css("display", "none");
		  $(".gift-vouchers-shipping-address").css("display", "none");
	  	  $(".submitbtn").css("display", "block");
	  	  $(".terms-conditions").css("display", "block");
	  	  $(".billing-details-form.grid-layout.gift-vouchers-shipping-address .terms-conditions").css("display", "none");
		  remove_shipping_validation();
	  }
	  else {
		//$('.b_google_recaptcha').css("display", "none"); 
		$('.b_google_recaptcha').empty(); 
		$('.s_google_recaptcha').html("<div class='form-field' style='padding-bottom: 20px;'><div class='grid-4'><div class='g-recaptcha' id='s_captcha_div' data-sitekey='6Lctz5IUAAAAAFh8hosPzif2G9nuGizFmKfUfr7i'></div></div><div class='clear'></div></div>");
		setTimeout(function() {
			grecaptcha.render('s_captcha_div', {
			  'sitekey': '6Lctz5IUAAAAAFh8hosPzif2G9nuGizFmKfUfr7i'
			});
		}, 100);
   	  	$(".gift-vouchers-shipping-address").css("display", "block");
	  	$(".submitbtn").css("display", "none");
	  	$(".terms-conditions").css("display", "none");
	  	$(".billing-details-form.grid-layout.gift-vouchers-shipping-address .terms-conditions").css("display", "block");
		add_shipping_validation();
	  }
  });
});



function add_shipping_validation(){
	$(".textformat").attr("validation","text");
	$(".selectformat").attr("validation","select");
	$(".numberformat").attr("validation","number");
	$(".emailformat").attr("validation","email");
}


function remove_shipping_validation(){
	$(".textformat").next().html("");
	$(".selectformat").parent().next().html("");
	$(".numberformat").next().html("");
	$(".emailformat").next().html("");
	$(".textformat").removeAttr("validation");
	$(".selectformat").removeAttr("validation");
	$(".numberformat").removeAttr("validation");
	$(".emailformat").removeAttr("validation");
}


$(document).ready(function(){
	var width = $(window).width();
	if (width < 1024) {
		$("div, span, p, a, li, h1, h2, h3").removeClass("wow").removeClass("fadeInLeft").removeClass("fadeInUp").removeClass("fadeInRight").removeClass("fadeInDown").removeAttr("data-wow-delay").removeAttr("data-wow-offset")
		.removeAttr("visibility");
	}
	if (sessionStorage.getItem('leadpage') != null) { var pagenamee = sessionStorage.getItem('leadpage'); $('#leadpage').val(pagenamee); } 
	else { var pagenamee = "Contact Page"; $('#leadpage').val(pagenamee); }
});


/*Ready Funtion*/
$(function () {
  fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
  

  $(document).on("change",".file-upload input[type=file]", function() {
		var fval=$(this).val();
		$(this).next().html("");
		if(fval != ""){
			var filterValue = fval.replace("C:\\fakepath\\", "");
			$(this).parents('.file-upload').find('span').html(filterValue);
		}
		else
		{
			var filterValue = $(this).attr("title");
			$(this).parents('.file-upload').find('span').html(filterValue);
		}
  })

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

  

 $(document).on('click', '.overlay-box', function () { return false; });
  $(document).on('click', '.overlay', function () {
      $(".colse-btn").trigger("click")
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

$('.mobil-icon-toggle').click(function(){
		if($(this).hasClass('active'))
		{
			$('.menubar').addClass('open-navigation');
			$(".menubar ul li.hasDropDown.active .submenu").css("display", "block");
		}
		else
		{
			$('.menubar').removeClass('open-navigation');
		}
	});

	
	$('.mobil-icon-toggle1').click(function(){
		if($(this).hasClass('active'))
		{
			$('.restaurants-menu').addClass('open-navigation');
			$(".restaurants-menu ul li.active .submenu").css("display", "block");
		}
		else
		{
			$('.restaurants-menu').removeClass('open-navigation');
		}
	});

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