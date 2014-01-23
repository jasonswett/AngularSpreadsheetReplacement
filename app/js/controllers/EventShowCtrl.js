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
		});
		//Don't include the last entry in the array b/c it's old data, but need it to compare to on the changeDetail page.
			for (var i = 0; i < $scope.singleEvent.length-1; i++) {
				$scope.eventData[i] = $scope.singleEvent[i];
	  		}	
		}, 
		function() {
			console.log("error");
		}
	);
  }
]);



 
