AOS.init({
    startEvent: 'load',
    //disable: 'mobile',
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });

$(window).load(function(){
	$('.loader').fadeOut();
})
$(document).ready(function(){
	if ($(window).width() < 1023){        
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('ul.menuR.mobrmenu').fadeIn();
            } else {
                $('ul.menuR.mobrmenu').fadeOut();
            }
        });
    }	
});

$(function() {
	
    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
	
    $(window).scroll(function() {
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
    
    $('.scrollTop a').click(function() {
    //$(document).on('click', '.scrollTop a', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
	
	
    $('.toggle-btn').click(function() {
        if ($('.wrapper').hasClass('opened')) {
            $('.wrapper').removeClass('opened');
        } else {
            $('.wrapper').addClass('opened');
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

   
});

function form_validate_jquery(container)
    {
        var return_state = true;    

        $(container).find("input, select, textarea, .g-recaptcha" ).each(function(){
                
            var title = $(this).attr("title");      
         
            switch($(this).attr("validation"))
            {
                case "text":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                    
                        $(this).css("border-bottom","2px solid red");
                        
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank!");
                        
                        return_state = false;                                                   
                    }
                    else
                    {
                         $(this).css("border-bottom","2px solid green");
                        
                        $(this).attr("placeholder", title+'*')
                    }
                break;

                case "string":
              
                    if ($(this).val() == "") {
                         $(this).css("border-bottom","2px solid red");
                        $(this).val("");
                        $(this).attr("placeholder", title+" cannot be blank!")
                        return_state = false;
                    } else if (!/^[a-zA-Z ]*$/g.test($(this).val())) {
                         $(this).css("border-bottom","2px solid red");
                        $(this).val("");
                        $(this).attr("placeholder", "Only Alphabets should allowed here.");
                        return_state = false;
                    } else {
                         $(this).css("border-bottom","2px solid green");
                         $(this).attr("placeholder", title+'*');
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
                        $(this).attr("placeholder", title+'*');
                    }
                break;
                
                case "mobile":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-bottom","2px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank !")                         
                        return_state = false;
                    }
                    else if(isNaN($(this).val()))
                    {
                        $(this).css("border-bottom","2px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" should be numeric !")                           
                        return_state = false;
                    }
                    else if($(this).val().length < 10)
                    {
                        $(this).css("border-bottom","2px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" must be 10 digits !")                           
                        return_state = false;
                    }
                    else
                    {
                       $(this).css("border-bottom","2px solid green");
                         $(this).attr("placeholder", title+'*');
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
        })


        if(return_state){


                     // overlayBox('loader');
         var formData = $('form').serializeArray();
            $.ajax({
                url: 'inc/contact.php',
                type : 'POST',
                async : true,
                data : formData,
                beforeSend: function(){
                 
             },
            complete: function(){
                
             },
            success: function(data) {
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
        
        }else{
         return false;
        }

        
        $("#loader").fadeOut();
        
        
    }

