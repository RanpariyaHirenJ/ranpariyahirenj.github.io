// JavaScript Document





/* To check Password Strength */
function passwordStrength(password) {
    var desc = new Array();
    desc[0] = "Very Weak";
    desc[1] = "Weak";
    desc[2] = "Better";
    desc[3] = "Medium";
    desc[4] = "Strong";
    desc[5] = "Strongest";

    var score = 0;

    //if password bigger than 6 give 1 point
    if (password.length > 6) score++;
    //if password has both lower and uppercase characters give 1 point  
    if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) score++;
    //if password has at least one number give 1 point
    if (password.match(/\d+/)) score++;
    //if password has at least one special caracther give 1 point
    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) score++;
    //if password bigger than 12 give another 1 point
    if (password.length > 12) score++;
    params[0] = desc[score];
    params[1] = score;

    return params
}




function form_validate_jquery(container) {
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
                }
                break;
            case "password":
                if ( $(this).val() == $(this).attr("placeholder") || $(this).val() == ""  ) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank.")

                    return_state = false;
                }
                else if ($(this).val().length < 6) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", "" + title + " should be min 6 char!")
                    $(this).prev().addClass('active');
                    return_state = false;
                }
                else {
                    $(this).css("border", "1px solid green");
                }
            break;
            case "u-password":
                if ( $(this).val() == $(this).attr("placeholder") || $(this).val() == ""  ) {
                   
                    return_state = true;
                }
                else if ($(this).val().length < 6) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).attr("placeholder", "" + title + " should be min 6 char!")
                    $(this).prev().addClass('active');
                    return_state = false;
                }
                else {
                    $(this).css("border", "1px solid green");
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
                }
                break;
             case "u-match_password":
                if($("#password").val() != $(this).val() ) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " does not match.")
                    return_state = false;
                }
                else {
                    $(this).attr('placeholder','');
                    $(this).css("border", "1px solid green");
                }
            break;
            case "match_password":
                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank.")
                    return_state = false;
                }else if ($("#password").val() != $(this).val() ) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " does not match.")
                    return_state = false;
                }
                else {
                    $(this).css("border", "1px solid green");
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
                }
            break;

   
        }
    });
    return return_state;
}

$('input:file').change(function(){
    $(this).prev().text($(this).val().split(/[\\]+/).pop()?$(this).val().split(/[\\]+/).pop():'Upload Device '+$(this).attr('title'));
});


//*******Match Password*********
function match_password(pass1, pass2) {
    if ($(pass1).val() != $(pass2).val()) {
        $(pass1).val("");
        $(pass2).val("")

        $(pass1).css("border", "1px solid red");
        $(pass2).css("border", "1px solid red");

        alert("Kindly reconfirm your password!");

        $(pass1).focus();
    }
    else {
        $(pass1).css("border", "1px solid green");
        $(pass2).css("border", "1px solid green");
    }

}

//*******Image Resize*********
function resizeImage_jquery(imgcontainer, reqwidth, reqheight) {
    var tempimg2 = new Image();
    var newwidth, newheight;

    tempimg2.src = $(imgcontainer).attr("src");
    var imgname = $(imgcontainer);

    tempimg2.onload = function () {
        if (tempimg2.height > tempimg2.width) {
            newwidth = reqwidth;
            newheight = tempimg2.height * (newwidth / tempimg2.width)
        }
        else {
            newheight = reqheight;
            newwidth = tempimg2.width * (newheight / tempimg2.height)
        }
        $(imgname).css({ "height": newheight, "width": newwidth })
    }
}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode 
    if ( charCode > 31 && (charCode < 48 || charCode > 57) && charCode!=46){
        return false;
    }
    else{
      return true;
    }
}



//*******LazyLoader*********
function lazyloader(defaultimg) {
    $(document).find("img.lazyload").each(function () {
        if (($(this).offset().top - 100) < $(window).height() + $(document).scrollTop() && ($(this).offset().left) < $(window).width() + $(document).scrollLeft()) {
            if ($(this).attr("lazysrc") != "") {
                $(this).attr("src", $(this).attr("lazysrc"));
                $(this).attr("lazysrc", "")
                $(this).css({ opacity: 0 })
                $(this).load(function () {
                    var img = $(this)
                    setTimeout(function () {
                        resizeImage_jquery($(img), $(img).outerWidth(), $(img).outerHeight())
                        $(img).animate({ opacity: 1 }, 500);
                    }, 500)
                })
            }
        }
        else {
            if (typeof (defaultimg) != 'undefined') {
                $(this).attr("src", defaultimg)
            }
        }

        $(this).load(function () {
            resizeImage_jquery($(this), $(this).outerWidth(), $(this).outerHeight())
        })
    })

    $(window).scroll(function () {
        $(document).find("img.lazyload").each(function () {
            if (($(this).offset().top - 100) < $(window).height() + $(document).scrollTop() && ($(this).offset().left) < $(window).width() + $(document).scrollLeft()) {
                if ($(this).attr("lazysrc") != "") {
                    $(this).attr("src", $(this).attr("lazysrc"));
                    $(this).attr("lazysrc", "")
                    $(this).css({ opacity: 0 })
                    $(this).load(function () {
                        var img = $(this)
                        setTimeout(function () {
                            resizeImage_jquery($(img), $(img).outerWidth(), $(img).outerHeight())
                            $(img).animate({ opacity: 1 }, 500);
                        }, 500)
                    })
                }
            }
        });
    })
}


$(document).ready(function(){

    $('select[data-selected]').each(function(){
        $(this).find('option[value="'+$(this).data('selected')+'"]').attr("selected","selected");
    });





     
});

