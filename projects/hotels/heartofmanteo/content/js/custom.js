$(document).ready(function(){
	$(".click-menu-bar .open").click(function(){
		$(".click-menu-bar .open").css('display','none');
		$(".click-menu-bar .close").css('display','block');
		$(".main_menu").slideDown("slow");
	});
	$(".click-menu-bar .close").click(function(){
		$(".click-menu-bar .close").css('display','none');
		$(".click-menu-bar .open").css('display','block');
$(".main_menu").slideUp("slow");
	});


	$(".top-bar-menu  .open-mobile").click(function(){
		$(".top-bar-menu .mobile-view").slideDown("slow");
		$(".bar-mobile .open-mobile").css('display','none');
		$(".bar-mobile .close-mobile").css('display','block');
	});
	$(".top-bar-menu  .close-mobile").click(function(){
		$(".top-bar-menu .mobile-view").slideUp("slow");
		$(".bar-mobile .close-mobile").css('display','none');
		$(".bar-mobile .open-mobile").css('display','block');
	});


$(".slider-list #slider-1").on('click', function(event) { 
    event.preventDefault(); 
    $(".fnc-nav__controls .fnc-nav__control-1").click(); 
    $(".slider-list #slider-1").addClass("active");
     $(".slider-list #slider-2").removeClass("active");
      $(".slider-list #slider-3").removeClass("active");
       $(".slider-list #slider-4").removeClass("active");
});
$(".slider-list #slider-2").on('click', function(event) { 
    event.preventDefault(); 
    $(".fnc-nav__controls .fnc-nav__control-2").click(); 
     $(".slider-list #slider-2").addClass("active");
     $(".slider-list #slider-1").removeClass("active");
     $(".slider-list #slider-3").removeClass("active");
      $(".slider-list #slider-4").removeClass("active");
});
$(".slider-list #slider-3").on('click', function(event) { 
    event.preventDefault(); 
    $(".fnc-nav__controls .fnc-nav__control-3").click(); 
     $(".slider-list #slider-3").addClass("active");
     $(".slider-list #slider-1").removeClass("active");
     $(".slider-list #slider-2").removeClass("active");
      $(".slider-list #slider-4").removeClass("active");
});
$(".slider-list #slider-4").on('click', function(event) { 
    event.preventDefault(); 
    $(".fnc-nav__controls .fnc-nav__control-4").click(); 
     $(".slider-list #slider-4").addClass("active");
     $(".slider-list #slider-1").removeClass("active");
     $(".slider-list #slider-2").removeClass("active");
      $(".slider-list #slider-3").removeClass("active");
});

  AOS.init({
  	 once: true
  });

//  $(window).on('load',function () {
//     $('.first-text').fadeTo(5000, 0, function () {
//         $(this).delay(900);
//         $(this).html(' <h1 class="second-text">Enjoy modest living at the Heart of Manteo</h1>');
//         $(this).fadeTo(900, 1);
//     });
// });


$(".fnc-nav .fnc-nav__controls button").click(function() { 
  $(this).dblclick(); 
});


$(window).scroll(function(){
  var sticky = $('.top-bar-menu'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.booknow-btn-mobile').addClass('newClass');
    } else {
       $('.booknow-btn-mobile').removeClass('newClass');
    }
});



 $(".cookie-policy p a").click(function(){

  localStorage.setItem("cookie-policy", "true");
  $(".cookie-policy").css("display","none");
 });

 if(localStorage.getItem("cookie-policy")!=undefined && localStorage.getItem("cookie-policy")!=null){
  $(".cookie-policy").css("display","none");
 }


});
