AOS.init();
$(function () {
    $('.tab-link li a').click(function () {
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
    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scrollTop').fadeIn();
            $('body').addClass('isscrolled');
            // $('.nav').addClass('fixed');
        } else {
            $('.scrollTop').fadeOut();
            $('body').removeClass('isscrolled');
            //$('.nav').removeClass('fixed');
        }
    });

    if ($(this).scrollTop() > 50) {
        $('.scrollTop').fadeIn();
        $('body').addClass('isscrolled');
        // $('.nav').addClass('fixed');
    } else {
        $('.scrollTop').fadeOut();
        $('body').removeClass('isscrolled');
        //$('.nav').removeClass('fixed');
    }

    $(document).on('click', '.scrollTop a', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('header').addClass('change');
            $('.logo img').attr('src', 'images/logo.png');
        }
        else {
            $('header').removeClass('change');
            $('.logo img').attr('src', 'images/logo-w.png');
            $('.isscrolledactive .logo img').attr('src', 'images/logo.png');
        }
    });

    if ($(document).scrollTop() > 50) {
        $('header').addClass('change');
        $('.logo img').attr('src', 'images/logo.png');
    }
    else {
        $('header').removeClass('change');
        $('.logo img').attr('src', 'images/logo-w.png');
        $('.isscrolledactive .logo img').attr('src', 'images/logo.png');
    }

    $('.accordion dl dt').click(function () {
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

    $('.toggle-btn').click(function () {
        if ($('.wrapper').hasClass('opened')) {
            $('.wrapper').removeClass('opened');
        } else {
            $('.wrapper').addClass('opened');
        }
    });

    $('.toggle-search').click(function () {
        if ($('.search-container').hasClass('opened')) {
            $('.search-container').removeClass('opened');
        } else {
            $('.search-container').addClass('opened');
        }
    });

    $('.has-sub-menu').click(function () {
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

    $('.footer dt').click(function () {
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
});

function form_validate_jquery(container) {
    var return_state = true;
    $(container).find("input, select, textarea, .g-recaptcha").each(function () {
        var title = $(this).attr("title");
        switch ($(this).attr("validation")) {
            case "text":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border-bottom", "2px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", title + " cannot be blank!");
                    return_state = false;                }
                else {
                    $(this).css("border-bottom", "2px solid green");
                    $(this).attr("placeholder", title + '*')
                }
                break;
            case "string":
                if ($(this).val() == "") {
                    $(this).css("border-bottom", "2px solid red");
                    $(this).val("");
                    $(this).attr("placeholder", title + " cannot be blank!")
                    return_state = false;
                } else if (!/^[a-zA-Z ]*$/g.test($(this).val())) {
                    $(this).css("border-bottom", "2px solid red");
                    $(this).val("");
                    $(this).attr("placeholder", "Only Alphabets should allowed here.");
                    return_state = false;
                } else {
                    $(this).css("border-bottom", "2px solid green");
                    $(this).attr("placeholder", title + '*');
                }
                break;
            case "textarea":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border-color", "red");
                    $(this).val('');
                    $(this).attr("placeholder", "This cannot be blank!")
                    return_state = false;
                }
                else {
                    $(this).css("border-color", "green");
                    $(this).attr("placeholder", title)
                }
                break;
            case "password":
                if ($(this).val() == "") {
                    $(this).css("border-color", "red");
                    $(this).val('');
                    $(this).attr("placeholder", title + " cannot be blank!")
                    return_state = false;
                }
                else if ($(this).val().length < 6) {
                    $(this).css("border-color", "red");
                    $(this).val('');
                    $(this).attr("placeholder", title + " should be min 6 char!")
                    return_state = false;
                }
                else if ($(this).attr('match') != "" && $(this).attr('match') != null && $(this).attr('match') != 'undefined') {
                    if ($(this).closest(container).find('#' + $(this).attr('match')).val() != $(this).val()) {
                        $(this).css("border-color", "red");
                        $(this).val('');
                        $(this).attr("placeholder", title + " does not match!")
                        return_state = false;
                    } else {
                        $(this).css("border-color", "green");
                        $(this).attr("placeholder", title)
                    }
                }
                else {
                    $(this).css("border-color", "green");
                    $(this).attr("placeholder", title)
                }
                break;
            case "email":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border-bottom", "2px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", title + " cannot be blank!")
                    return_state = false;
                }
                else if ($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1) {
                    $(this).css("border-bottom", "2px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", title + " is not valid email address!")
                    return_state = false;
                }
                else {
                    $(this).css("border-bottom", "2px solid green");
                    $(this).attr("placeholder", title + '*');
                }
                break;
            case "mobile":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).css("border-bottom", "2px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", title + " cannot be blank !")
                    return_state = false;
                }
                else if (isNaN($(this).val())) {
                    $(this).css("border-bottom", "2px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", title + " should be numeric !")
                    return_state = false;
                }
                else if ($(this).val().length < 10) {
                    $(this).css("border-bottom", "2px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", title + " must be 10 digits !")
                    return_state = false;
                }
                else {
                    $(this).css("border-bottom", "2px solid green");
                    $(this).attr("placeholder", title + '*');
                }
                break;
            case "number":
                if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                    $(this).prev().addClass('error');
                    $(this).val('');
                    $(this).attr("placeholder", "This cannot be blank!")
                    return_state = false;
                }
                else if (isNaN($(this).val())) {
                    $(this).prev().addClass('error');
                    $(this).val('');
                    $(this).attr("placeholder", "This is not valid number!")
                    return_state = false;
                }
                else {
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "")
                }
                break;
            case "google-captcha":
                if (grecaptcha.getResponse() == "") {
                    $(container).find(".g-recaptcha").next("span").remove();
                    $(container).find(".g-recaptcha").after('<span style="color: red;font-size:12px">Google captcha is not selected.</span>');
                    return_state = false;
                } else {
                    $(container).find(".g-recaptcha").next("span").remove();
                }
                break;
        }
    })


    if (return_state) {
        // overlayBox('loader');
        var formData = $('form').serializeArray();
        $.ajax({
            url: 'inc/contact.php',
            type: 'POST',
            async: true,
            data: formData,
            success: function (data) {
                // $("#loader").hide(); 
                grecaptcha.reset();
                $(container).find('.g-recaptcha').next('span').remove();
                console.log(formData);
                $(container).find("input[validation], textarea").val('');
                $(container).find("input[validation], textarea[validation]").removeAttr('style');
                // $(container).find('input[type="submit"]').attr('value','Submit');
                // alert("Thanks for contacting with us.We will be contact you shortly. Thanks.");
                overlayBox('thankyoumsg');
            }
        });
        return false;
    } else {
        return false;
    }
}




