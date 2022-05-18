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
        if (clickedOn.parents().andSelf().is('.dropdown, ul.chosen-choices, li.result-selected, div.input-type-select.inputType')) {
            $('.input-type-select').parent().find('.dropdown').find('label').addClass('active');
        } else {
            //$('.input-type-select:eq(1)').parent().find('select option').val() == "" || 
            if ($('.chosen-choices').find('li').length == 1) {

                if ($('.chosen-search-input').parent().find('input').val() == "Select Some Options") {
                    $(this).find('.chosen-search-input').parent().parent().parent().parent().find('label').removeClass('active');
                    $('.input-type-select').parent().parent().find('.input-group').removeClass('DropdownMultiCheckbox');
                }
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

    $(".edit_div").click(function () {
        $('.div_name').parent().find('label').addClass('active')
        $('.div_name').val($(this).parent().find('.tag1').html());
    })

    $(".edit_location").click(function () {
        $('.location_name').parent().find('label').addClass('active')
        $('.location_name').val($(this).parent().find('.tag1').html());
    })

    $(".edit_level").click(function () {
        $('.level_name').parent().find('label').addClass('active')
        $('.level_name').val($(this).parent().find('.tag1').html());
    })

    $(".edit_type").click(function () {
        $('.type_name').parent().find('label').addClass('active')
        $('.type_name').val($(this).parent().find('.tag1').html());
    })

    $(".edit_question").click(function () {
        $('.question_title').parent().find('label').addClass('active')
        $('.question_title').val($(this).parent().find('.tag1').html());
    })

    $(".edit_category").click(function () {
        $('.category_title').parent().find('label').addClass('active')
        $('.category_title').val($(this).parent().find('.tag1').html());
    })

    $(".edit_user").click(function () {
        $('.user_title').parent().find('label').addClass('active')
        $('.user_title').val($(this).parent().find('.tag1').html());
    })

    $(".edit_group").click(function () {
        $('.group_title').parent().find('label').addClass('active')
        $('.group_title').val($(this).parent().find('.tag1').html());
    })

    $(".edit_test").click(function () {
        $('.test_title').parent().find('label').addClass('active')
        $('.test_title').val($(this).parent().parent().find('.tag1').html());
    })

    $(".edit_mail_name").click(function () {
        $('.mail_name').parent().find('label').addClass('active')
        $('.mail_name').val($(this).parent().find('.tag1').html());
    })

    $(".edit_security_quest").click(function () {
        $('.security_quest').parent().find('label').addClass('active')
        $('.security_quest').val($(this).parent().find('.tag1 input').val());
    })

    $(".edit_view_quest").click(function () {
        $('.view_quest_title').parent().find('label').addClass('active')
        $('.view_quest_title').val($(this).parent().parent().find('.tag1').html());
    })

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

    /*Bar Charts*/

    //$('#select_category-list').hide()

    //$(document).on('click', '.switch_btn', function () {
    //    $(this).val("Back")
    //    $(this).addClass('back_btn')
    //    $(this).removeClass('switch_btn')
    //    $('#select_category-list').show()
    //    $('#select_category').val("user_group_1")

    //    $('#line-bar-cntr').remove();
    //    $('.canvas-chart1').append('<canvas id="line-bar-cntr"><canvas>');
    //    var i = 22;
    //    $(".canvas-chart1").css("min-width", (35 * i))
    //    var chartData2 = {
    //        labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //        datasets: [{
    //            type: 'bar',
    //            label: 'User Group 1',
    //            backgroundColor: ['#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18'],
    //            data: [
    //                "15",
    //                "35",
    //                "54",
    //                "80",
    //                "72",
    //                "66",
    //                "27",
    //                "39",
    //                "43",
    //                "55",
    //                "94"
    //            ],
    //            borderWidth: 2,
    //        }, ]

    //    };
    //    var ctxline1 = document.getElementById("line-bar-cntr");
    //    window.myMixedChart = new Chart(ctxline1, {
    //        type: 'bar',
    //        data: chartData2,
    //        options: {
    //            responsive: true,
    //            title: {
    //                display: true,
    //                text: 'Performance'
    //            },
    //            tooltips: {
    //                mode: 'index',
    //                intersect: true
    //            },
    //            scales: {
    //                yAxes: [{
    //                    ticks: {
    //                        beginAtZero: true
    //                    }
    //                }],
    //                xAxes: [{
    //                    barThickness: 40
    //                }]
    //            }
    //        }
    //    });
    //})

    //$(document).on('click', '.back_btn', function () {
    //    $(this).val("Switch")
    //    $(this).addClass('switch_btn')
    //    $(this).removeClass('back_btn')
    //    $('#select_category-list').hide()

    //    CreateCharts()
    //})

    //$("#select_category").change(function () {

    //    if ($(this).val() == "user_group_1") {
    //        $('#line-bar-cntr').remove();
    //        $('.canvas-chart1').append('<canvas id="line-bar-cntr"><canvas>');
    //        var i = 22;
    //        $(".canvas-chart1").css("min-width", (35 * i))
    //        var chartData2 = {
    //            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //            datasets: [{
    //                type: 'bar',
    //                label: 'User Group 1',
    //                backgroundColor: ['#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18'],
    //                data: [
    //                    "15",
    //                    "35",
    //                    "54",
    //                    "80",
    //                    "72",
    //                    "66",
    //                    "27",
    //                    "39",
    //                    "43",
    //                    "55",
    //                    "94"
    //                ],
    //                borderWidth: 2,
    //            }, ]

    //        };
    //        var ctxline1 = document.getElementById("line-bar-cntr");
    //        window.myMixedChart = new Chart(ctxline1, {
    //            type: 'bar',
    //            data: chartData2,
    //            options: {
    //                responsive: true,
    //                title: {
    //                    display: true,
    //                    text: 'Performance'
    //                },
    //                tooltips: {
    //                    mode: 'index',
    //                    intersect: true
    //                },
    //                scales: {
    //                    yAxes: [{
    //                        ticks: {
    //                            beginAtZero: true
    //                        }
    //                    }],
    //                    xAxes: [{
    //                        barThickness: 40
    //                    }]
    //                }
    //            }
    //        });
    //    }
    //    else if ($(this).val() == "user_group_2") {
    //        $('#line-bar-cntr').remove();
    //        $('.canvas-chart1').append('<canvas id="line-bar-cntr"><canvas>');
    //        var i = 22;
    //        $(".canvas-chart1").css("min-width", (35 * i))
    //        var chartData1 = {
    //            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //            datasets: [{
    //                type: 'bar',
    //                label: 'User Group 2',
    //                backgroundColor: ['#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee'],
    //                data: [
    //                    "50",
    //                    "45",
    //                    "60",
    //                    "78",
    //                    "85",
    //                    "32",
    //                    "56",
    //                    "71",
    //                    "48",
    //                    "12",
    //                    "29"
    //                ],
    //                borderWidth: 2,
    //            }, ]

    //        };
    //        var ctxline = document.getElementById("line-bar-cntr").getContext("2d");
    //        window.myMixedChart = new Chart(ctxline, {
    //            type: 'bar',
    //            data: chartData1,
    //            options: {
    //                responsive: true,
    //                title: {
    //                    display: true,
    //                    text: 'Performance'
    //                },
    //                tooltips: {
    //                    mode: 'index',
    //                    intersect: true
    //                },
    //                scales: {
    //                    yAxes: [{
    //                        ticks: {
    //                            beginAtZero: true
    //                        }
    //                    }],
    //                    xAxes: [{
    //                        barThickness: 40
    //                    }]
    //                }
    //            }
    //        });

    //    }
    //    else if ($(this).val() == "user_group_3") {
    //        $('#line-bar-cntr').remove();
    //        $('.canvas-chart1').append('<canvas id="line-bar-cntr"><canvas>');
    //        var i = 22;
    //        $(".canvas-chart1").css("min-width", (35 * i))
    //        var chartData1 = {
    //            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //            datasets: [{
    //                type: 'bar',
    //                label: 'User Group 3',
    //                backgroundColor: ['#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7'],
    //                data: [
    //                    "15",
    //                    "35",
    //                    "54",
    //                    "80",
    //                    "72",
    //                    "66",
    //                    "27",
    //                    "39",
    //                    "43",
    //                    "55",
    //                    "94"
    //                ],
    //                borderWidth: 2,
    //            }, ]

    //        };
    //        var ctxline = document.getElementById("line-bar-cntr").getContext("2d");
    //        window.myMixedChart = new Chart(ctxline, {
    //            type: 'bar',
    //            data: chartData1,
    //            options: {
    //                responsive: true,
    //                title: {
    //                    display: true,
    //                    text: 'Performance'
    //                },
    //                tooltips: {
    //                    mode: 'index',
    //                    intersect: true
    //                },
    //                scales: {
    //                    yAxes: [{
    //                        ticks: {
    //                            beginAtZero: true
    //                        }
    //                    }],
    //                    xAxes: [{
    //                        barThickness: 40
    //                    }]
    //                }
    //            }
    //        });
    //    }
    //    else if ($(this).val() == "user_group_4") {
    //        $('#line-bar-cntr').remove();
    //        $('.canvas-chart1').append('<canvas id="line-bar-cntr"><canvas>');
    //        var i = 22;
    //        $(".canvas-chart1").css("min-width", (35 * i))
    //        var chartData1 = {
    //            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //            datasets: [{
    //                type: 'bar',
    //                label: 'User Group 4',
    //                backgroundColor: ['#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306'],
    //                data: [
    //                    "48",
    //                    "65",
    //                    "28",
    //                    "92",
    //                    "72",
    //                    "58",
    //                    "49",
    //                    "46",
    //                    "39",
    //                    "28",
    //                    "94"
    //                ],
    //                borderWidth: 2,
    //            }, ]

    //        };
    //        var ctxline = document.getElementById("line-bar-cntr").getContext("2d");
    //        window.myMixedChart = new Chart(ctxline, {
    //            type: 'bar',
    //            data: chartData1,
    //            options: {
    //                responsive: true,
    //                title: {
    //                    display: true,
    //                    text: 'Performance'
    //                },
    //                tooltips: {
    //                    mode: 'index',
    //                    intersect: true
    //                },
    //                scales: {
    //                    yAxes: [{
    //                        ticks: {
    //                            beginAtZero: true
    //                        }
    //                    }],
    //                    xAxes: [{
    //                        barThickness: 40
    //                    }]
    //                }
    //            }
    //        });

    //    }
    //    else if ($(this).val() == "user_group_5") {
    //        $('#line-bar-cntr').remove();
    //        $('.canvas-chart1').append('<canvas id="line-bar-cntr"><canvas>');
    //        var i = 22;
    //        $(".canvas-chart1").css("min-width", (35 * i))
    //        var chartData1 = {
    //            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //            datasets: [{
    //                type: 'bar',
    //                label: 'User Group 5',
    //                backgroundColor: ['#6b6b6b', '#6b6b6b', '#6b6b6b', '#6b6b6b', '#6b6b6b', '#6b6b6b', '#6b6b6b'],
    //                data: [
    //                    "48",
    //                    "65",
    //                    "28",
    //                    "92",
    //                    "72",
    //                    "58",
    //                    "49",
    //                    "46",
    //                    "39",
    //                    "28",
    //                    "94"
    //                ],
    //                borderWidth: 2,
    //            }, ]

    //        };
    //        var ctxline = document.getElementById("line-bar-cntr").getContext("2d");
    //        window.myMixedChart = new Chart(ctxline, {
    //            type: 'bar',
    //            data: chartData1,
    //            options: {
    //                responsive: true,
    //                title: {
    //                    display: true,
    //                    text: 'Performance'
    //                },
    //                tooltips: {
    //                    mode: 'index',
    //                    intersect: true
    //                },
    //                scales: {
    //                    yAxes: [{
    //                        ticks: {
    //                            beginAtZero: true
    //                        }
    //                    }],
    //                    xAxes: [{
    //                        barThickness: 40
    //                    }]
    //                }
    //            }
    //        });

    //    }
    //    else if ($(this).val() == "user_group_6") {
    //        $('#line-bar-cntr').remove();
    //        $('.canvas-chart1').append('<canvas id="line-bar-cntr"><canvas>');
    //        var i = 22;
    //        $(".canvas-chart1").css("min-width", (35 * i))
    //        var chartData1 = {
    //            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //            datasets: [{
    //                type: 'bar',
    //                label: 'User Group 6',
    //                backgroundColor: ['#0fb306', '#0fb306', '#0fb306', '#0fb306', '#0fb306', '#0fb306', '#0fb306'],
    //                data: [
    //                    "48",
    //                    "65",
    //                    "28",
    //                    "92",
    //                    "72",
    //                    "58",
    //                    "49",
    //                    "46",
    //                    "39",
    //                    "28",
    //                    "94"
    //                ],
    //                borderWidth: 2,
    //            }, ]

    //        };
    //        var ctxline = document.getElementById("line-bar-cntr").getContext("2d");
    //        window.myMixedChart = new Chart(ctxline, {
    //            type: 'bar',
    //            data: chartData1,
    //            options: {
    //                responsive: true,
    //                title: {
    //                    display: true,
    //                    text: 'Performance'
    //                },
    //                tooltips: {
    //                    mode: 'index',
    //                    intersect: true
    //                },
    //                scales: {
    //                    yAxes: [{
    //                        ticks: {
    //                            beginAtZero: true
    //                        }
    //                    }],
    //                    xAxes: [{
    //                        barThickness: 40
    //                    }]
    //                }
    //            }
    //        });

    //    }
    //    else if ($(this).val() == "user_group_7") {
    //        $('#line-bar-cntr').remove();
    //        $('.canvas-chart1').append('<canvas id="line-bar-cntr"><canvas>');
    //        var i = 22;
    //        $(".canvas-chart1").css("min-width", (35 * i))
    //        var chartData1 = {
    //            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //            datasets: [{
    //                type: 'bar',
    //                label: 'User Group 7',
    //                backgroundColor: ['#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306'],
    //                data: [
    //                    "48",
    //                    "65",
    //                    "28",
    //                    "92",
    //                    "72",
    //                    "58",
    //                    "49",
    //                    "46",
    //                    "39",
    //                    "28",
    //                    "94"
    //                ],
    //                borderWidth: 2,
    //            }, ]

    //        };
    //        var ctxline = document.getElementById("line-bar-cntr").getContext("2d");
    //        window.myMixedChart = new Chart(ctxline, {
    //            type: 'bar',
    //            data: chartData1,
    //            options: {
    //                responsive: true,
    //                title: {
    //                    display: true,
    //                    text: 'Performance'
    //                },
    //                tooltips: {
    //                    mode: 'index',
    //                    intersect: true
    //                },
    //                scales: {
    //                    yAxes: [{
    //                        ticks: {
    //                            beginAtZero: true
    //                        }
    //                    }],
    //                    xAxes: [{
    //                        barThickness: 40
    //                    }]
    //                }
    //            }
    //        });

    //    }
    //})

    /*Bar Charts Ends*/

});

function CreateCharts() {
    $('#line-bar-cntr').remove();
    $('.bst-block').append('<canvas id="line-bar-cntr"><canvas>');
    var i = 22;
    $(".canvas-chart1").css("min-width", (35 * i))
    var chartData1 = {
        labels: ["User Group 1", "User Group 2", "User Group 3", "User Group 4"],
        datasets: [{
            type: 'bar',
            label: 'Category 1',
            backgroundColor: ['#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18'],
            data: [
			"80", 
			"50", 
			"40", 
			"50",
            ],
            borderWidth: 2,
            options: {
                title: {
                    Position: 'left',
                }
            }
        },
        {
            type: 'bar',
            label: 'Category 2',
            backgroundColor: ['#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee'],
            data: [
			"50",
			"65",
			"36",
			"50",
            ],
            borderWidth: 2,
            options: {
                title: {
                    Position: 'left',
                }
            }
        },
        {
            type: 'bar',
            label: 'Category 3',
            backgroundColor: ['#c6059c', '#c6059c', '#c6059c', '#c6059c', '#c6059c', '#c6059c', '#c6059c'],
            data: [	
			"60",
			"20",
			"50",
			"65",
            ],
            borderWidth: 2,
            options: {
                title: {
                    Position: 'left',
                }
            }
        },
        {
            type: 'bar',
            label: 'Category 4',
            backgroundColor: ['#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7'],
            data: [
			"26",
			"36",
			"50",
			"90",
            ],
            borderWidth: 2,
            options: {
                title: {
                    Position: 'left',
                }
            }
        },
        {
            type: 'bar',
            label: 'Category 5',
            backgroundColor: ['#6b6b6b', '#6b6b6b', '#6b6b6b', '#6b6b6b', '#6b6b6b', '#6b6b6b', '#6b6b6b'],
            data: [
			"48",
			"60",
			"65",
			"50",
            ],
            borderWidth: 2,
            options: {
                title: {
                    Position: 'left',
                }
            }
        },
        {
            type: 'bar',
            label: 'Category 6',
            backgroundColor: ['#0fb306', '#0fb306', '#0fb306', '#0fb306', '#0fb306', '#0fb306', '#0fb306'],
            data: [
			"20",
			"50",
			"60",
			"11"
            ],
            borderWidth: 2,
            options: {
                title: {
                    Position: 'left',
                }
            }
        },
        {
            type: 'bar',
            label: 'Category 7',
            backgroundColor: ['#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306'],
            data: [
			"50",
			"11",
			"36",
			"20",
            ],
            borderWidth: 2,
            options: {
                title: {
                    Position: 'left',
                    fontColor: '#000',
                }
            }
        }]

    };
    var ctxline = document.getElementById("line-bar-cntr");
    window.myMixedChart = new Chart(ctxline, {
        type: 'bar',
        data: chartData1,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Performance',
                fontColor: '#000',
                fontStyle: "bold",
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    barThickness: 20
                }]
            }
        }
    });
}

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

function alertval(title, desc) {
    $("#dialoconfirm").remove();
    $("body").append("<div id='dialoconfirm' title='" + title + "' style='display:none;'><p><span class='ui-icon ui-icon-alert' style='float:left; margin:12px 12px 20px 0;'></span>" + desc + "</p></div>").css("overflow", "hidden");
    $("#dialoconfirm").dialog({
        resizable: false,
        height: "auto",
        width: 470,
        modal: true,
        buttons: {
            "Yes": function () {
                $("body").css("overflow", "auto");
                $(this).dialog("close");

                if (location.pathname == "/ezest/nqr-admin/manage-clients.html") {
                    location.href = 'view-clients.html';
                }

                if (location.pathname == "/ezest/nqr-admin/add-client-admin.html") {
                    location.href = 'view-clients.html';
                }

                if (location.pathname == "/ezest/nqr-admin/manage-roles.html") {
                    location.href = 'view-roles.html';
                }

                $('.closeBtn').trigger("click");
            },
            "No": function () {
                $("body").css("overflow", "auto");
                $(this).dialog("close");
            }
        }
    });
}