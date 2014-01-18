'use strict';

/* Log Events Controller */

mftApp.controller('EventCtrl', ['$scope', '$resource', 'Event', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, Event, $routeParams, $route, $location, $filter) {
	$scope.eventList = [];
	Event.query(function(results){
		angular.forEach(results.results, function(value, key){
			value.DATA = angular.fromJson(value.DATA);
			$scope.eventList.push(value);
			
		} 
		);
		console.log($scope.eventList);
		console.log(results.results[0]);
	}
	);
	//$scope.eventList = angular.fromJson($scope.events);
	
	//Save New Feed Attributes; POST to DB
	/*$scope.log = function() {
		Event.post({DATA:$scope.singleFeed}, 
		$scope.singleFeed, 
		function() {
			console.log("Logged!");
		},
		function() {
			console.log("error");
		});
	};*/
	
	}
]);