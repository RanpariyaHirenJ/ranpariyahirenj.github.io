/*Doucment resize Function*/
$(window).resize(function () {
	//location.reload();
  	fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
  
  
  //$('.div-loader').fadeOut();
    /*Maximum height li*/
    var liMaxHeight = -1;
    var node;
    $(".vision-video-text ul li").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });
	
    $('.vision-video-text ul li').css('min-height', liMaxHeight + 1);
	
	
	 $(".product-thumb-cntr .product-list ul li").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.product-thumb-cntr .product-list ul li').css('min-height', liMaxHeight + 1);
	
    /*Maximum height li*/
  
});

$(document).ready(function(){
	var width = $(window).width();
	if (width < 1023) {
		$("div, span, p, a, li, h1, h2, h3").removeClass("wow").removeClass("fadeInLeft").removeClass("fadeInUp").removeClass("fadeInRight").removeClass("fadeInDown").removeAttr("data-wow-delay").removeAttr("data-wow-offset")
		.removeAttr("visibility");
	}
})
function onlyNos(e, t) {
	try {
		if (window.event) {
			var charCode = window.event.keyCode;
		}
		else if (e) {
			var charCode = e.which;
		}
		else { return true; }
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				if (charCode == 45 || charCode == 32) {
					return true;
				}
				return false;
			}
			return true;
   }
   catch (err) {
		alert(err.Description);
   }
}

function form_validate_jquery(container)
{
	var return_state = true;		
	$(container).find("input, select, textarea" ).each(function(){
		var title = $(this).attr("title");			
		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "password":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else if($(this).val().length < 6)
				{
					$(this).css("border","1px solid red");
					$(this).val('');					
					$(this).attr("placeholder", ""+title+" should be min 6 char!")
					$(this).prev().addClass('active');
					return_state = false;		
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "email":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" is not valid email address!")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "number":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", "Enter Valid Mobile Number!")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}				
			break;
			case "mobile":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank !")							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" must be 10 digits !")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}				
			break;
		}
	});
	return return_state;
}

function formvalidatejquery(container)
{
	var return_state = true;		
	$(container).find("input, select, textarea" ).each(function(){
		var title = $(this).attr("title");			
		switch($(this).attr("validation"))
		{				
			case "email":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border-color","red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
				{
					$(this).css("border-color","red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" is not valid email address!")							
					return_state = false;
				}
				else
				{
					$(this).css("border-color","green");
				}
			break;
		}
	});
	return return_state;
}






/*Ready Funtion*/
$(function () {
  fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
  
  
  
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
      $('.footer-line').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
      $('.footer-line').fadeOut();
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
  
  /*Header footer loading*/
  /*accordion start*/
  $('.accordion dl dt').click(function () {
    var trigger = $(this);
    var target = trigger.next('dd');
    if (target.css('display') == 'none')
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
      target.slideDown();
      trigger.parents('dl').addClass('active');
    }
    else
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
    }
  });
  /*accordion start*/
		
    /*Animate label form*/

		$(document).on('click', '.closeBtn', function () {
		    $('#revolutionary-technology').find('iframe').attr('src', '');
		    $('#revolutionary-technology1').find('iframe').attr('src', '');
		    $('#benefit-customers').find('iframe').attr('src', '');
		    $('#benefit-customers1').find('iframe').attr('src', '');
		    $('#our-story').find('iframe').attr('src', '');
		    $('#our-story1').find('iframe').attr('src', '');
		});

		$(".revolutionary-technology-vid").click(function () {
		    $('#revolutionary-technology').find('iframe').attr('src', 'https://www.youtube.com/embed/D_oYlN1mZrU?rel=0&amp;showinfo=0');
		    $('#benefit-customers').find('iframe').attr('src', '');
		    $('#our-story').find('iframe').attr('src', '');
		})
		
		$(".revolutionary-technology-vid1").click(function () {
		    $('#revolutionary-technology1').find('iframe').attr('src', 'https://www.youtube.com/embed/D_oYlN1mZrU?rel=0&amp;showinfo=0');
		})

		$(".benefit-customers-vid").click(function () {
		    $('#benefit-customers').find('iframe').attr('src', 'https://www.youtube.com/embed/yqSiJCCiy0w?rel=0&amp;showinfo=0');
		    $('#revolutionary-technology').find('iframe').attr('src', '');
		    $('#our-story').find('iframe').attr('src', '');
		})
		
		$(".benefit-customers-vid1").click(function () {
		    $('#benefit-customers1').find('iframe').attr('src', 'https://www.youtube.com/embed/yqSiJCCiy0w?rel=0&amp;showinfo=0');
		})

		$(".our-story-vid").click(function () {
		    $('#our-story').find('iframe').attr('src', 'https://www.youtube.com/embed/6KYNriFBqrc?rel=0&amp;showinfo=0');
		    $('#revolutionary-technology').find('iframe').attr('src', '');
		    $('#benefit-customers').find('iframe').attr('src', '');
		})
		
		$(".our-story-vid1").click(function () {
		    $('#our-story1').find('iframe').attr('src', 'https://www.youtube.com/embed/E2Q8xO5XC8A?rel=0&amp;showinfo=0');
		})

		
		$('.ask-for-demo-mob').addClass('hide-list')

		$(".watch-video-mob").click(function () {
		    if ($(window).width() < 1024 && $('.ask-for-demo-mob').hasClass('hide-list')) {
		        //debugger;
		        //$('#our-story').find('iframe').attr('src', 'https://www.youtube.com/embed/E2Q8xO5XC8A?rel=0&amp;controls=0&amp;showinfo=0');
		        //$('#revolutionary-technology').find('iframe').attr('src', '');
		        //$('#benefit-customers').find('iframe').attr('src', '');
		        //alert("clicked")
		        //$('.mob').css("display", "block !important");
		        //$('.mob').css('display','block !important');
		        $('.ask-for-demo-mob').attr('style', 'display:block !important')
		        $('.ask-for-demo-mob').removeClass('hide-list')
		        $('.ask-for-demo-mob').addClass('show-list')
                $(this).text("close menu")
		    }
		    else {
		        $('.ask-for-demo-mob').attr('style', 'display:none !important')
		        $('.ask-for-demo-mob').removeClass('show-list')
		        $('.ask-for-demo-mob').addClass('hide-list')
		        $(this).text("watch video")
		    }
		})

		$(".watch-video-mob,.ask-for-demo-mob").clickOff(function () {
		    $('.ask-for-demo-mob').attr('style', 'display:none !important')
		    $('.ask-for-demo-mob').removeClass('show-list')
		    $('.ask-for-demo-mob').addClass('hide-list')
		    $(".watch-video-mob").text("watch video")
		});

		$('.list-play').click(function () {
		    $('.ask-for-demo-mob').attr('style', 'display:none !important')
		    $('.ask-for-demo-mob').removeClass('show-list')
		    $('.ask-for-demo-mob').addClass('hide-list')
		    $(".watch-video-mob").text("watch video")
		})

});



$.fn.clickOff = function (callback, selfDestroy) {
    var clicked = false;
    var parent = this;
    var destroy = selfDestroy || true;

    parent.click(function () {
        clicked = true;
    });

    $(document).click(function (event) {
        if (!clicked) {
            callback(parent, event);
        }
        if (destroy) {
            //parent.clickOff = function() {};
            //parent.off("click");
            //$(document).off("click");
            //parent.off("clickOff");
        };
        clicked = false;
    });
};

function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}


$(document).ready(function(){
	var list=$('#webSocialList');

	var copylink=$('#webSocialcopylink');
	var copylinkI=copylink.children('i');

	var whatsapp=$('#webSocialwhatsapp');
	var whatsappI=whatsapp.children('i');

	var twitter=$('#webSocialTwitter');
	var twitterI=twitter.children('i');

	var facebook=$('#webSocialfacebook');
	var facebookI=facebook.children('i');

	var linkedin=$('#webSocialLinkedin');
	var linkedinI=linkedin.children('i');

	var icon=$('#webSocialIcon');


	var active=1;
	var copylinktmp=1;
	var whatsapptmp=1;
	var twittertmp=1;
	var facebooktmp=1;
	var linkedintmp=1;
	var tl=new TimelineMax();

	tl.fromTo([copylink,copylink],1,{display:"none",width:0},{display:"block",width:"30px"});
	tl.fromTo([whatsapp,whatsapp],1,{display:"none",width:0},{display:"block",width:"30px"},"-=1");
	/*if($(window).width() > 1024){
		tl.fromTo([whatsapp,whatsapp],1,{display:"none",width:0},{display:"none",width:"30px"},"-=1");
	}
	if($(window).width() < 1024){
		tl.fromTo([whatsapp,whatsapp],1,{display:"none",width:0},{display:"block",width:"30px"},"-=1");
	}*/

	tl.fromTo([twitter,twitter],1,{display:"none",width:0},{display:"block",width:"30px"},"-=1");
	tl.fromTo([facebook,facebook],1,{display:"none",width:0},{display:"block",width:"30px"},"-=1");
	tl.fromTo([linkedin,linkedin],1,{display:"none",width:0},{display:"block",width:"30px"},"-=1");
	tl.fromTo([icon,icon],1,{color:"#74b6e8"},{color:"#3a7eb1"},"-=1");
	tl.pause();

	var copylinkl=new TimelineMax();
	copylinkl.fromTo([copylink,copylink],1,{width:"30px"},{width:"180px"});
	copylinkl.pause();

	var whatsappl=new TimelineMax();
	whatsappl.fromTo([whatsapp,whatsapp],1,{width:"30px"},{width:"180px"});
	whatsappl.pause();

	var twitterl=new TimelineMax();
	twitterl.fromTo([twitter,twitter],1,{width:"30px"},{width:"180px"});
	twitterl.pause();

	var facebookl=new TimelineMax();
	facebookl.fromTo([facebook,facebook],1,{width:"30px"},{width:"180px"});
	facebookl.pause();

	var linkedinl=new TimelineMax();
	linkedinl.fromTo([linkedin,linkedin],1,{width:"30px"},{width:"180px"});

	linkedinl.pause();icon.on('click',function(){
		if(active==1){tl.play();active=0;}
		else{twitterl.reverse();facebookl.reverse();linkedinl.reverse();tl.timeScale(2).reverse();active=1;twittertmp=1;facebooktmp=1;linkedintmp=1;}
		});

	copylinkl.pause();copylink.on('click',function(){
		if(active==1){tl.play();active=0;}
		else{twitterl.reverse();facebookl.reverse();linkedinl.reverse();tl.timeScale(2).reverse();active=1;twittertmp=1;facebooktmp=1;linkedintmp=1;}
	});

	facebookl.pause();facebook.on('click',function(){
		if(active==1){tl.play();active=0;}
		else{twitterl.reverse();facebookl.reverse();linkedinl.reverse();tl.timeScale(2).reverse();active=1;twittertmp=1;facebooktmp=1;linkedintmp=1;}
	});

	twitterl.pause();twitter.on('click',function(){
		if(active==1){tl.play();active=0;}
		else{twitterl.reverse();facebookl.reverse();linkedinl.reverse();tl.timeScale(2).reverse();active=1;twittertmp=1;facebooktmp=1;linkedintmp=1;}
	});

	linkedinl.pause();linkedin.on('click',function(){
		if(active==1){tl.play();active=0;}
		else{twitterl.reverse();facebookl.reverse();linkedinl.reverse();tl.timeScale(2).reverse();active=1;twittertmp=1;facebooktmp=1;linkedintmp=1;}
	});

	whatsappl.pause();whatsapp.on('click',function(){
		if(active==1){tl.play();active=0;}
		else{twitterl.reverse();facebookl.reverse();linkedinl.reverse();tl.timeScale(2).reverse();active=1;twittertmp=1;facebooktmp=1;linkedintmp=1;}
	});


	copylinkI.on('click',function(){
		if(copylinktmp==1){copylink.play();copylinktmp=0;}
		else{copylinkl.timeScale(2).reverse();copylinktmp=1;}
		});

	whatsappI.on('click',function(){
		if(whatsapptmp==1){whatsappl.play();whatsapptmp=0;}
		else{whatsappl.timeScale(2).reverse();whatsapptmp=1;}
		});

	twitterI.on('click',function(){
		if(twittertmp==1){twitterl.play();twittertmp=0;}
		else{twitterl.timeScale(2).reverse();twittertmp=1;}
		});

	facebookI.on('click',function(){
		if(facebooktmp==1){facebookl.play();facebooktmp=0;}
		else{facebookl.timeScale(2).reverse();facebooktmp=1;}});

	linkedinI.on('click',function(){
		if(linkedintmp==1){linkedinl.play();linkedintmp=0;}
		else{linkedinl.timeScale(2).reverse();linkedintmp=1;}
		});

		/*$(document).on('click', '.share-info ul li#webSocialcopylink, li#webSocialwhatsapp, li#webSocialTwitter, li#webSocialfacebook, li#webSocialLinkedin', function () {
		  	$(".share-info ul li#webSocialcopylink, li#webSocialwhatsapp, li#webSocialTwitter, li#webSocialfacebook, li#webSocialLinkedin").css("display", "none");
			$(".share-info ul li#webSocialcopylink, li#webSocialwhatsapp, li#webSocialTwitter, li#webSocialfacebook, li#webSocialLinkedin").css("width", "0px");
			$(".share-info ul li#webSocialIcon").css("color", "rgb(116, 182, 232)");
	 	});*/
});
function copyToClipboard(element) {
	var message = element;
	var aux = document.createElement("input");
	aux.setAttribute("value", element);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	alertval("Copy Link", "Link copied Successfully.\n"+message);
}

function alertval(title, desc){
	$("body").append("<div id='dialoconfirm' title='"+title+"' style='display:none;'><p><span class='ui-icon ui-icon-alert' style='float:left; margin:12px 12px 20px 0;'></span>"+desc+"</p></div>").css("overflow","hidden");
	$( "#dialoconfirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "OK": function() {
	 	 $("body").css("overflow","auto");
          $( this ).dialog( "close" );
        }
      }
    });	
}

/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
  target = $('#' + popupID)
  animationIn = target.attr('data-animation-in');
  animationOut = target.attr('data-animation-out');
  if (typeof (animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '')
  {    
    animationIn = 'zoomIn';
  }
  if (typeof (animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '')
  {
    animationOut = 'zoomOut';
  }
  //$('body').append('<div class="overlay-bg"></div>')
  $('.header').css('z-index', '0')
  $('.slick-next').css('z-index', '0')
  $('.share-info ul').css('z-index', '0')
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  
  $(document).on('click', '.closeBtn', function () {		
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
	$('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
  $('.header').css('z-index', '999999')
  $('.slick-next').css('z-index', '9')
  $('.share-info ul').css('z-index', '99999')
   /* $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });*/
		$(this).remove();
  });
  
   /* $(document).on('click', '.overlay', function () {	
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });*/
  
  
/*  $(document).on('click', '.overlay', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });*/
}
/*Overlay function end*/

$(function(){
	
	/*Animate label form*/
	$('.animate-label .input-group').click(function(){
		if ($(this).find('select').size() > 0) {
		}  
		else {
			$(this).find('input').focus();
			$(this).find('label').addClass('active');
		
		}     
		if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
			$(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
		}
	
	});
	$('.animate-label .input-group input,.animate-label .input-group textarea').blur(function(){
		if (this.value.length > 0) {
			return false;
		}
		else
		{
			$(this).prev('label').removeClass('active');
		}
	});

	$('.input-group').on('focus', 'input, select, textarea', function () {
		$(this).prev('label').addClass('active');
	});
	
	$('.input-group textarea, .input-group input,.input-group select').each(function () {
		if (this.value.length > 0) {
		var div = $(this).prev('label').addClass('active');
		}
	});
	$('.input-group').click(function(){
		$(this).find('input').focus();
		$(this).find('label').addClass('active');
	});
/*Animate label form*/
	
	
	
	/*jQuery tabs */
/*script for append usefull element*/
$('.tabNav li').each(function(){
  var tabContent = $(this).html();
  var relation = $(this).find('a').attr('rel')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
})

/*script for desktop navigation */
$('.tabNav li a').click(function(){
  var relation = $(this).attr('rel')
  var tabNavigation = $(this).parents('.tabNav')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  
  tabNavigation.children().find('a').removeClass('active')
  $(this).addClass('active')
  
  if(resultCnt.children('div#'+relation).css('display') == 'none')
  {
    resultCnt.children('div').slideUp();
    resultCnt.children('div#'+relation).slideDown();
  }
  else
  {
  	resultCnt.children('div#'+relation).slideUp();
  }
})
/*jQuery tabs end */
})

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


$(document).ready(function(){
	var wind_height = $(window).height();
	if($(window).width() < 1024){
		$(".nav-menu").css("height", wind_height);
	}
});

$('.mobil-icon-toggle').click(function(){
	if($(this).hasClass('active'))
	{
		$('.nav-menu').addClass('open-navigation');
		$(".sub-menu").css("display", "none");
		//$("html").css("overflow", "hidden");
		//$('body').append('<div class="overlay-bg"></div>')
		$(".nav-menu ul li.subdrop-down.active .sub-menu").css("display", "block");
	}
	else
	{
		$('.nav-menu').removeClass('open-navigation');
		//$("html").css("overflow", "visible");
		/*$('body .overlay-bg').fadeOut(500, function () {
			$(this).remove();
		  
		});*/
	}
});

	$('.subdrop-down').click(function() {
        if ($(window).width() < 981) {
            var subStaus = $(this).children('.sub-menu').css('display');
            if (subStaus == 'none') {
                $('.sub-menu').slideUp();
                $('.subdrop-down').removeClass('active');
                $(this).addClass('active');
                $(this).children('.sub-menu').slideDown();
            } else {
                $(this).removeClass('active');
				$('.subdrop-down').removeClass('active');
                $(this).children('.sub-menu').slideUp();
            }
        }
    });
})();

$(window).load(function(){
	var parameter=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
	var decodedparameter=decodeURIComponent(parameter)
	var param=decodedparameter.split('=');
	if(param[0]=="enquiry"){ alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly."); } 
	if(param[0]=="newsletter"){ alert("Your signup request has been submitted successfully."); } 
	else if(param[0]=="error"){ alert("The code is invalid."); }
});
/*Docuemnt load function*/


