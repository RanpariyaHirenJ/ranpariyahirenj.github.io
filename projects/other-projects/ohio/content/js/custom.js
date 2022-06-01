$(document).ready(function () {
         
    // $(document).on("scroll", onScroll);
    
    //smoothscroll
    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
        
    //     $('a').each(function () {
    //         $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');
      
    //     var target = this.hash,
    //         menu = target;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top+2
    //     }, 500, 'swing', function () {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });

(function($) {
  $('header .navigation-bar .navbar-nav .nav-item').mouseover(function() {
    $('.sub-menu',this).stop().slideDown(400, 'linear');
  });
  $('header .navigation-bar .navbar-nav .nav-item, header .navigation-bar .navbar-nav .nav-item .nav-link .sub-menu').mouseout(function() {
    $('header .navigation-bar .navbar-nav .nav-item .sub-menu').stop().slideUp(400, 'linear');
  });
})(jQuery);
 
var headerH = $("header").height();
  $(".top-spacing").css('margin-top',headerH);
 $(window).on('load',function(){
  var headerH = $("header").height();

  $(".top-spacing").css('margin-top',headerH);
 });


$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

            $(".navbar-toggler .navbar-toggler-icon .bar-icon").click(function(){
            	$(this).css("display","none");
            	$(".navbar-toggler .navbar-toggler-icon .close-icon").css("display","block");
                $("header .navbar").css("background","#ffffff");
            	$("header .navigation-bar ").slideDown();
            });
            $(".navbar-toggler .navbar-toggler-icon .close-icon").click(function(){
            	$(this).css("display","none");
            	$(".navbar-toggler .navbar-toggler-icon .bar-icon").css("display","block");
                $("header .navbar").css("background","transparent");
            	$("header .navigation-bar ").slideUp();
            });




      
});
