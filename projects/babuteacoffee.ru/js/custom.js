
$(document).ready(function(){
  	AOS.init();
  	$('#menu_btn').click(function(){
	    $('body,html').toggleClass('menu-open');
	});
})
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