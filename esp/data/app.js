var app = angular.module('esp', []);

app.controller('paramsDisplay', function($scope, $http, $interval){
	$scope.lastDataLength = 0;
	
	$scope.loadData = function(){
		$http({
			url: "http://lukboz.cba.pl/esp/api/get/",
			method: "GET",
			params: {date: new Date().getTime()}
		}).then(function(response){
			
			$scope.myData = response.data;
			$scope.managePlotUpdate();
			
		}, function(response){
			console.log("Failure on loading data");
		});
	}
	
	$scope.managePlotUpdate = function(){
		if($scope.lastDataLength != $scope.myData.length){
			let arr = [];
			for(let i = $scope.lastDataLength; i < $scope.myData.length; i++){
				arr.push($scope.myData[i].param1);
			}
			updatePlot(arr);
			$scope.lastDataLength = $scope.myData.length;
		}
	}
	
	$scope.resetData = function(){
		$http.post("http://lukboz.cba.pl/esp/api/delete/", {date: new Date().getTime()}).then(function(response) {
			$scope.lastDataLength = 0;
			$scope.loadData();
			clearPlot();
		}, function(response){
			 console.log("Failure on resetting data");
		});
	}

	$interval(function () {
		$scope.loadData();
	}, 1000);

});