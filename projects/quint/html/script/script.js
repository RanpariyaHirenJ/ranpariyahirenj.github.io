
window.addEventListener('load', () => {
    AOS.init({
		duration: 1000,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
		once: true,
		disable: 'mobile'
	})	
});

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery);

  $('.carousel').on('slid.bs.carousel', function () {
	var carouselData = $(this).data('bs.carousel');
	var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  
	$('.result p')
	  .removeClass('active-p')
	  .eq(currentIndex)
	  .addClass('active-p');
  });



  $(".Checkbox-parent input").on('click',function(){
	var _parent=$(this);
	var nextli=$(this).parent().next().children().children();
	
	if(_parent.prop('checked')){
	   console.log('Checkbox-parent checked');
	   nextli.each(function(){
		 $(this).children().prop('checked',true);
	   });
	  
	}
	else{
	  console.log('Checkbox-parent un checked');
	   nextli.each(function(){
		 $(this).children().prop('checked',false);
	   });
	
	}
  });
  
  $(".Checkbox-child input").on('click',function(){
	
	var ths=$(this);
	var parentinput=ths.closest('div').prev().children();
	var sibblingsli=ths.closest('ul').find('li');
	
	if(ths.prop('checked')){
	  console.log('Checkbox-child checked');
	  parentinput.prop('checked',true);
	}
	else{
	  console.log('Checkbox-child unchecked');
		 var status=true;
	   sibblingsli.each(function(){
		 console.log('sibb');
		 if($(this).children().prop('checked')) status=false;
	   });
		 if(status) parentinput.prop('checked',false);
	}
  });
  
  // show hide accordion
  
  var acc = document.getElementsByClassName("Accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
	  this.classList.toggle("Accordion--active");
	  var panel = this.nextElementSibling;
	  if (panel.style.maxHeight){
		panel.style.maxHeight = null;
	  } else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	  } 
	});
  }

//   function onlyNos(e, t) {
//     try {
//         if (window.event) {
//             var charCode = window.event.keyCode;
//         } else if (e) {
//             var charCode = e.which;
//         } else {
//             return true;
//         }
//         if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//             if (charCode == 45) {
//                 return true;
//             }
//             return false;
//         }
//         return true;
//     } catch (err) {
//         alert(err.Description);
//     }
// }

// //code for block F12 key
// document.onkeydown = function (e) {
// 	//debugger
// 	if (event.keyCode == 123) {
// 		return false;
// 	}
// 	if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
// 		return false;
// 	}
// }
// $(document).ready(function(){
// 	$(document).bind("contextmenu",function(e){
// 		return false;
// 	});
// });

	$(document).ready(function(){
	// Add smooth scrolling to all links
	$(".nav-link").on('click', function(event) {
	
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
	
		// Store hash
		var hash = this.hash;
	
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
		
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
		} // End if
	});
	});


	var Applications = $("#Applications").offset();
	var Roadmap = $("#Roadmap").offset();
	var Team = $("#Team").offset();
	var Partners = $("#Partners").offset();
	var Socials = $("#Socials").offset();
  
  $(document).ready(function() {
	  $(window).scroll(function(){
		  var screenPosition = $(document).scrollTop();
		  if (screenPosition < Roadmap.top) {
			  $( ".Applications" ).addClass( "active" );
			  $(".Roadmap").removeClass("active");
			  $(".Team").removeClass("active");
			  $(".Partners").removeClass("active");
			  $(".Socials").removeClass("active");
		  }
		  if (screenPosition >= Roadmap.top) {
			  $( ".Roadmap" ).addClass( "active" );
			  $(".Team").removeClass("active");
			  $(".Applications").removeClass("active");
			  $(".Partners").removeClass("active");
			  $(".Socials").removeClass("active");
		  }
		  if (screenPosition >= Team.top) {
			  $( ".Team" ).addClass( "active" );
			  $(".Roadmap").removeClass("active");
			  $(".Applications").removeClass("active");
			  $(".Partners").removeClass("active");
			  $(".Socials").removeClass("active");
		  }
		  if (screenPosition >= Partners.top) {
			  $( ".Partners" ).addClass( "active" );
			  $(".Roadmap").removeClass("active");
			  $(".Applications").removeClass("active");
			  $(".Team").removeClass("active");
			  $(".Socials").removeClass("active");
		  }
		  if (screenPosition >= Socials.top) {
			  $( ".Socials" ).addClass( "active" );
			  $(".Roadmap").removeClass("active");
			  $(".Applications").removeClass("active");
			  $(".Partners").removeClass("active");
			  $(".Team").removeClass("active");
		  }
	  });
  
	  $(window).scroll();
	  $(".Applications, .Roadmap, .Team, .Partners, .Socials").click(function() {$(window).scroll();});
  });