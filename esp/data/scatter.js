// anonymous function creating plot
(function(){
	var layout = {
		title: 'Temperature sensor',
		xaxis: {
			title: 'timestamp',
			titlefont: {
				size: 14
			}
		},
		yaxis: {
			title: 'temperature [°C]',
			titlefont: {
				size: 14
			}
		}
	}
	Plotly.plot('scatter', [{
		y: [],
		mode: 'lines',
		line: { color: '#80CAF6' }
	}], layout);
})();

function updatePlot(dataArray){
	Plotly.extendTraces('scatter', {
		y: [dataArray]
	}, [0]);
}

function clearPlot(){
	Plotly.newPlot('scatter', [{
		y: [],
		mode: 'lines',
		line: { color: '#80CAF6' }
	}]);
}