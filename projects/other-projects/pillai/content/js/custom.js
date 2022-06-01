$(document).ready(function () {
           

$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});




            $(".navbar-toggler .navbar-toggler-icon .bar-icon").click(function(){
            	$(this).css("display","none");
            	$(".navbar-toggler .navbar-toggler-icon .close-icon").css("display","block");
            	$("header .navigation-bar ").slideDown();
            });
            $(".navbar-toggler .navbar-toggler-icon .close-icon").click(function(){
            	$(this).css("display","none");
            	$(".navbar-toggler .navbar-toggler-icon .bar-icon").css("display","block");
            	$("header .navigation-bar ").slideUp();
            });
         
             
});