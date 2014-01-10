'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 'Feed',  
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter, Feed) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	console.log("In Feed Edit Ctrl")
	$scope.save = function() {
		console.log("Save fcn");
		SingleFeed.$update($scope.singleFeed, function() {
			$location.path('index.html#/feeds/$routeParams.id');
			console.log("saved!");
		},
		function() {
			console.log("error");
		});
	};
	
	/*$scope.editFeed = function() {
		var updateFeed = $scope.singleFeed;
		var ef = new SingleFeed(updateFeed);
		  ef.$update(function() {
		  $scope.singleFeed.push(ef);
		  });
	};*/
  }
]);	  
	/*SingleFeed.$update($scope.singleFeed, function(data){
		$scope.singleFeed.push(data);
		console.log(data);
		console.log($scope.singleFeed);
	});
};*/
	

  
		

 