// anonymous function creating plot
(function(){
	Plotly.plot('scatter', [{
		y: [],
		mode: 'lines',
		line: { color: '#80CAF6' }
	}]);
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