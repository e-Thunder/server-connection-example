var app = angular.module('esp', []);

app.controller('paramsDisplay', function($scope, $http, $interval){
	
	$scope.loadData = function(){
		$http({
            url: "values.json",
            method: "GET",
            params: {date: new Date().getTime()}
        }).then(function(response) {
			$scope.myData = response.data;
		});
	}
	
	$scope.resetData = function(){
		$http.post("http://lukboz.cba.pl/esp/api/reset/", {date: new Date().getTime()}).then(function(response) {
			$scope.loadData();
		}, function(response){
			$scope.myData = "Cannot reset data";
		});
	}
				
	$interval(function(){
		$scope.loadData();
	}, 1000);
	
});