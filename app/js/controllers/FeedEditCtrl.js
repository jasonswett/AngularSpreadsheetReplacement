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
	
	$scope.feedAttr = [];
	$scope.changeEvent = function(changedAttr) {
		$scope.feedID = $("#" + changedAttr);
		$scope.feedAttr.push($scope.feedID[0].name);
		console.log($scope.feedAttr);
		//Each item in feedAttr must be unique
		for (var j = 1; j <= $scope.feedAttr.length; j++) {
			if ($scope.feedAttr.length > 1) {
				if ($scope.feedAttr[j-1] == $scope.feedAttr[j]) {
					$scope.feedAttr.splice(j, 1);
					console.log($scope.feedAttr);	
				}
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