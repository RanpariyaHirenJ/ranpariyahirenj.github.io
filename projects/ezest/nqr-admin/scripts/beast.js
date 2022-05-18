(function($){
	var chartData = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [{
			type: 'bar',
			label: 'Dataset 1',
			backgroundColor: '#0a96ee',
			data: [
				"5", 
				"90", 
				"40", 
				"50", 
				"60", 
				"20", 
				"90"
			],
			}, {
			type: 'bar',
			label: 'Dataset 2',
			backgroundColor: '#f55a18',
			data: [
				"70", 
				"40", 
				"60", 
				"30", 
				"90", 
				"50", 
				"55"
			]
		}]
	};

	if($('#stacked-barchart').length >0){
		var ctx = document.getElementById("stacked-barchart").getContext("2d");
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
							text: 'Bar Chart Example',
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
							   barThickness: 22,
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




(function($){
	var config = {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "Filled 1",
				fill: true,
				backgroundColor: '#c6059c',
				borderColor: '#c6059c',
				data: [
						"5", 
						"90", 
						"40", 
						"50", 
						"60", 
						"20", 
						"60", 
				],
			}, {
				label: "Filled 2",
				backgroundColor: '#03cab7',
				borderColor: '#03cab7',
				data: [
						"10", 
						"100", 
						"50", 
						"80", 
						"90", 
						"50", 
						"90", 
				],
				fill: true,
			}]
		},
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
					text: 'Line Chart Example',
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
					   barThickness: 22,
						ticks: {
							   fontSize: 12,
							   fontStyle: "bold",
							   fontFamily:"'Quicksand', sans-serif",
							   fontColor: '#797979',
							}
				   }]
				}
		}
	};

	if($('#linestyles').length >0){
		var ctx = document.getElementById("linestyles").getContext("2d");
			window.myLine = new Chart(ctx, config);
	  }
})(jQuery);



jQuery(document).ready(function() {
    ChartsFlowchart.init();
});

google.charts.load('current', {packages: ['corechart', 'bar', 'line', 'orgchart', 'treemap', 'table', 'timeline', 'gauge','geochart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

	if ($("#google-pie-chart-1").length > 0){ 
		var data = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Dataset 1',     11],
			['Dataset 2',      4],
			['Dataset 3',  9],
			['Dataset 4', 5],
		]);
		var options = {
			title: 'Pie Chart Example',
			height:400,
			colors: ['#f55a18', '#0a96ee', '#c6059c', '#03cab7'],			legend: {
			    textStyle: { color: '#797979' },
			    //fontSize: 12,
			    //fontName: "'Quicksand', sans-serif",
			}
		};
		var chart = new google.visualization.PieChart(document.getElementById('google-pie-chart-1'));
		chart.draw(data, options);		$("#google-pie-chart-1").find('text:first()').css('font-size', "16px")
	}
	

}
'use strict';




(function($){
	var chartData = {
		labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"],
		datasets: [{
			type: 'bar',
			label: 'Number Of Test',
			backgroundColor: '#0a96ee',
			data: [
				"89", 
				"50", 
				"32", 
				"92", 
				"78", 
				"83", 
				"56",
			],
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
								ticks: {
								   beginAtZero: true,
									   fontSize: 12,
									   fontStyle: "bold",
									   fontFamily:"'Quicksand', sans-serif",
									   fontColor: '#797979',
							   }
						   }],
						   xAxes: [{
							   barThickness: 22,
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


