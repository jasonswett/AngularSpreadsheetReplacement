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
	
	/*$scope.feedAttr = [];
	$scope.logAttr = [];
	$scope.changeEvent = function(changedAttr) {
		$scope.feedID = $("#" + changedAttr);
		$scope.feedAttr.push($scope.feedID[0].name);
		console.log($scope.feedAttr);
		//Each item in feedAttr must be unique
		for (var j = 1; j <= $scope.feedAttr.length; j++) {
			if ($scope.feedAttr.length > 1) {
				$scope.logAttr = $scope.feedAttr.sort();
				if ($scope.logAttr[j-1] == $scope.logAttr[j]) {
					$scope.logAttr.splice(j, 1);
					console.log($scope.feedAttr);
					console.log($scope.logAttr);	
				}
			}
		}
	};*/
	
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
	
	//Disable Save button unless change has been made to the form
	$scope.isSaveDisabled = function() {
	    return angular.equals($scope.master, $scope.singleFeed);
	};
  }
]);	  