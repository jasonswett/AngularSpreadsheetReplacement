'use strict';

/* Show Single Feed Controller */

mftApp.controller('FeedNewCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.save = function() {
		SingleFeed.post($scope.singleFeed, 
		function() {
			$route.reload();
			//$scope.postCommentSuccess = true;
			console.log("Saved!");
		},
		function() {
			//$scope.postCommentFailure = true;
			console.log("error");
		});
	};

  }
]);