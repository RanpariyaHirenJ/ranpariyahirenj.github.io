
(function($){
	var barChartData = {
		labels: [""],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: '#ea673c',
			yAxisID: "y-axis-1",
			data: [
                    "100",
			]
		}, {
			label: 'Dataset 2',
			backgroundColor: '#e02c5a',
			yAxisID: "y-axis-1",
			data: [
                    "70",
			]
		}, {
			label: 'Dataset 3',
			backgroundColor: '#ffc200',
			yAxisID: "y-axis-1",
			data: [
                    "30",
			]
		}, {
			label: 'Dataset 4',
			backgroundColor: '#007e86',
			yAxisID: "y-axis-1",
			data: [
                    "70",
			]
		}]
	};

	if($('#mail-instructions-bar-chart').length >0){
		var ctx = document.getElementById("mail-instructions-bar-chart").getContext("2d");
		window.myBar = new Chart(ctx, {
			type: 'bar',
			data: barChartData, 
			options: {
			responsive: true,
            legend: {
                labels: {
                display: false,
					border: 0,
                    //fontColor: '#797979',
                    //fontStyle: "bold",
                    //fontFamily: "'Arimo', sans-serif",
                    fontSize: 0,
                }
            },
            title: {
                display: true,
                //text: 'Applications No Details',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Arimo', sans-serif",
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
					yAxes: [{
						type: "linear",
						display: true,
						position: "left",
						id: "y-axis-1",
						ticks: {
							beginAtZero: true,
							fontSize: 13,
							fontStyle: "bold",
							fontFamily: "'Arimo', sans-serif",
							fontColor: '#797979',
						}
					}],
				}
			}
		});
	}
})(jQuery);



(function($){
	var barChartData = {
		labels: [""],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: '#ea673c',
			yAxisID: "y-axis-1",
			data: [
                    "70",
			]
		}, {
			label: 'Dataset 2',
			backgroundColor: '#e02c5a',
			yAxisID: "y-axis-1",
			data: [
                    "100",
			]
		}, {
			label: 'Dataset 3',
			backgroundColor: '#ffc200',
			yAxisID: "y-axis-1",
			data: [
                    "70",
			]
		}, {
			label: 'Dataset 4',
			backgroundColor: '#007e86',
			yAxisID: "y-axis-1",
			data: [
                    "30",
			]
		}]
	};

	if($('#mail-instructions-bar-chart2').length >0){
		var ctx = document.getElementById("mail-instructions-bar-chart2").getContext("2d");
		window.myBar = new Chart(ctx, {
			type: 'bar',
			data: barChartData, 
			options: {
			responsive: true,
            legend: {
                labels: {
                display: false,
					border: 0,
                    //fontColor: '#797979',
                    //fontStyle: "bold",
                    //fontFamily: "'Arimo', sans-serif",
                    fontSize: 0,
                }
            },
            title: {
                display: true,
                //text: 'Applications No Details',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Arimo', sans-serif",
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
					yAxes: [{
						type: "linear",
						display: true,
						position: "left",
						id: "y-axis-1",
						ticks: {
							beginAtZero: true,
							fontSize: 13,
							fontStyle: "bold",
							fontFamily: "'Arimo', sans-serif",
							fontColor: '#797979',
						}
					}],
				}
			}
		});
	}
})(jQuery);


(function($){
	var barChartData = {
		labels: [""],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: '#ea673c',
			yAxisID: "y-axis-1",
			data: [
                    "70",
			]
		}, {
			label: 'Dataset 2',
			backgroundColor: '#e02c5a',
			yAxisID: "y-axis-1",
			data: [
                    "100",
			]
		}, {
			label: 'Dataset 3',
			backgroundColor: '#ffc200',
			yAxisID: "y-axis-1",
			data: [
                    "70",
			]
		}, {
			label: 'Dataset 4',
			backgroundColor: '#007e86',
			yAxisID: "y-axis-1",
			data: [
                    "30",
			]
		}]
	};

	if($('#mail-instructions-bar-chart3').length >0){
		var ctx = document.getElementById("mail-instructions-bar-chart3").getContext("2d");
		window.myBar = new Chart(ctx, {
			type: 'bar',
			data: barChartData, 
			options: {
			responsive: true,
            legend: {
                labels: {
                display: true,
					border: 0,
                    //fontColor: '#797979',
                    //fontStyle: "bold",
                    //fontFamily: "'Arimo', sans-serif",
                    fontSize: 0,
                }
            },
            title: {
                display: true,
                text: 'Month on Month Achievement',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Arimo', sans-serif",
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
					yAxes: [{
						type: "linear",
						display: true,
						position: "left",
						id: "y-axis-1",
						ticks: {
							beginAtZero: true,
							fontSize: 13,
							fontStyle: "bold",
							fontFamily: "'Arimo', sans-serif",
							fontColor: '#797979',
						}
					}],
				}
			}
		});
	}
})(jQuery);




(function($){
	var barChartData = {
		labels: [""],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: '#ea673c',
			yAxisID: "y-axis-1",
			data: [
                    "70",
			]
		}, {
			label: 'Dataset 2',
			backgroundColor: '#e02c5a',
			yAxisID: "y-axis-1",
			data: [
                    "100",
			]
		}, {
			label: 'Dataset 3',
			backgroundColor: '#ffc200',
			yAxisID: "y-axis-1",
			data: [
                    "70",
			]
		}, {
			label: 'Dataset 4',
			backgroundColor: '#007e86',
			yAxisID: "y-axis-1",
			data: [
                    "30",
			]
		}]
	};

	if($('#mail-instructions-bar-chart4').length >0){
		var ctx = document.getElementById("mail-instructions-bar-chart4").getContext("2d");
		window.myBar = new Chart(ctx, {
			type: 'bar',
			data: barChartData, 
			options: {
			responsive: true,
            legend: {
                labels: {
                display: true,
					border: 0,
                    //fontColor: '#797979',
                    //fontStyle: "bold",
                    //fontFamily: "'Arimo', sans-serif",
                    fontSize: 0,
                }
            },
            title: {
                display: true,
                text: 'Month - Month Unit Level Rank',
                fontSize: 16,
                fontColor: '#000',
                fontStyle: "bold",
                fontFamily: "'Arimo', sans-serif",
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
					yAxes: [{
						type: "linear",
						display: true,
						position: "left",
						id: "y-axis-1",
						ticks: {
							beginAtZero: true,
							fontSize: 13,
							fontStyle: "bold",
							fontFamily: "'Arimo', sans-serif",
							fontColor: '#797979',
						}
					}],
				}
			}
		});
	}
})(jQuery);



google.charts.load('current', {packages: ['corechart', 'bar', 'line', 'orgchart', 'treemap', 'table', 'timeline', 'gauge','geochart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	if ($("#google-pie-chart-1").length > 0){ 
		var data = google.visualization.arrayToDataTable([
			['', 'Hours per Day'],
			['',      113],
			['',     26],
		]);
		var options = {
			title: 'Target Achievement',
			pieHole: 0.6,
			height:300,
			width:340,
			colors:['#ea673c', '#ffc200'],
			legend: 'none',
			pieSliceText: 'value',
			fontSize: 13,
			fontStyle: "bold",
			fontFamily: "'Arimo', sans-serif",
			fontColor: '#797979',
		};
		var chart = new google.visualization.PieChart(document.getElementById('google-pie-chart-1'));
		chart.draw(data, options);
	}
	
	if ($("#google-pie-chart-2").length > 0){ 
		var data = google.visualization.arrayToDataTable([
			['', 'Hours per Day'],
			['Individual ',     113],
			['Unit',      26]
		]);
		var options = {
			title: 'Unit Vs Individual Pendency',
			pieHole: 0.6,
			height:300,
			width:340,
			colors:['#ea673c', '#ffc200'],
			//legend: 'none',
			titlePosition: 'center',
			legend: { position: 'top', alignment: 'center' },
			pieSliceText: 'value',
			fontSize: 13,
			fontStyle: "bold",
			fontFamily: "'Arimo', sans-serif",
			fontColor: '#797979',
		};
		var chart = new google.visualization.PieChart(document.getElementById('google-pie-chart-2'));
		chart.draw(data, options);
	}
	
	if ($("#google-pie-chart-3").length > 0){ 
		var data = google.visualization.arrayToDataTable([
			['', 'Hours per Day'],
			['CCG-LC ',     13],
			['CCG-MC',      10],
			['SCG',      18],
			['SFG',      5],
			['SME-SCF',      10],
			['SME-SEG',      7],
			['SME-MEG',      5],
		]);
		var options = {
			title: 'Unit Vs Individual Pendency',
			pieHole: 0.6,
			height:400,
			width:340,
			colors:['#ea673c', '#fba14e','#0bb5b5', '#007e86','#e02c5a', '#b52949', '#ffc200'],
			legend: 'none',
			chartArea: {width: 300, height: 300},
			titlePosition: 'center',
			//legend: { position: 'bottom', alignment: 'center' },
			pieSliceText: 'value',
			fontSize: 13,
			fontStyle: "bold",
			fontFamily: "'Arimo', sans-serif",
			fontColor: '#797979',
		};
		var chart = new google.visualization.PieChart(document.getElementById('google-pie-chart-3'));
		chart.draw(data, options);
	}

}