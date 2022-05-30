/*$(window).resize(function() {
    fixedFooter();
})*/
/*$(window).load(function() {
    //fixedFooter();
    $('.loader').fadeOut();
    if ($(window).width() < 1024) {
        var wind_height = $(window).height() - 120;
        $(".nav .container .menu-wraper").css("max-height", wind_height);
    }
})*/
/*$(document).ready(function() {
    var func = "get_capcha_images";
    $.ajax({
        method: "POST",
        url: "../ajax_functions.php",
        data: {
            "function": func
        }
    }).done(function(msg) {
        if (msg) {
            $(".captcha_image").empty();
            $(".captcha_image").append(msg);
        }
    });
});*/

$(window).load(function(){
	$('.loader').fadeOut();$(".slider.single-item").css("display","block");
	$(".inner-bannertxt").addClass('fadeInLeft').addClass('animated').addClass('wow');
})

$(document).ready(function(){
	var width = $(window).width();
	if (width < 1024) {
		$("div, span, p, a, li, h1, h2, h3").removeClass("wow").removeClass("fadeInLeft").removeClass("fadeInUp").removeClass("fadeInRight").removeClass("fadeInDown").removeAttr("data-wow-delay").removeAttr("data-wow-offset"					)
		.removeAttr("visibility");
	}

});
var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
var decodedparameter = decodeURIComponent(parameter)
var param = decodedparameter.split('=');
if (param[0] == "enquiry") {
    alert('Your Enquiry has been submitted successfully.\r\nOur Customer Executive will contact you shortly.');
}
$(function() {
    $(document).on('click', '.closeBtn', function() {
        $("html").css("overflow", "visible");
    })
    $('.tab-link li a').click(function() {
        var tab_name = $(this).attr('for');
        $(this).parents('.grid-6').find('.tab-content').removeClass('active');
        $(this).parents('.grid-6').find("#" + tab_name).addClass('active');
        console.log(tab_name);
        if (tab_name == 'mobile-banking') {
            $(this).parents('.grid-6').find('.tab-content-wrapper').removeClass('second');
        } else {
            $(this).parents('.grid-6').find('.tab-content-wrapper').addClass('second');
        }
    });
	if ($(window).width() >= 1024) {
             $(".news-section").stick_in_parent()
        }
	
    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
           // $('.nav').addClass('fixed');
        } else {
            $('.scrollTop').fadeOut();
            //$('.nav').removeClass('fixed');
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
	
    $('.toggle-btn').click(function() {
        if ($('.wrapper').hasClass('opened')) {
            $('.wrapper').removeClass('opened');
        } else {
            $('.wrapper').addClass('opened');
        }
    });
    $('.toggle-search').click(function() {
        if ($('.search-container').hasClass('opened')) {
            $('.search-container').removeClass('opened');
        } else {
            $('.search-container').addClass('opened');
        }
    });
    $('.has-sub-menu').click(function() {
        var target = $(this).find('.sub-menu');
        var trigger = $(this);
        if (trigger.hasClass('opened')) {
            $('.has-sub-menu').removeClass('opened');
            trigger.removeClass('opened');
        } else {
            $('.has-sub-menu').removeClass('opened');
            trigger.addClass('opened');
        }
    });
    $('.footer dt').click(function() {
        if ($(window).width() < 769) {
            if ($(this).next('dd').css('display') == 'none') {
                $('.footer dl dd').slideUp();
                $('.footer dl').removeClass('active')
                $(this).parents('dl').addClass('active');
                $(this).next('dd').slideDown();
            } else {
                // return false;
                $(this).parents('dl').removeClass('active');
                $(this).next('dd').slideUp();
            }
        }
    })


    

    /*remove pop up on click of outside*/

    $(document).on('click', '.overlay-box', function () {
        sessionStorage.removeItem("CloseFlag")
        sessionStorage.setItem("CloseFlag", "false")
    });

    $(document).on('click', '.overlay', function () {
        if (sessionStorage.getItem("CloseFlag") == null) {
            sessionStorage.setItem("CloseFlag", "true")
            //closeButton();
            $(".closeBtn").trigger("click")
        }
        else if (sessionStorage.getItem("CloseFlag") == "true") {
            //closeButton();
            $(".closeBtn").trigger("click")
        }
        else {
            sessionStorage.removeItem("CloseFlag")
        }
    });
   
});


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
    sessionStorage.setItem("CloseFlag", "true")
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
      if (sessionStorage.getItem("CloseFlag") == "false") {
          sessionStorage.removeItem("CloseFlag")
      }
      else
      {
          $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
          $('body .overlay-bg').fadeOut(1000, function () {
              $(this).remove();
              $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
          });
          $(this).remove();
          $(".send-enquiry").show()
          sessionStorage.removeItem("CloseFlag")
      }    
  });
}


/*Overlay function end*/


$('.tabNav li').each(function() {
    $(this).css({
        'width': (100 / ($('li:last-child').index('li') + 1)) + 'auto'
    })
    var tabContent = $(this).html();
    var relation = $(this).find('a').attr('rel')
    var resultCnt = $(this).parents('.tabNav').next('.tabResult');
    resultCnt.children('div#' + relation).prepend('<div class="mobile-menu">' + tabContent + '</div>')
})
$(document).on('click', '.mobile-menu', function() {
    if ($(this).next('.content').css('display') == 'none') {
        $('.tabResult .tabBx .content').slideUp();
        $(this).next('.content').slideDown();
    } else {
        $('.tabResult .tabBx .content').slideUp();
    }
})
$('.tabNav li a').click(function() {
    var relation = $(this).attr('rel')
    var tabNavigation = $(this).parents('.tabNav')
    var resultCnt = $(this).parents('.tabNav').next('.tabResult');
    tabNavigation.children().find('a').removeClass('active')
    $(this).addClass('active')
    if (resultCnt.children('div#' + relation).css('display') == 'none') {
        resultCnt.children('div').slideUp();
        resultCnt.children('div#' + relation).slideDown();
    } else {
        resultCnt.children('div#' + relation).slideUp();
    }
})
$(document).ready(function () {

   
    $("#floating-close").click(function() {
        $(".floating-menu-close").css('display', 'none');
        $(".floating-menu").css('display', 'block');
    });
    $(".floating-menu").click(function() {
        $(".floating-menu-close").css('display', 'block');
        $(".floating-menu").css('display', 'none');
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 330) {
            $(".floating-menu-close").css('display', 'block');
            $(".floating-menu").css('display', 'none');
        }
        if (height < 330) {
            $(".floating-menu-close").css('display', 'none');
            $(".floating-menu").css('display', 'block');
        }
    });
    $(".floating-menu-close dl dd ul li a").click(function() {
        $(".floating-menu-close dl dd ul li a").css('color', '#333');
        $(".floating-menu-close dl dd ul li a").css('font-weight', 'normal');
        $(this).css('color', '#d73e60')
        $(this).css('font-weight', 'bold')
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.send-enquiery-btn').fadeIn();
        $('.nav').addClass('fixed');
    } else {
        $('.send-enquiery-btn').fadeOut();
        $('.nav').removeClass('fixed');
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.learn-more-btn').fadeIn();
        $('.nav').addClass('fixed');
    } else {
        $('.learn-more-btn').fadeOut();
        $('.nav').removeClass('fixed');
    }
});


$(document).ready(function(){
$(".navigation-links ul li a").on('click', function(event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});
$(document).ready(function(){
	if ($(window).width() < 1023){
		$(window).scroll(function(){
			var height=$(window).scrollTop();
				if(height>410){
					$(".header").addClass("fix-header")
				}
				if(height<410){
					$(".header").removeClass("fix-header")
				}
		});
	}
	
	
	$(".search-btn").click(function(){
		$(this).toggleClass("active")
	})
	
	$(".search-btn").clickOff(function () {
		$(".search-btn").removeClass("active")
	})

	$(".search-container").click(function () {
	    //$(".search-btn").addClass("active")
	    return false;
	})
	
	
});

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
	
	$(".search-container").click(function(){
		$(".search-btn").addClass("active")
	})
};

$(document).ready(function() {
    var list = $('#webSocialList');
    var twitter = $('#webSocialTwitter');
    var twitterI = twitter.children('i');
    var google = $('#webSocialfacebook');
    var googleI = google.children('i');
    var linkedin = $('#webSocialLinkedin');
    var linkedinI = linkedin.children('i');
    var icon = $('#webSocialIcon');
    var active = 1;
    var twittertmp = 1;
    var googletmp = 1;
    var linkedintmp = 1;
    var tl = new TimelineMax();
    tl.fromTo([twitter, twitter], 1, {
        display: "none",
        width: 0
    }, {
        display: "block",
        width: "40px"
    });
    tl.fromTo([google, google], 1, {
        display: "none",
        width: 0
    }, {
        display: "block",
        width: "40px"
    }, "-=1");
    tl.fromTo([linkedin, linkedin], 1, {
        display: "none",
        width: 0
    }, {
        display: "block",
        width: "40px"
    }, "-=1");
    tl.fromTo([icon, icon], 1, {
        color: "#74b6e8"
    }, {
        color: "#3a7eb1"
    }, "-=1");
    tl.pause();
    var twittertl = new TimelineMax();
    twittertl.fromTo([twitter, twitter], 1, {
        width: "40px"
    }, {
        width: "180px"
    });
    twittertl.pause();
    var facebookl = new TimelineMax();
    facebookl.fromTo([google, google], 1, {
        width: "40px"
    }, {
        width: "180px"
    });
    facebookl.pause();
    var linkedintl = new TimelineMax();
    linkedintl.fromTo([linkedin, linkedin], 1, {
        width: "40px"
    }, {
        width: "180px"
    });
    linkedintl.pause();
    icon.on('click', function() {
        if (active == 1) {
            tl.play();
            active = 0;
        } else {
            twittertl.reverse();
            facebookl.reverse();
            linkedintl.reverse();
            tl.timeScale(2).reverse();
            active = 1;
            twittertmp = 1;
            googletmp = 1;
            linkedintmp = 1;
        }
    });
    twitterI.on('click', function() {
        if (twittertmp == 1) {
            twittertl.play();
            twittertmp = 0;
        } else {
            twittertl.timeScale(2).reverse();
            twittertmp = 1;
        }
    });
    googleI.on('click', function() {
        if (googletmp == 1) {
            facebookl.play();
            googletmp = 0;
        } else {
            facebookl.timeScale(2).reverse();
            googletmp = 1;
        }
    });
    linkedinI.on('click', function() {
        if (linkedintmp == 1) {
            linkedintl.play();
            linkedintmp = 0;
        } else {
            linkedintl.timeScale(2).reverse();
            linkedintmp = 1;
        }
    });
});