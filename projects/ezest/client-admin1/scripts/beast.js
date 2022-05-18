

(function ($) {

    

    var chartData = {

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
                    fontFamily: "'Quicksand', sans-serif",
                    fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
	        }
	    }

	}, ]

    };

    if ($('#numberoftest').length > 0) {

        var ctx = document.getElementById("numberoftest").getContext("2d");
        window.myMixedChart = new Chart(ctx, {
        //var myMixedChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                
                responsive: true,
                legend: {

                    labels: {

                        fontColor: '#797979',
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontSize: 14,

                    }

                },
                title: {

                    display: true,
                    text: 'Division Performance',
                    fontSize: 16,
                    fontColor: '#000',
                    fontStyle: "bold",
                    fontFamily: "'Quicksand', sans-serif",

                },
                tooltips: {

                    mode: 'index',
                    intersect: true

                },
                scales: {

                    yAxes: [{

                        ticks: {

                            beginAtZero: true,
                            fontSize: 12,
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontColor: '#797979',

                        }

                    }],
                    xAxes: [{

                        barThickness: 22,
                        ticks: {

                            fontSize: 12,
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontColor: '#797979',
                           
                               
                        },

                    }]

                }

            }

        });

    }

})(jQuery);


$('#select_category-list').hide()

$(document).on('click', '.switch_btn', function () {
    $(this).val("Back")
    $(this).addClass('back_btn')
    $(this).removeClass('switch_btn')
    $('#select_category-list').show()
    $('#select_category').val("user_group_1")

    $('#numberoftest').remove();
    $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
    var i = 22;
    $(".user_grp_bar_chart").css("min-width", (35 * i))

    var chartData = {

        labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
        datasets: [{

            type: 'bar',
            label: 'User Group 1',
            backgroundColor: ['#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18'],
            data: [
                "15",
                "35",
                "54",
                "80",
                "72",
                "66",
                "27",
                "39",
                "43",
                "55",
                "94"
            ],
            borderWidth: 2,
            options: {

                title: {

                    Position: 'left',
                    fontFamily: "'Quicksand', sans-serif",
                    fontColor: '#000',
                }

            }

        },]

    };
       
    if ($('#numberoftest').length > 0) {

        var ctx = document.getElementById("numberoftest").getContext("2d");
        window.myMixedChart = new Chart(ctx, {
            //var myMixedChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {

                responsive: true,
                legend: {

                    labels: {

                        fontColor: '#797979',
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontSize: 14,

                    }

                },
                title: {

                    display: true,
                    text: 'Division Performance',
                    fontSize: 16,
                    fontColor: '#000',
                    fontStyle: "bold",
                    fontFamily: "'Quicksand', sans-serif",

                },
                tooltips: {

                    mode: 'index',
                    intersect: true

                },
                scales: {

                    yAxes: [{

                        ticks: {

                            beginAtZero: true,
                            fontSize: 12,
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontColor: '#797979',

                        }

                    }],
                    xAxes: [{

                        barThickness: 22,
                        ticks: {

                            fontSize: 12,
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontColor: '#797979',


                        },

                    }]

                }

            }

        });

    }
})

$(document).on('click', '.back_btn', function () {
    $(this).val("Switch")
    $(this).addClass('switch_btn')
    $(this).removeClass('back_btn')
    $('#select_category-list').hide()

    CreateCharts()
})

$("#select_category").change(function () {

    if ($(this).val() == "user_group_1") {
        $('#numberoftest').remove();
        $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
        var i = 22;
        $(".user_grp_bar_chart").css("min-width", (35 * i))

        var chartData = {

            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
            datasets: [{

                type: 'bar',
                label: 'User Group 1',
                backgroundColor: ['#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18', '#f55a18'],
                data: [
                    "15",
                    "35",
                    "54",
                    "80",
                    "72",
                    "66",
                    "27",
                    "39",
                    "43",
                    "55",
                    "94"
                ],
                borderWidth: 2,
                options: {

                    title: {

                        Position: 'left',
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#000',
                    }

                }

            }, ]

        };

        if ($('#numberoftest').length > 0) {

            var ctx = document.getElementById("numberoftest").getContext("2d");
            window.myMixedChart = new Chart(ctx, {
                //var myMixedChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {

                    responsive: true,
                    legend: {

                        labels: {

                            fontColor: '#797979',
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: 14,

                        }

                    },
                    title: {

                        display: true,
                        text: 'Division Performance',
                        fontSize: 16,
                        fontColor: '#000',
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",

                    },
                    tooltips: {

                        mode: 'index',
                        intersect: true

                    },
                    scales: {

                        yAxes: [{

                            ticks: {

                                beginAtZero: true,
                                fontSize: 12,
                                fontStyle: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                fontColor: '#797979',

                            }

                        }],
                        xAxes: [{

                            barThickness: 22,
                            ticks: {

                                fontSize: 12,
                                fontStyle: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                fontColor: '#797979',


                            },

                        }]

                    }

                }

            });

        }
    }
    else if ($(this).val() == "user_group_2") {
        $('#numberoftest').remove();
        $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
        var i = 22;
        $(".user_grp_bar_chart").css("min-width", (35 * i))

        var chartData = {

            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
            datasets: [{

                type: 'bar',
                label: 'User Group 2',
                backgroundColor: ['#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee'],
                data: [
                    "50",
                    "45",
                    "60",
                    "78",
                    "85",
                    "32",
                    "56",
                    "71",
                    "48",
                    "12",
                    "29"
                ],
                borderWidth: 2,
                options: {

                    title: {

                        Position: 'left',
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#000',
                    }

                }

            }, ]

        };

        if ($('#numberoftest').length > 0) {

            var ctx = document.getElementById("numberoftest").getContext("2d");
            window.myMixedChart = new Chart(ctx, {
                //var myMixedChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {

                    responsive: true,
                    legend: {

                        labels: {

                            fontColor: '#797979',
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: 14,

                        }

                    },
                    title: {

                        display: true,
                        text: 'Division Performance',
                        fontSize: 16,
                        fontColor: '#000',
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",

                    },
                    tooltips: {

                        mode: 'index',
                        intersect: true

                    },
                    scales: {

                        yAxes: [{

                            ticks: {

                                beginAtZero: true,
                                fontSize: 12,
                                fontStyle: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                fontColor: '#797979',

                            }

                        }],
                        xAxes: [{

                            barThickness: 22,
                            ticks: {

                                fontSize: 12,
                                fontStyle: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                fontColor: '#797979',


                            },

                        }]

                    }

                }

            });

        }

    }
    else if ($(this).val() == "user_group_3") {
        $('#numberoftest').remove();
        $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
        var i = 22;
        $(".user_grp_bar_chart").css("min-width", (35 * i))

        var chartData = {

            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
            datasets: [{

                type: 'bar',
                label: 'User Group 3',
                backgroundColor: ['#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7', '#03cab7'],
                data: [
                    "15",
                    "35",
                    "54",
                    "80",
                    "72",
                    "66",
                    "27",
                    "39",
                    "43",
                    "55",
                    "94"
                ],
                borderWidth: 2,
                options: {

                    title: {

                        Position: 'left',
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#000',
                    }

                }

            }, ]

        };

        if ($('#numberoftest').length > 0) {

            var ctx = document.getElementById("numberoftest").getContext("2d");
            window.myMixedChart = new Chart(ctx, {
                //var myMixedChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {

                    responsive: true,
                    legend: {

                        labels: {

                            fontColor: '#797979',
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: 14,

                        }

                    },
                    title: {

                        display: true,
                        text: 'Division Performance',
                        fontSize: 16,
                        fontColor: '#000',
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",

                    },
                    tooltips: {

                        mode: 'index',
                        intersect: true

                    },
                    scales: {

                        yAxes: [{

                            ticks: {

                                beginAtZero: true,
                                fontSize: 12,
                                fontStyle: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                fontColor: '#797979',

                            }

                        }],
                        xAxes: [{

                            barThickness: 22,
                            ticks: {

                                fontSize: 12,
                                fontStyle: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                fontColor: '#797979',


                            },

                        }]

                    }

                }

            });

        }
    }
    else if ($(this).val() == "user_group_4") {
        $('#numberoftest').remove();
        $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
        var i = 22;
        $(".user_grp_bar_chart").css("min-width", (35 * i))

        var chartData = {

            labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
            datasets: [{

                type: 'bar',
                label: 'User Group 4',
                backgroundColor: ['#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306'],
                data: [
                    "48",
                    "65",
                    "28",
                    "92",
                    "72",
                    "58",
                    "49",
                    "46",
                    "39",
                    "28",
                    "94"
                ],
                borderWidth: 2,
                options: {

                    title: {

                        Position: 'left',
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#000',
                    }

                }

            }, ]

        };

        if ($('#numberoftest').length > 0) {

            var ctx = document.getElementById("numberoftest").getContext("2d");
            window.myMixedChart = new Chart(ctx, {
                //var myMixedChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {

                    responsive: true,
                    legend: {

                        labels: {

                            fontColor: '#797979',
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: 14,

                        }

                    },
                    title: {

                        display: true,
                        text: 'Division Performance',
                        fontSize: 16,
                        fontColor: '#000',
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",

                    },
                    tooltips: {

                        mode: 'index',
                        intersect: true

                    },
                    scales: {

                        yAxes: [{

                            ticks: {

                                beginAtZero: true,
                                fontSize: 12,
                                fontStyle: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                fontColor: '#797979',

                            }

                        }],
                        xAxes: [{

                            barThickness: 22,
                            ticks: {

                                fontSize: 12,
                                fontStyle: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                fontColor: '#797979',


                            },

                        }]

                    }

                }

            });

        }

    }   
})


//$('#numberoftest').click(function (e) {
//    console.clear();
//    var helpers = Chart.helpers;

//    var eventPosition = helpers.getRelativePosition(e, window.myMixedChart.chart);
//    var mouseX = eventPosition.x;
//    var mouseY = eventPosition.y;

//    var activePoints = [];
//    helpers.each(window.myMixedChart.data.labels, function (label, index) {
//        //alert(label)
//        var activeElement = window.myMixedChart.getElementsAtEvent(e);
//        //alert($(activeElement).html())        
//    }, window.myMixedChart.scale);

//});

//jQuery(document).ready(function() {
//    ChartsFlowchart.init();
//});

google.charts.load('current', {packages: ['corechart', 'bar', 'line', 'orgchart', 'treemap', 'table', 'timeline', 'gauge','geochart']});
google.charts.setOnLoadCallback(drawChart);
function CreateCharts() {
    $('#numberoftest').remove();
    $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
    var i = 22;
    $(".user_grp_bar_chart").css("min-width", (35 * i))
    var chartData = {

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
                    fontFamily: "'Quicksand', sans-serif",
                    fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
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
	            fontFamily: "'Quicksand', sans-serif",
	            fontColor: '#000',
	        }
	    }

	}, ]

    };

    if ($('#numberoftest').length > 0) {

        var ctx = document.getElementById("numberoftest").getContext("2d");
        window.myMixedChart = new Chart(ctx, {
            //var myMixedChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {

                responsive: true,
                legend: {

                    labels: {

                        fontColor: '#797979',
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontSize: 14,

                    }

                },
                title: {

                    display: true,
                    text: 'Division Performance',
                    fontSize: 16,
                    fontColor: '#000',
                    fontStyle: "bold",
                    fontFamily: "'Quicksand', sans-serif",

                },
                tooltips: {

                    mode: 'index',
                    intersect: true

                },
                scales: {

                    yAxes: [{

                        ticks: {

                            beginAtZero: true,
                            fontSize: 12,
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontColor: '#797979',

                        }

                    }],
                    xAxes: [{

                        barThickness: 22,
                        ticks: {

                            fontSize: 12,
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontColor: '#797979',


                        },

                    }]

                }

            }

        });

    }
}
function drawChart() {

	if ($("#google-pie-chart-1").length > 0){ 
		var data = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Category 1',     11],
			['Category 2',      4],
			['Category 3',  9],
			['Category 4', 5],
			['Category 5',  9],
			['Category 6', 5],
		]);
		var options = {
		    title: 'Total tests created',		    titleTextStyle:
              {
                  //fontColor: '#797979',
                  fontSize: 16,
                  //fontStyle: "bold" //or bold, italic, etc.
              },		    //fontColor: '#797979',		    //fontSize: 12,
		    //fontStyle: "bold",
			//fontName: "'Quicksand', sans-serif",
			height:400,
			colors: ['#f55a18', '#0a96ee', '#c6059c', '#03cab7','#0fb306','#ffb306'],			
			//pieSliceTextStyle: {
			//    //color: '#797979',
			//    fontSize: 12,
			//    fontFamily: "'Quicksand', sans-serif",
			//    fontStyle: "bold"
			//},
			legend: {
			    textStyle: { color: '#797979' },
			    //fontSize: 14,
			    //fontName: "'Quicksand', sans-serif",
			}
		};
		var chart = new google.visualization.PieChart(document.getElementById('google-pie-chart-1'));		//$('#google-pie-chart-1').find('rect').removeAttr('stroke')		//$('#google-pie-chart-1').find('text').removeAttr('stroke')		//google.visualization.events.addListener(chart, 'ready', function () {		    
		//    var tooltipStyle = { 'font-family': "'Quicksand', sans-serif", fill: '#797979' };
		//    var textStyle = { 'font-family': "'Quicksand', sans-serif", fill: '#797979' };
		//    var subtitleStyle = { 'font-size': '14px', 'font-family': "'Quicksand', sans-serif", fill: '#797979' };
		//    legend: { textStyle: { color: '#797979' } }
		//});
		chart.draw(data, options);		$("#google-pie-chart-1").find('text:first()').css('font-size', "16px")		//$("#google-pie-chart-1").find('text:eq(0)').css('font-size', "16px")
	}
	

}
//'use strict';



(function($) {
	Highcharts.setOptions({	    
		plotOptions: {		    chart: {
		        style: {
		            color: '#797979',
		            fontSize: 16,
		            fontFamily: "'Quicksand', sans-serif",
		        }
		    },
			area: {
				dataLabels: { useHTML: true,}
			},
			bar: {
				dataLabels: { useHTML: true,}
			},
			pie: {
				dataLabels: { useHTML: true,}
			},
			line: {
				dataLabels: { useHTML: true,}
			},
			series: {
				dataLabels: { useHTML: true,}
			},
			scatter: {
				dataLabels: { useHTML: true,}
			},
			column: {
				dataLabels: { useHTML: true,}
			},
			columnrange: {
				dataLabels: { useHTML: true,}
			},
			spline: {
				dataLabels: { useHTML: true,}
			},
		},
		credits: {
			enabled: false
		},
    });




	/**
      * Function written to load stacked bar highchart.
    **/
    if ($(".stacked-bar-chart").length > 0){
        $('.stacked-bar-chart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Skill Level',                //style: {
                //    color: '#797979',
                //    fontSize: 16,
                //    fontFamily: "'Quicksand', sans-serif",
                //    bold:true
                //}
            },
            xAxis: {
                categories: ["User Group 7", "User Group 6", "User Group 5", "User Group 4", "User Group 3", "User Group 2", "User Group 1"],                //labels: {
                //    style: {
                //        color: '#797979',
                //        fontSize: '14px',
                //        fontFamily: "'Quicksand', sans-serif",
                //    }
                //}
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },                //labels: {
                //    style: {
                //        color: '#797979',
                //        fontSize: '14px',
                //        fontFamily: "'Quicksand', sans-serif",
                //    }
                //}
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Skill Percentage',
                color: '#0092eb',
                data: [89, 79, 93, 56, 72, 68, 89]
            }]
        });
    }
})(jQuery);
'use strict';
