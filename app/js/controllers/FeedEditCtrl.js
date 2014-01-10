'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 'Feed',  
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter, Feed) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	
	$scope.save = function() {
		SingleFeed.update($scope.singleFeed, function() {
			console.log("saved!");
		},
		function() {
			console.log("error");
		});
	};
  }
]);	  

	

  
		

 