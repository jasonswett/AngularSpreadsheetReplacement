'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 'Event',  
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter, Event) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	var master = SingleFeed.get({id: $routeParams.id});
	
	/*$scope.$watchCollection('singleFeed', function(newSingleFeed, oldSingleFeed) {
	  console.log("New:" + newSingleFeed);
	  console.log("Old:" + oldSingleFeed);
	});*/
	
	//Save Edits; PUT to DB
	$scope.save = function() {
		SingleFeed.update($scope.singleFeed, function() {
			$location.path('/feeds/' + $routeParams.id);
			console.log("Feed Updated!");
		},
		function() {
			console.log("error");
		});
	};
	
	//Log Data for Auditing
	$scope.log = function() {
		Event.post({DATA:$scope.singleFeed, id:$routeParams.id}, 
		$scope.singleFeed, 
		function() {
			console.log("Logged!");
		},
		function() {
			console.log("error");
		});
	};
	
	  // Here you have access to the inputs' `$pristine` property
	  console.log($scope.singlFeed.$pristine);
	  console.log($scope.singlFeed.TD_IN_OUT.$pristine);
	  console.log($scope.singlFeed.TD_INTERF_TYPE.$pristine);
	  console.log($scope.singlFeed.INTERFACE_NAME.$pristine);
	  console.log($scope.singlFeed.IS_WM_INTERFACE.$pristine);
	
	//Disable Save button unless change has been made to the form
	$scope.isSaveDisabled = function() {
	    return angular.equals(master, $scope.singleFeed);
	};
  }
]);	  