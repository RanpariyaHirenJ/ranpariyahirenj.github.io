

/*Overlay function*/
function overlayBox(popUpId){
overlayPossition(popUpId)
overlayId = popUpId
$('body').append('<div class="overlay"></div>')
$('#'+popUpId).append('<div class="closeBtn">X</div>')
$('#'+popUpId).fadeIn();
}
var winWidth,winHeight,popId,boxHeight,boxWidth,marginTB,marginLR,overlayId

function overlayPossition(popUp)
{
winWidth = $(window).width();
winHeight = $(window).height();
popId = $('#'+popUp)
boxHeight = popId.outerHeight();
boxWidth = popId.outerWidth();
marginTB = (winHeight-boxHeight)/ 2;
marginLR = (winWidth-boxWidth)/2;
if(marginTB<0)
{
popId.css({
'top':'30px',
'left': marginLR,
'position':'absolute',
});
}
else
{
popId.css({
'top':marginTB,
'left': marginLR,
});
}
}
$(function(){
$(document).on('click','.closeBtn',function(){
$('.overlay-box').fadeOut();
$('.overlay,.closeBtn').remove();
}); 
});

$(document).ready(function(){

$('.tab-button').click(function(){
var show = $(this).attr('show')
var hide = $(this).attr('hide')
var hide1 = $(this).attr('hide1')
$('#'+hide).hide()
$('#'+show).show()
$('#'+hide1).hide()

$('.week-events').parent('').find("a").each(function(){
$(this).removeClass("active-tab-btn");	
})

$(this).addClass("active-tab-btn");	
});		
});

$(document).ready(function(){

$('.filter-event').click(function(){

$('.filter-events').parent('').find("a").each(function(){
$(this).removeClass("active-filter");	
})

$(this).addClass("active-filter");	
});		
});

$(document).ready(function(){

$('.filter-buy-tkt').click(function(){

$('.filter-buy-tkts').parent('').find("a").each(function(){
$(this).removeClass("buy-tkt-active-filter");	
})

$(this).addClass("buy-tkt-active-filter");	
});		
});

$(document).ready(function(){

$('.tab-button').click(function(){
var show = $(this).attr('show')
var hide = $(this).attr('hide')
var hide1 = $(this).attr('hide1')
var hide2 = $(this).attr('hide2')
$('.'+hide).hide()
$('.'+show).show()
$('.'+hide1).hide()
$('.'+hide2).hide()

$(this).closest('div').find("input").each(function(){
$(this).removeClass("active-tab-btn");	
})

$(this).addClass("active-tab-btn");	
});		
});



$(function(){
$('.mobile-icon a').click(function(){
var statsM=parseInt($('.menu-catgry-drop').css('left'));
if(statsM < 0)
{
$('.menu-catgry-drop').animate({left:'0'});
$(this).addClass('activem');
}
else
{
$('.menu-catgry-drop').animate({left:'-100%'});
$(this).removeClass('activem');
}
})

});

$(document).ready(function() {
function setHeight() {
windowHeight = $(window).innerHeight();
$('.menu-catLink').css('min-height', windowHeight);
};
setHeight();

$(window).resize(function() {
setHeight();
});
});


/*****Country Dropdown******/
$(function(){
$('.selectMenuCnt h3').click(function(){
$(this).next('.selectMenuList').slideToggle();
$(this).css({'border-bottom-left-radius':'0px','border-bottom-right-radius':'0px','background-color':'#464546'});
$('.selectMenuList').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background':'#464546'});
})
$('.selectMenuList ul li').click(function(){
var menu = $(this).html()
var menuid=$(this).attr('id');
$(this).parents('.selectMenuList').slideUp();
$(this).parents('.selectMenuList').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background-color':'#464546'})
$(this).parents('.selectMenuList').prev('h3').html(menu);
$(this).parents('.selectMenuList').prev('h3').attr('id',menu);
$(this).parents('.selectMenuList').prev('h3').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background-color':'#464546'})
})






$('body').click(function(e){

target = $(e.target).attr('class');
if (target != 'h3' && target !='selectMenuCnt')
{
$('.selectMenuList').slideUp();
$('.selectMenuList').prev('h3').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background-color':'#464546'})
$('.selectMenuList').css({'background-color':'#464546'})
}

})

});

/*****Events Dropdown******/
$(function(){
$('.selectMenuEvents h3').click(function(){
$(this).next('.selectMenuListEvents').slideToggle();
$(this).css({'border-bottom-left-radius':'0px','border-bottom-right-radius':'0px','background-color':'#000'});
$('.selectMenuListEvents').css({'border-bottom-left-radius':'8px','border-bottom-right-radius':'8px','background':'#000','opacity':'0.5'});
})
$('.selectMenuListEvents ul li').click(function(){
var menu = $(this).html()
var menuid=$(this).attr('id');
$(this).parents('.selectMenuListEvents').slideUp();
$(this).parents('.selectMenuListEvents').css({'border-bottom-left-radius':'8px','border-bottom-right-radius':'8px','background-color':'#000'})
$(this).parents('.selectMenuListEvents').prev('h3').html(menu);
$(this).parents('.selectMenuListEvents').prev('h3').attr('id',menu);
$(this).parents('.selectMenuListEvents').prev('h3').css({'border-bottom-left-radius':'8px','border-bottom-right-radius':'8px','background-color':'#000'})
})

$('body').click(function(e){

target = $(e.target).attr('class');
if (target != 'h3' && target !='selectMenuListEvents')
{
$('.selectMenuListEvents').slideUp();
$('.selectMenuListEvents').prev('h3').css({'border-bottom-left-radius':'8px','border-bottom-right-radius':'8px','background-color':'#000'})
$('.selectMenuListEvents').css({'background-color':'#000'})
}

})

});

/*****Recommended Dropdown******/
$(function(){
$('.selectMenuCnt-recomd h3').click(function(){
$(this).next('.selectMenuList-recomd').slideToggle();
$(this).css({'border-bottom-left-radius':'0px','border-bottom-right-radius':'0px','background-color':'#fff'});
$('.selectMenuList-recomd').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background':'#f1f1f1'});
})
$('.selectMenuList-recomd ul li').click(function(){
var menu = $(this).html()
var menuid=$(this).attr('id');
$(this).parents('.selectMenuList-recomd').slideUp();
$(this).parents('.selectMenuList-recomd').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background-color':'#f1f1f1'})
$(this).parents('.selectMenuList-recomd').prev('h3').html(menu);
$(this).parents('.selectMenuList-recomd').prev('h3').attr('id',menu);
$(this).parents('.selectMenuList-recomd').prev('h3').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background-color':'#f1f1f1'})
})






$('body').click(function(e){

target = $(e.target).attr('class');
if (target != 'h3' && target !='selectMenuCnt-recomd')
{
$('.selectMenuList-recomd').slideUp();
$('.selectMenuList-recomd').prev('h3').css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px','background-color':'#fff'})
$('.selectMenuList-recomd').css({'background-color':'#f1f1f1'})
}

})

});








var startProductBarPos=-1;
window.onscroll=function(){
var bar = document.getElementById('productMenuBar');
if(startProductBarPos<0)startProductBarPos=findPosY(bar);
//alert(findPosY(bar));

if(pageYOffset>startProductBarPos){
bar.style.position='fixed';
bar.style.top=0;
bar.style.backgroundColor='rgb(39, 39, 39)';
bar.style.width='100%';
bar.style.marginLeft=0;
bar.style.opacity=1;
$(".search-bar-menu").fadeIn(2500);
$('.sub-search-menu').addClass("search-bar-menu-block");

//bar.addClass('fadeIn animated-slow');
//bar.style.transition='width 2s';

$(".search-bar-menu").css("display", "block");
$('.search-bar-menu').addClass("effect");
$('.search-bar').addClass("add-width");


//$(".search-bar-menu").fadeInRight(2000);

}else{
bar.style.position='absolute';
bar.style.top='35px';
bar.style.backgroundColor='rgba(39, 39, 39,0.8)';
bar.style.width='850px';
bar.style.marginLeft='2%';
$('.sub-search-menu').removeClass("search-bar-menu-block");
//bar.removeClass('fadeIn animated-slow');
//bar.style.transition='width 2s';
$(".search-bar-menu").css("display", "none");
$('.search-bar-menu').removeClass("effect");
$('.search-bar').removeClass("add-width");
}

};


function findPosY(obj) {
var curtop = 0;
if (typeof (obj.offsetParent) != 'undefined' && obj.offsetParent) {
$('.sub-search-menu').addClass("search-bar-menu-block");
while (obj.offsetParent) {
curtop += obj.offsetTop;
obj = obj.offsetParent;
}
curtop += obj.offsetTop;
}
else if (obj.y)
curtop += obj.y;
return curtop;
}



$(function(){
var slider1;

slider1=$('.home-slider').bxSlider({
mode: 'horizontal',auto: true,autoControls: false,controls:true,pager:false,pause:3000,caption:true,speed:100,

onSlideAfter: function(){
$(".add-rem").addClass("visible animated bounceInUp"); 
$(".add-rem").removeClass("title"); 	
},

onSlideBefore: function(){
$(".add-rem").addClass("title"); 
$(".add-rem").removeClass("visible animated bounceInUp");   	
}

})

$('.bx-controls-direction a').click(function() {
setTimeout(function() {
slider1.startAuto();
},1000);
})

})


$(function(){
var slider1;
slider1=$('.sale-slider').bxSlider({
mode: 'horizontal',auto: false,autoControls: false,controls:true,pager:false,pause:3000,caption:true,speed:200})
})


$(function(){

$(".buy-ticket").mouseover(function(){
$(this).parent().addClass("bg-color-grey");
});

$(".buy-ticket").mouseout(function(){
$(this).parent().removeClass("bg-color-grey");
});
});


$(function(){

$(".book-ticket").mouseover(function(){
$(this).parent().addClass("bg-color-grey");
});

$(".book-ticket").mouseout(function(){
$(this).parent().removeClass("bg-color-grey");
});
});


$(function(){

$(".shadow").mouseover(function(){
$(this).removeClass("shadow");
$(this).addClass("shadow-orange");
});

$(".shadow").mouseout(function(){
$(this).removeClass("shadow-orange");
$(this).addClass("shadow");
});
});


$(function(){

$(".sign-in-arrow").mouseover(function(){
$('.OrangeArrow').attr('src', 'images/white-arrow.png');
});

$(".sign-in-arrow").mouseout(function(){
$('.OrangeArrow').attr('src', 'images/orange-arrow.png');
});
});


$(function(){

$(".earth-icon").mouseover(function(){
$('.earth').attr('src', 'images/language-hover.png');
});

$(".earth-icon").mouseout(function(){
$('.earth').attr('src', 'images/language.png');
});
});

/*on select active*/
/*$('.number').on('click',function(){
	alert("hello");
   $('.number').removeClass('active-number');
    $(this).addClass('active-number');
});*/

$(document).ready(function(){
    $(".number").click(function(){
	$('.number').removeClass('active-number');		
        $(this).addClass("active-number");
    });
});

	$('.file-upload input[type=file]').change(function(){
		var fval=$(this).val();
		var filterValue = fval.replace("C:\\fakepath\\", "");
		$(this).parents('.file-upload').find('span').html(filterValue);
	})