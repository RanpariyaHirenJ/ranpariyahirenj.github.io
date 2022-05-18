
AOS.init();

//var ConHeight = $('.fixed_cont').height();
//$('header').css('width', winWidth);
//$('header').css('margin-bottom', ConHeight);
$('.hamburger').click(function(){
	$(this).toggleClass('is-active');
	$('#main_nav > ul').slideToggle();
});
$('#main_nav li').click(function(){
	$(this).children('ul').toggleClass('active');
});
$('.tab_nav li').click(function(){

	$('.tab_content:visible').addClass('fadeOutUp').removeClass('fadeInUp');
	var tabIndex = $(this).index();
	$('.tab_nav li').removeClass('active');
	$(this).addClass('active');
	$('.tab_content').eq(tabIndex).delay(100).addClass('fadeInUp');
	$('.tab_content').eq(tabIndex).delay(200).addClass('animated');
	$('.tab_content').delay('500').removeClass('active fadeOutUp');
	
});
if($(window).width() < 800){
	$('.tab_content_wrap').css('height','auto');
}
$(document).ready(function(){
  var liMaxHeight = -1;
    var node;
    $(".landing-page-header-cntr").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });
	$('.scrol').click(function(){
		$('body,html').animate({scrollTop:liMaxHeight},800)
	})
});
$(document).ready(function() {
//	var winWidth = $(window).width();
if ($(window).width() > 1024) {
	$(window).scroll(function(){
		var fromtop = $(window).scrollTop();
	    if($(document).scrollTop() > 300)
	    {
	    	$('#header_top').addClass('fixed');
	    }
	    else
	    {
	    	$('#header_top').removeClass('fixed');
	    }
		
	    var headOpacity = 1 - fromtop/250
	    $('#banner-logo').css('opacity', headOpacity)
	});
}
	
	
if ($(window).width() < 1024) {
	$(window).scroll(function(){
		var fromtop = $(window).scrollTop();
	    if($(document).scrollTop() > 50)
	    {
	    	$('#header_top').addClass('fixed');
	    }
	    else
	    {
	    	$('#header_top').removeClass('fixed');
	    }
	});
}
	
	
	
	if($(document).scrollTop() > 300)
	{
		$('#header_top').addClass('fixed');
	}
});	/*Animate label form*/
	$('#hamburger').click(function(){
	$("#header_top").addClass('menu_fixed');
    if($(this).hasClass('is-inactive'))
    { 
      $(this).removeClass('is-inactive');
      $(this).addClass('is-active');
		$("#main_nav ul.main_nav_ul").addClass('active');
		$('#main_nav li.active').addClass('down-arrow');
		$('.closeNavBar').addClass('openNavBar');
		$('.pageNavigation').addClass('openRound');
     	$('.closeNavBar').css('z-index','98')
    } 
    else
    { $(this).removeClass('is-active');
      $(this).addClass('is-inactive');
		$("#main_nav ul.main_nav_ul").addClass('active');
		$("#main_nav ul.main_nav_ul.active").addClass('overflow');
		$('#main_nav li.active').removeClass('down-arrow');
			$('.closeNavBar').removeClass('openNavBar');
			$('.pageNavigation').removeClass('openRound');
			setTimeout(function(){ 
			$('.closeNavBar').css('z-index','-1') 
	  	$("#header_top").removeClass('menu_fixed');
			}, 1000);
      
    }
  });
  
  
	$('.navmenu-icon').click(function(){
	  	$("#header_top").addClass('menu_fixed');
    if($("#hamburger").hasClass('is-inactive'))
    { 
      $("#hamburger").removeClass('is-inactive');
      $("#hamburger").addClass('is-active');
	  	$("#header_top").addClass('menu_fixed');
		$("#main_nav ul.main_nav_ul").addClass('active');
		$('#main_nav li.active').addClass('down-arrow');
		$('.closeNavBar').addClass('openNavBar');
		$('.pageNavigation').addClass('openRound');
     	$('.closeNavBar').css('z-index','98')
    } 
    else
    { $("#hamburger").removeClass('is-active');
      $("#hamburger").addClass('is-inactive');
		$("#main_nav ul.main_nav_ul").addClass('active');
		$("#main_nav ul.main_nav_ul.active").addClass('overflow');
		$('#main_nav li.active').removeClass('down-arrow');
			$('.closeNavBar').removeClass('openNavBar');
			$('.pageNavigation').removeClass('openRound');
			setTimeout(function(){ 
			$('.closeNavBar').css('z-index','-1') 
	  	$("#header_top").removeClass('menu_fixed');
			}, 1000);
      
    }
  });
  $('.hamburger').click(function(){
    if($(this).hasClass('is-inactive'))
    {
      $(this).removeClass('is-inactive');
      $(this).removeClass('is-active');
      $('.mobileNav').removeClass('menubaropen');
    }
    else
    { $(this).addClass('is-active');
      $(this).addClass('is-inactive');
      $('.mobileNav').addClass('menubaropen');
    }
  });