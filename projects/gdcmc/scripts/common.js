$(window).load(function () {
    var how_its_work_height = $(".how-its-work .banner .grid-4").height();
    var how_its_work_height_ul1 = $(".how-its-work .banner .grid-4 .cl1").height();
    var how_its_work_height_ul2 = $(".how-its-work .banner .grid-4 .cl2").height();
    var how_its_work_height_ul3 = $(".how-its-work .banner .grid-4 .cl3").height();
    var how_its_work_height_ul4 = $(".how-its-work .banner .grid-4 .cl4").height();
    var total_height_ul_div1 = how_its_work_height - how_its_work_height_ul1;
    var total_height_ul1 = total_height_ul_div1 / 2;
    var total_height_ul_div2 = how_its_work_height - how_its_work_height_ul2;
    var total_height_ul2 = total_height_ul_div2 / 2;
    var total_height_ul_div3 = how_its_work_height - how_its_work_height_ul3;
    var total_height_ul3 = total_height_ul_div3 / 2;
    var total_height_ul_div4 = how_its_work_height - how_its_work_height_ul4;
    var total_height_ul4 = total_height_ul_div4 / 2;
    $(".how-its-work .banner .grid-4 .cl1").css("padding-top", total_height_ul1);
    $(".how-its-work .banner .grid-4 .cl2").css("padding-top", total_height_ul2);
    $(".how-its-work .banner .grid-4 .cl3").css("padding-top", total_height_ul3);
    $(".how-its-work .banner .grid-4 .cl4").css("padding-top", total_height_ul4);
});

$(document).ready(function () {
    var mobile = getCookie("mobile");
    var email = getCookie("email");
    if (mobile == 1) {
        $(".contact_details").removeClass('contact_details');
        $(".contacts-info ul li:nth-child(2)").find("p").removeClass('dispnone');
        $(".contacts-info ul li:nth-child(2)").find("p").addClass("mobnum");
        $(".icon-contact").next().next().removeClass("dispnone");
        $(".icon-contact").next().next().addClass("mobnum");
    }
    if (email == 1) {
        $(".email_address").removeClass('email_address');
        $(".contacts-info ul li:nth-child(3)").find("p").removeClass('dispnone');
        $(".contacts-info ul li:nth-child(3)").find("p").addClass("mobnum");
        $(".icon-email").next().next().removeClass("dispnone");
        $(".icon-email").next().next().addClass("mobnum");
    }
    
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    if (screen.width < 1023) {
        if (mobile == 1 && email == 1) {
            $('.mob-display').prev().css("display", "none");
            $('.mob-display').next().addClass("mobnum");
            $('.shornav-ftr-mob').removeClass("shornav-ftr-mob");
            $(".shornav-ftr").addClass("iconlatter");

            //	$(".contacts-info ul li").find("p").addClass("mobnum");
        } else if (mobile == 1) {
            $('.mob-display').css("display", "none");
            $('.mob-display').removeClass("mobnum");
            $(".icon-contact").next().next().addClass("mobnum");
        } else if (email == 1) {
            $('.mob-display').css("display", "none");
            $('.mob-display').removeClass("mobnum");
            $(".icon-email").next().next().addClass("mobnum");
        }
    }
});

/*$(document).ready(function () {
    var func = "get_capcha_images";
    $.ajax({
        method: "POST",
        url: "ajax_functions.php",
        data: { "action": func }
    })
    .done(function (msg) {
        if (msg) {
            $(".captcha_image").empty();
            $(".captcha_image").append(msg);
        }
    });
});*/

/*Doucment resize Function*/
$(window).resize(function () {
    fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
    fixedFooter()
    setTimeout(function () {
        $('.loader').fadeOut();
        $('html').css("overflow", "visible");
    }, 100);

})





$(".shornav-ftr ul li").click(function (event) {
    $(this).find('.dispnone').toggle('slow', function () { });
    //if($(this).find('i').attr('class') == "icon-contact contact_details"){
    //		$(".icon-phone").parent().find('.dispnone').toggle('slow', function(){});
    //}
    //else if($(this).find('i').attr('class') == "icon-email email_address")
    //{
    //   $(".icon-envelope").parent().find('.dispnone').toggle('slow', function(){});
    //}
});
/*$(".contacts-info ul li").click(function(event){
   $(this).find('.dispnone').toggle('slow', function(){});
    if($(this).find('i').attr('class') == "icon-phone contact_details"){
		$(".icon-contact").parent().find('.dispnone').toggle('slow', function(){});
	}
	else if($(this).find('i').attr('class') == "icon-envelope email_address")
	{
		$(".icon-email").parent().find('.dispnone').toggle('slow', function(){});
	}
});	*/

//if($(window).width() < 1024){
//	$(window).load(function(){
//		$(".shornav-ftr").addClass('shornav-ftr-mob');
//	
//});
//
//}
/*$(".contacts-info ul li").click(function () {
	//alert("hello");
	$(this).find('.dispnone').show();
	$(this).find('.dispnone').addClass('fadeInRight');
	$(this).find('.dispnone').css('visibility', 'visible');
	//$(".contacts-info ul li .dispnone").show();
});*/

/*$(".shornav-ftr ul li").click(function () {
	//alert("hello");
	$(this).find('.dispnone').show();
	$(this).find('.dispnone').addClass('fadeInRight');
	$(this).find('.dispnone').css('visibility', 'visible');
	//$(".contacts-info ul li .dispnone").show();
});*/

if ($(window).width() > 1024) {


    var how_its_work_grid_height = $(".how-its-work .banner .grid-8").height();
    $(".how-its-work .banner .grid-4").css("height", how_its_work_grid_height);


    $(window).load(function () {
        var wind_height = $(window).height();
        var wind_width = $(window).width();
        var home_banner_height = $(".home-banner .container").height() + 57;
        var home_banner_grid = $(".home-banner .banner ul.bxslider li .grid-4").height();
        var home_banner_grid_info = $(".home-banner .banner ul.bxslider li .grid-4 .banner-info").height();
        var home_banner_banner_info = home_banner_grid - home_banner_grid_info - 100;
        var home_banner_banner_info_total = home_banner_banner_info / 2;
        var contact_wind_height = wind_height - 132;
        $("#allContent").css("margin-top", home_banner_height);
        $(".banner-info").css("padding-top", home_banner_banner_info_total);
        $(".contact-us .grid-8 iframe").css("height", contact_wind_height);
    });
}

if ($(window).width() > 767) {
    var blogsdetailscntr_img = $(".blogsdetailscntr ul li .grid-4 i img").height();
    $(".blogsdetailscntr ul li .grid-8").css("height", blogsdetailscntr_img);
}
/*if($(window).width() > 1024){
	setTimeout(function(){
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)  { 
	 	var wind_height = $(window).height();
		var contact_wind_height = wind_height + 400;
	alert(contact_wind_height)
	$(".contact-us .grid-8 iframe").css("height", contact_wind_height, 'important');
	$(".contact-us .grid-4").css("height", contact_wind_height);
	}
	   }, 100);
}*/
if ($(window).width() > 1600) {
    var wind_height = $(window).height() - 50;
    $(".about-us.parallax.banner-top").css("height", wind_height);
    $(".blog.parallax.banner-top").css("height", wind_height);
    $(".blog .dis-table").css("height", wind_height);
    $(".about-us .dis-table").css("height", wind_height);
}


if ($(window).width() < 1023) {
    var wind_height = $(window).height() - 50;
    var img_height = $(".background-image img").height();
    var wind_height_banner = $(window).height() - 55;

    $("#allContent").css("margin-top", wind_height);
    $(".home-banner .banner ul.bxslider li .grid-4").css("margin-top", img_height);
    $(".background-overlay").css("height", img_height);
    $(".home-banner .banner ul.bxslider li").css("height", wind_height_banner);

    setTimeout(function () {
        var img_height = $(".background-image img").height();

        $(".home-banner .banner ul.bxslider li .grid-4").css("margin-top", img_height);
    }, 1000);
}



if ($(window).width() < 1023) {
    setTimeout(function () {
        var blog_bg_img_height = $(".blog-info.grid-8 .background-image img").height();
        $(".blog .blog-info ul li a").css("height", blog_bg_img_height);
        //alert(blog_bg_img_height)
    }, 500);
}

/*Ready Funtion*/
$(function () {
    fixedFooter()
    $('.input-type-select span').click(function () {
        $(this).parents('.input-type-select').find('select').trigger('click');
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
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
    /*Back to top Function End*/

    /*Header footer loading*/
    /*accordion start*/
    $('.accordion dl dt').click(function () {
        var trigger = $(this);
        var target = trigger.next('dd');
        if (target.css('display') == 'none') {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
            target.slideDown();
            trigger.parents('dl').addClass('active');
        }
        else {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
        }
    });
    /*accordion start*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.downloadlink').fadeIn();
            $('.nav').addClass('fixed');
        } else {
            $('.downloadlink').fadeOut();
            $('.nav').removeClass('fixed');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.downloadlink-app').fadeIn();
            $('.nav').addClass('fixed');
        } else {
            $('.downloadlink-app').fadeOut();
            $('.nav').removeClass('fixed');
        }
    });

    /*Animate label form*/
    $('.animate-label .input-group').click(function () {
        if ($(this).find('select').size() > 0) {
            // $(this).find('label').addClass('active');

            // var id = $(this).find('select').attr('id');
            // console.log(id);


        } else {
            $(this).find('input').focus();
            $(this).find('label').addClass('active');

        }
        if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
            $(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
        }

    });
    $('.animate-label .input-group input,.animate-label .input-group textarea').blur(function () {
        if (this.value.length > 0) {
            return false;
        }
        else {
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
    $('.input-group').click(function () {
        $(this).find('input').focus();
        $(this).find('label').addClass('active');
    });
    /*Animate label form*/

});


function fixedFooter() {
    //$('body').css('min-height', $(window).height());
}


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID) {
    target = $('#' + popupID)
    animationIn = target.attr('data-animation-in');
    animationOut = target.attr('data-animation-out');
    if (typeof (animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '') {
        animationIn = 'zoomIn';
    }
    if (typeof (animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '') {
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
}
/*Overlay function end*/

$(function () {
    /*text amoation*/
    $('.countmumber').each(function () {
        $(this).prop('Counter', 20).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    /*text amoation end*/

    /*jQuery tabs */
    /*script for append usefull element*/
    $('.tabNav li').each(function () {
        var tabContent = $(this).html();
        var relation = $(this).find('a').attr('rel')
        var resultCnt = $(this).parents('.tabNav').next('.tabResult');
        resultCnt.children('div#' + relation).prepend('<div class="mobile-menu">' + tabContent + '</div>')
    })

    /*script for desktop navigation */
    $('.tabNav li a').click(function () {
        var relation = $(this).attr('rel')
        var tabNavigation = $(this).parents('.tabNav')
        var resultCnt = $(this).parents('.tabNav').next('.tabResult');

        tabNavigation.children().find('a').removeClass('active')
        $(this).addClass('active')

        if (resultCnt.children('div#' + relation).css('display') == 'none') {
            resultCnt.children('div').slideUp();
            resultCnt.children('div#' + relation).slideDown();
        }
        else {
            resultCnt.children('div#' + relation).slideUp();
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
        $('.tabNav ').find('a[rel=' + relation + ']').parents('li').children('a').addClass('active');
        resultCnt.children('div#' + relation).slideDown();
    }
    var ofsetd = $('.tabNav').offset().top;
    $('body,html').animate({ scrollTop: ofsetd }, 800);
}
(function () {
    "use strict";

    var toggles = document.querySelectorAll(".menu-icon");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");

        });
    }


    $('.mobil-icon-toggle').click(function () {
        if ($(this).hasClass('active')) {
            $('.nav-menu').addClass('open-navigation');
        }
        else {
            $('.nav-menu').removeClass('open-navigation');
        }
    });
    $('.closebtncom').click(function () {
        $(this).parents('.community-updates').addClass('smallupdatebx');
        $('.slider-udpdates').animate({ opacity: 0 })
    })
    $('.communityblockbx dl dt').click(function () {
        $(this).parents('.community-updates').removeClass('smallupdatebx');
        $('.slider-udpdates').animate({ opacity: 1 })
    });
    $('.updateslider').bxSlider({
        auto: true,
        pager: false,
        controls: false,
        mode: 'fade'
    })
})();

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navigation").addClass("menuscroll");
            $(".menuscroll .logo a img").addClass("scrolllogo");
        }
        else {
            $(".menuscroll .logo a img").removeClass("scrolllogo");
            $(".navigation").removeClass("menuscroll");
        }
    })



    $(window).scroll(function () {
        $(".home-banner .banner ul.bxslider li .dis-table").css("opacity", 1 - $(window).scrollTop() / 650);
        $(".home-banner .bx-wrapper .bx-pager").css("opacity", 1 - $(window).scrollTop() / 250);
    });



})
