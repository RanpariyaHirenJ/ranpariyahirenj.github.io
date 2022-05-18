AOS.init({
  startEvent: 'load',
  disable: 'mobile'
});
$(window).load(function(){
	$('.loader').fadeOut();
})	
$(document).ready(function(){
	if ($(window).width() < 1023){}	
});

  $(document).ready(function () {
            $(document).on('focus','.fgroup input[type=text],.fgroup select,.fgroup textarea', function () {
                $(this).closest('.fgroup').addClass('in');
            }).on('blur', function () {
                if ($(this).val() == '') {
                    $(this).closest('.fgroup').removeClass('in');
                }
            });
        });

$(function() {	
    // $('.toggle-menu').click(function() {
    //     //if ($('.toggle-menu').hasClass('is-active')) {
	// 	//$('.toggle-menu').toggleClass("is-active");
	// 	//$(".menu-overlay").toggleClass("active");		
	// 	$('.toggle-menu').toggleClass("is-active");
	// 	if ($('.toggle-menu').hasClass('is-active')) {	
  	// 		$(".menu-overlay").fadeIn("slow");
	// 	}
	// 	else{
  	// 		$(".menu-overlay").fadeOut("slow");
	// 	}
    // });

    $(document).on('click',".overlay.successfully .overlay-box .close-btn a",function(){
      $(".overlay.successfully").fadeOut();
      $(".overlay-bg").fadeOut();
    });

    $.ajax({
        url: 'comman/form.html',
        type : 'POST',
        success: function(data) {
           $('.contactformwrap').replaceWith(data);
           var page = window.location.href;
           page = page.split('/').pop().replace('.html','');

           $('.contactformwrap').find('input[type="hidden"]').val(page);
        }
    });
    
    $('header button').click(function () {
        $('.screen').toggleClass('close');	
        $('.toggle-menu').toggleClass("is-active");
        setTimeout(function(){
            $('header').toggleClass('open');
        }, 400);	
    });
	
    //$('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
    /*$('body').append('<div class="scrolldown text-w">[ <span class="text-p">↑</span> ]</div>');
	
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.scrolldown').fadeIn();
        } else {
            $('.scrolldown').fadeOut();
        }
    });*/
    $(document).on('click', '.scrolldown', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});


  function form_validate_jquery(container)
    {
        var return_state = true;    

        $(container).find("input, select, textarea, .g-recaptcha" ).each(function(){
                
            var title = $(this).attr("title");      
            $(this).parent().addClass("in");
            switch($(this).attr("validation"))
            {               
                case "text":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                    
                        $(this).css("border-color","red");
                        

                        $(this).val('');
                        
                        $(this).attr("placeholder", title+" cannot be blank!")
                        
                        return_state = false;                                                   
                    }
                    else
                    {
                        $(this).css("border-color","green");
                        
                        $(this).attr("placeholder", title)
                    }
                break;
                case "string":
                    if ($(this).val() == $(this).attr("placeholder") || $(this).val() == "") {
                        $(this).css("border-color", "red");
                        $(this).val("");
                        $(this).attr("placeholder", title+" cannot be blank!")
                        return_state = false;
                    } else if (!/^[a-zA-Z ]*$/g.test($(this).val())) {
                        $(this).css("border-color", "red");
                        $(this).val("");
                        $(this).attr("placeholder", "Only Alphabets should allowed here.");
                        return_state = false;
                    } else {
                        $(this).css("border-color", "green");
                    }
                break;
                case "checkbox":
                
                    if($(container).find('input:checkbox:checked').length == 0)
                    {
                        $(this).next().css({"background": "rgba(223, 15, 15, 0.6)"});
                        $('.form_error').show();
                        return_state = false;                                                   
                    }
                    else
                    {   
                        $('.form_error').hide();
                        $(this).next().css({"background": "rgba(0, 0, 0, 0.12)"});
                    }
                break;




                case "textarea":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-color","red");
                        $(this).val('');
                        
                        $(this).attr("placeholder", "This cannot be blank!")
                        
                        return_state = false;                                                   
                    }
                    else
                    {
                        $(this).css("border-color","green");
                        $(this).attr("placeholder", title)
                    }
                break;
            
                case "password":

                    if($(this).val() == "")
                    {
                        $(this).css("border-color","red");
                        $(this).val('');
                        
                        $(this).attr("placeholder", title+" cannot be blank!")
                        
                        return_state = false;                                                   
                    }
                    else if($(this).val().length < 6)
                    {
                        $(this).css("border-color","red");
                        $(this).val('');                    
                        $(this).attr("placeholder", title + " should be min 6 char!")
                        
                        return_state = false;       
                    }
                    else if($(this).attr('match')!="" && $(this).attr('match')!=null && $(this).attr('match')!='undefined'){
                        if($(this).closest(container).find('#'+$(this).attr('match')).val()!=$(this).val())
                        {
                            $(this).css("border-color","red");
                            $(this).val('');                    
                            $(this).attr("placeholder", title+" does not match!")
                            
                            return_state = false;       
                        }else{
                            $(this).css("border-color","green");
                            $(this).attr("placeholder", title)
                        }
                    }
                    else
                    {
                        $(this).css("border-color","green");
                        $(this).attr("placeholder", title)
                    }
                break;
                case "email":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-color","red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank!")                          
                        return_state = false;
                    }
                    else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
                    {
                        $(this).css("border-color","red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" is not valid email address!")                           
                        return_state = false;
                    }
                    
                    else
                    {
                        $(this).css("border-color","green");
                        $(this).attr("placeholder", title)
                    }
                break;
                
                case "mobile":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-color","red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank !")                         
                        return_state = false;
                    }
                    else if(isNaN($(this).val()))
                    {
                        $(this).css("border-color","red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" should be numeric !")                           
                        return_state = false;
                    }
                    else if($(this).val().length < 10)
                    {
                        $(this).css("border-color","red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" must be 10 digits !")                           
                        return_state = false;
                    }
                    else
                    {
                        $(this).css("border-color","green");
                        $(this).attr("placeholder", title)
                    }               
                break;
                case "number":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).prev().addClass('error');
                        $(this).val('');
                        $(this).attr("placeholder", "This cannot be blank!")                            
                        return_state = false;
                    }
                    else if(isNaN($(this).val()))
                    {
                        $(this).prev().addClass('error');
                        $(this).val('');
                        $(this).attr("placeholder", "This is not valid number!")                            
                        return_state = false;
                    }
                    else
                    {
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
        });



       return return_state;



}

$(document).on("click","#submit", function(){
                    
    if(form_validate_jquery("#send_enquiry")){

        var formData = $('form').serializeArray();
        $.ajax({
            url: 'inc/contact.php',
            type : 'POST',
            async : true,
            data : formData,
  
            success: function(data) {
                console.log(data);
                   // $("#loader").hide(); 
                    // grecaptcha.reset();
              //       $(container).find('.g-recaptcha').next('span').remove(); 
                    // console.log(formData);
                  
                    $("#send_enquiry").find(".fgroup").removeClass('in');
                    $("#send_enquiry").find(".fgroup input,textarea").val('');
                    $("#send_enquiry").find(".fgroup input,textarea").attr('placeholder','');
                    $("#send_enquiry").find(".fgroup input,textarea").removeAttr('style');

                  
                    $("#successfully").show();
                    $("#successfully").css('visibility','visible');
            }
        });
    }

    return false;

});



if(window.location.href.indexOf('#success') != -1) {
     alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
}


