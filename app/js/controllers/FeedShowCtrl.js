'use strict';

/* Show Single Feed Controller */

mftApp.controller('FeedShowCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	return $scope.singleFeed = SingleFeed.get({id: $routeParams.id});

  }
]);