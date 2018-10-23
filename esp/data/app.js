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

});