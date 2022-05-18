(function() {
    if ($(window).width() < 981) {
		$("#navigation li ul").css('display', "none");
    }
    $('#navigation li.dropdown .mobileDropDown').click(function() {
		//alert("hello")
        if ($(window).width() < 981) {
            var subStaus = $(this).next("ul").css('display');
			//alert(subStaus)
            if (subStaus == 'none') {
                //$('.mobileDropDown').show();
                $('#navigation li ul').show();
                $('#navigation li.dropdown').addClass('active');
            } else {
                //$('.mobileDropDown').hide();
                $('#navigation li ul').hide();
                $('#navigation li.dropdown').removeClass('active');
            }
        }
    });
})();

$(document).on('click','.close-pop-ico',function(){
    $(this).closest('.enquiry-overlay').fadeOut();
});

$(function () {

    $.ajax({
        url: 'comman/enquiry.html',
        type : 'POST',
        success: function(data) {

            $('#enquiry').replaceWith(data);
        }
    });

//     $.ajax({
//         url: 'comman/newsletter.html',
//         type : 'POST',
//         success: function(data) {
//           $("#SubscribeNewsletter").replaceWith(data);
//         }
//     });

    $.ajax({
        url: 'comman/footer.html',
        type : 'POST',
        success: function(data) {
          $(".footer").replaceWith(data);
        }
    });

});


//*******Form Validation*********
function form_validate_jquery(container)
{
    //alert("hello");
    var return_state = true;    

    $(container).find("input, select, textarea, checkbox,  file " ).each(function(){
            
        var title = $(this).attr("title");      
    
        switch($(this).attr("validation"))
        {               
            case "text":
                if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                {
                
                    $(this).css("border-color","red");
                    $(this).parent().addClass('in');

                    $(this).val('');
                    
                    $(this).attr("placeholder", title+" cannot be blank!")
                    
                    return_state = false;                                                   
                }
                else
                {
                    $(this).css("border-color","green");
                    $(this).parent().addClass('in');
                    $(this).attr("placeholder", '');
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

            // case "select":
            
            //  if($(container).find('select').val() == "")
            //  {
            //      $(this).css("border-color","red");
            //      $(this).parent('.input-type-select').css("border-color","red");
            //      return_state = false;                                                   
            //  }
            //  else
            //  {   
            //      $(this).parent('.input-type-select').css("border-color","green");
            //      $(this).css("border-color","green");
            //  }
            // break;


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
                    $(this).parent().addClass('in');
                    $(this).attr("placeholder", title+" cannot be blank!")                          
                    return_state = false;
                }
                else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
                {
                    $(this).css("border-color","red");
                    $(this).val('');
                    $(this).parent().addClass('in');
                    $(this).attr("placeholder", title+" is not valid email address!")                           
                    return_state = false;
                }
                
                else
                {
                    $(this).css("border-color","green");
                     $(this).parent().addClass('in');
                    $(this).attr("placeholder", '')
                }
            break;
            
            case "mobile":
                if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                {
                    $(this).css("border-color","red");
                    $(this).val('');
                     $(this).parent().addClass('in');
                    $(this).attr("placeholder", title+" cannot be blank !")                         
                    return_state = false;
                }
                else if(isNaN($(this).val()))
                {
                    $(this).css("border-color","red");
                    $(this).val('');
                     $(this).parent().addClass('in');
                    $(this).attr("placeholder", title+" should be numeric !")                           
                    return_state = false;
                }
                else if($(this).val().length < 10)
                {
                    $(this).css("border-color","red");
                    $(this).val('');
                     $(this).parent().addClass('in');
                    $(this).attr("placeholder", title+" must be 10 digits !")                           
                    return_state = false;
                }
                else
                {
                     $(this).parent().addClass('in');
                    $(this).css("border-color","green");
                    $(this).attr("placeholder", '');
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
        }
    })

    if(return_state){

     
        // if(grecaptcha.getResponse() == "") {
        //     $(".g-recaptcha").next('span').remove();    
        //     $(".g-recaptcha").after('<span style="color: red;font-size:12px">Google captcha is not selected.</span>');
        // } else {
            // overlayBox('loader');
            var formData = $(container).serializeArray();
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
                       //  grecaptcha.reset();
                       //  $(container).find('.g-recaptcha').next('span').remove();    
                        console.log(data);
                        $(container).find("input, textarea, select").val('');
                        $(container).find("input, textarea, select").removeAttr('style');
                        $(container).find("input, textarea, select").parent().removeClass('in');

                        if(container == "#footer-newsletter"){
                            $(container).find('input[name="name"]').attr('placeholder','Name');
                            $(container).find('input[name="email"]').attr('placeholder','Email');
                            $(container).find('input[name="company"]').attr('placeholder','Company');
                        }

                        if(container == "#add-enquiry"){
                            $("#enquiry").fadeOut();
                             $("#successfully").fadeIn();
                        }else if(container == "#newsletter" || container == "#footer-newsletter"){
                            $("#SubscribeNewsletter").fadeOut();
                             $("#successfully-newsletter").fadeIn();
                            
                        }

                       

                }
            });
              
    }

    return false;


    
}