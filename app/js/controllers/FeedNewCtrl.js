'use strict';

/* Show Single Feed Controller */

mftApp.controller('FeedNewCtrl', ['$scope', '$rootScope', '$resource', 'SingleFeed', 'Feed', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $rootScope, $resource, SingleFeed, Feed, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.singleFeed = {};
	$scope.newFeedFailure = false;
	$scope.noChange = false;
	$scope.save = function() {
		angular.forEach(Object.keys($scope.singleFeed), function(key){
			if ($scope.singleFeed[key] == "") {
				$scope.newFeedForm.$setPristine();
				$scope.singleFeed = {};
				$scope.noChange = true;
			}
		});
		
		if ($scope.newFeedForm.$dirty && $scope.newFeedForm.$valid) {
		SingleFeed.post($scope.singleFeed, 
		function() {
			$route.reload();
			$scope.newFeedForm.$setPristine();
			$rootScope.newFeedSuccess = true;
			Feed.query(function(res){
				//Convert ID to an int
				for (var i = 0; i < res.results.length; i++) {
					res.results[i].ID = parseInt(res.results[i].ID);
				}
				res.results.sort('ID');
				$rootScope.lastID = res.results[res.results.length - 1].ID;	
			});
			console.log("Saved!");
		},
		function() {
			$scope.newFeedFailure = true;
			console.log("error");
		});
		}
		else {
			$scope.noChange = true;
		}
	};

  }
]);