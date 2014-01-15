'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 'Feed',  
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter, Feed) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	
	$scope.$watchCollection('singleFeed', function(newSingleFeed, oldSingleFeed) {
	  console.log("New:" + newSingleFeed);
	  console.log("Old:" + oldSingleFeed);
	});
	
	//Save Edits; PUT to DB
	$scope.save = function() {
		SingleFeed.update($scope.singleFeed, function() {
			$location.path('/feeds/' + $routeParams.id);
			console.log("saved!");
		},
		function() {
			console.log("error");
		});
	};
  }
]);	  
 