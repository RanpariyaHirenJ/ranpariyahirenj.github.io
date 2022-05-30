$(document).ready(function(){
    $.ajax({
        url: '../commonsection/latestblog.html',
        type : 'POST',
        success: function(data) {
          $("#latestblog").html(data);
        }
    });   
});

$(document).ready(function () {

		if ($(window).width() < 1024) {
			$(".our-clients-slider").removeClass();
			//alert("removeClass");
		}
    $(".custom-pre-control").hide()

	$('.our-services-cntr').find('li a').click(function (){
		var flag = false;
		var div_attr = $(this).attr('show-div');
		$('.our-services-cntr').find('li a').removeClass('active');
		$(this).addClass('active');

		if ($(this).parent().index() == 0) {
		    $(".custom-pre-control").hide()
		}

		if ($(this).parent().index() > 0 && $(this).parent().index() < 7) {
		    $(".custom-pre-control").show()
		    $(".custom-next-control").show()
		}

		if (($(this).parent().index() + 1) < $(".our-services-cntr").find("ul li").length) {
		    $(".custom-next-control").show()
		}

		if (($(this).parent().index() + 1) == $(".our-services-cntr").find("ul li").length) {
		    $(".custom-next-control").hide()
		}

		$('.HideShowContent').children().each(function (){
			if (div_attr == $(this).attr('show-div'))
			{
				$('.HideShowContent').children().hide();
				$('.HideShowContent').children().find('i img').css("opacity","0");
				$(this).show()
				$(this).find('i img').animate({ opacity: 1 }, 1200)
				flag = true
			}
			if (flag == true)
			{
				return false;
			}
		})
	})
	$('.pop_up_close_btn').css("top", ($('.pop_up_msg').outerHeight() - $('.pop_up_close_btn').innerHeight()) / 2)
		$(".pop_up_close_btn").click(function () {
			$(".pop_up_msg").hide();
			$(".scrollTop").css("bottom", "20px")
			$('body').css("padding-bottom","0")
		})
		if ($(".pop_up_msg").css("display") == "block") {
			$(".scrollTop").css("bottom", "80px")
		}
		else 
		{
		$('body').css("padding-bottom", "0")
		}

		if ($(window).width() < 1024) {

		    $(".our-services-cntr").find('h2').click(function () {

		        if ($(this).parent().find('ul').css("display") == "none") {
		            $(this).parent().find('ul').fadeIn()
		        }
		        else {
		            $(this).parent().find('ul').fadeOut()
		        }

		        return false

		    })

		    $(".our-services-cntr").find('.our_service_section li').click(function () {
		        $(this).parent().fadeOut()
		    })

		    $(".our-services-cntr").find('.our_service_section ul').clickOff(function () {
		        $(".our-services-cntr").find('.our_service_section ul').fadeOut()
		    });
		}

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
		        };
		        clicked = false;
		    });
		};

		$(".custom-pre-control").click(function () {
		    $(".our-services-cntr").find("ul li").each(function () {
		        if ($(this).find("a").hasClass("active")) {
		            $(this).prev().find("a").trigger("click")

		            if ($(this).index() == 1) {
		                $(".custom-pre-control").hide()
		            }

		            if ($(this).index() > 1) {
		                $(".custom-pre-control").show()
		            }

		            if (($(this).index()) < $(".our-services-cntr").find("ul li").length) {
		                $(".custom-next-control").show()
		            }

		            return false
		        }
		    })
		})

		$(".custom-next-control").click(function () {

		    $(".our-services-cntr").find("ul li").each(function () {
		        if ($(this).find("a").hasClass("active")) {
                    
		            $(this).next().find("a").trigger("click")

		            if (($(this).index() + 2) == 1) {
		                $(".custom-pre-control").hide()
		            }

		            if (($(this).index() + 2) > 1) {
		                $(".custom-pre-control").show()
		            }

		            if (($(this).index() + 2) == $(".our-services-cntr").find("ul li").length) {
		                $(".custom-next-control").hide()
		            }

		            return false
		        }
		    })
		})

		
});
$(window).load(function(){
	$('.loader').fadeOut();$(".slider.single-item").css("display","block");
	$(".inner-bannertxt").addClass('fadeInLeft').addClass('animated').addClass('wow');
})

$(document).ready(function(){
	var width = $(window).width();
	if (width < 1024) {
		$("div, span, p, a, li, h1, h2, h3").removeClass("wow").removeClass("fadeInLeft").removeClass("fadeInUp").removeClass("fadeInRight").removeClass("fadeInDown").removeAttr("data-wow-delay").removeAttr("data-wow-offset"					)
		.removeAttr("visibility");
	}

});

$(document).ready(function(){
	if ($(window).width() < 1023){
		$(window).scroll(function(){
			var height=$(window).scrollTop();
				if(height>410){
					$(".header").addClass("fix-header")
				}
				if(height<410){
					$(".header").removeClass("fix-header")
				}
		});
	}
	
	$(document).on('click', ".search-container", function () { 
		$(".search-btn").addClass("active");
		return false;
	})
	
	$("#___gcse_1").click(function(){
		debugger
	})

	$(".search-btn").click(function(){
		//debugger
		//$(this).not(".search-container")
		$(this).toggleClass("active");
	})
	$(".search-btn").clickOff(function () {
		$(".search-btn").removeClass("active");
	})

	$(".search-container").click(function () {
	    $(".search-btn").addClass("active");
	})
	
});

$(function() {
    $(document).on('click', '.closeBtn', function() {
        $("html").css("overflow", "visible");
    })
    $('.tab-link li a').click(function() {
        var tab_name = $(this).attr('for');
        $(this).parents('.grid-6').find('.tab-content').removeClass('active');
        $(this).parents('.grid-6').find("#" + tab_name).addClass('active');
        console.log(tab_name);
        if (tab_name == 'mobile-banking') {
            $(this).parents('.grid-6').find('.tab-content-wrapper').removeClass('second');
        } else {
            $(this).parents('.grid-6').find('.tab-content-wrapper').addClass('second');
        }
    });
	
    $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
           // $('.nav').addClass('fixed');
        } else {
            $('.scrollTop').fadeOut();
            //$('.nav').removeClass('fixed');
        }
    });
    $(document).on('click', '.scrollTop a', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
	
    $('.accordion dl dt').click(function() {
        var trigger = $(this);
        var target = trigger.next('dd');
        if (target.css('display') == 'none') {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
            target.slideDown();
            trigger.parents('dl').addClass('active');
        } else {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
        }
    });
	
    $('.toggle-btn').click(function() {
        if ($('.wrapper').hasClass('opened')) {
            $('.wrapper').removeClass('opened');
        } else {
            $('.wrapper').addClass('opened');
        }
    });
    $('.toggle-search').click(function() {
        if ($('.search-container').hasClass('opened')) {
            $('.search-container').removeClass('opened');
        } else {
            $('.search-container').addClass('opened');
        }
    });
    $('.has-sub-menu').click(function() {
        var target = $(this).find('.sub-menu');
        var trigger = $(this);
        if (trigger.hasClass('opened')) {
            $('.has-sub-menu').removeClass('opened');
            trigger.removeClass('opened');
        } else {
            $('.has-sub-menu').removeClass('opened');
            trigger.addClass('opened');
        }
    });
    $('.footer dt').click(function() {
        if ($(window).width() < 769) {
            if ($(this).next('dd').css('display') == 'none') {
                $('.footer dl dd').slideUp();
                $('.footer dl').removeClass('active')
                $(this).parents('dl').addClass('active');
                $(this).next('dd').slideDown();
            } else {
                // return false;
                $(this).parents('dl').removeClass('active');
                $(this).next('dd').slideUp();
            }
        }
    })


    

    /*remove pop up on click of outside*/

    $(document).on('click', '.overlay-box', function () {
        sessionStorage.removeItem("CloseFlag")
        sessionStorage.setItem("CloseFlag", "false")
    });

    $(document).on('click', '.overlay', function () {
        if (sessionStorage.getItem("CloseFlag") == null) {
            sessionStorage.setItem("CloseFlag", "true")
            //closeButton();
            $(".closeBtn").trigger("click")
        }
        else if (sessionStorage.getItem("CloseFlag") == "true") {
            //closeButton();
            $(".closeBtn").trigger("click")
        }
        else {
            sessionStorage.removeItem("CloseFlag")
        }
    });
   
});


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
    sessionStorage.setItem("CloseFlag", "true")
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
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
      if (sessionStorage.getItem("CloseFlag") == "false") {
          sessionStorage.removeItem("CloseFlag")
      }
      else
      {
          $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
          $('body .overlay-bg').fadeOut(1000, function () {
              $(this).remove();
              $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
          });
          $(this).remove();
          $(".send-enquiry").show()
          sessionStorage.removeItem("CloseFlag")
      }    
  });
}

/*Overlay function end*/

$(window).load(function(){
	var parameter=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
	var decodedparameter=decodeURIComponent(parameter)
	var param=decodedparameter.split('=');
	if(param[0]=="enquiry"){
		alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
	}
	else if(param[0] == "contact_us"){
		overlayBox('thank-you');
	}
	else if(param[0] == "job"){
		alert('Your job application has been submitted successfully. Our HR team will contact you shortly.');
	}
	else if(param[0]=="error"){
		alert("The code is invalid.");
	}
	else if(param[0] == "singapore_fintech_festival"){
		alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
	}
});

$('.tabNav li').each(function() {
    $(this).css({
        'width': (100 / ($('li:last-child').index('li') + 1)) + 'auto'
    })
    var tabContent = $(this).html();
    var relation = $(this).find('a').attr('rel')
    var resultCnt = $(this).parents('.tabNav').next('.tabResult');
    resultCnt.children('div#' + relation).prepend('<div class="mobile-menu">' + tabContent + '</div>')
})
$(document).on('click', '.mobile-menu', function() {
    if ($(this).next('.content').css('display') == 'none') {
        $('.tabResult .tabBx .content').slideUp();
        $(this).next('.content').slideDown();
    } else {
        $('.tabResult .tabBx .content').slideUp();
    }
})
$('.tabNav li a').click(function() {
    var relation = $(this).attr('rel')
    var tabNavigation = $(this).parents('.tabNav')
    var resultCnt = $(this).parents('.tabNav').next('.tabResult');
    tabNavigation.children().find('a').removeClass('active')
    $(this).addClass('active')
    if (resultCnt.children('div#' + relation).css('display') == 'none') {
        resultCnt.children('div').slideUp();
        resultCnt.children('div#' + relation).slideDown();
    } else {
        resultCnt.children('div#' + relation).slideUp();
    }
})
$(document).ready(function () {

   
    $("#floating-close").click(function() {
        $(".floating-menu-close").css('display', 'none');
        $(".floating-menu").css('display', 'block');
    });
    $(".floating-menu").click(function() {
        $(".floating-menu-close").css('display', 'block');
        $(".floating-menu").css('display', 'none');
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 330) {
            $(".floating-menu-close").css('display', 'block');
            $(".floating-menu").css('display', 'none');
        }
        if (height < 330) {
            $(".floating-menu-close").css('display', 'none');
            $(".floating-menu").css('display', 'block');
        }
    });
    $(".floating-menu-close dl dd ul li a").click(function() {
        $(".floating-menu-close dl dd ul li a").css('color', '#333');
        $(".floating-menu-close dl dd ul li a").css('font-weight', 'normal');
        $(this).css('color', '#d73e60')
        $(this).css('font-weight', 'bold')
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.send-enquiery-btn').fadeIn();
        $('.learn-more-btn').fadeIn();
        $('.nav').addClass('fixed');
    } else {
        $('.send-enquiery-btn').fadeOut();
        $('.learn-more-btn').fadeOut();
        $('.nav').removeClass('fixed');
    }
});

if ($(window).width() < 769) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.subscribe-btn').fadeIn();
		} else {
			$('.subscribe-btn').fadeOut();
		}
	});
}


$(document).ready(function(){
$(".navigation-links ul li a").on('click', function(event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
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
	
	$(".search-container").click(function(){
		$(".search-btn").addClass("active")
	})
};



$(document).ready(function() {
    var list = $('#webSocialList');
    var twitter = $('#webSocialTwitter');
    var twitterI = twitter.children('i');
    var google = $('#webSocialfacebook');
    var googleI = google.children('i');
    var linkedin = $('#webSocialLinkedin');
    var linkedinI = linkedin.children('i');
    var icon = $('#webSocialIcon');
    var active = 1;
    var twittertmp = 1;
    var googletmp = 1;
    var linkedintmp = 1;
    var tl = new TimelineMax();
    tl.fromTo([twitter, twitter], 1, {
        display: "none",
        height: 0
    }, {
        display: "block",
        height: "30px"
    });
    tl.fromTo([google, google], 1, {
        display: "none",
        height: 0
    }, {
        display: "block",
        height: "30px"
    }, "-=1");
    tl.fromTo([linkedin, linkedin], 1, {
        display: "none",
        height: 0
    }, {
        display: "block",
        height: "30px"
    }, "-=1");
    tl.fromTo([icon, icon], 1, {
        color: "#74b6e8"
    }, {
        color: "#3a7eb1"
    }, "-=1");
    tl.pause();
    var twittertl = new TimelineMax();
    twittertl.fromTo([twitter, twitter], 1, {
        height: "30px"
    }, {
        height: "180px"
    });
    twittertl.pause();
    var facebookl = new TimelineMax();
    facebookl.fromTo([google, google], 1, {
        height: "30px"
    }, {
        height: "180px"
    });
    facebookl.pause();
    var linkedintl = new TimelineMax();
    linkedintl.fromTo([linkedin, linkedin], 1, {
        height: "30px"
    }, {
        height: "180px"
    });
    linkedintl.pause();
    icon.on('click', function() {
        if (active == 1) {
            tl.play();
            active = 0;
        } else {
            twittertl.reverse();
            facebookl.reverse();
            linkedintl.reverse();
            tl.timeScale(2).reverse();
            active = 1;
            twittertmp = 1;
            googletmp = 1;
            linkedintmp = 1;
        }
    });
    twitterI.on('click', function() {
        if (twittertmp == 1) {
            twittertl.play();
            twittertmp = 0;
        } else {
            twittertl.timeScale(2).reverse();
            twittertmp = 1;
        }
    });
    googleI.on('click', function() {
        if (googletmp == 1) {
            facebookl.play();
            googletmp = 0;
        } else {
            facebookl.timeScale(2).reverse();
            googletmp = 1;
        }
    });
    linkedinI.on('click', function() {
        if (linkedintmp == 1) {
            linkedintl.play();
            linkedintmp = 0;
        } else {
            linkedintl.timeScale(2).reverse();
            linkedintmp = 1;
        }
    });
});

 
var verifyCallback = function(response) {
	console.log(response);
};
var clientId1;
var clientId2;
var onloadCallback = function() {
clientId1 = grecaptcha.render('recaptcha1', {
  'sitekey' : '6LeS_3IUAAAAAF4YXi4117GOMfTS89RkSbToMwMr',
  'theme' : 'light'
});
clientId2 = grecaptcha.render(
	document.getElementById('recaptcha2'), {
  'sitekey' : '6LeS_3IUAAAAAF4YXi4117GOMfTS89RkSbToMwMr'
	});
};

$(window).load(function(){
	var blog_id = $('#blogid').val();
	$.ajax({
			url: "ajax_load.php?action=comments&blogid="+blog_id, 
			async: false,
			success: function(result){
				//alert(result);
				if(result != "0"){
					$("#usercomm").html(result);
					$("#comBox").css("display","block");
				}
	}});
	
	$(document).on('click','#postval',function(){
		var blogid = $('#blogid').val();
		var username = $('#username').val();
		var useremail = $('#useremail').val();
		var usercomment = $('#usercomment').val();
		
		if(username == ""){
			$('#username').css("border","1px solid red");
		}else{
			if(username.length > 4){
				$('#username').css("border","1px solid green");
			}
			else {
				$('#username').val('');					
				$('#username').attr("placeholder", "Name should be min 5 character !");
				$('#username').css("border","1px solid red");
			}
		}
		if(useremail == ""){
			$('#useremail').css("border","1px solid red");
		}else{
			if(useremail.length > 4){
				if(useremail.indexOf('@') == -1 || useremail.indexOf('.') == -1) {
					$('#useremail').css("border","1px solid red");
					useremail = "";
				}
				else {
					$('#useremail').css("border","1px solid green");
				}
			}
			else {
				$('#useremail').val('');					
				$('#useremail').attr("placeholder", "Email should be min 5 character !");
				$('#useremail').css("border","1px solid red");
			}
		}
		if(usercomment == ""){
			$('#usercomment').css("border","1px solid red");
		}else{
			if(usercomment.length > 4){
				$('#usercomment').css("border","1px solid green");
			}
			else {
				$('#usercomment').val('');					
				$('#usercomment').attr("placeholder", "Comment should be min 5 character !");
				$('#usercomment').css("border","1px solid red");
			}
		}
		
		if(username == "" || useremail == "" || usercomment == ""){
			e.preventdefault();
		}
		
		if(username.length < 5 || useremail.length < 5 || usercomment.length < 5){
			e.preventdefault();
		}
		
		var response = grecaptcha.getResponse(clientId2);
		if(response.length == 0) {
			if($('.commentBox').find("#recaptcha2").html() != "" && $('.commentBox').find("#recaptcha2").html() != undefined){
				$('.commentBox').find("#recaptcha2").css("border","1px solid #ff0000");
				return false;
			}
		}
		else
		{
			$('.commentBox').find("#recaptcha2").css("border","1px solid green");
		}
			
		
		$(".commentFormcntr li:last-child").html('<div class="verifyload" style="display:block;"><img id="verify_loader" class="box-btn" src="../images/verify_loader.gif"></div><div class="clear"></div>');
		$.post("ajax_load.php",
			{
			  blogid : blogid,
			  username : username,
			  useremail : useremail,
			  usercomment : usercomment,
			  "async": false,
			  "action": "add_comment"
			},
		function(data,status){
			var res = data.split('|');	
			if(res[0] == 1){
					$('#username').css("border",""); $('#username').val('');
					$('#username').attr("placeholder", "Name *");
					$('#useremail').css("border",""); $('#useremail').val('');
					$('#useremail').attr("placeholder", "Email *");
					$('#usercomment').css("border",""); $('#usercomment').val('');
					$('#usercomment').attr("placeholder", "Comment *");
					$('#recaptcha2').css("border","");
					grecaptcha.reset(clientId2);
					
					$(".commentFormcntr li:last-child").html('<input name="action" type="submit" id="postval" value="POST COMMENT"><div class="clear"></div>');
					$("#usercomm").html(res[1]);
					$("#comBox").css("display","block");
					
					setTimeout(function(){ alert('your comment is awaiting moderation');}, 2000);

			  }
		});
	})
	
	
	$(".clients-common-menu").find(".container").click(function ()
	{        
	    if ($(window).width() < 1024)
	    {
	        if ($(this).find("ul").css("display") == "none")
	        {
	            $(this).find("ul").css("display", "inline-block")
	        }
	        else
	        {
	            $(this).find("ul").css("display", "none")
	        }      
	    }
	})

	$(".clients-common-menu").find(".container").clickOff(function ()
	{
	    if ($(window).width() < 1024 && $(".clients-common-menu").find(".container").find("ul").css("display") == "inline-block")
	    {	       
	        $(".clients-common-menu").find(".container").trigger("click")
	    }
	});
	
	
	
});


function onlyNos(e,t){
	try{if(window.event){
		var charCode=window.event.keyCode;
	}else if(e){
		var charCode=e.which;
	}else{return true;
}
if(charCode>31&&(charCode<48||charCode>57)){if(charCode==45 || charCode == 32){return true;}return false;}return true;}catch(err){alert(err.Description);}}

function form_validate_jquery(container){
	var return_state=true;
	$(container).find("input, select, textarea").each(function(){
		var title=$(this).attr("title");
		switch($(this).attr("validation")){
			case"text":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder",""+title+" cannot be blank!");
					return_state=false;
				}else{
					$(this).css("border","1px solid green");
				}
			break;
			case"password":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder",""+title+" cannot be blank!");
					return_state=false;
				}
				else if($(this).val().length<6){
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder",""+title+" should be min 6 char!");
					return_state=false;
				}
				else{
					$(this).css("border","1px solid green");
				}
			break;
			case"email":
				var re = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder",""+title+" cannot be blank!");
					return_state=false;
				}else if(!re.test($(this).val())){
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder",""+title+" is not valid email address!");
					return_state=false;
				}
				else{
					$(this).css("border","1px solid green");
				}
			break;
			case"number":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder",""+title+" cannot be blank!")
					return_state=false;
				}else if($(this).val().length<10){
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder","Enter Valid Mobile Number!")
					return_state=false;
				}
				else{
					$(this).css("border","1px solid green");
				}
			break;
		}
		
		if(return_state==true){
			var response = grecaptcha.getResponse(clientId1);
			if(response.length == 0) {
				if($(container).find("#recaptcha1").html() != "" && $(container).find("#recaptcha1").html() != undefined){
					$(container).find("#recaptcha1").css("border","1px solid #ff0000");
					return_state = false;
				}
			}
			else
			{
				$(container).find("#recaptcha1").css("border","1px solid green");
			}
		}
	});
	return return_state;
}
if ($(window).width() >= 1024) {
  $(".news-section").stick_in_parent()  
}
$(".search-btn a").hover(function(){
	$(".search-btn").html("<a href=\"javascript:void(0)\"></a><div class=\"search-container\"><gcse:search class=\"search-box\"><input type=\"text\" placeholder=\"\"><input type=\"button\" class=\"search-btn\"></gcse:search></div>");
		var cx = '004993930039708631685:vstz0rtzmtq';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
});
 
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})
(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-76327243-1', 'auto');
ga('send', 'pageview');

$(document).ready(function(){
    $.ajax({
        url: '../commonsection/subscribe.html',
        type : 'POST',
        success: function(data) {
			//alert(data)
          $("#enquiryform").after(data);
          $("#subscribe").find('input[name="subject"]').val($(".blog-dtls").find('h1').text());
            if(localStorage.getItem("subscribe")==null || localStorage.getItem("subscribe") == undefined){
                localStorage.setItem("subscribe", "show");
                setTimeout(function(){
                    overlayBox('subscribe')
                }, 10000);
            }
        }
    });   
});
