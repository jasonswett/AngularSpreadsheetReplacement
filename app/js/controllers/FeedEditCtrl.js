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
		SingleFeed.update($scope.singleFeed, function(data) {
			$location.path('/feeds/{{$routeParams.id}}');
			$scope.items = data;
			console.log("$scope.items" + $scope.items);
			console.log("saved!");
		},
		function() {
			console.log("error");
		});
	};
  }
]);	  

	

  
		

 