/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
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
		$('.animate-label .input-group').click(function(){
		 if ($(this).find('select').size() > 0) {
        // $(this).find('label').addClass('active');
         
        // var id = $(this).find('select').attr('id');
        // console.log(id);
          
         
        }  else {
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
	$('.dots-submenu').click(function(){
		if($(this).hasClass('active'))
		{
			$('.dots-submenu').removeClass('active');
			$('.d-submenu-cntr').slideUp();
		}
		else
		{
			$(this).addClass('active');
			$('.d-submenu-cntr').slideDown();
		}
	});
	 $(document).on('click', '.d-submenu-cntr a', function () {
		$('.dots-submenu').removeClass('active');
		$(this).parents('.d-submenu-cntr').slideUp();
	});
	
	$('.statement-navcntr .dis-table-cell').click(function(){
		if($(this).hasClass('active'))
		{
			$('.statement-navcntr .dis-table-cell').removeClass('active');
		}
		else
		{
			$('.statement-navcntr .dis-table-cell').removeClass('active');
			$(this).addClass('active');
		}
	});
	
	$(document).on('click', '.show-mobnav', function () {
		$('.navigation').fadeIn();
		$('.navigation').addClass('open-nav');
	});
	$(document).on('click', '.navigation', function () {
		$(this).fadeOut();
		$(this).removeClass('open-nav');
	});
	$(document).on('click', '.close-nav', function () {
		$(this).parents('.navigation').fadeOut();
		$(this).parents('.navigation').removeClass('open-nav');
	});
	
    i=0;
	$(document).on('click', '.onlynumbers', function () {
		 $('.mpin-dots-show ul li').eq(i).addClass('active');
		 if($('.mpin-dots-show ul li').eq(5).hasClass('active'))
		 {
			//setTimeout(function(){ window.location = 'dashboard.html'; }, 300);
			j = i;
		 }
		 else
		 {
			j = i;
			i=i+1;
		 	
		 }
		 	
	});
	$(document).on('click','.dashboard-go', function () {
			//setTimeout(function(){ window.location = 'dashboard.html'; }, 300);
			window.location = 'dashboard.html';
	});
	
	
	$(document).on('click', '.removeMpinbtn', function () {
		 $('.mpin-dots-show ul li').eq(j).removeClass('active');
		 if($('.mpin-dots-show ul li').eq(0).hasClass('active'))
		 {
			 j=j-1;
			 i=j+1
			//setTimeout(function(){ window.location = 'dashboard.html'; }, 300);
		 }
		 else
		 {
			 i=0;
		 }
	});
	
	
	$('.icon-ben-star').click(function(){
		if($(this).hasClass('active'))
		{
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
		}
	});
	
	$('.has-select').click(function(){
		//$('.hide-block').show();
	})
	$('.input-type-select select').change(function() {
			var _val_ac=$( ".input-type-select select option:selected" ).attr('data-acc');
			var _val_brh=$( ".input-type-select select option:selected" ).attr('data-branch');
			var _val_actyp=$( ".input-type-select select option:selected" ).attr('data-actype');
			$('.add-acno').html('').append(_val_ac);
			$('.add-brh').html('').append(_val_brh);
			$('.add-actyp').html('').append(_val_actyp);
			
			var _val_amtcr=$( ".input-type-select select option:selected" ).attr('data-amtcr');
			var _val_pamt=$( ".input-type-select select option:selected" ).attr('data-pamt');
			var _val_intr=$( ".input-type-select select option:selected" ).attr('data-intr');
			$('.add-amtcr').html('').append(_val_amtcr);
			$('.add-pamt').html('').append(_val_pamt);
			$('.add-intr').html('').append(_val_intr);
			$('.hide-block').show();
			
			var hideStatus=$( ".input-type-select select option:selected" ).attr('data-hide');
			if(hideStatus=="hide")
			{
				$('.hide-block').hide();
			}
	});

	$(document).on('click', '.account-radio .input-type-radio label', function () {
		var radioSatus=$(this).parents('.input-type-radio').next('.go-account').css('display');
		if(radioSatus=='none')
		{	
			$('.go-account').hide();
			$(this).parents('.input-type-radio').next('.go-account').fadeIn();
		}
		else
		{
			$(this).parents('.input-type-radio').next('.go-account').fadeOut();
		}
	})
	$('input[name=select-account]').attr('checked',false);
	
	$(document).on('click', '.beneficiary-list ul li abbr', function () {
		$(this).parents('li').remove();
	});
	
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
});

function actionState(para){
	$('.hidetabs').hide();
	$('#'+para).show();
	}

function fixedFooter()
{
  $('body').css('min-height', $(window).height());
	var headr_h=$('.account-details').height();
	var filterfo=$('.filter-locator').height();
	$('#map-canvas').css('height',($(window).height()-headr_h-filterfo))
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
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display','block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display','none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
}

/*Overlay function end*/

	$(document).on('click', '.more-optionsmenu', function () {
		 var menuStaus=$('.hiddenmore-opt').css('display');
		 if(menuStaus=="none")
		 {
			 $('.hiddenmore-opt').addClass('showmore-opt');
		 }
		 else
		 {
			$('.hiddenmore-opt').removeClass('showmore-opt');
		 }
	});