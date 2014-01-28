'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$rootScope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 'Event', 'SingleEvent', 
  function($scope, $rootScope, $resource, SingleFeed, $routeParams, $route, $location, $filter, Event, SingleEvent) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	$scope.master = SingleFeed.get({id: $routeParams.id});
	
	//Save Edits; PUT to DB
	//$rootScope.editFeedSuccess = false;
	$scope.editFeedFailure = false;
	$scope.noChange = false;
	$scope.save = function() {
		$scope.feedForm.$setPristine();
		angular.forEach(Object.keys($scope.singleFeed), function(key){
			if ($scope.singleFeed[key] == "") {
				$scope.singleFeed[key] = null;
			}
		});
		if($scope.feedForm.$valid && !angular.equals($scope.master, $scope.singleFeed)){
			//Post new data to Events Table
			Event.post({DATA:$scope.singleFeed, id:$routeParams.id}, 
			$scope.singleFeed, 
			function() {
				console.log("Logged!");
			},
			function() {
				console.log("error");
			});
			
		//Update DB with Changes
		SingleFeed.update($scope.singleFeed, function() {
			$route.reload();
			//$location.path('/feeds/' + $routeParams.id);
			$rootScope.editFeedSuccess = true;
			console.log("updated");
		},
		function() {
			$scope.editFeedFailure = true;
			console.log("error");
		});
		}
		if(angular.equals($scope.master, $scope.singleFeed)){
			$scope.noChange = true;
		}
	};

	//Log Data for Auditing
	$scope.log = function() {
		angular.forEach(Object.keys($scope.singleFeed), function(key){
			if ($scope.singleFeed[key] == "") {
				$scope.singleFeed[key] = null;
			}
		});
		
		//Get Event By ID to see if there's been any changes made; if no changes, POST master to DB
		SingleEvent.get({id: $routeParams.id}, function(results) {
			if (results.results.length == 0) {
				if ($scope.feedForm.$valid && !angular.equals($scope.master, $scope.singleFeed)){
				Event.post({DATA:$scope.master, id:$routeParams.id}, 
				$scope.master, 
				function() {
					console.log("1st Change!");
				},
				function() {
					console.log("error");
				});	
				}
			}
		},
		function(){
			console.log("error");
		});
	};

  }
]);	  