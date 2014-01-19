'use strict';

/* Log Events Controller */

mftApp.controller('EventShowCtrl', ['$scope', '$resource', 'SingleEvent', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleEvent, $routeParams, $route, $location, $filter) {
	$scope.singleEvent = [];
	$scope.singleAttribute = [];
	SingleEvent.get({id:$routeParams.id}, function(results){
		angular.forEach(results.results, function(value, key){
			value.DATA = angular.fromJson(value.DATA);
			$scope.singleEvent.push(value);
		});
		console.log(results);
		//Compare Old and New Values
		for (var i = 1; i < $scope.singleEvent.length; i++) {
			console.log("In For Loop");
			angular.forEach(results.results.DATA, function(value,key) {
				console.log(value);
				if (value[i-1] != value[i]) {
					$scope.singleAttribute.push(value)
				}
			});
		}
		console.log($scope.singleAttribute);
		}, 
		function() {
			console.log("error");
		}
	);
  }
]);