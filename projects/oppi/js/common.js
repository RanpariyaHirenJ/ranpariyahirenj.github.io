/*
$('.menu-button').click(function () {
	$('#nav-wrap,.menu-button').toggleClass('active');
});

$('header ul li.hasSubmenu a').click(function () {
	$('header ul li .submenu').toggle().css('display');
});
*/

$(document).ready(function () {	
	$('.menu-button').click(function () {
		$('#nav-wrap,.menu-button').toggleClass('active');
	});
	
	if($(window).width()<1024){
		$('header ul li .submenu').css('display', 'none');
		$('header ul li.hasSubmenu a').click(function () {
			$(this).parent().toggleClass("active");
			$(this).next().toggle().css('display');
		});
	}
});
