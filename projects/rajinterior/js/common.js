$(function(){
	$('.scrollTop a').click(function(){
		$('body,html').animate({scrollTop:0},800)
	})		
})


  
$(window).load( function(){
setInterval(function(){  
    if ($(this).scrollTop() > 0) {
      $('.header').css("position", "fixed");
      $('.header').css("width", "100%");
    } else {
      $('.header').css("position", "relative");
      $('.header').css("width", "100%");
    }
}, 20);
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.header').css("position", "fixed");
      $('.header').css("width", "100%");
    } else {
      $('.header').css("position", "relative");
      $('.header').css("width", "100%");
    }
  });
});
  
$(window).load( function(){
 	if($(window).width() < 1024){
		 var wind_height= $(window).height();  
		 $(".header + .container").css("height", wind_height -138);
	}
	if($(window).width() > 1367){
		 var wind_height= $(window).height();  
		 $(".bodyCnt").css("min-height", wind_height -222);
		 $(".container").css("min-height", wind_height -140);
	}
});

function overlayBox(popUpId){
	$('.overlay').fadeIn();
	$('#'+popUpId).append('<div class="closeBtn">X</div>')
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var boxHeight = $('#'+popUpId).outerHeight();
	var boxWidth = $('#'+popUpId).outerWidth();
	var marginTB = (winHeight-boxHeight)/ 2;
	var marginLR = (winWidth-boxWidth)/2;
	if(marginTB<0)
	{
		$('#'+popUpId).css('top','30px');
		$('#'+popUpId).css('left',+ marginLR);
		$('#'+popUpId).fadeIn();
	}
	else
	{		
		$('#'+popUpId).css('top',+ marginTB);
		$('#'+popUpId).css('left',+ marginLR);
		$('#'+popUpId).fadeIn();
	}
}

$(document).on('click','.closeBtn',function(){
	$('.overlay,.overlayBox').fadeOut();
});	
if($(window).width() > 1024){
$('#viewAllClients').click(function(){
	var link = $(this);
        $('.clientsListCnt').slideToggle(800,'easeOutExpo', function() {
            if ($(this).is(":visible")) {
                 link.text('HIDE ALL CLIENTS');
				 $('#viewAllClients').addClass('closeBtn')  
				 $(".client .leftBx").css("z-index", -1 ); 
				 $(".clientGallery").css("z-index", -1 );          
            } else {
                 link.text('SHOW ALL CLIENTS');           
				 $('#viewAllClients').removeClass('closeBtn')
				 $(".client .leftBx").css("z-index", 1 );
				 $(".clientGallery").css("z-index", 1 );             
            }      
        });
})
}

if($(window).width() < 1023){
$('#viewAllClients').click(function(){
	var link = $(this);
        $('.clientsListCnt').slideToggle(100,'easeOutExpo', function() {
            if ($(this).is(":visible")) {
                 link.text('HIDE ALL CLIENTS');
				 $('#viewAllClients').addClass('closeBtn')  
				 $(".client .leftBx").css("z-index", -1 ); 
				 $(".clientGallery").css("z-index", -1 );          
            } else {
                 link.text('SHOW ALL CLIENTS');           
				 $('#viewAllClients').removeClass('closeBtn')
				 $(".client .leftBx").css("z-index", 1 );
				 $(".clientGallery").css("z-index", 1 );             
            }      
        });
})
}
/* Zoom Icon for services Section */
$('.servicesImg img').hover(function(){
	
	$(this).parent('.servicesImg').children('.zoom').animate({
		left : 0,		
	},500,'easeInBack')
})

/* Animate */jQuery(document).ready(function(){
if (jQuery().waypoint){
			jQuery('.animate_afc, .animate_afl, .animate_afr, .animate_aft, .animate_afb, .animate_wfc, .animate_hfc, .animate_rfc, .animate_rfl, .animate_rfr').waypoint(function() {

				if ( ! jQuery(this).hasClass('animate_start')){

					var elm = jQuery(this);

					setTimeout(function() {

						elm.addClass('animate_start');

					}, 20);

				}

			}, {offset:'85%', triggerOnce: true});



		}

	}
)
//$('.clientsListCnt').mouseout(function(){
//	$('#viewAllClients').text('SHOW ALL CLIENTS');           
//	$('.clientsListCnt').slideUp();
//})	
$('.clientsLogoCnt ul li a').hover(function(){
	$(this).children('span').animate({
	top:0	
	},500,'easeOutExpo')}, function() {

		// On mouse off remove the class of current
		// Stop any sub-menu animation and set its display to none
		$(this).children('span').animate({
		top:-184	
		},400,'easeInExpo')
	}
)

//$(function(){
//	$('#slider1').bxSlider({mode: 'horizontal',auto: true,autoControls: false,controls:true,pager:false});
//});
$(window).bind("load", function() {
	$('.all').addClass('text-underline')
	$('.clientGallery div').hide()
	$('#slider1').show()
	$('.loader').hide()
	commmon_prop('#slider1');				
});

$(document).ready(function(){
	$(".clientGallery").append("<div class=\"loader\"></div>");	
});

$('.banq').click(function(){
	$('.facality li a').removeClass('text-underline')
	$(this).addClass('text-underline')
	$('.clientGallery div').hide()
	$('#slider2').show()
	commmon_prop('#slider2');
})
$('.all').click(function(){
	$('.facality li a').removeClass('text-underline')
	$(this).addClass('text-underline')
	$('.clientGallery div').hide()
	$('#slider1').show()
	commmon_prop('#slider1');
})
$('.rooms').click(function(){
	$('.facality li a').removeClass('text-underline')
$(this).addClass('text-underline')
	$('.clientGallery div').hide()
	$('#slider3').show()
	commmon_prop('#slider3');
})
$('.lobby').click(function(){
	$('.facality li a').removeClass('text-underline')
$(this).addClass('text-underline')
	$('.clientGallery div').hide()
	$('#slider4').show()
	commmon_prop('#slider4');
})
$('.spa').click(function(){
	$('.facality li a').removeClass('text-underline')
$(this).addClass('text-underline')
	$('.clientGallery div').hide()
	$('#slider5').show()
	commmon_prop('#slider5');
})

$('.other').click(function(){
	$('.facality li a').removeClass('text-underline')
$(this).addClass('text-underline')
	$('.clientGallery div').hide()
	$('#slider6').show()
	commmon_prop('#slider6');
})

function commmon_prop(slidr_name)
{
	$(slidr_name).bjqs({
	animtype : 'fade', // accepts 'fade' or 'slide'
	animduration : 400, // how fast the animation are
	animspeed : 3000, // the delay between each slide
	automatic : true, // automatic
	nexttext : '<img src="../images/next.png">', // Text for 'next' button (can use HTML)
	prevtext : '<img src="../images/prev.png">', // Text for 'previous' button (can use HTML)
	height      : 417,
	width       : 843,
	showmarkers : false,
	keyboardnav : true, // enable keyboard navigation
	responsive  : true
	});
}


function tabnextclick(relation) {
	var resultCnt = $('.tabResult');

	tab = $('.tabResult').prev('.tabNav').find('a');

	for (var i = 0; i < tab.length; i++) {
		var target = tab.eq(i);
		
		var tab_relation = target.attr('rel');
		if (tab_relation === relation) {
			tab.eq(i).parents('li').removeClass('disabled');
		}
	}
	if (resultCnt.children('div#' + relation).css('display') === 'none') {
		resultCnt.children('div').slideUp();
		$('.tabNav li a').removeClass('active');
		$('.tabNav ').find('a[rel='+relation+']').parents('li').children('a').addClass('active');
		resultCnt.children('div#' + relation).slideDown();
	}
	var ofsetd=$('.tabNav').offset().top;
	$('body,html').animate({scrollTop: ofsetd}, 800);
}
(function() {
  "use strict";

  var toggles = document.querySelectorAll(".menu-icon");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			
    });
  }
	$('.mobil-icon-toggle').click(function(){
		if($(this).hasClass('active'))
		{
			$('.nav-menu').addClass('open-navigation');
		}
		else
		{
			$('.nav-menu').removeClass('open-navigation');
		}
	});
	$('.closebtncom').click(function(){
		$(this).parents('.community-updates').addClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:0})
	})
	$('.communityblockbx dl dt').click(function(){
		$(this).parents('.community-updates').removeClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:1})
	});
	$('.updateslider').bxSlider({
		auto:true,
		pager:false,
		controls:false,
		mode:'fade'
		})
})();

	 
