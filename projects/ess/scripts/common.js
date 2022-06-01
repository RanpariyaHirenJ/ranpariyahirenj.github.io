AOS.init({
//  Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//  offset: 120, // offset (in px) from the original trigger point
//  delay: 0, // values from 0 to 3000, with step 50ms
//  duration: 1500, // values from 0 to 3000, with step 50ms
//  easing: 'ease', // default easing for AOS animations
//  once: false, // whether animation should happen only once - while scrolling down
//  mirror: false, // whether elements should animate out while scrolling past them
//  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  }
});

$(window).load(function(){
	$('.start-page').fadeOut();
})

	
$(document).ready(function(){
	if ($(window).width() < 1023){}	
});

$(function() {
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

    if ($(window).width() > 1023){
        $(window).load(function () {
          var liMaxHeight = -1;
            var node;
            $(".layer3 div.bg-white").each(function(index) {
                if ($(this).outerHeight() > liMaxHeight) {
                    liMaxHeight = $(this).outerHeight();
                    node = index;
                }
            });
        
            $('.layer3 div.bg-white').css('min-height', liMaxHeight);
            /Maximum height li/
        })
    }	



   
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
                         $(this).attr("placeholder", title)
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

                    var emailblockReg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!rediff.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
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
                    else if(!emailblockReg.test($(this).val()) && $(this).data('email-validate')) {
                      
                       $(this).css("border-color","red");
                        $(this).val('');
                        $(this).attr("placeholder", " Please enter your company ID!")                           
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
                    else if($(this).val().length < 10 || $(this).val().length > 15)
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

                case "file":
             
                    if($(this).val() == "" )
                    {
                        
                        $(this).closest('.file-select').css("border-bottom","1px solid red");
                        $(this).val('');
                        
                        return_state = false;                                                   
                    }else if($(this).val()!=""){
                      
                        var ext_arr = ['pdf','doc','docx']; 
            
                        
                        var ext = $(this).val().split('.').pop().toLowerCase();
                        if($.inArray(ext, ext_arr) == -1) {
                            $(this).val('');
                            $(this).closest('.file-select').css("border-bottom","1px solid red");
                        
                            $(this).closest('.file-select').next().next().text("Invalid file extension. choose .pdf, .docx  file format.");
                           
                            return_state = false;       
                        }else{
                            $(this).closest('.file-select').css("border-bottom","1px solid green");
                            
                            $(this).closest('.file-select').next().next().text($(this).val().split('\\').pop());
                        }
                    }
                    else
                    {
                        $(this).closest('.file-select').css("border","1px solid green");
                        $(this).closest('.file-select').next().next().text($(this).val().split('\\').pop());
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

       return return_state;

        // if(return_state){


     //                 // overlayBox('loader');
     //     var formData = $('form').serializeArray();
        //     $.ajax({
     //            url: 'inc/contact.php',
     //            type : 'POST',
     //            async : true,
     //            data : formData,
     //            beforeSend: function(){
                 
        //      },
        //      complete: function(){
                
        //      },
     //            success: function(data) {
     //                // $("#loader").hide(); 
        //              grecaptcha.reset();
        //              $(container).find('.g-recaptcha').next('span').remove();    
        //              console.log(formData);
        //              $(container).find("input, textarea, select").val('');
        //              $(container).find("input, textarea, select").removeAttr('style');
        //              // if(container == "#order-now"){
        //              //  $("#order-now").fadeOut();
        //              // }else{
        //              //  $("#get-enquiry").fadeOut();
        //              // }
                        
        //              // overlayBox('successfully');
     //            }
     //        });
                  

        //  return false;
        
        // }else{
        //  return false;
        // }

        
        // $("#loader").fadeOut();
        
        
    }


$(document).on('change','input:file',function(){
    $(this).prev().text($(this).val().split(/[\\]+/).pop()?$(this).val().split(/[\\]+/).pop():'No file chosen...');
});

$(document).ready(function(){

    var script ="";
    script += '<script type="text/javascript">';
    script += '_linkedin_partner_id = "3370252";';
    script += 'window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];';
    script += 'window._linkedin_data_partner_ids.push(_linkedin_partner_id);';
    script += '</script><script type="text/javascript">';
    script += '(function(l) {';
    script += 'if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};';
    script += 'window.lintrk.q=[]}';
    script += 'var s = document.getElementsByTagName("script")[0];';
    script += 'var b = document.createElement("script");';
    script += 'b.type = "text/javascript";b.async = true;';
    script += 'b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";';
    script += 's.parentNode.insertBefore(b, s);})(window.lintrk);';
    script += '</script>';
    script += '<noscript>';
    script += '<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=3370252&fmt=gif" />';
    script += '</noscript>';

    $('.footer').after(script);
});