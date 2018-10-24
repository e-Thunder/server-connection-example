var app = angular.module('esp', []);

app.controller('paramsDisplay', function($scope, $http, $interval){
	
	$scope.loadData = function(){
		$http({
            url: "http://lukboz.cba.pl/esp/api/get/",
            method: "GET",
            params: {date: new Date().getTime()}
        }).then(function(response) {
			$scope.myData = response.data;
		}, function(response){
            console.log("Failure on loading data");
		});
	}
	
	$scope.resetData = function(){
		$http.post("http://lukboz.cba.pl/esp/api/delete/", {date: new Date().getTime()}).then(function(response) {
			$scope.loadData();
		}, function(response){
			 console.log("Failure on resetting data");
		});
	}

	$interval(function () {
		$scope.loadData();
	}, 1000);

	
	// Not working due to wrong param1 - TODO

	// Plotly.plot('scatter', [{
	// 	x: $scope.myData.param1,
	// 	y: $scope.myData.param2,
	// 	mode: 'markers',
	// 	type: 'scatter'
	//   }]);
	//   var interval = setInterval(function() {

	// 	Plotly.extendTraces('scatter', {
	// 	    x: [$scope.myData.param1],
	// 	    y: [$scope.myData.param2]
	// 	}, [0])
	  
	// 	if (cnt === 100) clearInterval(interval);
	//   }, 300);

});