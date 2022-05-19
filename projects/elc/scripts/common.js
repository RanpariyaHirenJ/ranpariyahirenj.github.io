$(document).ready(function(){
  	AOS.init();
});
	
$(window).resize(function() {
    fixedFooter();
})
$(window).load(function() {
    fixedFooter()
    $('.loader').fadeOut();
    $(".slider.single-item").css("display", "block");
})
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
var animationIn, target, animationOut;

function overlayBox(popupID) {
    target = $('#' + popupID)
    animationIn = target.attr('data-animation-in');
    animationOut = target.attr('data-animation-out');
    if (typeof(animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '') {
        animationIn = 'zoomIn';
    }
    if (typeof(animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '') {
        animationOut = 'zoomOut';
    }
    $('body').append('<div class="overlay-bg"></div>')
    target.find('.overlay-header').append('<div class="closeBtn">X</div>');
    target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
    $(document).on('click', '.closeBtn', function() {
        $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
        $('body .overlay-bg').fadeOut(1000, function() {
            $(this).remove();
            $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
        });
        $(this).remove();
    });
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
}(function() {
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
    if (param[0] == "enquiry") {
        sessionStorage.removeItem('leadpage');
        alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
    } else if (param[0] == "career") {
        alert("Your application has been Submitted Successfully.");
    } else if (param[0] == "error") {
        alert("The code is invalid.");
    }
});