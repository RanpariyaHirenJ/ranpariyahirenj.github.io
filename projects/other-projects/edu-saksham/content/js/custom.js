$(document).ready(function(){
// 	var options = {
// 		autoplay:true,
// 		prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
//             nextArrow:"<button type='button' class='slick-next pull-right'></button>"
// 	}
// $('.examples #trigger').on('click', function() {
//   $('.examples #calendar-select').slick('unslick');
//   $('.examples #calendar-select').slick(options);
// });
// $('.examples #calendar-select').on('init', function() {
//   //$('#calendar-select').css("visibility", "visible");
//   //$('.slick-initialized').css("visibility", "visible");
// });
// $('.examples #calendar-select').slick(options);





 
	 $(".mobile-bar .bar").click(function(){
    $(".middle-header").animate({right: '0'});
    $(".mobile-overlay").css("display","block");
  });

	  $(".middle-header .close-btn-mobile").click(function(){
    $(".middle-header").animate({right: '-100%'});
    $(".mobile-overlay").css("display","none");
  });
	    $(".mobile-overlay").click(function(){
    $(".middle-header").animate({right: '-100%'});
    $(".mobile-overlay").css("display","none");
  });


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".fixed-header").addClass("fixed");
        $(".question-list .left-content").css("top","112px");
         $(".question-list .right-content").css("top","112px");
    } else {
        $(".fixed-header").removeClass("fixed");
         $(".question-list .left-content").css("top","0");
         $(".question-list .right-content").css("top","0");
    }
});
$(window).scroll(function() {    
    var scroll1 = $(window).scrollTop();

    if (scroll1 >= 100) {
        $(".new-dashboard").addClass("fixed");
    } else {
        $(".new-dashboard").removeClass("fixed");
    }
});



$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0},100);
});
$(".full-screen a .full-icon").click(function(){
	$("body").addClass("full-screen");
});
$(".full-screen a .zoom-out").click(function(){
	$("body").removeClass("full-screen");
});

$(".select-drop ").click(function(){
	$(".mobile-select-option").addClass("select-overlap");
});
$(".mobile-select-option .view-book").click(function(){
	$(this).toggleClass("open-div");
	// $(".mobile-select-option .view-book .select-view .view-b").css("display","none");
	// $(".mobile-select-option .view-book .select-view .more-option-book").css("display","flex");
});
$(".mobile-select-option .select-chapter").click(function(){
	$(this).toggleClass("open-div");
	// $(".mobile-select-option .view-book .select-view .view-b").css("display","none");
	// $(".mobile-select-option .view-book .select-view .more-option-book").css("display","flex");
});
// $(".mobile-select-option .view-book").click(function(){
// 	$(".mobile-select-option .view-book .select-view .view-b").css("display","none");
// 	$(".mobile-select-option .view-book .select-view .more-option-book").css("display","flex");
// });
// $(".mobile-select-option .view-book .select-view .more-option-book").click(function(){

// 	$(".mobile-select-option .view-book .select-view .view-b").css("display","block");
// 	 $(".mobile-select-option .view-book .select-view .more-option-book").css("display","none");
// });

// $(".mobile-select-option .select-chapter").click(function(){
// 	$(".mobile-select-option .select-chapter .select-view .view-b").css("display","none");
// 	$(".mobile-select-option .select-chapter .select-view .list-chapeter-book").css("display","block");
// });
// $(".mobile-select-option .select-chapter .select-view .list-chapeter-book").click(function(){

// 	// $(".mobile-select-option .select-chapter .select-view .view-b").css("display","block");
// 	//  $(".mobile-select-option .select-chapter .select-view .list-chapeter-book").css("display","none");
// 	alert("hi");
// 	$(this).css("display","none");
// });


var winW = $(window).width();
if (winW < 1023) {

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".top-header").addClass("fixed");
    } else {
        $(".top-header").removeClass("fixed");
    }
});
}


// function randomImage(){
//   var images = [
//    'https://download.unsplash.com/photo-1430916273432-273c2db881a0',
//    'https://download.unsplash.com/photo-1428278953961-a8bc45e05f72',
//    'https://download.unsplash.com/photo-1429277005502-eed8e872fe52'];
//   var size = images.length;
//   var x = Math.floor(size * Math.random());
//   console.log(x);
//   var element = document.getElementsByClassName('home-intro');
//   console.log(element);
//   element[0].style["background-image"] = "url("+ images[x] + ")";
// }

// document.addEventListener("DOMContentLoaded", randomImage);
var classes = ["first-img", "second-img","third-img"];

$(".main-body").each(function(){
    $(this).addClass(classes[~~(Math.random()*classes.length)]);
});


var selector = '.choose-answer .form-check';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

$("#popup-show").click(function(){
  $(".overlay").css("display","block");
  $(".modal-popup").css("display","block");
});

$(".overlay").click(function(){
  $(".overlay").css("display","none");
  $(".modal-popup").css("display","none");
    $(".recommender-learning").css("display","none");
});


$(".recommender-learning .content-learning .close-icon").click(function(){
    $(".overlay").css("display","none");
  $(".recommender-learning").css("display","none");
});

$(".book-mark").click(function(){
  $(this).toggleClass("slected");
});

$(window).load(function(){
 setTimeout( function () { 

     $(".slider-loader-center").css("display","none");
     $(".popular-books .slider-book").css("overflow","visible");
  }, 100 );
});
});