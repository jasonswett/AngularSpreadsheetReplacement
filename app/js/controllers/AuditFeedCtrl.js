'use strict';

/* Enable Audit Trail On Feeds Controller */

mftApp.controller('AuditFeedCtrl', ['$scope', '$resource', 'AuditFeed', '$routeParams', '$route', '$location', '$filter', 'SingleFeed', 
  function($scope, $resource, AuditFeed, $routeParams, $route, $location, $filter, SingleFeed) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;     
	$scope.auditFeed = AuditFeed.get({id: $routeParams.id});
	$scope.singleFeed = SingleFeed.get({id: $routeParams.id});

	//Add Old Data To DB; POST to DB
	$scope.audit = function() {
		AuditFeed.post({id:$routeParams.id}, 
		$scope.singleFeed, 
		function() {
			console.log("saved!");
		},
		function() {
			console.log("error");
		});
	};

  }
]);