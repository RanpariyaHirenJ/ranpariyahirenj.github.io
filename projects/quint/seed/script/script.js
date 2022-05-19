
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
	
  })(jQuery);



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


