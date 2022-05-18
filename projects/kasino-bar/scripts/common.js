/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
})
/*Docuemnt load function*/

$(window).load(function () {
  // fixedFooter()
  // $('.loader').fadeOut(); 
	  fixedFooter()
	 // setTimeout(function(){
		$('body').addClass('loaded');
	//},4000)
})
$(window).load(function() {
	setTimeout(function() {
		//alert("hello")
		$('.scrollbars').ClassyScroll({autoHide:true,wheelSpeed:25});
		 }, 800);
});
function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}



$(window).scroll(function(){if($(this).scrollTop()>100){$('.events-btn').fadeIn();$('.nav').addClass('fixed');}else{$('.events-btn').fadeOut();$('.nav').removeClass('fixed');}});

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
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-header').append('<div onclick="playPause()" class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
		
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
		$(this).remove();
  });
  
   // $(document).on('click', '.overlay-box', function () {return false;});
  /*$(document).on('click', '.overlay', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
		$('.overlay-box').find('.overlay-content').hide();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });*/
}
/*Overlay function end*/

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
			$('.menubar').addClass('open-navigation');
		}
		else
		{
			$('.menubar').removeClass('open-navigation');
		}
	}); 
	
	$('.subdrop-down').click(function() {
        if ($(window).width() < 981) {
            var subStaus = $(this).children('.subdropdown').css('display');
            if (subStaus == 'none') {
                $('.subdropdown').slideUp();
                $('.subdrop-down').removeClass('active');
                $(this).addClass('active');
                $(this).children('.subdropdown').slideDown();
            } else {
                $(this).removeClass('active');
								$('.subdrop-down').removeClass('active');
                $(this).children('.subdropdown').slideUp();
            }
        }
    });
	
})();