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
			//$scope.eventData.push(value.DATA);
		});
		//Compare Old and New Values
		for (var i = 0; i < $scope.eventData.length; i++) {
			console.log("1st For Loop");
			$scope.eventData[i] = [];
			$scope.eventData[i] = $scope.singleEvent[i].DATA;
			/*for (var j = 0; j < 66; j++) {
				if ($scope.eventData[i-1] != $scope.eventData[i]) {
					$scope.oldEvent.push($scope.eventData[i-1]);
					$scope.newEvent.push($scope.eventData[i]);
				}
			}*/	
		}
		console.log($scope.singleEvent);
		console.log($scope.eventData);
		console.log($scope.eventData[0]);
		console.log($scope.eventData[0][1]);
	
		console.log($scope.oldEvent);
		console.log($scope.newEvent);
		}, 
		function() {
			console.log("error");
		}
	);
  }
]);