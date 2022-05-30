/*Doucment resize Function*/
$(window).resize(function(){
	fixedFooter();
	overlayPossition(overlayId);
})

/*Docuemnt load function*/
$(window).load(function(){
	fixedFooter()
	$('.loader').fadeOut();
})

/*Ready Funtion*/
$(function(){
	fixedFooter()
	/*Back to top Function start*/
	$('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
	$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
					$('.scrollTop').fadeIn();
			} else {
					$('.scrollTop').fadeOut();
			}
	});
	$(document).on('click', '.scrollTop a', function() {
			$('body,html').animate({scrollTop: 0}, 800);
	});
	/*Back to top Function End*/
	
/*Header footer loading*/
	$('.footer').load('footer.html');
})
function fixedFooter()
{
	$('body').css('min-height',$(window).height());
}

/*Overlay function*/
function overlayBox(popUpId){
  overlayPossition(popUpId)
  overlayId = popUpId
  $('body').append('<div class="overlay"></div>')
  $('#'+popUpId).append('<div class="closeBtn">X</div>')
  $('#'+popUpId).fadeIn();
}

/*Open Nested Overlay function*/
function overlayBoxinfo(popupID,popup_ID)
{
  target = $('#' + popupID)
  old_target = $('#' + popup_ID)
  
  $(target).find('.overlay,.closeBtn').remove();
  
  animationIn = 'fadeIn';
  animationOut = 'fadeOut';
  
  overlayPossition(popup_ID)
  $('#'+popup_ID).append('<div class="closeBtn">X</div>')
  $('#'+popup_ID).fadeIn();
  
  $(target).css('visibility', 'show').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
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
	
	$('.upload-files input[type="file"]').change(function () {
        var fval = $(this).val();
        var filterValue = fval.replace("C:\\fakepath\\", "");
        $(this).parents('.upload-files').next('.show-filename').html(filterValue);
    }); 
	$('.small-menu').click(function(){
		var fstatus=$('.floating-navigation').css('display');
		if(fstatus=='none')
		{
			$('.floating-navigation').fadeIn();
			$('.animate-menu').animate({right:'0'},'slow');
		}
		else
		{
			$('.floating-navigation').fadeOut();
			$('.animate-menu').animate({right:'-100%'},'fast');
		}
	})
	
	$('.closing-float, .floating-navigation').click(function(){
		var fstatus=$('.floating-navigation').css('display');
		if(fstatus=='block')
		{
			$('.floating-navigation').fadeOut();
			$('.animate-menu').animate({right:'-100%'},'fast');
		}
		else
		{
			$('.floating-navigation').fadeIn();
			$('.animate-menu').animate({right:'0'},'slow');
		}
	})

	$('.expand-all').click(function () {
	    $('.border-box').css('display', 'block')
	    $('.myaccordianarr').remove()
	    $(".myaccordian").attr("initialdirection", "up")
	    apply_accordian()
	    //$(".myaccordian").attr("initialdirection", "down")
	});

	$('.collapse-all').click(function () {
	    $('.border-box').css('display', 'none')
	    $('.myaccordianarr').remove()
	    $(".myaccordian").attr("initialdirection","down")
	    apply_accordian()
	    //$(".myaccordian").attr("initialdirection", "up")
	});

	//$('.input-group').find("input[type='text']").blur(function () {
    //    alert("blur")
    //    $(this).css("background-color", "#fff !important")

    //    $(this).each()
	//})

	//$("input[type='text']").each(function () {
	//    $(this).blur(function () {
	//        alert("blur")
	//        $(this).css("background-color", "#fff !important")
	//    })
    //})

	$("input[type='text'],textarea,select").focus(function () {
	    $(this).css("background-color", "#ffffde !important")
	})

	$("input[type='text'],textarea,select").blur(function () {
	    $(this).css("background-color", "#fff !important")
	})
	
});

/*Overlay function end*/
function showfields(para){
	//$('.hideshowdiv').slideUp();
	var status=$('.'+para).css('display');
	$('.'+para).prev('a').children('h2').addClass('closeh2');
	if(status=='none')
	{
	$('.'+para).slideDown();
	$('.'+para).prev('a').children('h2').removeClass('closeh2');
	
	}
	else
	{
	$('.'+para).slideUp();
	}
	}
	
	
	
function showfieldsnew(para){
	//$('.hidediv').slideUp();
	
	var status=$('.'+para).css('display');
	
	$('.'+para).prev('a').children('h2').addClass('closeh2');	
	
	if(status=='none')
	{
		$('.'+para).slideDown();
		$('.'+para).prev('a').children('h2').removeClass('closeh2');		
		/* 
		$('#mtl').click(function(){
			$('.picture').attr('src', '../images/drop-arrow.png');
	    });*/
	
	}
	else
	{
		$('.'+para).slideUp();		
		//alert('slide up now!');
		/*$('#mtl').click(function(){
			$('.picture').attr('src', '../images/hide-arrow.png');
	    });*/
	
	}
}


/* residential show hide div*/
//$(document).ready(function() { 
//	$('.selecthide').change(function() {
//		 parent = $(this).attr('for');		
//		//$('#'+parent+' .hide-select-div').hide();
//		if($(this).val() != "")
//		{
//			$(".hide-select-div").show();
//		}
//		else
//		{
//			$(".hide-select-div").hide();
//		}
//	});
// });
/*-- Option Value Hide / Show --------------------------*/
$(document).ready(function() { 
	//$('.selecthide').change(function() {
//			
//
//		var imgsrc = $(this).find("[value="+$(this).val()+"]").attr('imgsrc')	
//
//		$("#discimg").attr("src",imgsrc)
//
//		if(imgsrc == "" || typeof(imgsrc) == "undefined")
//
//		{
//
//			$("#discimg").addClass("hide-select-div")
//
//		}
//
//		else
//
//		{
//
//			$("#discimg").removeClass("hide-select-div")
//
//		}
//
//	});	
	$('.selecthide').change(function() {
		
		var parent = $(this).attr('for');	
		
		$('#'+parent+' .hide-select-div').hide();
		$('#' + $(this).val()).show();
		
		
	});
	
	$('.selecthide').change(function() {
		
		var parent = $(this).attr('for');	
		
		$('.'+parent+' .hidediv').hide();
		$('.' + $(this).val()).show();
		
		
	});

	
	$('.selecthide').change(function() {
		
		var value = $(this).val;	
		
		$('.selected-val').val($(this).val);
		
	});
	
	$('.selecthide').change(function() {
			
		var parent = $(this).attr('for');	
		$('.'+parent+' .hide-select-div').hide();
		$('.' + $(this).val()).show();	
		var vals1=$(this).val();
		var vals2=$('.' + vals1).attr('class').split(' ')[2];
		var ad1=$('.'+parent).children('.' + vals1).css('display');
	});	
	
	$('.selecthide-Customer').change(function() {		
		if($(this).val() != "" && $(this).val() != "no")
		{
			$(".hide-select-div").show();
		}
		else
		{
			$(".hide-select-div").hide();
		}			
	});
			
	
	
	$('select.changeHeading').change(function() {
		var sstus=$(this).attr('for');
		
		var abcdsd=$(this).val();
		if(abcdsd==1)
		{
			$('.'+sstus).children('.change-head').html('Adhar Card')
		}
		if(abcdsd==2)
		{
			$('.'+sstus).children('.change-head').html('Pan Card')
		}
		if(abcdsd==0)
		{
			$('.'+sstus).children('.change-head').html('Place of Issue')
		}
	});	
 });
 
 
 
 $(document).ready(function() { 
	$('.selecthidePlus').change(function() {
		var parent = $(this).attr('for');	
		/*$('#'+parent+' .hide-select-div').hide();
		$('#' + $(this).val()).show();	*/
		$('#' + $(this).val()).show();		
		
 });	
 });
 
 /*-- Image Change in Corporate Profile --------------------------*/
 $(document).ready(function() { 
		
	});		
 
$(document).ready(function () {
        $('select.immovableProperty').change(function () {
        $('.hide1').hide();
        $('#'+$(this).val()).show();
    });
});
/*upload image function*/
function PreviewImage(no) {
	var oFReader = new FileReader();
	oFReader.readAsDataURL(document.getElementById("uploadImage"+no).files[0]);
	
	oFReader.onload = function (oFREvent) {
		document.getElementById("uploadPreview"+no).src = oFREvent.target.result;
	};
}
/*-------------- Add by Pratik (For auto expand grid)---------------------*/
$(document).ready(function () {
$("#show-1").blur(function(){
$("#tr-hide-1").css("display","table-row")	
});
});
$(document).ready(function () {
$("#show-2").blur(function(){
$("#tr-hide-2").css("display","table-row")	
});
});$(document).ready(function () {
$("#show-3").blur(function(){
$("#tr-hide-3").css("display","table-row")	
});
});$(document).ready(function () {	
$("#show-4").blur(function(){
$("#tr-hide-4").css("display","table-row")	
});
});

$(document).ready(function () {	
$("#show-5").blur(function(){
$("#tr-hide-5").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-6").blur(function(){
$("#tr-hide-6").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-7").blur(function(){
$("#tr-hide-7").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-8").blur(function(){
$("#tr-hide-8").css("display","table-row")	
});
});

$(document).ready(function () {	
$("#show-9").blur(function(){
$("#tr-hide-9").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-10").blur(function(){
$("#tr-hide-10").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-11").blur(function(){
$("#tr-hide-11").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-12").blur(function(){
$("#tr-hide-12").css("display","table-row")	
});
});

$(document).ready(function () {	
$("#show-13").blur(function(){
$("#tr-hide-13").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-14").blur(function(){
$("#tr-hide-14").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-15").blur(function(){
$("#tr-hide-15").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-16").blur(function(){
$("#tr-hide-16").css("display","table-row")	
});
});


$(document).ready(function () {	
$("#show-17").blur(function(){
$("#tr-hide-17").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-18").blur(function(){
$("#tr-hide-18").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-19").blur(function(){
$("#tr-hide-19").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-20").blur(function(){
$("#tr-hide-20").css("display","table-row")	
});
});

$(document).ready(function () {	
$("#show-21").blur(function(){
$("#tr-hide-21").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-22").blur(function(){
$("#tr-hide-22").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-23").blur(function(){
$("#tr-hide-23").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-24").blur(function(){
$("#tr-hide-24").css("display","table-row")	
});
});

$(document).ready(function () {	
$("#show-25").blur(function(){
$("#tr-hide-25").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-26").blur(function(){
$("#tr-hide-26").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-27").blur(function(){
$("#tr-hide-27").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-28").blur(function(){
$("#tr-hide-28").css("display","table-row")	
});
});
$(document).ready(function () {	
$("#show-29").blur(function(){
$("#tr-hide-29").show()	
});
});

$(document).ready(function () {	
$("#show-30").blur(function(){
$("#tr-hide-30").show()	
});
});

$(document).ready(function () {	
$("#show-31").blur(function(){
$("#tr-hide-31").show()	
});
});
$(document).ready(function () {	
$("#show-32").blur(function(){
$("#tr-hide-32").show()	
});
});
$(document).ready(function () {	
$("#show-33").blur(function(){
$("#tr-hide-33").show()	
});
});
$(document).ready(function () {	
$("#show-34").blur(function(){
$("#tr-hide-34").show()	
});
});
$(document).ready(function () {	
$("#show-35").blur(function(){
$("#tr-hide-35").show()	
});
});
$(document).ready(function () {	
$("#show-36").blur(function(){
$("#tr-hide-36").show()	
});
});
$(document).ready(function () {	
$("#show-37").blur(function(){
$("#tr-hide-37").show()	
});
});
$(document).ready(function () {	
$("#show-38").blur(function(){
$("#tr-hide-38").show()	
});
});
$(document).ready(function () {	
$("#show-39").blur(function(){
$("#tr-hide-39").show()	
});
});
$(document).ready(function () {	
$("#show-40").blur(function(){
$("#tr-hide-40").show()	
});
});
$(document).ready(function () {	
$("#show-41").blur(function(){
$("#tr-hide-41").show()	
});
});
$(document).ready(function () {	
$("#show-42").blur(function(){
$("#tr-hide-42").show()	
});
});





	
	
/*--------------add by Pratik for multiple row auto grid---------------------*/	


$(document).ready(function () {
$("#group-show-1").blur(function(){
$("#group-tr-hide-1").css("display","table-row-group")	
});
});

$(document).ready(function () {
$("#group-show-2").blur(function(){
$("#group-tr-hide-2").css("display","table-row-group")	
});
});

$(document).ready(function () {
$("#group-show-3").blur(function(){
$("#group-tr-hide-3").css("display","table-row-group")	
});
});

$(document).ready(function () {
$("#group-show-4").blur(function(){
$("#group-tr-hide-4").css("display","table-row-group")	
});
});

$(document).ready(function () {
$("#group-show-5").blur(function(){
$("#group-tr-hide-5").css("display","table-row-group")	
});
});

	
	
	
/*-------------- end multiple row auto grid---------------------*/		
			
$(document).ready(function () {
	$('.add-account-1').click(function(){
	$('.add-grid-2').slideDown()	
	})
	
	$('.add-account-2').click(function(){
	$('.add-grid-3').slideDown()	
	})	
});
$(document).ready(function () {
	$('.credit-account-1').click(function(){
	$('.credit-details-2').slideDown()	
	})
	
	$('.credit-account-2').click(function(){
	$('.credit-details-3').slideDown()	
	})
	
});

$(document).ready(function () {
	$('.property-account-1').click(function(){
	$('.property-details-2').slideDown()	
	})
	
	$('.plusimg2').click(function(){
	$('.property-details-3').slideDown()	
	})
	
	$('.plusimg3').click(function(){
	$('.property-details-4').slideDown()	
	})
	
});

$(document).ready(function () {
	
	$('.property-acc-hide2').click(function(){
	$('.property-details-2').slideUp();	
	
	})
	
	$('.property-acc-hide3').click(function(){
	$('.property-details-3').slideUp()	
	})
	
	$('.property-acc-hide4').click(function(){
	$('.property-details-4').slideUp()	
	})
	
});

/*idproof plus minous*/

$(document).ready(function () {
	$('.plusimg1').click(function(){
	$('.id-proof2').slideDown()	
	})
	
	$('.plusimg2').click(function(){
	$('.id-proof3').slideDown()	
	})
	
	$('.plusimg3').click(function(){
	$('.id-proof4').slideDown()	
	})
	
	$('.plusimg4').click(function(){
	$('.id-proof5').slideDown()	
	})
	
	
});

$(document).ready(function () {
	
	$('.minous1').click(function(){
	$('.id-proof2').slideUp();	
	
	})
	
	$('.minous2').click(function(){
	$('.id-proof3').slideUp()	
	})
	
	$('.minous3').click(function(){
	$('.id-proof4').slideUp()	
	})
	
	$('.minous4').click(function(){
	$('.id-proof5').slideUp()	
	})
	
	
});


$(document).ready(function () {
	$('.plusimg01').click(function(){
	$('.id-proof02').slideDown()	
	})
	
	$('.plusimg02').click(function(){
	$('.id-proof03').slideDown()	
	})
	
	$('.plusimg03').click(function(){
	$('.id-proof04').slideDown()	
	})
	
	$('.plusimg04').click(function(){
	$('.id-proof05').slideDown()	
	})
	
	
});

$(document).ready(function () {
	
	$('.minous01').click(function(){
	$('.id-proof02').slideUp();	
	
	})
	
	$('.minous02').click(function(){
	$('.id-proof03').slideUp()	
	})
	
	$('.minous03').click(function(){
	$('.id-proof04').slideUp()	
	})
	
	$('.minous04').click(function(){
	$('.id-proof05').slideUp()	
	})
	
	
});
$(document).ready(function () {
	
	$('.radio-display').click(function(){
		
	$('.id-proof-info').show();	
	
	})
	
});	

/*Address Proof Plus Minus*/

$(document).ready(function () {
	$('.plusimg5').click(function(){
	$('.id-proof6').slideDown()	
	})
	
	$('.plusimg6').click(function(){
	$('.id-proof7').slideDown()	
	})
	
	$('.plusimg7').click(function(){
	$('.id-proof8').slideDown()	
	})
	
});

$(document).ready(function () {
	
	$('.minous4').click(function(){
	$('.id-proof6').slideUp();	
	
	})
	
	$('.minous5').click(function(){
	$('.id-proof7').slideUp()	
	})
	
	$('.minous6').click(function(){
	$('.id-proof8').slideUp()	
	})
	
});

$(document).ready(function () {
	
	$('.radio-display-dtls').click(function(){
		
	$('.address-proof-info').show();	
	
	})
	
});	

/*live stock*/
$(document).ready(function () {
	
	$('.minous4').click(function(){
	$('.live-stock1').slideUp();	
	
	})
	
	$('.minous5').click(function(){
	$('.live-stock2').slideUp()	
	})
	
	$('.minous6').click(function(){
	$('.live-stock3').slideUp()	
	
	})
	$('.minous7').click(function(){
	$('.live-stock4').slideUp()	
	
	})
	
});


$(document).ready(function(){
		$(".mediDrop").change(function(){
            $( ".mediDrop option:selected").each(function(){
                if($(this).attr("value")=="yedMedi"){
                    $(".hideMedi").hide();
                    $(".othermedi").show();
			$(".othermedi input[type=text]").focus();
                }
            });
			});
			});
			
			$('.othermedi span').click(function(){
					$(this).parent().hide();
					$(".hideMedi").show();
					$('.hideMedi option:eq(0)').prop('selected', true)				
				});
				
				
				$(document).ready(function(){
		$(".selfempdrop").change(function(){
            $( ".selfempdrop option:selected").each(function(){
                if($(this).attr("value")=="selfemplist"){
                    $(".hideselfemp").hide();
                    $(".selfemp").show();
			$(".selfemp input[type=text]").focus();
                }
            });
			});
			});
			
			$('.selfemp span').click(function(){
					$(this).parent().hide();
					$(".hideselfemp").show();
					$('.hideselfemp option:eq(0)').prop('selected', true);
		
				
				});
				
/*--------------add by Pratik---------------------*/
/*fix navigation*/
$(window).load(function(){
	$(window).scroll(function(){
		var winSrl1=$(this).scrollTop();
		var divscrl1=$('.header').offset().top;
		var divH1=$('.header').height();
		if(winSrl1 > (divscrl1+divH1))
		{
			$('.tab-navigation').addClass('fix-bar');
		}
		else
		{
			$('.tab-navigation').removeClass('fix-bar');
		}
	})
})
$(function(){
	$(window).scroll(function(){
		var winSrl=$(this).scrollTop();
		var divscrl=$('.header').offset().top;
		var divH=$('.header').height();
		if(winSrl > (divscrl+divH))
		{
			$('.tab-navigation').addClass('fix-bar');
		}
		else
		{
			$('.tab-navigation').removeClass('fix-bar');
		}
	})
	
})
/*fix navigation end*/
/*Tushar Scripts For Tab and Multi Checkbox*/
function showtabs(para,para1){
	$( ".authenticate .tab-boxes ul li span").removeClass('active');
	$('.hide-tabs').hide();
	$('.'+para).show();
	$( ".authenticate .tab-boxes ul li:eq("+para1+") span").addClass('active');
}
function showtabs1(para1,para2){
	$( ".authenticateFN .tab-boxes ul li span").removeClass('active');
	$('.hide-tabs1').hide();
	$('.'+para1).show();
	$( ".authenticateFN .tab-boxes ul li:eq("+para2+") span").addClass('active');
}
function showtabs2(para3,para4){
	$( ".authenticatePOI .tab-boxes ul li span").removeClass('active');
	$('.hide-tabs2').hide();
	$('.'+para3).show();
	$( ".authenticatePOI .tab-boxes ul li:eq("+para4+") span").addClass('active');
}
//var fnUpdateCount = function() {
//	var abcd =$('.select-values').attr('for');
//	var generallen = $('.select-values').children('.'+abcd).find("input[name='wpmm[]']:checked").length;
//	if (generallen > 0) {
//		$(".select-display input").val(generallen + ' ' + 'Selected');
//		$('.'+abcd).parents('.select-values').prev('.select-display').find('input').val(generallen + ' ' + 'Selected');
//		
//		
//	} 
//	else {
//
//		$('.'+abcd).parents('.select-values').prev('.select-display').find('input').val('Select');
//		
//
//	}
//
//};
//
//
//
//$(".select-values input:checkbox").on("change", function() {
//		var afor=$(this).parents('.select-values').attr('for');
//		var acls=$(this).parents('ul').attr('class');
//		if(afor==acls)
//		{
//			fnUpdateCount();
//			
//		}
//
//});
$(".select-values input:checkbox").on("change", function() {
var generallen = $(this).parents('.select-values').find("input[name='wpmm[]']:checked").length;
       if (generallen > 0) {
               /$(".select-display input").val(generallen + ' ' + 'Selected');/
//               $(this).parents('.select-values').prev('.select-display').find('input').val(generallen + ' ' + 'Selected');
               $(this).parents('.select-values').prev('.select-display').find('input').val('View');  
               //var abcdss=$(this).parents('.select-values').parents('.address').next('');
							 //alert(abcdss)
       } else {
               $(this).parents('.select-values').prev('.select-display').find('input').val('Select');
               
       }
});
$(document).ready(function(){
	$('.switch').click(function(){
		
		var show = $(this).attr('show')
		var hide = $(this).attr('hide')
		
		if($(this).find("[type=\"checkbox\"]").prop("checked") == true)
		{
			if(show == "Salaried")
			{
				hide = hide.split("|");			
				for(var i = 0; i < hide.length; i++)
				{				
					$("#"+hide[i]).hide();	
				}						
				$("#"+show).show();
			}
			else 
			{
				if($("#chk1").prop("checked") == false)
				{
					hide = hide.split("|");			
					for(var i = 0; i < hide.length; i++)
					{
						$("#"+hide[i]).hide();	
					}						
					$("#"+show).show();
				}
			}		
		}
		else
		{
			$("#"+show).hide();
		}
		
	});
	
	
		$(document).ready(function(){
	$('#chk1').prop('checked',true);

	
	
	$("#chk2").click(function(){
		
			if($(this).prop("checked") == true)
			{  
				
				$('#chk1').prop('checked',false);
		    }
			else {
				
					$('#chk1').prop('checked',true);
				}
		});

	});
	
	
	$("#chk-box").click(function(){
		
			if($(this).prop("checked") == true)
			{  
				alert("Hello");
				$("#whats-app").show();
		    }
			else{
				
					$("#whats-app").hide();
				}
		});
		
		
	$(".checkD").click(function() {
    if($(this).is(":checked")) {
				$('.desbled').attr('disabled', 'disabled');
				/*$(".select-delv-option").css('display', 'none');*/
				$('.desbled').prop('checked',false);
    }
		else {
 
			 $('.desbled').removeAttr('disabled');
			 $(".select-delv-option").css('display', 'block');
    }
	
		
});
$(".docCheck").click(function() {
    if($(this).is(":checked")) {
				$(".docCheck-selct").css('display', 'table-cell');
				$(".sigCheck-selct").css('display', 'none');
				$(".sigCheck").prop("checked",false);
    }
		else {
 
			 $(".docCheck-selct").css('display', 'none');
    }				
});
$(".sigCheck").click(function() {
    if($(this).is(":checked")) {
				$(".sigCheck-selct").css('display', 'table-cell');
				$(".docCheck-selct").css('display', 'none');
				$(".docCheck").prop("checked",false);
    }
		else {
 
			 $(".sigCheck-selct").css('display', 'none');
    }				
});
});
/*OCurrency Script ----------------------------------------*/
$(document).ready(function(){
    $('.currency').hover(
    function(){
        $(this).children('ul').slideDown('fast');
    },
    function () {
        $(this).children('ul').slideUp('fast');
    });
	
$('.currency li').click(function()
   {
   $(this).parent('ul').parent('.currency').children('.currencyType').val($(this).text());
    $(this).parent('ul').slideUp('fast');
   });	
	
	$(".add-kyc-email").click(function(){
		if($("#kyc-email").find(".kyc-email-container").length <= 2)
		{
			var data = $(this).closest(".kyc-email-container").clone();
			//data = $(data);
			$(data).css("display","none");
			$(data).find(".add-kyc-email").html("(-)")
			$(data).find(".add-kyc-email").click(function(){
				$(this).closest(".kyc-email-container").fadeOut("fast",function(){
					$(this).closest(".kyc-email-container").remove();		
				})			
			})
			$("#kyc-email").append(data);
			$(data).fadeIn();	
		}
	})
	
	$(".add-kyc-telephone").click(function(){
		if($("#kyc-telephone").find(".kyc-telephone-container").length <= 2)
		{
			var data = $(this).closest(".kyc-telephone-container").clone();
			//data = $(data);
			$(data).css("display","none");
			$(data).find(".add-kyc-telephone").html("(-)")
			$(data).find(".add-kyc-telephone").click(function(){
				$(this).closest(".kyc-telephone-container").fadeOut("fast",function(){
					$(this).closest(".kyc-telephone-container").remove();		
				})			
			})
			$("#kyc-telephone").append(data);
			$(data).fadeIn();	
		}
	})
	
	
	$(".add-kyc-telephone-office").click(function(){
		if($("#kyc-telephone-office").find(".kyc-telephone-office-container").length <= 2)
		{
			var data = $(this).closest(".kyc-telephone-office-container").clone();
			//data = $(data);
			$(data).css("display","none");
			$(data).find(".add-kyc-telephone-office").html("(-)")
			$(data).find(".add-kyc-telephone-office").click(function(){
				$(this).closest(".kyc-telephone-office-container").fadeOut("fast",function(){
					$(this).closest(".kyc-telephone-office-container").remove();		
				})			
			})
			$("#kyc-telephone-office").append(data);
			$(data).fadeIn();	
		}
	})
	
	$(".add-kyc-fax").click(function(){
		if($("#kyc-fax").find(".kyc-fax-container").length <= 2)
		{
			var data = $(this).closest(".kyc-fax-container").clone();
			//data = $(data);
			$(data).css("display","none");
			$(data).find(".add-kyc-fax").html("(-)")
			$(data).find(".add-kyc-fax").click(function(){
				$(this).closest(".kyc-fax-container").fadeOut("fast",function(){
					$(this).closest(".kyc-fax-container").remove();		
				})			
			})
			$("#kyc-fax").append(data);
			$(data).fadeIn();	
		}
	})
	
	$(".add-kyc-extn").click(function(){
		if($("#kyc-extn").find(".kyc-extn-container").length <= 2)
		{
			var data = $(this).closest(".kyc-extn-container").clone();
			//data = $(data);
			$(data).css("display","none");
			$(data).find(".add-kyc-extn").html("(-)")
			$(data).find(".add-kyc-extn").click(function(){
				$(this).closest(".kyc-extn-container").fadeOut("fast",function(){
					$(this).closest(".kyc-extn-container").remove();		
				})			
			})
			$("#kyc-extn").append(data);
			$(data).fadeIn();	
		}
	})
	
	$(".add-kyc-preferred").click(function(){
		if($("#kyc-preferred").find(".kyc-preferred-container").length <= 2)
		{
			var data = $(this).closest(".kyc-preferred-container").clone();
			//data = $(data);
			$(data).css("display","none");
			$(data).find(".add-kyc-preferred").html("(-)")
			$(data).find(".add-kyc-preferred").click(function(){
				$(this).closest(".kyc-preferred-container").fadeOut("fast",function(){
					$(this).closest(".kyc-preferred-container").remove();		
				})			
			})
			$("#kyc-preferred").append(data);
			$(data).fadeIn();	
		}
	})
	
	
	$(".add-kyc-social").click(function(){
		if($("#kyc-social").find(".kyc-social-container").length <= 2)
		{
			var data = $(this).closest(".kyc-social-container").clone();
			//data = $(data);
			$(data).css("display","none");
			$(data).find(".add-kyc-social").html("(-)")
			$(data).find(".add-kyc-social").click(function(){
				$(this).closest(".kyc-social-container").fadeOut("fast",function(){
					$(this).closest(".kyc-social-container").remove();		
				})			
			})
			$("#kyc-social").append(data);
			$(data).fadeIn();	
		}
	})
	
	
	
	
	
	$(".add-kyc-mobile").click(function(){
		if($("#kyc-mobile").find(".kyc-mobile-container").length <= 2)
		{
			var data = $(this).closest(".kyc-mobile-container").clone();
			//data = $(data);
			$(data).css("display","none");
			$(data).find(".add-kyc-mobile").html("(-)")
			$(data).find(".add-kyc-mobile").click(function(){
				$(this).closest(".kyc-mobile-container").fadeOut("fast",function(){
					$(this).closest(".kyc-mobile-container").remove();		
				})			
			})
			$("#kyc-mobile").append(data);
			$(data).fadeIn();	
		}
	})
	
	$(".comunication-checkbox").find("[type=checkbox]").click(function(){		
		  var show = $(this).attr("show");
		  var hide = $(this).attr("hide");
		  if($(this).is(":checked")){
		  	$("."+show).show();
			$("."+hide).hide();
		  }
		  else
		  {
			  $("."+show).hide();
		  }
	})	
});


$(document).ready(function () {

	$('.bydefault-select').show()

      $('select.search').change(function () {

        $('.hide-select-div').hide();

        $('#'+$(this).val()).show();

    });

});

$(function(){

	/*Back to top Function start*/
	$(".custgrp-switch").click(function(){	
		var show = $(this).attr("show");	
		if(show == "All")
		{
			if($(this).find("[type=\"checkbox\"]").prop("checked") == true)
			{
				$(".hide3").show()
			}
			else
			{
				$(".hide3").hide()
			}
		}
		else{
			if($(this).find("[type=\"checkbox\"]").prop("checked") == true)
			{
				$("#"+show).show()
			}
			else
			{
				$("#"+show).hide()
			}
		}				
	});


	$('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');

	$(window).scroll(function() {

			if ($(this).scrollTop() > 100) {

					$('.scrollTop').fadeIn();

			} else {

					$('.scrollTop').fadeOut();

			}

	});

	$(document).on('click', '.scrollTop a', function() {

			$('body,html').animate({scrollTop: 0}, 800);

	});

	/*Back to top Function End*/

})

$(document).ready(function(){
	$("#alloted").css("display","block");
			
	$('.switch-locker').click(function(){
		var show = $(this).attr('show')
		var hide = $(this).attr('hide')
		var hide1 = $(this).attr('hide1')
		var hide2 = $(this).attr('hide2')
		var hide3 = $(this).attr('hide3')
		var hide4 = $(this).attr('hide4')
		var hide5 = $(this).attr('hide5')
		var hide6 = $(this).attr('hide6')
		var hide7 = $(this).attr('hide7')
		var hide8 = $(this).attr('hide8')
		var hide9 = $(this).attr('hide9')
		var hide10 = $(this).attr('hide10')
		var hide11 = $(this).attr('hide11')
		var hide12 = $(this).attr('hide12')
		var hide13 = $(this).attr('hide13')
		var hide14 = $(this).attr('hide14')
		var hide15 = $(this).attr('hide15')
		$('#'+hide).hide()
		$('#'+show).show()
		$('#'+hide1).hide()
		$('#'+hide2).hide()
		$('#'+hide3).hide()
		$('#'+hide4).hide()
		$('#'+hide5).hide()
		$('#'+hide6).hide()
		$('#'+hide7).hide()
		$('#'+hide8).hide()
		$('#'+hide9).hide()
		$('#'+hide10).hide()
		$('#'+hide11).hide()
		$('#'+hide12).hide()
		$('#'+hide13).hide()
		$('#'+hide14).hide()
		$('#'+hide15).hide()
		
	$(this).closest("table").find("label").each(function(){
			$(this).removeClass("selectswitch");	
		})
		
		$(this).addClass("selectswitch");	
	});		
});


$(document).ready(function(){
			
	$('.tab-button').click(function(){
		var show = $(this).attr('show')
		var hide = $(this).attr('hide')
		var hide1 = $(this).attr('hide1')
		var hide2 = $(this).attr('hide2')
		var hide3 = $(this).attr('hide3')
		var hide4 = $(this).attr('hide4')
		var hide5 = $(this).attr('hide5')
		var hide6 = $(this).attr('hide6')
		var hide7 = $(this).attr('hide7')
		var hide8 = $(this).attr('hide8')
		var hide9 = $(this).attr('hide9')
		var hide10 = $(this).attr('hide10')
		var hide11 = $(this).attr('hide11')
		var hide12 = $(this).attr('hide12')
		var hide13 = $(this).attr('hide13')
		var hide14 = $(this).attr('hide14')
		var hide15 = $(this).attr('hide15')
		$('#'+hide).hide()
		$('#'+show).show()
		$('#'+hide1).hide()
		$('#'+hide2).hide()
		$('#'+hide3).hide()
		$('#'+hide4).hide()
		$('#'+hide5).hide()
		$('#'+hide6).hide()
		$('#'+hide7).hide()
		$('#'+hide8).hide()
		$('#'+hide9).hide()
		$('#'+hide10).hide()
		$('#'+hide11).hide()
		$('#'+hide12).hide()
		$('#'+hide13).hide()
		$('#'+hide14).hide()
		$('#'+hide15).hide()
		
		
		
		$(this).closest('div').find("input").each(function(){
			$(this).removeClass("active-tab");	
		})
		
		$(this).addClass("active-tab");	
	});		
});

$(document).ready(function(){
			
	$('.tab-button').click(function(){
		var show = $(this).attr('show')
		var hide = $(this).attr('hide')
		var hide1 = $(this).attr('hide1')
		var hide2 = $(this).attr('hide2')
		var hide3 = $(this).attr('hide3')
		var hide4 = $(this).attr('hide4')
		var hide5 = $(this).attr('hide5')
		var hide6 = $(this).attr('hide6')
		var hide7 = $(this).attr('hide7')
		var hide8 = $(this).attr('hide8')
		var hide9 = $(this).attr('hide9')
		var hide10 = $(this).attr('hide10')
		var hide11 = $(this).attr('hide11')
		var hide12 = $(this).attr('hide12')
		var hide13 = $(this).attr('hide13')
		var hide14 = $(this).attr('hide14')
		var hide15 = $(this).attr('hide15')
		$('.'+hide).hide()
		$('.'+show).show()
		$('.'+hide1).hide()
		$('.'+hide2).hide()
		$('.'+hide3).hide()
		$('.'+hide4).hide()
		$('.'+hide5).hide()
		$('.'+hide6).hide()
		$('.'+hide7).hide()
		$('.'+hide8).hide()
		$('.'+hide9).hide()
		$('.'+hide10).hide()
		$('.'+hide11).hide()
		$('.'+hide12).hide()
		$('.'+hide13).hide()
		$('.'+hide14).hide()
		$('.'+hide15).hide()
		
		$(this).closest('div').find("input").each(function(){
			$(this).removeClass("active-tab");	
		})
		
		$(this).addClass("active-tab");	
	});		
});

$(document).ready(function(){
			
	$('.radio-button').click(function(){
		var show = $(this).attr('show')
		var hide = $(this).attr('hide')
		var hide1 = $(this).attr('hide1')
		var hide2 = $(this).attr('hide2')
		var hide3 = $(this).attr('hide3')
		var hide4 = $(this).attr('hide4')
		var hide5 = $(this).attr('hide5')
		var hide6 = $(this).attr('hide6')
		var hide7 = $(this).attr('hide7')
		var hide8 = $(this).attr('hide8')
		var hide9 = $(this).attr('hide9')
		var hide10 = $(this).attr('hide10')
		
		$('.'+hide).hide()
		$('.'+show).show()
		$('.'+hide1).hide()
		$('.'+hide2).hide()
		$('.'+hide3).hide()
		$('.'+hide4).hide()
		$('.'+hide5).hide()
		$('.'+hide6).hide()
		$('.'+hide7).hide()
		$('.'+hide8).hide()
		$('.'+hide9).hide()
		$('.'+hide10).hide()
		
		
		$(this).closest('div').find("input").each(function(){
			$(this).removeClass("active-tab");	
		})
		
		$(this).addClass("active-tab");	
	});		
});

$(document).ready(function(){
			
	$('#modify').click(function(){
		
	
			$('#verification-pending').show();
			
			
	});		
});

/*$(document).ready(function(){
			
	$('#modify').click(function(){
	
			$('#save').css("display","none");
			
	});		
});*/

/*$(document).ready(function(){
			
	$('#modify').click(function(){
		
	
			$('#save-continue').hide();
	});		
});*/

$(document).ready(function(){
			
	$('#submit-btn').click(function(){
			$('.overlay').fadeOut();
	});		
});

$(document).ready(function(){
			
	$('#submit-btn').click(function(){
		
	
			$('#pending').fadeOut();
	});		
});

$(document).ready(function(){
			
	$('#submit-btn').click(function(){
		
	
			$('#save').show();
	});		
});

$(document).ready(function(){
$(".source-code").hover(function(){
    $(".prod-curr").css("display", "none");
    }, function(){
    $(".prod-curr").css("display", "block");
}); 

});

$(document).ready(function(){
			
	$('#close').click(function(){
		
	
			$('.overlay').fadeOut();
	});		
});

$(document).ready(function(){
			
	$('#close').click(function(){
		
	
			$('#pending').fadeOut();
	});		
});

$(document).ready(function(){
			
	$('#save-exit').click(function(){
		
	
			$('.overlay').fadeOut();
	});		
});

$(document).ready(function(){
			
	$('#save-exit').click(function(){
		
	
			$('#pending').fadeOut();
	});		
});

$(document).ready(function(){
			
	$('#submit-btn').click(function(){
		
	
			$('#save-continue').show();
	});		
});


//----------------------hiren start----------------->
function apply_accordian()
{
	$(document).find(".myaccordian").each(function(){	
				
		var initialdirection = $(this).attr("initialdirection");
		
		if(initialdirection == "up")
		{
			var arrow = $("<div class=\"myaccordianarr accordian-arrow-down\" direction=\"down\">&nbsp;</div>")
		}
		else
		{
			var arrow = $("<div class=\"myaccordianarr accordian-arrow-up\" direction=\"up\">&nbsp;</div>")
		}
		
		$(this).append(arrow);	
			
		$(this).click(function(){		
		    debugger
			var target = $(this).attr("targetaccordian");			
			
			if($(this).find(".myaccordianarr").attr("direction") == "down")
			{
				$(target).slideUp();
				$(this).find(".myaccordianarr").removeClass("accordian-arrow-down");
				$(this).find(".myaccordianarr").addClass("accordian-arrow-up");
				$(this).find(".myaccordianarr").attr("direction","up");
			}
			else
			{
				$(target).slideDown();
				$(this).find(".myaccordianarr").addClass("accordian-arrow-down");
				$(this).find(".myaccordianarr").removeClass("accordian-arrow-up");				
				$(this).find(".myaccordianarr").attr("direction","down");		
				
				//$('.'+para).slideDown();		
			}			
		})	
		/*$(this).trigger("click");		*/
	})
	
}
//-------------------hiren end------------------->
$(function(){
		apply_accordian()
})


$(document).ready(function () {

$('#test').change(function(){
if($(this).val()=="yes"){
    window.location.href = "transfer-in-details.html";
}
});
});


$(".unique").change(function(){
  
	if($(this).val() != "ind")
		{
		    $(".ind").hide();
		}
	else
	    {
			$(".ind").show();
	    }
}); 

$(".unique").change(function(){
  
	if($(this).val() != "corp")
		{
		    $(".corp").hide();
		}
	else
	    {
			$(".corp").show();
	    }
}); 

$(".dor-acc").change(function(){
  
	if($(this).val() != "dor-acc-yes")
		{
		    $(".dor-acc-chrg").hide();
		}
	else
	    {
			$(".dor-acc-chrg").show();
	    }
}); 

  function perform_action()
  {
		if(document.getElementById('casa').checked)
		 {
			location.assign('casa.html');
		}
		else if(document.getElementById('td').checked) 
		{
		 location.assign('td.html');
		}
		else if(document.getElementById('loan').checked) 
		{
			location.assign('loan.html');
		}
		else
		{
			alert('Kindely select a product');
		}
  }
  
    function perform_action()
  {
		if(document.getElementById('account').checked)
		 {
			location.assign('account-limit-collateral.html');
		}
		else if(document.getElementById('customer').checked) 
		{
		 location.assign('customer-limit-collateral.html');
		}
		else if(document.getElementById('group').checked) 
		{
			location.assign('group-limit-collateral.html');
		}
		else
		{
			alert('Kindely select a product');
		}
  }
  
  
  $(".minor-status").change(function(){
  
	if($(this).val() != "minor-sta-yes")
		{
		    $(".minor-sta").hide();
		}
	else
	    {
			$(".minor-sta").show();
	    }
}); 

  $(".entity-type").change(function(){
  
	if($(this).val() != "jh")
		{
		    $(".joint-customer").hide();
		}
	else
	    {
			$(".joint-customer").show();
	    }
}); 

  $(".entity-type").change(function(){
  
	if($(this).val() != "guaran")
		{
		    $(".guarantor").hide();
		}
	else
	    {
			$(".guarantor").show();
	    }
}); 


  $(".entity-type").change(function(){
  
	if($(this).val() != "poa")
		{
		    $(".power-of-attorney").hide();
		}
	else
	    {
			$(".power-of-attorney").show();
	    }
}); 


  $(".entity-type").change(function(){
  
	if($(this).val() != "lg")
		{
		    $(".log-guar").hide();
		}
	else
	    {
			$(".log-guar").show();
	    }
}); 


  $(".entity-type").change(function(){
  
	if($(this).val() != "other")
		{
		    $(".other-id").hide();
		}
	else
	    {
			$(".other-id").show();
	    }
}); 

  $(".allow-seeps").change(function(){
  
	if($(this).val() != "swipin")
		{
		    $(".all-swipn").hide();
		}
	else
	    {
			$(".all-swipn").show();
	    }
}); 




  $(".nom-status").change(function(){
  
	if($(this).val() != "nom-sta-yes")
		{
		    $(".nomination").hide();
		}
	else
	    {
			$(".nomination").show();
	    }
}); 

  $(".statement-required").change(function(){
  
	if($(this).val() != "statement-required-yes")
		{
		    $(".stat-req").hide();
		}
	else
	    {
			$(".stat-req").show();
	    }
}); 


  $(".remittance-type").change(function(){
  
	if($(this).val() != "imps-sel")
		{
		    
			$(".imps").hide();
			$(".ram").show();
		}
	else
	    {
			$(".ram").hide();
			$(".imps").show();
	    }
}); 


  $(".remittance-type").change(function(){
  
	if($(this).val() != "neft-rtgs")
		{
		    
			$(".neft-typ").hide();
			$(".ram1").show();
		}
	else
	    {
			$(".ram1").hide();
			$(".neft-typ").show();
	    }
}); 

  $(".banking-arrangement").change(function(){
  
	if($(this).val() != "single")
		{
			$(".sing").hide();
		}
	else
	    {
			$(".sing").show();
	    }
}); 


  $(".closer-dtl").click(function(){
  
	if($(this).val() != "tc")
		{
			alert("Are you sure you want to close account id of Sameer Sinari ?");
			$(".ca").hide();
			$(".gtcr").show();
		}
	else
	    {
			$(".ca").show();
			$(".gtcr").hide();
	    }
}); 

$(document).ready(function () {
	
	$('#toggle-view li').click(function () {

		var text = $(this).children('div.panel');

		if (text.is(':hidden')) {
			text.slideDown('20');
			$(this).children('span').html('-');		
		} /*else {
			text.slideUp('20');
			$(this).children('span').html('+');		
		}*/
		
	});

});

  $(".member").change(function(){
  
	if($(this).val() != "memberyes")
		{
			$(".member-yes").hide();
		}
	else
	    {
			$(".member-yes").show();
	    }
}); 


$(".sa").click(function(){
  
	
	if($(".sa").prop("checked") == true)
			{  
				$('.penal-interest').show();
			}
		else
			{
				$('.penal-interest').hide();
			}
			
			
});

$(".loa").click(function(){
  
	
	if($(".loa").prop("checked") == true)
			{  
				$('.penal-interest').show();
			}
		else
			{
				$('.penal-interest').hide();
			}
			
			
});


  $(".foreclosure").change(function(){
  
	if($(this).val() != "foreclosure-yes")
		{
			$(".forecloser").hide();
		}
	else
	    {
			$(".forecloser").show();
	    }
}); 


  $(".advanced-install").change(function(){
  
	if($(this).val() != "advance-install")
		{
			$(".advanced-installment").hide();
		}
	else
	    {
			$(".advanced-installment").show();
	    }
}); 


  $(".margin").change(function(){
  
	if($(this).val() != "margin-yes")
		{
			$(".margin-div").hide();
		}
	else
	    {
			$(".margin-div").show();
	    }
}); 

$(".select-parameter").change(function(){
  
	if($(this).val() != "group-yes")
		{
		    $(".group-id").hide();
		}
	else
	    {
			$(".group-id").show();
	    }
}); 


$(".select-parameter").change(function(){
  
	if($(this).val() != "customer-yes")
		{
		    $(".customer-id").hide();
		}
	else
	    {
			$(".customer-id").show();
	    }
}); 


$(".projection-as-of").change(function(){
  
	if($(this).val() != "financial-year-yes")
		{
		    $(".financial-year").hide();
		}
	else
	    {
			$(".financial-year").show();
	    }
}); 


$(".projection-as-of").change(function(){
  
	if($(this).val() != "as-of-date-yes")
		{
		    $(".as-of-date").hide();
		}
	else
	    {
			$(".as-of-date").show();
	    }
}); 

 $(".bulletted-payment").change(function(){
  
	if($(this).val() != "bulletted-payment-yes")
		{
		    $(".bull-pay").hide();
			$(".bull-pay-div").show();
		}
	else
	    {
			$(".bull-pay").show();
			$(".bull-pay-div").hide();
	    }
}); 

  $(".cust-type").change(function(){
  
	if($(this).val() != "cust-type-yes")
		{
			$(".cust-typ").hide();
		}
	else
	    {
			$(".cust-typ").show();
	    }
}); 

$(".prop-typ").change(function(){
  
	if($(this).val() != "farm-land")
		{
		    $(".farm-lands").hide();
		}
	else
	    {
			$(".farm-lands").show();
	    }
}); 

$(".prop-typ").change(function(){
  
	if($(this).val() != "property-lay-outs")
		{
		    $(".property-lay-out").hide();
		}
	else
	    {
			$(".property-lay-out").show();
	    }
}); 

$(".prop-typ").change(function(){
  
	if($(this).val() != "banglos")
		{
		    $(".banglo").hide();
		}
	else
	    {
			$(".banglo").show();
	    }
}); 

$(".prop-typ").change(function(){
  
	if($(this).val() != "apartments")
		{
		    $(".apartment").hide();
		}
	else
	    {
			$(".apartment").show();
	    }
}); 

$(".nature-bullet").change(function(){
  
	if($(this).val() != "unequal")
		{
		    $(".unequal-div").hide();
		}
	else
	    {
			$(".unequal-div").show();
	    }
}); 

$(".nature-bullet").change(function(){
  
	if($(this).val() != "equal")
		{
		    $(".equal-div").hide();
		}
	else
	    {
			$(".equal-div").show();
	    }
}); 
$(".user-defin").change(function(){
  
	if($(this).val() != "user-defined")
		{
		    $(".user-defined-div").hide();
		}
	else
	    {
			$(".user-defined-div").show();
	    }
}); 

$(".moratorium").change(function(){
  
	if($(this).val() != "date-final-disburesement")
		{
		    $(".date-of-final-disburesement").hide();
		}
	else
	    {
			$(".date-of-final-disburesement").show();
	    }
}); 



$(".moratorium").change(function(){
  
	if($(this).val() != "holiday-start")
		{
		    $(".holiday-start-period").hide();
		}
	else
	    {
			$(".holiday-start-period").show();
	    }
});


/*$(document).ready(function () {
	
	$('.transferred-account').click(function(){
		
	$('.trans-account').show();	
	
	})
	
});	*/

$(".farm-leas").click(function(){
  
	
	if($(".farm-leas").prop("checked") == true)
			{  
				$('.farm-lands-leas').show();
			}
		else
			{
				$('.farm-lands-leas').hide();
			}
			
			
});

$(".banglo-leas").click(function(){
  
	
	if($(".banglo-leas").prop("checked") == true)
			{  
				$('.banglo-land-leas').show();
			}
		else
			{
				$('.banglo-land-leas').hide();
			}
			
			
});

$(".apartment-leas").click(function(){
  
	
	if($(".apartment-leas").prop("checked") == true)
			{  
				$('.apartment-land-leas').show();
			}
		else
			{
				$('.apartment-land-leas').hide();
			}
			
			
});

$(".insured").change(function(){
  
	if($(this).val() != "insured-yes")
		{
		    $(".insured-div").hide();
		}
	else
	    {
			$(".insured-div").show();
	    }
}); 

$(".insured").change(function(){
  
	if($(this).val() != "insured-yes1")
		{
		    $(".insured-div1").hide();
		}
	else
	    {
			$(".insured-div1").show();
	    }
}); 
$(".insured").change(function(){
  
	if($(this).val() != "insured-yes2")
		{
		    $(".insured-div2").hide();
		}
	else
	    {
			$(".insured-div2").show();
	    }
}); 

$(".other-lien-values").change(function(){
  
	if($(this).val() != "other-lien-value")
		{
		    $(".other-lien").hide();
		}
	else
	    {
			$(".other-lien").show();
	    }
}); 

$(".other-lien-values").change(function(){
  
	if($(this).val() != "other-lien-value1")
		{
		    $(".other-lien1").hide();
		}
	else
	    {
			$(".other-lien1").show();
	    }
}); 

$(".other-lien-values").change(function(){
  
	if($(this).val() != "other-lien-value2")
		{
		    $(".other-lien2").hide();
		}
	else
	    {
			$(".other-lien2").show();
	    }
}); 
$(".multiple-disbursement").change(function(){
  
	if($(this).val() != "multiple-disbursement-yes")
		{
		    $(".multiple-disbursement-y").hide();
		}
	else
	    {
			$(".multiple-disbursement-y").show();
	    }
});

$(".multiple-disbursement").change(function(){
  
	if($(this).val() != "multiple-disbursement-no")
		{
		    $(".multiple-disbursement-n").hide();
		}
	else
	    {
			$(".multiple-disbursement-n").show();
	    }
});

$(".godown").change(function(){
  
	if($(this).val() != "owned-hide")
		{
		    $(".owned-div").hide();
		}
	else
	    {
			$(".owned-div").show();
	    }
});

$(".godown").change(function(){
  
	if($(this).val() != "leased-show")
		{
		    $(".leased-div").hide();
		}
	else
	    {
			$(".leased-div").show();
	    }
});

$(".auto-recover").change(function(){
  
	if($(this).val() != "ecs")
		{
		    $(".ecs-div").hide();
		}
	else
	    {
			$(".ecs-div").show();
	    }
});

$(".auto-recover").change(function(){
  
	if($(this).val() != "debit-mandate")
		{
		    $(".debit-mandate-div").hide();
		}
	else
	    {
			$(".debit-mandate-div").show();
	    }
});


$(".deposit-plan").change(function(){
  
	if($(this).val() != "fixed")
		{
		    $(".fixed-div").hide();
			
		}
	else
	    {
			$(".fixed-div").show();
			
	    }
});

$(".deposit-plan").change(function(){
  
	if($(this).val() != "cumulative")
		{
		    $(".cumulative-div").hide();
		}
	else
	    {
			$(".cumulative-div").show();
	    }
});

$(".deposit-plan").change(function(){
  
	if($(this).val() != "flexi-fixed")
		{
		    $(".flexi-fixed-div").hide();
		}
	else
	    {
			$(".flexi-fixed-div").show();
	    }
});

$(".deposit-plan").change(function(){
  
	if($(this).val() != "unit")
		{
		    $(".unid-div").hide();
		}
	else
	    {
			$(".unid-div").show();
	    }
});
$(".deposit-plan").change(function(){
  
	if($(this).val() != "recurring")
		{
		    $(".recurring-div").hide();
			$(".display7").hide();
		}
	else
	    {
			$(".recurring-div").show();
			$(".display7").show();
	    }
});

$(".deposit-plan").change(function(){
  
	if($(this).val() != "select")
		{
		    $(".deposite-details").hide();
		}
	else
	    {
			$(".deposite-details").show();
	    }
});

$(".margin-payment").change(function(){
  
	if($(this).val() != "margin-payment-mode")
		{
		    $(".margin-payment-mode-div").hide();
		}
	else
	    {
			$(".margin-payment-mode-div").show();
	    }
});
$(".margin-payment").change(function(){
  
	if($(this).val() != "margin-payment-mode-transfer")
		{
		    $(".margin-payment-mode-transfer-div").hide();
		}
	else
	    {
			$(".margin-payment-mode-transfer-div").show();
	    }
});


$(".disbursement-mode").change(function(){
  
	if($(this).val() != "cash-mode")
		{
		    $(".cash-mode-div").hide();
		}
	else
	    {
			$(".cash-mode-div").show();
	    }
});


$(".disbursement-mode").change(function(){
  
	if($(this).val() != "transfer-mode")
		{
		    $(".transfer-mode-div").hide();
		}
	else
	    {
			$(".transfer-mode-div").show();
	    }
});


$(".disbursement-mode").change(function(){
  
	if($(this).val() != "remittance-mode")
		{
		    $(".remittance-mode-div").hide();
		}
	else
	    {
			$(".remittance-mode-div").show();
	    }
});

$(".base-currency").change(function(){
  
	if($(this).val() != "base-currency-div")
		{
		    $(".base-currency-yes").hide();
			$(".base-currency-no").show();
		}
	else
	    {
			$(".base-currency-yes").show();
			$(".base-currency-no").hide();
	    }
});

	$('.recur-flexi').change(function() {		
		if( $(this).val() != "yes7" )
		{
			$(".display8").hide();
			$(".advance-int").show();
			$(".display9").hide();
			$(".display10").show();
		}
		else if($(this).val() != "no7" || $(this).val() != "")
		{
			$(".display8").hide();
			$(".advance-int").hide();
			$(".display9").show();
			$(".display10").hide();
		}
		
		
	});
	
	$(".moratorium-typ").change(function(){
  
	/*confirm("Are You Sure You Want to close account id of Ajit");*/
	if($(this).val() != "seasonal")
		{
		    $(".display7").hide();
		}
	else
	    {
			$(".display7").show();
	    }
		
     if($(this).val() != "one-time")
		{
		    $(".display8").hide();
		}
	else
	    {
			$(".display8").show();
	    }
}); 

	$('.adv-int').change(function() {		
		if( $(this).val() != "yes6" )
		{
			$(".display8").hide();
			
		}
		else if($(this).val() != "no6" || $(this).val() == "")
		{
			
			$(".display8").show();
		}
		
		
	});
	
	
	
	
	
	$(".recalculate-term").click(function(){
  
	
	if($(".recalculate-term").prop("checked") == true)
			{  
				$('.recalculate-term-div').show();
			}
		else
			{
				$('.recalculate-term-div').hide();
			}
			
			
});

$(".recalculate-installment").click(function(){
  
	
	if($(".recalculate-installment").prop("checked") == true)
			{  
				$('.recalculate-installment-div').show();
			}
		else
			{
				$('.recalculate-installment-div').hide();
			}
			
			
});

$(".interest-rate-revision").click(function(){
  
	
	if($(".interest-rate-revision").prop("checked") == true)
			{  
				$('.interest-rate-revision-div').show();
			}
		else
			{
				$('.interest-rate-revision-div').hide();
			}
			
			
});

$(document).ready(function(){
	
		$("#chk14").click(function(){
		
			if($("#chk14").prop("checked") == true)
				{  
					/*alert("hello")*/
					$('#chk-14-show').show();
				}
			else
				{
					$('#chk-14-show').hide();
				}
			
		});
		
		$("#chk15").click(function(){
		
			if($("#chk15").prop("checked") == true)
				{  
					/*alert("hello")*/
					$('#btn-list-show').show();
				}
			else
				{
					$('#btn-list-show').hide();
				}
			
		});
		$("#chk16").click(function(){
		
			if($("#chk16").prop("checked") == true)
				{  
					/*alert("hello")*/
					$('#chk-16-show').show();
				}
			else
				{
					$('#chk-16-show').hide();
				}
			
		});
		$("#chk17").click(function(){
		
			if($("#chk17").prop("checked") == true)
				{  
					/*alert("hello")*/
					$('#chk-17-show').show();
				}
			else
				{
					$('#chk-17-show').hide();
				}
			
		});
		
		

	});
	
	$(".transaction").change(function(){
  
	if($(this).val() != "regular-transaction")
		{
		    $(".regular-transaction-div").hide();
		}
	else
	    {
			$(".regular-transaction-div").show();
	    }
}); 

	$(".transaction").change(function(){
  
	if($(this).val() != "inward-clearing")
		{
		    $(".inward-clearing-div").hide();
		}
	else
	    {
			$(".inward-clearing-div").show();
	    }
}); 

	$(".transaction").change(function(){
  
	if($(this).val() != "outward-clearing")
		{
		    $(".outward-clearing-div").hide();
		}
	else
	    {
			$(".outward-clearing-div").show();
	    }
}); 





	$(".collateral-category").change(function(){
  
	if($(this).val() != "tradeable-securities")
		{
		    $(".tradeable-securities-div").hide();
		}
	else
	    {
			$(".tradeable-securities-div").show();
	    }
}); 

	$(".collateral-category").change(function(){
  
	if($(this).val() != "term-deposit")
		{
		    $(".term-deposit-div").hide();
		}
	else
	    {
			$(".term-deposit-div").show();
	    }
}); 


	$(".collateral-category").change(function(){
  
	if($(this).val() != "machineries")
		{
		    $(".machineries-div").hide();
		}
	else
	    {
			$(".machineries-div").show();
	    }
}); 

	$(".collateral-category").change(function(){
  
	if($(this).val() != "immovable-property")
		{
		    $(".immovable-property-div").hide();
		}
	else
	    {
			$(".immovable-property-div").show();
	    }
}); 

	$(".collateral-category").change(function(){
  
	if($(this).val() != "vehicle")
		{
		    $(".vehicle-div").hide();
		}
	else
	    {
			$(".vehicle-div").show();
	    }
}); 

	$(".collateral-category").change(function(){
  
	if($(this).val() != "stock-in-trade")
		{
		    $(".stock-in-trade-div").hide();
		}
	else
	    {
			$(".stock-in-trade-div").show();
	    }
}); 

	$(".collateral-category").change(function(){
  
	if($(this).val() != "other")
		{
		    $(".other-div").hide();
		}
	else
	    {
			$(".other-div").show();
	    }
}); 



	$(".third-party").change(function(){
  
	if($(this).val() != "third-party-yes")
		{
		    $(".third-party-yes-div").hide();
		}
	else
	    {
			$(".third-party-yes-div").show();
	    }
}); 

	$(".third-party").change(function(){
  
	if($(this).val() != "third-party-no")
		{
		    $(".third-party-no-div").hide();
		}
	else
	    {
			$(".third-party-no-div").show();
	    }
}); 




	$(".type-of-security").change(function(){
  
	if($(this).val() != "nsc")
		{
		    $(".nsc-div").hide();
		}
	else
	    {
			$(".nsc-div").show();
	    }
}); 

	$(".type-of-security").change(function(){
  
	if($(this).val() != "mutual-fund")
		{
		    $(".mutual-fund-div").hide();
		}
	else
	    {
			$(".mutual-fund-div").show();
	    }
}); 

	$(".type-of-security").change(function(){
  
	if($(this).val() != "shares")
		{
		    $(".shares-div").hide();
		}
	else
	    {
			$(".shares-div").show();
	    }
}); 

	$(".type-of-security").change(function(){
  
	if($(this).val() != "others")
		{
		    $(".others-div").hide();
		}
	else
	    {
			$(".others-div").show();
	    }
}); 


$(function(){

	/*Animate label form*/
    $('.animate-label .input-group').click(function(){
       // debugger
		if ($(this).find('select').size() > 0) {
		}  
		else {
			$(this).find('input').focus();
			$(this).find('label').addClass('active');
		
		}     
		if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
			$(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
		}

		if ($(this).val() == "") {
		    //$(this).find('label').removeClass('active');
		}  
		else {
		    $(this).find('input').focus();
		    $(this).find('label').addClass('active');
		
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
		
		/*if($(this).val() ==""){
			$(this).prev('label').removeClass('active')
		}*/
		
	});
	
	$('.input-group textarea, .input-group input,.input-group select').each(function () {
		if (this.value.length > 0) {
		var div = $(this).prev('label').addClass('active');
		}
	});
	$('.input-group').click(function(){
		$(this).find('input').focus();
		//$(this).find('label').addClass('active');
	});

	$('select').blur(function(){
        //debugger
	    if ($(this).val() == "") {
	        $(this).parent().find('label').removeClass('active');
	        //alert($(this).val())
	    }
	});
    
	$('.hasDatepicker').focusin(function () {                
	    sessionStorage.setItem('datePicker', $(this).attr('id'))
	})

	$(document).on('focusin', '.ui-state-default', function (e) {        
	    $('#' + sessionStorage.getItem('datePicker')).focusin();        
	});	
   

    //$("#datepicker-1").datepicker({
    //    onSelect: function () {
    //        alert("sdfsdfsdf")
    //    }
    //});
    
	
/*Animate label form*/

})