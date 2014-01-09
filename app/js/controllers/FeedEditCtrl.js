'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, SingleFeed, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	return $scope.singleFeed = SingleFeed.get({id: $routeParams.id});

	$scope.editFeed = function() {
		SingleFeed.update($scope.singleFeed, function(data){
			$scope.singleFeed.push(data);
		});
	};
  }
]);	  
	/*var updateFeed = {};
	  var nf = new SingleFeed(updateFeed);
		nf.$update(function() {
			$scope.singleFeed.push(nf);
		  });
		};*/
	

  
	

 