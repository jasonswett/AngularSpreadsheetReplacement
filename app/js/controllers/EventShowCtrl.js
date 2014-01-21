'use strict';

/* Log Events Controller */

mftApp.controller('EventShowCtrl', ['$scope', '$resource', 'SingleEvent', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleEvent, $routeParams, $route, $location, $filter) {
	$scope.singleEvent = [];
	var eventData = array[][];
	$scope.oldEvent = [];
	$scope.newEvent = [];
	SingleEvent.get({id:$routeParams.id}, function(results){
		angular.forEach(results.results, function(value, key){
			value.DATA = angular.fromJson(value.DATA);
			$scope.singleEvent.push(value);
			$scope.eventData.push(value.DATA);
		});
		console.log($scope.eventData);
		//Compare Old and New Values
		for (var i = 1; i <= $scope.eventData.length; i++) {
			//console.log("1st For Loop");
			/*for (var j = 0; j < 66; j++) {
				if ($scope.eventData[i-1] != $scope.eventData[i]) {
					$scope.oldEvent.push($scope.eventData[i-1]);
					$scope.newEvent.push($scope.eventData[i]);
				}
			}*/
				
				
		
			
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