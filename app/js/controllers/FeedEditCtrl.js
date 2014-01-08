'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	return $scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	/*	$scope.editFeed = function() {
			$scope.feedList.push({interface:$scope.feed.interface});
			alert($scope.feed.interface)
			$scope.feedList = Feed.$save();
		};*/

		$scope.editFeed = function() {
		  //$scope.Services.$save();
		  //$location.path('index.html#/feeds/$routeParams.id/$routeParams.status/$routeParams.interface'); //{{feed.id}}/{{feed.status}}/{{feed.interface}}');
		  var updateFeed = {status: $scope.feed.status, interface: $scope.feed.interface};
		  var nf = new Feed(updateFeed);
		  nf.$update(function() {
			$scope.feedList.push(nf);
		  });
		};
	

  }
]);




	

 