
(function($){
	var barChartData = {
        labels: ["", "", "", "", "", "", ""],
		datasets: [{
			label: 'Passed',
			backgroundColor: window.chartColors.blue,
			data: [
				"30",
				"45",
				"25",
				"45",
				"15",
				"56",
				"50",
			]
		}, {
			label: 'Failed',
			backgroundColor: window.chartColors.red,
			data: [
				"10",
				"25",
				"25",
				"5",
				"15",
				"5",
				"15",
			]
		}, {
			type: 'line',
			label: 'Performance Level',
			backgroundColor: 'rgba(75, 192, 192, 0.5)',
			borderColor: window.chartColors.green,
			data: [
				"87",
				"90",
				"88",
				"94",
				"92",
				"96",
				"97",
			]
		}]

	};

	if ($('#stacked-bar-chart').length > 0) {
		var ctx = document.getElementById("stacked-bar-chart").getContext("2d");
			window.myBar = new Chart(ctx, {
				 type: 'bar',
				 data: barChartData,
				 
				 options: {
						responsive: true,
						legend: {
							labels: {
								fontColor: '#797979',
								fontStyle: "bold",
								fontFamily:"'Quicksand', sans-serif",
								fontSize: 14,
							}
						},
						title: {
							display: true,
							text: 'Tests Created',
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
							   stacked: true,
								ticks: {
								   beginAtZero: true,
								   fontSize: 12,
								   fontStyle: "bold",
								   fontFamily:"'Quicksand', sans-serif",
								   fontColor: '#797979',
							   }
						   }],
						   xAxes: [{
							   stacked: true,
							   barThickness: 40,
								ticks: {
									   fontSize: 12,
									   fontStyle: "bold",
									   fontFamily:"'Quicksand', sans-serif",
									   fontColor: '#797979',
									}
						   }]
						}
				 }
			});
	  }
})(jQuery);



function CreateCharts() {
    $('#numberoftest').remove();
    $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
    var i = 22;
    $(".user_grp_bar_chart").css("min-width", (35 * i))

    var chartData = {
        labels: ["Test 1", "Test 2", "Test 3", "Test 4"],
        datasets: [{
            type: 'bar',
            label: 'You',
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
                }
            }
        },
	{
	    type: 'bar',
	    label: 'Your User Group',
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
	}, ]
    };

    if ($('#numberoftest').length > 0) {
        var ctx = document.getElementById("numberoftest").getContext("2d");
        window.myMixedChart = new Chart(ctx, {
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
                    text: 'Testwise comparative result',
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
                        barThickness: 40,
                        ticks: {
                            fontSize: 12,
                            fontStyle: "bold",
                            fontFamily: "'Quicksand', sans-serif",
                            fontColor: '#797979',
                        }
                    }]
                }
            }
        });
    }
}


(function($){
	var chartData = {
    	labels: ["Test 1", "Test 2", "Test 3", "Test 4"],
		datasets: [{
		type: 'bar',
		label: 'You',
		backgroundColor: ['#f55a18','#f55a18','#f55a18','#f55a18','#f55a18','#f55a18','#f55a18'],
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
	    label: 'Your User Group',
		backgroundColor: ['#0a96ee','#0a96ee','#0a96ee','#0a96ee','#0a96ee','#0a96ee','#0a96ee'],
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
	},]
	};

	if($('#numberoftest').length >0){
		var ctx = document.getElementById("numberoftest").getContext("2d");
			window.myMixedChart = new Chart(ctx, {
				 type: 'bar',
				 data: chartData,
				 options: {
						responsive: true,
						legend: {
							labels: {
								fontColor: '#797979',
								fontStyle: "bold",
								fontFamily:"'Quicksand', sans-serif",
								fontSize: 14,
							}
						},
						title: {
							display: true,
							text: 'Testwise comparative result',
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
									   fontFamily:"'Quicksand', sans-serif",
									   fontColor: '#797979',
							   }
						   }],
						   xAxes: [{
							   barThickness: 40,
								ticks: {
									   fontSize: 12,
									   fontStyle: "bold",
									   fontFamily:"'Quicksand', sans-serif",
									   fontColor: '#797979',
									}
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

        labels: ["Test 1", "Test 2", "Test 3", "Test 4"],
        datasets: [{

            type: 'bar',
            label: 'You',
            backgroundColor: ['#f55a18', '#f55a18', '#f55a18', '#f55a18'],
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
                    text: 'Testwise comparative result',
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

            labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
            datasets: [{

                type: 'bar',
                label: 'You',
                backgroundColor: ['#f55a18', '#f55a18', '#f55a18', '#f55a18'],
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
                        text: 'Testwise comparative result',
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

            labels: ["Test 1", "Test 2", "Test 3", "Test 4"],
            datasets: [{

                type: 'bar',
                label: 'Your User Group',
                backgroundColor: ['#0a96ee', '#0a96ee', '#0a96ee', '#0a96ee'],
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
                        text: 'Testwise comparative result',
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
    //else if ($(this).val() == "user_group_3") {
    //    $('#numberoftest').remove();
    //    $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
    //    var i = 22;
    //    $(".user_grp_bar_chart").css("min-width", (35 * i))

    //    var chartData = {

    //        labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    //        datasets: [{

    //            type: 'bar',
    //            label: 'User Group 3',
    //            backgroundColor: ['#03cab7', '#03cab7', '#03cab7', '#03cab7'],
    //            data: [
    //                "15",
    //                "35",
    //                "54",
    //                "80"
    //            ],
    //            borderWidth: 2,
    //            options: {

    //                title: {

    //                    Position: 'left',
    //                    fontFamily: "'Quicksand', sans-serif",

    //                }

    //            }

    //        }, ]

    //    };

    //    if ($('#numberoftest').length > 0) {

    //        var ctx = document.getElementById("numberoftest").getContext("2d");
    //        window.myMixedChart = new Chart(ctx, {
    //            //var myMixedChart = new Chart(ctx, {
    //            type: 'bar',
    //            data: chartData,
    //            options: {

    //                responsive: true,
    //                legend: {

    //                    labels: {

    //                        fontColor: '#797979',
    //                        fontStyle: "bold",
    //                        fontFamily: "'Quicksand', sans-serif",
    //                        fontSize: 14,

    //                    }

    //                },
    //                title: {

    //                    display: true,
    //                    text: 'Division Performance',
    //                    fontSize: 16,
    //                    //fontColor: '#797979',
    //                    fontStyle: "bold",
    //                    fontFamily: "'Quicksand', sans-serif",

    //                },
    //                tooltips: {

    //                    mode: 'index',
    //                    intersect: true

    //                },
    //                scales: {

    //                    yAxes: [{

    //                        ticks: {

    //                            beginAtZero: true,
    //                            fontSize: 12,
    //                            fontStyle: "bold",
    //                            fontFamily: "'Quicksand', sans-serif",
    //                            fontColor: '#797979',

    //                        }

    //                    }],
    //                    xAxes: [{

    //                        barThickness: 22,
    //                        ticks: {

    //                            fontSize: 12,
    //                            fontStyle: "bold",
    //                            fontFamily: "'Quicksand', sans-serif",
    //                            fontColor: '#797979',


    //                        },

    //                    }]

    //                }

    //            }

    //        });

    //    }
    //}
    //else if ($(this).val() == "user_group_4") {
    //    $('#numberoftest').remove();
    //    $('.user_grp_bar_chart').append('<canvas id="numberoftest"><canvas>');
    //    var i = 22;
    //    $(".user_grp_bar_chart").css("min-width", (35 * i))

    //    var chartData = {

    //        labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
    //        datasets: [{

    //            type: 'bar',
    //            label: 'User Group 4',
    //            backgroundColor: ['#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306', '#ffb306'],
    //            data: [
    //                "48",
    //                "65",
    //                "28",
    //                "92",
    //                "72",
    //                "58",
    //                "49",
    //                "46",
    //                "39",
    //                "28",
    //                "94"
    //            ],
    //            borderWidth: 2,
    //            options: {

    //                title: {

    //                    Position: 'left',
    //                    fontFamily: "'Quicksand', sans-serif",

    //                }

    //            }

    //        }, ]

    //    };

    //    if ($('#numberoftest').length > 0) {

    //        var ctx = document.getElementById("numberoftest").getContext("2d");
    //        window.myMixedChart = new Chart(ctx, {
    //            //var myMixedChart = new Chart(ctx, {
    //            type: 'bar',
    //            data: chartData,
    //            options: {

    //                responsive: true,
    //                legend: {

    //                    labels: {

    //                        fontColor: '#797979',
    //                        fontStyle: "bold",
    //                        fontFamily: "'Quicksand', sans-serif",
    //                        fontSize: 14,

    //                    }

    //                },
    //                title: {

    //                    display: true,
    //                    text: 'Division Performance',
    //                    fontSize: 16,
    //                    //fontColor: '#797979',
    //                    fontStyle: "bold",
    //                    fontFamily: "'Quicksand', sans-serif",

    //                },
    //                tooltips: {

    //                    mode: 'index',
    //                    intersect: true

    //                },
    //                scales: {

    //                    yAxes: [{

    //                        ticks: {

    //                            beginAtZero: true,
    //                            fontSize: 12,
    //                            fontStyle: "bold",
    //                            fontFamily: "'Quicksand', sans-serif",
    //                            fontColor: '#797979',

    //                        }

    //                    }],
    //                    xAxes: [{

    //                        barThickness: 22,
    //                        ticks: {

    //                            fontSize: 12,
    //                            fontStyle: "bold",
    //                            fontFamily: "'Quicksand', sans-serif",
    //                            fontColor: '#797979',


    //                        },

    //                    }]

    //                }

    //            }

    //        });

    //    }

    //}
})