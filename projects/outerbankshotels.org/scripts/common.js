$(window).resize(function() {
    fixedFooter();
})
$(window).load(function() {
    fixedFooter()
    $('.loader').fadeOut();
    $(".slider.single-item").css("display", "block");
})

$(function() {
    fixedFooter()
    $('.input-type-select span').click(function() {
        $(this).parents('.input-type-select').find('select').trigger('click');
    })
    $('body').append('<div class="scrollTop"><span></span></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });
    $(document).on('click', '.scrollTop span', function() {
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
            $(this).prev('label').removeClass('active');
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
        switch ($(this).attr("validation")) {
            case "text":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank!")
                    return_state = false;
                } else {
                    $(this).css("border", "1px solid green");
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
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank!")
                    return_state = false;
                } else if ($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " is not valid email address!")
                    return_state = false;
                } else {
                    $(this).css("border", "1px solid green");
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
    return return_state;
}

function fixedFooter() {
    $('body').css('min-height', $(window).height());
}

$(function() {
    $('.tabNav li').each(function() {
        var tabContent = $(this).html();
        var relation = $(this).find('a').attr('rel')
        var resultCnt = $(this).parents('.tabNav').next('.tabResult');
        resultCnt.children('div#' + relation).prepend('<div class="mobile-menu">' + tabContent + '</div>')
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
    $('body,html').animate({
        scrollTop: ofsetd
    }, 800);
}
(function() {
    "use strict";
    var toggles = document.querySelectorAll(".menu-icon");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
        });
    }
    $('.mobil-icon-toggle').click(function() {
        if ($(this).hasClass('active')) {
            $('.menubar').addClass('open-navigation');
            $(".menubar ul li.hasDropDown.active .submenu").css("display", "block");
        } else {
            $('.menubar').removeClass('open-navigation');
        }
    });
    $(document).on('click', '.hasDropDown', function() {
		if ($(window).width() < 1024) {
        $('.hasDropDown').removeClass('openHas');
        var _child = $(this).find('.submenu').css('display');
        if (_child == 'none') {
            $('.submenu').slideUp();
            $(this).find('.submenu').slideDown();
            $(this).addClass('openHas');
        } else {
            $(this).find('.submenu').slideUp();
            $(this).removeClass('openHas');
        }
		}
    });
})();
$(window).load(function() {
    var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var decodedparameter = decodeURIComponent(parameter)
    var param = decodedparameter.split('=');
    if (param[0] == "contact") {
        sessionStorage.removeItem('leadpage');
        alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
    } else if (param[0] == "ask") {
        alert("Thank you for ask a question. We will contact you shortly..");
    } else if (param[0] == "error") {
        alert("The code is invalid.");
    }
});

function overlayBox(popupID)
{
	target = $('#' + popupID)
		$('html,body').addClass('scroll_hidden');
		target.fadeIn();
	$('.close_btn,.close_box').click(function(){
		$('html,body').removeClass('scroll_hidden');
		target.fadeOut();
	})
	

}

$(window).load(function() {

$(".cc-compliance a").click(function(){
  $(".cookiepopup").fadeOut(500);
});

if(localStorage.getItem("cookies")==1){
    $(".cookiepopup").css('display','none');
}

// var rating_for =  $(".rating-container").parent().attr('data-rating-for');

// if(localStorage.getItem("cookies_colonial")==1 && rating_for == 1 ){
//     $(".bottom-Ratings-cntr .com-btn").remove();
// }else if(localStorage.getItem("cookies_seahorse")==1 && rating_for == 2){
//     $(".bottom-Ratings-cntr .com-btn").remove();
// }else if(localStorage.getItem("cookies_driftin")==1 && rating_for == 3){
//     $(".bottom-Ratings-cntr .com-btn").remove();
// }else if(localStorage.getItem("cookies_hatteras")==1 && rating_for == 4){
//     $(".bottom-Ratings-cntr .com-btn").remove();
// }

});

$(".cc-btn").click(function(){
	localStorage.setItem("cookies", "1");
});


//alert(localStorage.getItem("cookies"));
$(window).load(function() {
    rendered();
    function rendered(){

         $.post('inc/rating',{'action':'get'},function(data){

            var json = JSON.parse(data);

            $.each(json, function( index, value ) {
                $("#"+value.rating_for).attr("data-rating-value",value.rating);
                $("#"+value.rating_for).next().text(value.rating+' ('+value.stars+' Ratings)');
            });
        });
    }
   


    $(".rating-container .fa-star").click(function(){
        var cookie_id = "";
        var msg = "";
        var rating_for = $(this).parent().parent().attr('data-rating-for');

        if(rating_for==1){
            cookie_id = "cookies_colonial";
            msg = "Thank You For Rating Colonial Inn.";
        }else if(rating_for==2){
            cookie_id = "cookies_seahorse";
            msg = "Thank You For Rating Seahorse Inn.";
        }else if(rating_for==3){
            cookie_id = "cookies_driftin";
            msg = "Thank You For Rating Driftin Sands.";
        }else if(rating_for==4){
            cookie_id = "cookies_hatteras";
            msg = "Thank You For Rating Hatteras Island Inn.";
        }else{
            cookie_id = "cookies_blog"+rating_for;
            msg = "Thank You For Rating This Blog";
        }

 

        var stars = $(this).parent().next().text();
        
       
        $.post('inc/rating',{'action':'insert','rating_for':rating_for,'stars':stars,'cookie_id':cookie_id},function(data){
             localStorage.setItem(cookie_id, "1");
             alert(msg);
             rendered();
             // location.reload();
        });
    });
});