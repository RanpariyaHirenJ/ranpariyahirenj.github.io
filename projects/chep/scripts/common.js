/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*======================================= 
Credits
File Name:- common.js
Developed by Pratap Tondwalkar 

Component Incude :- 
Events 
1) Document ready
2) Document load
3) Document resize

Functions
1) take me to top (scroll to top) 
2) mobile navigation

Note:- 
need to include jQuery library above 1.8

You can inculde more component just make sure to add those in above list which is help for while maintencnce.

========================================*/

/*=========================== Document resize funtion start here ======================*/
$(window).resize(function () {
	 // overlayPossition('paymentDtls')
})
/*=========================== Document resize funtion start here ======================*/


/*=========================== Document Load funtion start here ======================*/
$(window).load(function () {
  $('.loader').fadeOut();
	$("img.lazy").lazyload();
  $('.qty-actions .increase').click(function(){
    var target =  $(this).parents('.qty').find('input[type="number"]');
    var target_value = parseInt(target.val());
    target.val(target_value + 1)
  });
  $('.qty-actions .decrease').click(function(){
    var target =  $(this).parents('.qty').find('input[type="number"]');
    var target_value = parseInt(target.val());
    target.val(target_value - 1)
  });
  $('.apply-coupon').click(function(){
    var target = $(this).parents('.apply-coupon-cnt').find('.apply-coupon-form');
    if(target.css('display') == 'none'){
      target.slideDown();
    }
    else
    {
      target.slideUp();
    }
  });
})
/*=========================== Document Load funtion end here ======================*/

/*=========================== Document ready funtion start here ======================*/
$(function () {

/*=========================== Back to top Function Start =====================*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });
  $(document).on('click', '.scroll-top', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });

/*=========================== Back to top Function End ======================*/


/*=========================== Mobile navigation Start ======================*/
  $('.toggle-btn').click(function () {
    if ($('.wrapper').hasClass('opened'))
    {
      $('.wrapper').removeClass('opened');
    }
    else
    {
      $('.wrapper').addClass('opened');
    }
  });
	$('.left-menu-toggle').click(function () {
    if ($('.wrapper').hasClass('left-navigation-opened'))
    {
      $('.wrapper').removeClass('left-navigation-opened');
    }
    else
    {
      $('.wrapper').addClass('left-navigation-opened');
    }
  });
	$('.filter-menu-toggle').click(function () {
    if ($('.wrapper').hasClass('filter-opened'))
    {
      $('.wrapper').removeClass('filter-opened');
    }
    else
    {
      $('.wrapper').addClass('filter-opened');
    }
  });
	
  $('.has-sub-menu').click(function () {
    var target = $(this).find('.sub-menu');
    var trigger = $(this);
    if (trigger.hasClass('opened')) {
      trigger.removeClass('opened');
    }
    else {
      trigger.addClass('opened');
    }

  });
/*=========================== Mobile navigation end ======================*/
/*============================= jQuery tabs ============================= */
$('.tabNav li').each(function(){
  var tabContent = $(this).html();
  var relation = $(this).find('a').attr('data-rel')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
})
/*script for mobile navigation */
$(document).on('click','.mobile-menu',function(){
	$('.mobile-menu a').removeClass('active');
  if($(this).next('.content').css('display') == 'none')
  {
    $('.tabResult .tabBx .content').slideUp();
    $(this).next('.content').slideDown();
		$(this).find('a').addClass('active');
  }
  else
  {
  	$('.tabResult .tabBx .content').slideUp();
		
  }
})
/*script for desktop navigation */
$('.tabNav li a').click(function(){
  var relation = $(this).attr('data-rel')
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
});
/*=============================  jQuery tabs end =============================*/                            
                              
});
/*=========================== Document ready funtion end here ======================*/

$(function(){
	$('.rating ul li button').click(function(event){
		event.preventDefault();
		var clickIndex = $(this).parent('li').index() + 1;
		$(this).parents('.rating').attr('data-count',clickIndex)
		$(this).parents('ul').children('li').find('button').removeClass('active')
		$(this).parents('ul').children('li').each(function(i){
			$(this).find('button').addClass('active')
			if((i+1)  == clickIndex)
			{
				return false;
			}
		})
	})
});

/*======================= Overlay function =======================*/
var target,_winw, _winh, _id, _bxh, _bxw, marginTB, marginLR, overlayId
function overlayBox(target) {
  overlayPossition(target)
  overlay_id = $('#'+target);
  $('body').append('<div class="overlay-bg"></div>')
  overlay_id.append('<div class="close-btn">X</div>');
}

function overlayPossition(popUp) {
  _winw = $(window).width();
  _winh = $(window).height();
  _id = $('#' + popUp);
  
  _bxh = _id.outerHeight();
  _bxw = _id.outerWidth();
  marginTB = (_winh - _bxh) / 2;
  marginLR = (_winw - _bxw) / 2;
  if (marginTB < 0) {
    _id.addClass('absolute');
  }
  else {
    _id.addClass('fixed');
    _id.css({
      'left': marginLR
    });
    _id.animate({top: marginTB})
  }
}

$(document).on('click', '.close-btn', function () {
  close_overlay(this)
  $('.overlay-box').animate({top:-100+'%'})
});
function close_overlay(elem){
  elem.remove();
  $('.overlay-bg').fadeOut(function(){
    $(this).remove()
  });  
}
/*===========================  Overlay function end  ========================*/


$(function(){
  $('.table-format.equal-width dl dd,.table-format.equal-width dl dt').each(function(i) {
        lastCol = $(this).find('.col').last();
        lastColIndex = $(this).find('.col').index(lastCol) + 1;
        $(this).children('ul').children('li').each(function(index) {
            var divIndex = $(this).children('.col:last-child');
            $(this).children('.col').css('width', 100 / ($(this).children('.col').index(divIndex) + 1) + '%');
            var commonWidth = 100 / lastColIndex;
            $(this).css('width', commonWidth * ($(this).children('.col').index(divIndex) + 1) + '%');
        });
    });
    $('.table-format.custom-width dl dd,.table-format.custom-width dl dt').each(function(i) {
        lastCol = $(this).find('.col').last();
        lastColIndex = $(this).find('.col').index(lastCol) + 1;
        $(this).children('ul').children('li').each(function(index) {
            var divIndex = $(this).children('.col:last-child');
            $(this).children('.col').css('width', 100 / ($(this).children('.col').index(divIndex) + 1) + '%');
        });
    });
    /*table equal width*/
    
    
    /*adding class*/
    $('.table-format dl dd,.table-format dl dt').each(function(i) {
        $(this).children('ul').find('.col').each(function(colIndex) {
            var colClass = colIndex + 1;
            $(this).addClass('col' + colClass);
        });
        $(this).children('ul').children('li').each(function(index) {
            var divIndex = $(this).children('.col:last-child');
            $(this).addClass('row' + (index + 1));
        });
    });
    /*adding class*/
    
    /*adding content*/
    $('.table-format').each(function() {
        var mobileHeading = [];
        $(this).children('dl').find('dt').each(function(i) {
            $(this).children('ul').find('.col').each(function(index) {
                var a = $(this).text();
                mobileHeading.push(a);
            });
        });
        $(this).children('dl').find('dd').each(function(i) {
            $(this).children('ul').find('.col').each(function(index) {
                $(this).prepend('');
            });
        });
        mobileHeading = [];
    });  
})

/*======================= Overlay function =======================*/
var target,_winw, _winh, _id, _bxh, _bxw, marginTB, marginLR, overlayId
function overlayBox(target) {
  overlayPossition(target)
  overlay_id = $('#'+target);
  $('body').append('<div class="overlay-bg"></div>')
  overlay_id.append('<div class="close-btn">X</div>');
}

function overlayPossition(popUp) {
  _winw = $(window).width();
  _winh = $(window).height();
  _id = $('#' + popUp);
  
  _bxh = _id.outerHeight();
  _bxw = _id.outerWidth();
  marginTB = (_winh - _bxh) / 2;
  marginLR = (_winw - _bxw) / 2;
  if (marginTB < 0) {
    _id.addClass('absolute');
  }
  else {
    _id.addClass('fixed');
    _id.css({
      'left': marginLR
    });
    _id.animate({top: marginTB})
  }
}

$(document).on('click', '.close-btn,.overlay-bg', function () {
  close_overlay(this)
  $('.overlay-box').animate({top:-100+'%'})
});
function close_overlay(elem){
  elem.remove();
  $('.overlay-bg').fadeOut(function(){
    $(this).remove()
  });  
}
/*===========================  Overlay function end  ========================*/


                              