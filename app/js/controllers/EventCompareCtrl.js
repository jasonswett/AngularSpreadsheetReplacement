'use strict';

/* Log Events Controller */

mftApp.controller('EventCompareCtrl', ['$scope', '$resource', 'SingleEvent', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleEvent, $routeParams, $route, $location, $filter) {
	$scope.params = $routeParams;
	$scope.singleEvent = [];
	SingleEvent.get({id:$routeParams.id}, function(results){
		angular.forEach(results.results, function(value, key){
			value.DATA = angular.fromJson(value.DATA);
			$scope.singleEvent.push(value);
		});
		//Sort Event Array By Time 
		$scope.singleEvent.sort(function(a,b){
		  a = new Date(a.UPDATED_AT);
		  b = new Date(b.UPDATED_AT);
		  return a<b?1:a>b?-1:0;
		});
		//Sort Events into new and Old Event to compare values
		$scope.number = parseInt($routeParams.index);
		var newEvent = $scope.singleEvent[$routeParams.index].DATA;
		var oldEvent = $scope.singleEvent[$scope.number + 1].DATA;
		console.log(newEvent);
		console.log(oldEvent);
		
		$scope.differences = [];
		$scope.values = [];
		//Get Keys That Are Different
		angular.forEach(Object.keys(newEvent), function(key){
			if (newEvent[key] != oldEvent[key]) {
				$scope.differences.push({attribute:key, newValue:newEvent[key], oldValue:oldEvent[key]});
			}
		});
		console.log($scope.differences);
		}, 
		function() {
			console.log("error");
		}
	);
	
  }
]);

/*var keysThatAreDifferent = function(newEvent, oldEvent) {
	var differences = [];
	angular.forEach(Object.keys(newEvent), function(key){
		if (newEvent[key] != oldEvent[key]) {
			differences.push(key);
		}
	});
	return differences;
};

var oldAndNewValue = function(newEvent, oldEvent) {
	var values = [];
	angular.forEach(Object.keys(newEvent), function(key){
		if (newEvent[key] != oldEvent[key]) {
			values.push({newValue:newEvent[key], oldValue:oldEvent[key]});
		}
	});
	return values;
};*/


