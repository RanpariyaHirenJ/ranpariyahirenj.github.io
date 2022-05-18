// JavaScript Document



//**********************Confirm Delete function*************************************************
function confirm_delete() {
    var val = confirm("Are you sure you want delete these records?");   
    return val;
}

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
            if (charCode == 45) {
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

//*********************Mouse over image changer********************************************
function change_image(cont_id, imgsrc) {
    document.getElementById(cont_id).src = imgsrc;
}

//********************************This is the ajax helper class***********************************
function jquery_ajax(func, url, params, element, loader) {
    if (typeof ($(loader)) != "undefined") {
        $(loader).css({ "top": (window.innerHeight - $(loader).outerHeight()) / 2, "left": ((window.innerWidth - $(loader).outerWidth()) / 2) })
        $(".loader").fadeIn();
    }

    $.post(url,
        {
            "function": func,
            "params": params
        },
        function (data, status) {
            $(element).html(data);
            if (typeof ($(loader)) != "undefined") {
                $(loader).fadeOut();
            }
        });
}

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

/* RESTRICT special Chars  */

function RestrictChar(id, evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    //alert(key);
    if (key != 16 && key != 17 && key != 8 && key != 37 && key != 39 && key != 32 && key != 27) {
        //@#!^&*- 
        var re5digit = /[@#!^&*-]/;
        if (document.getElementById(id).value.search(re5digit) != -1) {
            document.getElementById(id).value = document.getElementById(id).value.substring(0, document.getElementById(id).value.length - 1);
        }
    }

}

function charconstraint(id, maxchars, minchars) {
    var maxchars = typeof (maxchars) != 'undefined' ? maxchars : 300;
    var minchars = typeof (minchars) != 'undefined' ? minchars : 5;
    var x = document.getElementById(id);
    if (x.value.length > maxchars) {
        $("#" + id).val("");
        x.style.border = "#F00 solid 2px";
        alert('Maximum characters allowed is ' + maxchars);
        x.focus();
        return false;
    }
    else if (x.value.length < minchars) {
        $("#" + id).val("");
        x.style.border = "#F00 solid 2px";
        alert('Minimum characters allowed is ' + minchars);
        x.focus();
        return false;
    }
    else {
        return true;
    }
}

var myborder;
function isAlphabet(id) {
    var alphaExp = /^[a-zA-Z ]+$/;
    var x = document.getElementById(id);
    if (!x.value.match(alphaExp)) {
        myborder = x.style.border;
        alert("No Numeric and Special Characters allowed in " + x.title);
        x.style.border = "#F00 solid 2px";
        x.focus();
        return false;
    }
    else {
        x.style.border = myborder;
        return true;
    }
}


function form_validate_jquery(container) {

     for (var i in CKEDITOR.instances) {
                CKEDITOR.instances[i].updateElement();
            };

    var return_state = true;
    $(container).find("input, select, textarea, checkbox").each(function () {
        var title = $(this).attr("title");
        switch ($(this).attr("validation")) {
            case "text":
               
                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank!")

                    return_state = false;
                }
                else {
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
                    $(this).attr("placeholder", "" + title + " cannot be blank!")
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

            case "number":

                if ($(this).val() == "" && $(this).data('required')==true) {
                    $(this).css("border", "1px solid red");
                    $(this).val('');
                    $(this).prev().addClass('active');
                    $(this).attr("placeholder", "" + title + " cannot be blank!")
                    return_state = false;
                }
                else if($(this).val()!=""){

                    if($.isNumeric( $(this).val() )==false){
                        $(this).css("border", "1px solid red");
                        $(this).val('');
                        $(this).prev().addClass('active');
                        $(this).attr("placeholder", "" + title + " is not valid number!")
                        return_state = false;
                    }else{
                        $(this).css("border", "1px solid green");
                    }
                }
                else {
                    $(this).css("border", "1px solid green");
                }
            break;

            case "choose-one":

                if ($("#parent_id").val() == 0 && $("#top").prop('checked') == false ) {
                    $("#choose-category").show();
                    return_state = false;
                }
                else {
                     $("#choose-category").hide();
                }
            break;


            

            case "file":
              
                if($(this).val() == "" && $(this).data('required')==true && $(this).data('value')=="")
                {
                    
                    $(this).closest('.response').css("border","1px solid red");
                    $(this).val('');
                    
                    $(this).prev().text(title+" cannot be blank!")
                    
                    return_state = false;                                                   
                }else if($(this).val()!=""){
                  
                    var ext_arr = ['jpeg','jpg']; 

                    if($(this).attr('name')=="pdf_file"){
                        ext_arr = ['pdf']; 
                    }else if($(this).attr('name')=="sketch_file"){
                        ext_arr = ['sketch']; 
                    }else if($(this).attr('name')=="revit_file"){
                        ext_arr = ['revit']; 
                    }
                    
                    var ext = $(this).val().split('.').pop().toLowerCase();
                    if($.inArray(ext, ext_arr) == -1) {
                        $(this).val('');
                        $(this).closest('.response').css("border","1px solid red");

                        if($(this).attr('name')=="pdf_file"){
                            $(this).next().next().text("Invalid file extension. upload only .pdf file format.");
                        }else if($(this).attr('name')=="sketch_file"){
                            $(this).next().next().text("Invalid file extension. upload only .sketch file format.");
                        }else if($(this).attr('name')=="revit_file"){
                            $(this).next().next().text("Invalid file extension. upload only .revit file format.");
                        }else{
                            $(this).next().next().text("Invalid file extension. choose .jpeg, .jpg file format.");
                        }
                       
                  
                        return_state = false;       
                    }else{
                        $(this).closest('.response').css("border","1px solid green");
                    }
                }
                else
                {
                    $(this).closest('.response').css("border","1px solid green");
                }
            break;

            case "product-image":
              
                if($(this).val() == "" && $(this).data('value')=="")
                {
                    
                    $(this).closest('tr').css("border","2px solid red");
                    $(this).val('');

                    if($(this).attr('name')=="image"){
                        $(this).prev('p').find('i').text(title+" cannot be blank!");
                    }
                    else{
                        $(this).closest('.text-left').next().find('i').text(title+" cannot be blank!")
                    }
                    
                    
                    
                    return_state = false;     

                }else if($(this).val()!=""){
                  
                    var ext_arr = ['jpeg','jpg']; 

                    if($(this).attr('name')=="pdf_file"){
                        ext_arr = ['pdf']; 
                    }
                    
                    var ext = $(this).val().split('.').pop().toLowerCase();
                    if($.inArray(ext, ext_arr) == -1) {
                        $(this).val('');
                        $(this).closest('tr').css("border","2px solid red");

                        if($(this).attr('name')=="image"){
                            $(this).prev('p').find('i').text("Invalid file extension. choose .jpeg, .jpg file format.");
                        }
                        else{
                            $(this).closest('.text-left').next().find('i').text("Invalid file extension. choose .jpeg, .jpg file format.");
                        }
                       
                        
                        
                        return_state = false;       
                    }else{
                        $(this).closest('tr').css("border","2px solid green");
                    }
                }
                else
                {
                    $(this).closest('.response').css("border","2px solid green");
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

$(document).on('change','#product-form input:file',function(){
    $(this).next().next().text($(this).val().split(/[\\]+/).pop()?$(this).val().split(/[\\]+/).pop():'Upload banner '+$(this).attr('title'));
});

$(document).on('change','#product-image-form input:file',function(){
   
    if($(this).attr('name')=="image"){
        $(this).prev('p').find('i').text($(this).val().split(/[\\]+/).pop());
    }
    else{
        $(this).closest('.text-left').next().find('i').text($(this).val().split(/[\\]+/).pop());
    }
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

//*******LightBox*********
function initialize_lightbox(container, float) {
    //float = fixed / absolute
    var bg_element = $("<div class=\"overlay-background\"></div>")
    $(bg_element).css({
        "position": "fixed",
        top: 0,
        left: 0,
        "background-color": "#000",
        "opacity": 0.4,
        "z-index": 499,
        "display": "none",
        height: $(window).innerHeight(),
        width: $(window).innerWidth(),
    })

    $(container).data("position", $(container).css("position"))
    $(container).hide();

    var closebtn = $("<img style=\"position:absolute;top:0;right:0;width:50px;height:50px;cursor:pointer;\" src=\"./images/close-icon.png\" />");
    $(closebtn).click(function () {
        $(this).parent().fadeOut("slow", function () {
            $(this).parent().css("position", $(this).parent().data("position"))
        });

        $(bg_element).fadeOut("slow", function () {
            $(this).remove();
        })
    })

    $(container).append(closebtn)

    if (float == "fixed") {
        $(container).css("position", float);
        $(container).css({ "top": 50, "left": ((window.innerWidth - $(container).outerWidth()) / 2) })
    }
    else {
        $(container).css("position", float);
        $(container).css({ "top": (window.innerHeight - $(container).outerHeight()) / 2, "left": ((window.innerWidth - $(container).outerWidth()) / 2) })
    }


    $("html,body").prepend(bg_element)

    $(container).css("z-index", 500);
    $(container).fadeIn("slow");
    $(bg_element).fadeIn("slow");

    $('html,body').animate({
        scrollTop: $(container).offset().top
    }, 500);
}


//*******Apply Hide Show*********
function apply_hideshow(element) {
    var show = $(element).attr("show");
    var hide = $(element).attr("hide")

    var show = show.split("|");
    var hide = hide.split("|")

    for (var i = 0; i < show.length; i++) {
        $(show[i]).fadeIn("slow", function () {
            if (typeof ($(this).attr("postshow")) != "undefined") {
                $(this).addClass($(this).attr("postshow"))
            }
        });
    }

    for (var i = 0; i < hide.length; i++) {
        $(hide[i]).fadeOut("slow", function () {
            if (typeof ($(this).attr("postshow")) != "undefined") {
                $(this).removeClass($(this).attr("postshow"))
            }
        });
    }
}
//*******Apply Hide Show*********

//*******Apply Lazy Appear*********
function apply_lazyappear() {
    $(document).find(".lazyappear").each(function () {
        var appear = $(this).attr("appear");
        $(this).data("appear", "no")

        $(this).addClass($(this).attr("preappear"))
    })

    $(window).scroll(function () {
        $(document).find(".lazyappear").each(function () {
            if (($(this).offset().top - 50) < $(window).height() + $(document).scrollTop() && ($(this).offset().left) < $(window).width() + $(document).scrollLeft()) {
                if ($(this).data("appear") == "no") {
                    $(this).data("appear", "yes")
                    $(this).addClass($(this).attr("postappear"))
                }
            }
        })
    })
}
//*******Apply Lazy Appear*********

function alertval(title, desc) {
    var randval = Math.floor((Math.random() * 100) + 1);
    $("body").append("<div id='dialoconfirm" + randval + "' title='" + title + "' style='display:none;'><p><span class='ui-icon ui-icon-alert' style='float:left; margin:12px 12px 20px 0;'></span>" + desc + "</p></div>").css("overflow", "hidden");
    $("#dialoconfirm" + randval).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "OK": function () {
                $("body").css("overflow", "auto");
                $(this).dialog("close");
            }
        }
    });
}


$(document).ready(function(){

    var image_row = $("#add-row").data('row');
    $("#add-row").click(function(){
        html  = '<tr id="image-row' + image_row + '">';
        html += '  <td class="text-left"><a href="JavaScript:void(0)" onclick="$(\'#input-image' + image_row  + '\').click();"  id="thumb-image' + image_row + '"data-toggle="image" class="img-thumbnail"><img width="100" src="http://staging.intermind.in/woodsmiths/php/images/logo.png" alt="" title="" /></a>';
        html += '  <input type="file" style="display:none"  title="Additional Image" accept="image/jpeg,image/jpg" validation="product-image" data-value="" name="product_image[' + image_row + '][image]" value="" id="input-image' + image_row + '" /></td>';
        html += '  <td class="text-right"><input type="text" name="product_image[' + image_row + '][sort_order]" value="" validation="number" title="Sort Order" placeholder="Sort Order" class="form-control" /><p style="color:red"><small><i>Image upload only .jpg, .jpeg format and dimension size (600x720)   </i></small></p></td>';
        html += '  <td class="text-left"><button type="button" onclick="$(\'#image-row' + image_row  + '\').remove();" data-toggle="tooltip" title="Remove" class="btn btn-danger"><i class="fa fa-minus-circle"></i></button></td>';
        html += '</tr>';

        $('#images tbody').append(html);

        image_row++;
    });

    $(".delete-image-row").click(function(){

        var tr_id = $(this).data('tr-id');

        $.ajax({
            url: 'ManageProduct/deleteProductImage',
            type : 'POST',
            data : {'image_id':$(this).data('id')},
            success: function(data) {
                $("#"+tr_id).remove();
            }
        });
    });


    

});






$(document).on("change","#product-image-form input:file, #image ",function(){

    //Get reference of FileUpload.

    var _this = $(this);

    var fileUpload = document.getElementById($(this).attr('id'));
    //Check whether the file is valid Image.
  
        
        //Check whether HTML5 is supported.
        if (typeof (fileUpload.files) != "undefined") {
            //Initiate the FileReader object.
            var reader = new FileReader();
            //Read the contents of Image File.
            reader.readAsDataURL(fileUpload.files[0]);
            reader.onload = function (e) {
                //Initiate the JavaScript Image object.
                var image = new Image();
 
                //Set the Base64 string return from FileReader as source.
                image.src = e.target.result;
                
                //Validate the File Height and Width.
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
          
                    if (height == 720 && width == 600) {
                        return true;
                    }else{
                        fileUpload.value = "";

                        if(_this.attr('name')=="filename"){
                            _this.next().next().text("Height and Width must be match given dimensions(720 x 600)");

                        }else{

                            _this.closest('.text-left').next().find('i').text("Height and Width must be match given dimensions (600px x 720px)");

                        }

                        
                     
                        return false;
                    }
                    return true;
                };
 
            }
        } else {
            alert("This browser does not support HTML5.");
            fileUpload.value = "";
            return false;
        }
   
    
})