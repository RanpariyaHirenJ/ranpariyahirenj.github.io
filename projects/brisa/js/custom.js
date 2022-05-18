
$(document).ready(function () {
    AOS.init();
    // 	$('#menu_btn').click(function(){
    //    $('body,html').toggleClass('menu-open');
    //});
    ///*$('body,html').click(function(){
    //	if($("body,html").attr("class") == 'menu-open'){
    //		alert($("body").attr("class"));
    //		$('body,html').removeClass("menu-open");
    //	}
    //});*/
    //$(':not(.menu-open)').click(function(){

    //	if($("body,html").attr("class") == 'menu-open'){
    //		//alert($("body").attr("class"));
    //		$('body,html').removeClass("menu-open");
    //	}
    //	//$('body,html').removeClass('.menu-open');
    //});

    /*Menu hide show functionality*/
    $('#menu_btn').click(function () {        
        $('body,html').toggleClass('menu-open');  
		$("header").click(function( event ) {
		  event.stopImmediatePropagation();
		});                      
    });
        
    $('body').click(function (e) {
        
        var target = $(e.target);

        if (!target.is('.menu_btn_br')) {

            if ($('body,html').attr("class") === 'menu-open') {
                $('body,html').toggleClass('menu-open');
            }                        
        }
    });

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.send-enquiery-btn').fadeIn();
        $('.nav').addClass('fixed');
    } else {
        $('.send-enquiery-btn').fadeOut();
        $('.nav').removeClass('fixed');
    }
});
window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;

  if (offset === height) {
        $('.send-enquiery-btn').fadeOut();
  }
};

$(window).load(function() {
	
	$('#formsub').click( function() {
		$('#submit').trigger("click");
	})
	
	$("#section_1 .container").css("display", "block")
	
        $('.slider').on('init', function(e, slick) {
            var $firstAnimatingElements = $('div.slider-row:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        $('.slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('div.slider-row[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
		
			$('.slider').slick({
				autoplay: true,
				infinite: true,
				speed: 1500,
				autoplaySpeed: 1000,
				dots: true,
				fade: true,
				pauseOnHover: false,
				touchEnabled:true,
				responsive: [
				{
				  breakpoint: 768,
				  settings: { 
					slidesToShow: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1
				  }
				}
			  ]
			});
		
		/*if ($(window).width() < 1024) {
			$('.slider').slick({
				autoplay: true,
				speed: 1000,
				infinite: true,
				autoplaySpeed: 1000,
				dots: true,
				fade: true,
				pauseOnHover: false,
				touchEnabled:true,
			});
			$(".slider-Large-txt").removeAttr("data-animation").removeAttr("data-delay");
		}*/
		$('.slick-dots').on('click', function() {
			//alert("hello")
			//$('.autoplay').slick('slickPause');
			//alert("hello")
			$('.autoplay').slick('slickPlay');
		});
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }

	$('.bottom-slider').slick({ slidesToShow: 1,
	  slidesToScroll: 1,
		autoplay: false,
		infinite: true,
		centerMode: true,
		speed: 1000,
		autoplaySpeed: 2000,
		dots: true,
		fade: false,
		pauseOnHover: false,
		touchEnabled:true,variableWidth: true,
		responsive: [
		{
		  breakpoint: 768,
		  settings: { 
			infinite: false,
			centerMode: false,
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});

/*if ($(window).width() < 1024) {
	$('.bottom-slider').slick({ slidesToShow: 1,
	  slidesToScroll: 1,
		autoplay: false,
		infinite: false,
		centerMode: false,
		speed: 1000,
		autoplaySpeed: 2000,
		dots: true,
		fade: false,
		pauseOnHover: false,
		touchEnabled:true,
	});
}*/

}) 

/*
$(window).load(function() {

	$('.updates-slider-slider').slick({ 
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
		infinite: false,
		centerMode: false,
		speed: 1000,
		autoplaySpeed: 2000,
		dots: false,
		fade: false,
		arrows: true,
		pauseOnHover: false,
		touchEnabled:true,
		responsive: [
		{
		  breakpoint: 768,
		  settings: { 
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});
/*if ($(window).width() < 1024) {
$('.updates-slider-slider').slick({ 
	slidesToShow: 1,
  	slidesToScroll: 1,
	autoplay: false,
	infinite: false,
	centerMode: false,
	speed: 1000,
	autoplaySpeed: 2000,
	dots: false,
	fade: false,
	arrows: true,
	pauseOnHover: false,
	touchEnabled:true,
});
}

}) */
	
/*
var leftItem = document.getElementById('title2'),
    rightItem = document.getElementById('title1');
    leftserviceItem = document.getElementById('service-title1');
    rightserviceItem = document.getElementById('service-title2');
    updatesItem = document.getElementById('updatesItem-title');

(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  
  leftItem.style.transform = "translateX(" + window.pageYOffset/100 + "%)";
  rightItem.style.transform = "translateX(-" + window.pageYOffset/100 + "%)";
  leftserviceItem.style.transform = "translateX(-" + window.pageYOffset/50 + "%)";
  rightserviceItem.style.transform = "translateX(" + window.pageYOffset/50 + "%)";
  updatesItem.style.transform = "translateX(-" + window.pageYOffset/10 + "%)";
  
//alert(pageYOffset)
})

var SensorsItem = document.getElementById('Sensors');
	Data_LoggingItem = document.getElementById('Data_Logging');
	talkItem = document.getElementById('talk');
    leftProduct_DevelopmentItem = document.getElementById('Product_Development1');
    rightProduct_DevelopmentItem = document.getElementById('Product_Development2');

(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  
  SensorsItem.style.transform = "translateX(-" + window.pageYOffset/50 + "%)";
  Data_LoggingItem.style.transform = "translateX(" + window.pageYOffset/50 + "%)";
  talkItem.style.transform = "translateX(-" + window.pageYOffset/50 + "%)";
  leftProduct_DevelopmentItem.style.transform = "translateX(-" + window.pageYOffset/10 + "%)";
  rightProduct_DevelopmentItem.style.transform = "translateX(" + window.pageYOffset/10 + "%)";
  
//alert(pageYOffset)
})



var LifecycleManagementItem = document.getElementById('Lifecycle-Management');

(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  
  LifecycleManagementItem.style.transform = "translateX(-" + window.pageYOffset/50 + "%)";
  
//alert(pageYOffset)
})*/