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
    $('.input-type-select span').click(function () {
        $(this).parents('.input-type-select').find('select').trigger('click');
    })
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
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
    /*Back to top Function End*/

    /*Header footer loading*/
    /*accordion start*/
    $('.accordion dl dt').click(function () {
        var trigger = $(this);
        var target = trigger.next('dd');
        if (target.css('display') == 'none') {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
            target.slideDown();
            trigger.parents('dl').addClass('active');
        }
        else {
            $('.accordion dl').removeClass('active')
            $('.accordion dl dd').slideUp();
        }
    });
    /*accordion start*/

    /*Animate label form*/
    $('.animate-label .input-group').click(function () {
        if ($(this).find('select').size() > 0) {
            // $(this).find('label').addClass('active');

            // var id = $(this).find('select').attr('id');
            // console.log(id);

            $(this).find('label').addClass('active');

        } else {
            $(this).find('input').focus();
            $(this).find('label').addClass('active');

        }

        if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
            $(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
        }
    });           

    $('.animate-label .input-group input, .input-group select, .animate-label .input-group textarea').blur(function () {
        if (this.value.length > 0) {
            return false;
        }
        else {
            $(this).prev('label').removeClass('active');

            if ($(this).hasClass('hasDatepicker')) {
                $(this).prev('label').removeClass('active1');
            }                        

            if ($(this).parent().find('select').length) {
                if ($(this).parent().find('select').val() == "") {
                    $(this).parent().parent().find('label').removeClass('active');
                }
            }
        }
    });
        
    $('.hasDatepicker').focusin(function () {                
        sessionStorage.setItem('datePicker', $(this).attr('id'))
    })

    $(document).on('focusin', '.ui-state-default', function (e) {        
        $('#' + sessionStorage.getItem('datePicker')).focusin();        
    });
       

    $('.input-type-select2 select').blur(function () {
        if (this.value.length > 0) {
            return false;
        }
        else {
            $(this).parent().parent().find('label').removeClass('active')
        }
    });


    $('body').click(function (e) {
        var clickedOn = $(e.target);

        if (clickedOn.is('select')) {
            return false;
        }

        if (clickedOn.parents().andSelf().is('.dropdown, ul.chosen-choices, li.result-selected, div.input-type-select.inputType')) {
            $('.input-type-select').parent().find('.dropdown').find('label').addClass('active');
        } else {            
            if ($('.chosen-choices').find('li').length == 0) {

                if ($('.chosen-search-input').parent().find('input').val() == "Select Some Options") {
                    $(this).find('.chosen-search-input').parent().parent().parent().parent().find('label').removeClass('active');
                    $('.input-type-select').parent().parent().find('.input-group').removeClass('DropdownMultiCheckbox');
                }
                                
                //if ($('.chosen-search-input').parent().find('input').val() == undefined) {
                //    $(document).find('.chosen-search-input').parent().parent().parent().parent().find('label').removeClass('active');
                //    $('.input-type-select').parent().parent().find('.input-group').removeClass('DropdownMultiCheckbox');
                //}
            }
        }
    });

    //$('body').click(function (e) {
    //    //debugger
    //    var clickedOn = $(e.target);
    //    if (clickedOn.parents().andSelf().is('label, .chosen-search-select')) {
    //    } else {
    //        if (clickedOn.parent().parent().find('select').val() == "") {
    //            clickedOn.parent().parent().find('label').removeClass('active');
    //        }
    //    }
    //});

    //$('body').click(function (e) {
    //    //debugger
    //    var clickedOn = $(e.target);
    //    if (clickedOn.parents().andSelf().is('label, .chosen-search-input.default')) {

    //    } else {
    //        if ($('.chosen-choices').find('li').length == 1) {
    //            $(this).find('.chosen-search-input').parent().parent().parent().parent().find('label').removeClass('active');
    //        }           
    //    }
    //});

    $('.date').click(function () {
        $(this).find('label').addClass('active1');
    });

    /*$('body').click(function (e) {
        //debugger
        var clickedOn = $(e.target);
        if (clickedOn.parents().andSelf().is('.date')) {
			$(this).find('label').addClass('active1');
        } else {
            $(this).find('label').removeClass('active1');      
        }
    });*/

    $('.input-group').on('focus', 'input, select, textarea', function () {
        $(this).prev('label').addClass('active');
    });

    $('.input-group textarea, .input-group input,.input-group select').each(function () {
        if (this.value.length > 0) {
            var div = $(this).prev('label').addClass('active');
        }
    });
    $('.input-group').click(function () {
        $(this).find('input').focus();
        $(this).find('label').addClass('active');
    });
    /*Animate label form*/

    $('.testOne').hide();
    $('.testTwo').hide();

    $('#test1').parent('div').find('input, label').click(function () {
        $('.testOne').hide();
        $('.testTwo').show();
    })

    $('#test2').parent('div').find('input, label').click(function () {
        $('.testOne').show();
        $('.testTwo').hide();
    })

    var i = 0;
    var j = 0;
    $('#test26').parent('div').find('input, label').click(function (e) {
        //debugger                
        if (i == 0) {
            var copy = $('#test24').parent('div').clone();
            var lastDiv = $('.testOne').find('.grid-12').find('div').length - 1
            $(copy).find('input:eq(1)').val('Option 5');
            $('.testOne').find('.grid-12').find('div:eq(' + lastDiv + ')').before(copy);
            i++;
            e.stopImmediatePropagation();
        } else {
            if (j == 1) {
                var copy = $('#test24').parent('div').clone();
                var lastDiv = $('.testOne').find('.grid-12').find('div').length - 1
                $(copy).find('input:eq(1)').val('Option 6');
                $('.testOne').find('.grid-12').find('div:eq(' + lastDiv + ')').before(copy);
                $(this).hide();
            }
            j++;
            e.stopImmediatePropagation();
        }

    })

    $('.drawer').hide();

    $('.checkboxinfo').find('label').click(function (e) {
        if ($(this).parent().find('input[type="checkbox"]').prop('checked')) {
            $('.drawer').slideDown();
            $('.drawer2').hide();
        } else {
            $('.drawer').slideUp();
            $('.drawer2').show();
        }
    })

    $('.recurrencePatternTab1').find('input').prop('checked', true);
    $('.recurrencePatternBody1').find('#Pattern1').prop('checked', true)

    $('.recurrencePatternTab1').find('input').click(function () {
        // $('.recurrencePatternBody2').fadeOut('slow');
        // $('.recurrencePatternBody3').fadeOut('slow');
        $('.recurrencePatternBody2').hide();
        $('.recurrencePatternBody3').hide();
        $('.recurrencePatternBody1').find('#Pattern1').prop('checked', true)
        $('.recurrencePatternBody1').show();
    })

    $('.recurrencePatternTab2').find('input').click(function () {
        // $('.recurrencePatternBody1').fadeOut('slow');
        //$('.recurrencePatternBody3').fadeOut('slow');
        $('.recurrencePatternBody1').hide();
        $('.recurrencePatternBody3').hide();
        $('.recurrencePatternBody2').find('#Pattern3').prop('checked', true)
        $('.recurrencePatternBody2').show();
    })

    $('.recurrencePatternTab3').find('input').click(function () {
        //$('.recurrencePatternBody1').fadeOut('slow');
        // $('.recurrencePatternBody2').fadeOut('slow');
        $('.recurrencePatternBody1').hide();
        $('.recurrencePatternBody2').hide();
        $('.recurrencePatternBody3').find('#Pattern5').prop('checked', true)
        $('.recurrencePatternBody3').show();
    })


});


function fixedFooter() {
    $('body').css('min-height', $(window).height());
}

$(document).ready(function () {
    $(".slice.s0-0 span").append('<text class="bill-percentage">6.6%</text>');
    $(".slice.s1-0 span").append('<text class="bill-percentage">18%</text>');
    $(".slice.s2-0 span").append('<text class="bill-percentage">23%</text>');
    $(".slice.s3-0 span").append('<text class="bill-percentage">36%</text>');
    $(".slice.s4-0 span").append('<text class="bill-percentage">48%</text>');
});


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID) {
    target = $('#' + popupID)
    animationIn = target.attr('data-animation-in');
    animationOut = target.attr('data-animation-out');
    if (typeof (animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '') {
        animationIn = 'zoomIn';
    }
    if (typeof (animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '') {
        animationOut = 'zoomOut';
    }
    $('body').append('<div class="overlay-bg"></div>')
    target.find('.overlay-header').append('<div class="closeBtn">X</div>');
    target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
    $(document).on('click', '.closeBtn', function () {

        $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
        $('body .overlay-bg').fadeOut(1000, function () {
            $(this).remove();
            $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
        });
        $(this).remove();
    });
}
/*Overlay function end*/

$(function () {
    /*jQuery tabs */
    /*script for append usefull element*/
    $('.tabNav li').each(function () {
        var tabContent = $(this).html();
        var relation = $(this).find('a').attr('rel')
        var resultCnt = $(this).parents('.tabNav').next('.tabResult');
        resultCnt.children('div#' + relation).prepend('<div class="mobile-menu">' + tabContent + '</div>')
    })

    /*script for desktop navigation */
    $('.tabNav li a').click(function () {
        var relation = $(this).attr('rel')
        var tabNavigation = $(this).parents('.tabNav')
        var resultCnt = $(this).parents('.tabNav').next('.tabResult');

        tabNavigation.children().find('a').removeClass('active')
        $(this).addClass('active')

        if (resultCnt.children('div#' + relation).css('display') == 'none') {
            resultCnt.children('div').slideUp();
            resultCnt.children('div#' + relation).slideDown();
        }
        else {
            resultCnt.children('div#' + relation).slideUp();
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
        $('.tabNav ').find('a[rel=' + relation + ']').parents('li').children('a').addClass('active');
        resultCnt.children('div#' + relation).slideDown();
    }
    var ofsetd = $('.tabNav').offset().top;
    $('body,html').animate({ scrollTop: ofsetd }, 800);
}
(function () {
    "use strict";

    var toggles = document.querySelectorAll(".menu-icon");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");

        });
    }
    $('.mobil-icon-toggle').click(function () {
        if ($(this).hasClass('active')) {
            $('.nav-menu').addClass('open-navigation');
        }
        else {
            $('.nav-menu').removeClass('open-navigation');
        }
    });
    $('.closebtncom').click(function () {
        $(this).parents('.community-updates').addClass('smallupdatebx');
        $('.slider-udpdates').animate({ opacity: 0 })
    })
    $('.communityblockbx dl dt').click(function () {
        $(this).parents('.community-updates').removeClass('smallupdatebx');
        $('.slider-udpdates').animate({ opacity: 1 })
    });
})();


$(document).ready(function () {
    $("#descriptiontextarea").focusin(function () {
        $("#descriptiontextarea").css("height", "80px");
    });
    $("#descriptiontextarea").focusout(function () {
        $("#descriptiontextarea").css("height", "40px");
    });
});



$(function () {
    $(".dropdown dt a").on('click', function () {
        $(".dropdown dd ul").slideToggle('fast');
    });

    $(".dropdown dd ul li a").on('click', function () {
        $(".dropdown dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
    });

    $('.dropdown').click(function myfunction() {
        $('.inputtypeselect2').parent().parent().find('.input-group').addClass('DropdownMultiCheckbox');
    })

    $('.mutliSelect input[type="checkbox"]').on('click', function () {
        //debugger        
        var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel').append(html);
            $('.multiSel').css('width', '420px')
            //$(".hida").hide();

            //if (!$('.multiSel').hasClass('inputType')) {
            //    $('.multiSel').addClass('inputType');
            //}

        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('.dropdown dt a').append(ret);

            //if ($('.mutliSelect ul li').length < 1)
            //{
            //    if ($('.multiSel').hasClass('inputType'))
            //    {
            //        $('.multiSel').removeClass('inputType');
            //        $('.input-type-select').parent().parent().find('.input-group').removeClass('DropdownMultiCheckbox')
            //    }
            //}

            var selected_machIDS = $(this).closest('.mutliSelect').find('input[type="checkbox"]:checked');

            if (selected_machIDS.length < 1) {
                //if ($('.multiSel').hasClass('inputType')) {
                //    //$('.multiSel').removeClass('inputType');
                //    //$('.input-type-select').parent().parent().find('.input-group').removeClass('DropdownMultiCheckbox')
                //	$('.mutliSelect ul').css('display','none');
                //}
                $('.mutliSelect ul').css('display', 'none');
            }

        }
    });

    $('.assign-modules').find('.select_all').click(function () {
        if ($(this).prop("checked") == true) {
            $('.assign-modules').find('input[type="checkbox"]').prop("checked", true)
        }
        else {
            $('.assign-modules').find('input[type="checkbox"]').prop("checked", false)
        }
    })
})

$(document).ready(function() {
	
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1 * 60 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

})

