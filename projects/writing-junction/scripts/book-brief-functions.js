$.fn.anchorAnimate = function(settings) {
    settings = jQuery.extend({
        speed : 500
        }, settings);
        return this.each(function(){
        var caller = this
        $(caller).click(function (event) {
				$('.inner ul li a').removeClass('active');
				$(this).addClass('active');
        event.preventDefault()
        var locationHref = window.location.href
        var elementClick = $(caller).attr("href")
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
        });
        return false;
        
        })
    })
}
/*Doucment resize Function*/

//Slide Function
	
/*Star Rating js*/
$(function(){

});




$(function(){
    $(".slide-brief").anchorAnimate();
		
		$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
		var hdr=$('.header').height();
		var suhdr=$('.briefBand').height();
		var total=hdr+suhdr+5;
		
    if (scrollPosition > $('.s1').offset().top - total && scrollPosition < $('.s2').offset().top - total) {
        $('.inner ul li a').removeClass('active')
        $('.inner ul li:eq(0)').children('a').addClass('active');
    } else if (scrollPosition > $('.s2').offset().top-total && scrollPosition < $('.s3').offset().top-total) {
        $('.inner ul li a').removeClass('active')
        $('.inner ul li:eq(1)').children('a').addClass('active');
    } else if (scrollPosition > $('.s3').offset().top-300 && scrollPosition < $('.footer').offset().top-300) {
			console.log(total)
        $('.inner ul li a').removeClass('active')
        $('.inner ul li:eq(2)').children('a').addClass('active');
		
	
    }
	if($(window).width() > 767)
	{
	if ($(this).scrollTop() > $('.s2').offset().top - 162) {
            $('.briefBand').addClass('fixed');
        } else {
            $('.briefBand').removeClass('fixed');
        }
				var scrollPosition1 = $(window).scrollTop();
				if(scrollPosition1 > $('.s2').offset().top - 162 && scrollPosition1 < $('.footer').offset().top )
				{	
					$('.briefBand .show-reviews').css('display','none');
					$('.briefBand .allLinks').fadeIn(1000).css('display','block');
				}
				else
				{
					$('.briefBand .show-reviews').fadeIn(1000).css('display','block');
					$('.briefBand .allLinks').css('display','none');
				}
	}
});


});

$(function(){
	var owl = $("#user-view");
	owl.owlCarousel({
 
      autoPlay: false, //Set AutoPlay to 3 seconds
 			navigation : true,
			pagination:false,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
			itemsTablet: [600,1],
  });


	
	
	$('.rating ol li button').click(function(event){
		event.preventDefault();
		var clickIndex = $(this).parent('li').index() + 1;
		$(this).parents('.rating').attr('data-count',clickIndex)
		$(this).parents('ol').children('li').find('button').removeClass('active')
		$(this).parents('ol').children('li').each(function(i){
			$(this).find('button').addClass('active')
			if((i+1)  == clickIndex)
			{
				return false;
			}
		})
	})
	
	$(".rating ol li").hover(function(event){
    event.preventDefault();
		$(this).prevAll('li').children('button').addClass('active1')
		
    }, function(){
    $(this).parents('ol').children('li').find('button').removeClass('active1')
	});
})