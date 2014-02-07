'use strict';

/* Log Events Controller */

mftApp.controller('EventShowCtrl', ['$scope', '$resource', 'SingleEvent', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleEvent, $routeParams, $route, $location, $filter) {
	$scope.params = $routeParams;
	$scope.singleEvent = [];
	$scope.eventData = [];
	$scope.oldEvent = [];
	$scope.newEvent = [];
	SingleEvent.get({id:$routeParams.id}, function(results){
		angular.forEach(results.results, function(value, key){
			value.DATA = angular.fromJson(value.DATA);
			$scope.singleEvent.push(value);
		});
		//Don't include the first entry in the array b/c it's old data, but need it to compare to on the changeDetail page.
			for (var i = 1; i < $scope.singleEvent.length; i++) {
				$scope.eventData[i-1] = $scope.singleEvent[i];
	  		}
			$scope.lastEvent = $scope.eventData[results.results.length - 2];
		}, 
		function() {
			console.log("error");
		}
	);
	
	$scope.sortOrder = '-CREATED_AT';
	$scope.reverse = false;
	//Order the Feeds by each column
	$scope.sort = function(newSortOrder) {
		$scope.sortOrder = newSortOrder;
	  if ($scope.sortOrder == newSortOrder) {
	    $scope.reverse = !$scope.reverse;
	    $scope.sortOrder = newSortOrder;
	        // icon reset
			$('th i').each(function(){
			        // icon reset
			        $(this).removeClass().addClass('icon-chevron-down icon-white');
			});
			if ($scope.reverse) {
	        	$('th.' + newSortOrder + '.sortable i').removeClass().addClass('icon-chevron-up icon-white');
			}
	        else {
				$scope.sortOrder = ('-' + newSortOrder);
	            $('th.' + newSortOrder + '.sortable i').removeClass().addClass('icon-chevron-down icon-white');
			}
	  } 
	};
	
  }
]);



 
