(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

	$('.info-bar').on('click', function () {
		$('.extra-info').addClass('info-open');
	})

	$('.close-icon').on('click', function () {
		$('.extra-info').removeClass('info-open');
	})


	// sticky
	var wind = $(window);
	var sticky = $('#sticky-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

// data - background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})



	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,			
				customPaging: function (slider, i) {
					var title = $(slider.$slides[i]).data('title');
					return '<span class="dots__item">' + title + '</span>';
				},
				dotsClass: 'slick-dots',
			fade: true,
			prevArrow: '<button type="button" class="slick-prev"> <i class="far fa-chevron-left"></i> </button>',
			nextArrow: '<button type="button" class="slick-next"> <i class="far fa-chevron-right"></i> </button>',
			arrows: true,
			responsive: [
				{ breakpoint: 767, settings: { dots: true, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();



	

/* project-acive */
$('.project-active').owlCarousel({
    stagePadding: 380,
    loop:true,
	center: true,
    nav:true,
	dots:true,
	autoplay:false,
	items:1,
	navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
    responsive:{
        0:{
            stagePadding: 0,
			items: 1,
			nav: false,
        },
        768:{
            items: 2,
            stagePadding: 0,

        },
        992:{
            items: 2,
            stagePadding: 0,

        },
        1200:{
			stagePadding: 380,
        },
        1500:{
			stagePadding: 430,
        }
    }
})

/* testimonial-active */
$('.testimonial-active').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin:0,
	autoplay: false,
	navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 1,
			nav: false,
		},
		992: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
})
/* client-active */
$('.client-active').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin:0,
	autoplay: false,
	navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 2,
			nav: false,
		},
		992: {
			items: 3
		},
		1200: {
			items: 3
		}
	}
})


/* brand-active */
$('.brand-active').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	autoplay: true,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	responsive: {
		0: {
			items: 3
		},
		576: {
			items: 3
		},
		768: {
			items: 3
		},
		992: {
			items: 4
		},
		1200: {
			items: 5
		}
	}
})	

/* testimonial-2-active */
$('.testimonial-2-active').owlCarousel({
	loop: true,
	nav: true,
	dots: true,
	margin:0,
	autoplay: false,
	navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 1,
			nav: false,
		},
		992: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
})


// blog - active
$('.postbox__gallery').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

/* case-active */
$('.case-active').owlCarousel({
	loop: true,
	nav: false,
	dots: true,
	margin:0,
	autoplay: false,
	navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 2,
			nav: false,
		},
		992: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
})

function progressBarScroll() {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
		height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
		scrolled = (winScroll / height) * 100;
	document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
	progressBarScroll();
  };

	/* counter */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});


$('#portfolio-grid').imagesLoaded(function () {
	// init Isotope
	var $grid = $('#portfolio-grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-sizer'
		}
	});
	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});


//for menu active class
$('.portfolio-menu button').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


	// countdown
	$('[data-countdown]').each(function () {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="time-count">%D <span>days</span></div><div class="time-count">%H <span>hour</span></div><div class="time-count">%M <span>minute</span></div><div class="time-count">%S <span>Second</span></div>'));
		});
	});

	/* Circular Progress */
	$('.circular-progress').waypoint(function(){

		$('.circular-progress').easyPieChart({
			lineWidth: 3,
			trackColor: false,
			scaleLength: 0,
			barColor: '#fff'
		});

	}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	});

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

// WOW active
new WOW().init();


	/*-------------------------
		showlogin toggle function
	--------------------------*/
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	/*-------------------------
		showcoupon toggle function
	--------------------------*/
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	/*-------------------------
		Create an account toggle function
	--------------------------*/
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	/*-------------------------
		Create an account toggle function
	--------------------------*/
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});


})(jQuery);


//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
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

                case "file":
             
                    if($(this).val() == "" )
                    {
                        
                        $(this).closest('.file-select').css("border-bottom","2px solid red");
                        $(this).val('');
                        
                        return_state = false;                                                   
                    }else if($(this).val()!=""){
                      
                        var ext_arr = ['pdf','doc','docx']; 
            
                        
                        var ext = $(this).val().split('.').pop().toLowerCase();
                        if($.inArray(ext, ext_arr) == -1) {
                            $(this).val('');
                            $(this).closest('.file-select').css("border-bottom","2px solid red");
                        
                            $(this).closest('.file-select').next().next().text("Invalid file extension. choose .pdf, .docx  file format.");
                           
                            return_state = false;       
                        }else{
                            $(this).closest('.file-select').css("border-bottom","2px solid green");
                            
                            $(this).closest('.file-select').next().next().text($(this).val().split('\\').pop());
                        }
                    }
                    else
                    {
                        $(this).closest('.file-select').css("border","2px solid green");
                        $(this).closest('.file-select').next().next().text($(this).val().split('\\').pop());
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
                        $(this).css("border-bottom","2px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank!")                          
                        return_state = false;
                    }
                    else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
                    {
                        $(this).css("border-bottom","2px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" is not valid email address!")                           
                        return_state = false;
                    }
                    
                    else
                    {
                        $(this).css("border-bottom","2px solid green");
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
                    else if( $(this).val().length < 10 || $(this).val().length > 15 )
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

                 case "mobile-mask":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-bottom","2px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank !")                         
                        return_state = false;
                    }
                    else if($(this).val().length < 14)
                    {
                        $(this).css("border-bottom","2px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" must be 10 digits  !")                           
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


        return return_state;
}

$("#submit").click(function(){

  var container = "#send_enquiry, .contact-us-form";
  if(form_validate_jquery(container)){

      var formData = new FormData($('form')[0]);
      // var formData = $('form').serialize()+ "&files=" + document.getElementById("chooseFile").files[0];
	  //alert('ff');
      $.ajax({
          url: 'inc/contact.php',
          type : 'POST',
          async : true,
          data : formData,
          cache: false,
          contentType: false,
          processData: false,
          success: function(data) {
              // $("#loader").hide();
               // grecaptcha.reset();
               // $(container).find('.g-recaptcha').next('span').remove();
 
               $(container).find("input[validation], textarea").val('');
               $(container).find("input[validation], textarea[validation]").removeAttr('style');
               // $(container).find('.file-select').next().next().text('Please upload only.pdf, .docx file format.');
     
               alert("Thanks for contacting with us.We will be contact you shortly. Thanks.");
              
               //overlayBox('thankyoumsg');
          }
      });
           

  }

  return false;

}); 