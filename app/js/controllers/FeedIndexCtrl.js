'use strict';

/* Query For Feeds Controller */

mftApp.controller('FeedIndexCtrl', ['$scope', '$resource', 'Feed', '$routeParams', '$route', '$location', '$filter',  
  function($scope, $resource, Feed, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.feedList = [];

	Feed.query(function(res) {
		$scope.keepGoing = false;
		var listOfFeeds = [];
		
		//Initialize 1st x amount of rows of feedList 
		var init = 35;
		for (var i = 0; i < init; i++) {
			res.results[i].ID = parseInt( res.results[i].ID );
		    listOfFeeds[i] = res.results[i];
		  }
		$scope.feedList = listOfFeeds;
		
		//On Scroll, Load the next 50 feeds until list is done
		var inc = 50
		//Incrementing by 50 will hit max number of list exactly with $scope.keepGoing and else logic
		var i = init + inc
		$scope.loadMore = function() {
		  		for (var j = i - inc; j < i; j++) {
					//Stop Infinite Scroll At End Of List
					if (j >= res.results.length) {
						$scope.keepGoing = true;
						break;
					}
					else {
					res.results[j].ID = parseInt( res.results[j].ID );
		    		listOfFeeds.push(res.results[j]);
					}
		  		}
				console.log("feedList:" + $scope.feedList.length);
				$scope.feedList = listOfFeeds;
				i+=inc;
		};	
	},
	function() {
		console.log("error");
	});
	
	//Default Order the feeds by lastActive
	var sortOrder = 'ID';
	$scope.sortOrder = sortOrder;
	$scope.reverse = true;
	
	//Order the Feeds by each column
	$scope.sort = function(newSortOrder) {
	  if ($scope.sortOrder == newSortOrder) {
	    $scope.reverse = !$scope.reverse;
	    $scope.sortOrder = newSortOrder;
            // icon reset
			if ($scope.reverse) {
            	$("th i").removeClass('icon-chevron-down').addClass('icon-chevron-up');
			}
	           // $('th.'+newSortOrder+'i').removeClass().addClass('icon-chevron-up icon-white');
	        else {
	            $("th i").removeClass('icon-chevron-up').addClass('icon-chevron-down');
			}
	  } 
    };
  }
]);

