'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 'Feed',  
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter, Feed) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	return $scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	$scope.feed = $scope.singleFeed;
	
	$scope.editFeed = function() {
		var updateFeed = $scope.singleFeed;
		var ef = new SingleFeed(updateFeed);
		  ef.$update(function() {
		  $scope.singleFeed.push(ef);
		  });
	};
  }
]);	  
	/*SingleFeed.$update($scope.singleFeed, function(data){
		$scope.singleFeed.push(data);
		console.log(data);
		console.log($scope.singleFeed);
	});
};*/
	

  
		

 