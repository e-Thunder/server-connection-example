var app = angular.module('esp', []);

app.controller('paramsDisplay', function($scope, $http, $interval){
	
	$scope.loadData = function(){
		$http.get("values.json").then(function(response) {
			$scope.myData = response.data;
		});
	}
	
	$scope.resetData = function(){
		$http.get("http://lukboz.cba.pl/esp/api/reset/").then(function(response) {
			$scope.loadData();
		}, function(response){
			$scope.myData = "Cannot reset data";
		});
	}
				
	$interval(function(){
		$scope.loadData();
	}, 1000);
	
});