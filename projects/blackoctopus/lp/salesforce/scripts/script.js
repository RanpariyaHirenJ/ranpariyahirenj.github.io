(function ($) {
    'use strict';
    var $window = $(window);
    // :: Accordian Active Code
    (function () {
        var dd = $('dd');
        dd.filter(':nth-child(n+3)').hide();
        $('dl').on('click', 'dt', function () {
            $("dt.v2.wave").removeClass('active')
            $(this).next().slideDown(500).siblings('dd').slideUp(500);
            $(this).addClass('active')
        })
    })();

})(jQuery);

$(document).ready(function () {
    $('.fgroup input[type=text],.fgroup select,.fgroup textarea').on('focus', function () {
        $(this).closest('.fgroup').addClass('in');
    }).on('blur', function () { 
        if ($(this).val() == '') {
            $(this).closest('.fgroup').removeClass('in');
        }
        else {

        }
    });
	
	var swiper = new Swiper('.testimonial-slider', {
	  slidesPerView: 1,
	  slidesPerGroup: 1,
	  loop: true,
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	  },
	});
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 550) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});

	//*******Form Validation*********


});


function form_validate_jquery(container)
{
	var return_state = true;	

	$(container).find("input, select, textarea, checkbox,  file " ).each(function(){
			
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
		}
	})

   return return_state;

	// if(return_state){


 //               	// overlayBox('loader');
 //    	var formData = $('form').serializeArray();
	//     $.ajax({
 //            url: 'inc/contact.php',
 //            type : 'POST',
 //            async : true,
 //            data : formData,
 //            beforeSend: function(){
		     
	// 	    },
	// 	    complete: function(){
		    
	// 	    },
 //            success: function(data) {
 //            	   // $("#loader").hide(); 
	// 		        grecaptcha.reset();
	// 		        $(container).find('.g-recaptcha').next('span').remove();	
	// 				console.log(formData);
	// 			    $(container).find("input, textarea, select").val('');
	// 			    $(container).find("input, textarea, select").removeAttr('style');
	// 			    // if(container == "#order-now"){
	// 			    // 	$("#order-now").fadeOut();
	// 			    // }else{
	// 			    // 	$("#get-enquiry").fadeOut();
	// 			    // }
				    
	// 				// overlayBox('successfully');
 //            }
 //        });
			  

	// 	return false;
	
	// }else{
	// 	return false;
	// }

	
	// $("#loader").fadeOut();
	
	
}


$("#submit").click(function(){
					
	if(form_validate_jquery("#send_enquiry")){

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
            	console.log(data);
            	   // $("#loader").hide(); 
			        // grecaptcha.reset();
			  //       $(container).find('.g-recaptcha').next('span').remove();	
					// console.log(formData);
					$("#send_enquiry").find("input").parent().removeClass('in');
				    $("#send_enquiry").find("input").val('');
				    $("#send_enquiry").find("input").attr('placeholder','');
				    $("#send_enquiry").find("input").removeAttr('style');

				    window.location.href = "http://staging.intermind.in/academia/html/thank-you.html"
				
				    
					// overlayBox('successfully');
            }
        });
	}

	return false;

});