
(function($){
	var config = {
		type: 'line',
		data: {
            labels: ["Feb", "Mar", "Apr", "May"],
			datasets: [{
				label: "Budget",
				borderColor: 'rgba(156, 39, 176, 0.5)',
                backgroundColor: 'rgba(156, 39, 176, 0.5)',
				data: [
                    "80",
                    "70",
                    "30",
                    "50",
				],
			}, {
				label: "Achievement",
				borderColor: 'rgba(10, 150, 238, 0.5)',
                backgroundColor: 'rgba(10, 150, 238, 0.5)',
				data: [
                    "30",
                    "10",
                    "80",
                    "50",
				],
			}, {
				label: "%Achievement",
				borderColor: 'rgba(3, 202, 183, 0.5)',
                backgroundColor: 'rgba(3, 202, 183, 0.5)',
				data: [
                    "80",
                    "15",
                    "50",
                    "30",
				],
			}]
		},
		options: {
			responsive: true,
            legend: {
                labels: {
                    fontColor: '#797979',
                    fontStyle: "bold",
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 10,
                }
            },
            title: {
                display: true,
                //text: 'Applications No Details',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Quicksand', sans-serif",
			},
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
			
			scales: {
				xAxes: [{
					/*scaleLabel: {
						display: true,
						labelString: 'Month'
					},*/
                    ticks: {
                        beginAtZero: true,
                        fontSize: 13,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}],
				yAxes: [{
					//stacked: true,
					/*scaleLabel: {
						display: true,
						labelString: 'Value'
					},*/
					
                    barThickness: 22,
                    ticks: {
                        fontSize: 10,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}]
			}
		}
	};

	if($('#casa-leadsline-stacked-bar-chart').length >0){
		var ctx = document.getElementById("casa-leadsline-stacked-bar-chart").getContext("2d");
		window.myLine = new Chart(ctx, config);
	}
})(jQuery);









(function($){
	var config = {
		type: 'line',
		data: {
            labels: ["Feb", "Mar", "Apr", "May"],
			datasets: [{
				label: "Budget",
				borderColor: 'rgba(156, 39, 176, 0.5)',
                backgroundColor: 'rgba(156, 39, 176, 0.5)',
				data: [
                    "10",
                    "80",
                    "30",
                    "50",
				],
			}, {
				label: "Achievement",
				borderColor: 'rgba(10, 150, 238, 0.5)',
                backgroundColor: 'rgba(10, 150, 238, 0.5)',
				data: [
                    "50",
                    "30",
                    "80",
                    "15",
				],
			}, {
				label: "%Achievement",
				borderColor: 'rgba(3, 202, 183, 0.5)',
                backgroundColor: 'rgba(3, 202, 183, 0.5)',
				data: [
                    "30",
                    "50",
                    "80",
                    "70",
				],
			}]
		},
		options: {
			responsive: true,
            legend: {
                labels: {
                    fontColor: '#797979',
                    fontStyle: "bold",
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 10,
                }
            },
            title: {
                display: true,
                //text: 'Applications No Details',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Quicksand', sans-serif",
			},
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
			
			scales: {
				xAxes: [{
					/*scaleLabel: {
						display: true,
						labelString: 'Month'
					},*/
                    ticks: {
                        beginAtZero: true,
                        fontSize: 13,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}],
				yAxes: [{
					//stacked: true,
					/*scaleLabel: {
						display: true,
						labelString: 'Value'
					},*/
					
                    barThickness: 22,
                    ticks: {
                        fontSize: 10,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}]
			}
		}
	};

	if($('#ca-leads-points-line-stacked-bar-chart').length >0){
		var ctx = document.getElementById("ca-leads-points-line-stacked-bar-chart").getContext("2d");
		window.myLine = new Chart(ctx, config);
	}
})(jQuery);








(function($){
	var config = {
		type: 'line',
		data: {
            labels: ["Feb", "Mar", "Apr", "May"],
			datasets: [{
				label: "Budget",
				borderColor: 'rgba(156, 39, 176, 0.5)',
                backgroundColor: 'rgba(156, 39, 176, 0.5)',
				data: [
                    "50",
                    "80",
                    "70",
                    "30",
				],
			}, {
				label: "Achievement",
				borderColor: 'rgba(10, 150, 238, 0.5)',
                backgroundColor: 'rgba(10, 150, 238, 0.5)',
				data: [
                    "10",
                    "80",
                    "30",
                    "50",
				],
			}, {
				label: "%Achievement",
				borderColor: 'rgba(3, 202, 183, 0.5)',
                backgroundColor: 'rgba(3, 202, 183, 0.5)',
				data: [
                    "15",
                    "50",
                    "80",
                    "30",
				],
			}]
		},
		options: {
			responsive: true,
            legend: {
                labels: {
                    fontColor: '#797979',
                    fontStyle: "bold",
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 10,
                }
            },
            title: {
                display: true,
                //text: 'Applications No Details',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Quicksand', sans-serif",
			},
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
			
			scales: {
				xAxes: [{
					/*scaleLabel: {
						display: true,
						labelString: 'Month'
					},*/
                    ticks: {
                        beginAtZero: true,
                        fontSize: 13,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}],
				yAxes: [{
					//stacked: true,
					/*scaleLabel: {
						display: true,
						labelString: 'Value'
					},*/
					
                    barThickness: 22,
                    ticks: {
                        fontSize: 10,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}]
			}
		}
	};

	if($('#sa-leads-points-line-stacked-bar-chart').length >0){
		var ctx = document.getElementById("sa-leads-points-line-stacked-bar-chart").getContext("2d");
		window.myLine = new Chart(ctx, config);
	}
})(jQuery);






(function($){
	var config = {
		type: 'line',
		data: {
            labels: ["Feb", "Mar", "Apr", "May"],
			datasets: [{
				label: "Budget",
				borderColor: 'rgba(156, 39, 176, 0.5)',
                backgroundColor: 'rgba(156, 39, 176, 0.5)',
				data: [
                    "80",
                    "70",
                    "30",
                    "50",
				],
			}, {
				label: "Achievement",
				borderColor: 'rgba(10, 150, 238, 0.5)',
                backgroundColor: 'rgba(10, 150, 238, 0.5)',
				data: [
                    "30",
                    "10",
                    "80",
                    "50",
				],
			}, {
				label: "%Achievement",
				borderColor: 'rgba(3, 202, 183, 0.5)',
                backgroundColor: 'rgba(3, 202, 183, 0.5)',
				data: [
                    "80",
                    "15",
                    "50",
                    "30",
				],
			}]
		},
		options: {
			responsive: true,
            legend: {
                labels: {
                    fontColor: '#797979',
                    fontStyle: "bold",
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 10,
                }
            },
            title: {
                display: true,
                //text: 'Applications No Details',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Quicksand', sans-serif",
			},
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
			
			scales: {
				xAxes: [{
					/*scaleLabel: {
						display: true,
						labelString: 'Month'
					},*/
                    ticks: {
                        beginAtZero: true,
                        fontSize: 13,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}],
				yAxes: [{
					//stacked: true,
					/*scaleLabel: {
						display: true,
						labelString: 'Value'
					},*/
					
                    barThickness: 22,
                    ticks: {
                        fontSize: 10,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}]
			}
		}
	};

	if($('#td-leads-line-stacked-bar-chart').length >0){
		var ctx = document.getElementById("td-leads-line-stacked-bar-chart").getContext("2d");
		window.myLine = new Chart(ctx, config);
	}
})(jQuery);










(function($){
	var config = {
		type: 'line',
		data: {
            labels: ["Feb", "Mar", "Apr", "May"],
			datasets: [{
				label: "Budget",
				borderColor: 'rgba(156, 39, 176, 0.5)',
                backgroundColor: 'rgba(156, 39, 176, 0.5)',
				data: [
                    "50",
                    "80",
                    "70",
                    "30",
				],
			}, {
				label: "Achievement",
				borderColor: 'rgba(10, 150, 238, 0.5)',
                backgroundColor: 'rgba(10, 150, 238, 0.5)',
				data: [
                    "10",
                    "80",
                    "30",
                    "50",
				],
			}, {
				label: "%Achievement",
				borderColor: 'rgba(3, 202, 183, 0.5)',
                backgroundColor: 'rgba(3, 202, 183, 0.5)',
				data: [
                    "15",
                    "50",
                    "80",
                    "30",
				],
			}]
		},
		options: {
			responsive: true,
            legend: {
                labels: {
                    fontColor: '#797979',
                    fontStyle: "bold",
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 10,
                }
            },
            title: {
                display: true,
                //text: 'Applications No Details',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Quicksand', sans-serif",
			},
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
			
			scales: {
				xAxes: [{
					/*scaleLabel: {
						display: true,
						labelString: 'Month'
					},*/
                    ticks: {
                        beginAtZero: true,
                        fontSize: 13,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}],
				yAxes: [{
					//stacked: true,
					/*scaleLabel: {
						display: true,
						labelString: 'Value'
					},*/
					
                    barThickness: 22,
                    ticks: {
                        fontSize: 10,
                        fontStyle: "bold",
                        fontFamily: "'Quicksand', sans-serif",
                        fontColor: '#797979',
                    }
				}]
			}
		}
	};

	if($('#cross-sell-ipg-line-stacked-bar-chart').length >0){
		var ctx = document.getElementById("cross-sell-ipg-line-stacked-bar-chart").getContext("2d");
		window.myLine = new Chart(ctx, config);
	}
})(jQuery);
