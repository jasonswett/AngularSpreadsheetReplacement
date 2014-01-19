'use strict';

/* Log Events Controller */

mftApp.controller('EventShowCtrl', ['$scope', '$resource', 'SingleEvent', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleEvent, $routeParams, $route, $location, $filter) {
	$scope.singleEvent = [];
	$scope.eventData = [];
	$scope.oldEvent = [];
	$scope.newEvent = [];
	SingleEvent.get({id:$routeParams.id}, function(results){
		angular.forEach(results.results, function(value, key){
			value.DATA = angular.fromJson(value.DATA);
			$scope.singleEvent.push(value);
			$scope.eventData.push(value.DATA);
		});
		console.log(results.results);
		//Compare Old and New Values
		for (var i = 1; i <= $scope.singleEvent.length; i++) {
			console.log("1st For Loop");
			console.log($scope.eventData);
			for (var j = 1; j <= eventData.length; j++) {
				console.log("1st For Loop");
				if ($scope.singleEvent[i-1].DATA[j-1] != $scope.singleEvent[i].DATA[j]) {
					$scope.oldEvent.push($scope.singleEvent[i-1].DATA[j-1]);
					$scope.newEvent.push($scope.singleEvent[i].DATA[j]);
				}
			}
		}
		console.log($scope.oldEvent);
		console.log($scope.newEvent);
		}, 
		function() {
			console.log("error");
		}
	);
  }
]);