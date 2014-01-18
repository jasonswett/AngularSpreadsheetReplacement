'use strict';

/* Log Events Controller */

mftApp.controller('EventCtrl', ['$scope', '$resource', 'Event', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, Event, $routeParams, $route, $location, $filter) {
	$scope.eventList = Event.query(function(results){
		angular.forEach(results.results[0], function(value, key){
			console.log(value.DATA);
		} 
		);
		console.log(results);
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