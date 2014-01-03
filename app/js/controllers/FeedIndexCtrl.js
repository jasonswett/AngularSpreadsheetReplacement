'use strict';

/* Query For Feeds Controller */

mftApp.controller('FeedIndexCtrl', ['$scope', '$resource', 'Feed', '$routeParams', '$route', '$location', '$filter', 'findJSON', 
  function($scope, $resource, Feed, $routeParams, $route, $location, $filter, findJSON) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.feedList = Feed.query();
	$scope.feedList1 = angular.toJson($scope.feedList);
	console.log($scope.feedList);
	console.log($scope.feedList1);
	console.log(typeof($scope.feedList1));
	console.log(typeof($scope.feedList));
	
	//Ajax Call
	$scope.jsonString = findJSON;
	console.log($scope.jsonString);
	
	//Default Order the feeds by lastActive
	var sortOrder = 'lastActive';
	$scope.sortOrder = sortOrder;
	$scope.reverse = false;
	
	//Order the Feeds by each column
	$scope.sort = function(newSortOrder) {
	  if ($scope.sortOrder == newSortOrder)
	    $scope.reverse = !$scope.reverse;
	    $scope.sortOrder = newSortOrder;

	//Change arrow direction
        $('th i').each(function(){
            // icon reset
			if ($scope.reverse)
            	$(this).removeClass().addClass('icon-chevron-up icon-white');
			
	           // $('th.'+newSortOrder+'i').removeClass().addClass('icon-chevron-up icon-white');
	        else
	            $(this).removeClass().addClass('icon-chevron-down icon-white');
			
       }); 
    };
  }
]);

