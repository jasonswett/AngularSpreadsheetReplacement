'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 'Event',  
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter, Event) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	$scope.master = SingleFeed.get({id: $routeParams.id});
	
	/*$scope.$watchCollection('singleFeed', function(newSingleFeed, oldSingleFeed) {
	  console.log(newSingleFeed);
	  console.log(oldSingleFeed);
	});*/
	
	$scope.logAttr = [];
	$scope.changeEvent = function(changedAttr) {
		$scope.feedAttr = $("#" + changedAttr);
		console.log($scope.feedAttr);
		console.log($scope.feedAttr[0]);
		console.log($scope.feedAttr[0].name);
		$scope.logAttr[0] = $scope.feedAttr[0].name;
		console.log($scope.logAttr);
		//Each item in logAttr must be unique
		for (var i = 0; i < $scope.logAttr.length; i++) {
			if ($scope.logAttr[i] != $scope.feedAttr[0].name) {
				//$scope.logAttr[i+1] = $scope.feedAttr[0].name;
				console.log($scope.logAttr);
			}
  		}
		

	};
	
	//Save Edits; PUT to DB
	$scope.editFeedSuccess = false;
	$scope.editFeedFailure = false;
	$scope.save = function() {
		SingleFeed.update($scope.singleFeed, function() {
			$location.path('/feeds/' + $routeParams.id);
			$scope.editFeedSuccess = true;
			console.log($scope.editFeedSuccess);
		},
		function() {
			$scope.editFeedFailure = true;
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
	
	  //console.log($scope.feedForm);
	  
	  //console.log($scope.singlFeed.TD_INTERF_TYPE.$pristine);
	  //console.log($scope.singlFeed.INTERFACE_NAME.$pristine);
	  //console.log($scope.singlFeed.IS_WM_INTERFACE.$pristine);
	
	//Disable Save button unless change has been made to the form
	$scope.isSaveDisabled = function() {
	    return angular.equals($scope.master, $scope.singleFeed);
	};
  }
]);	  