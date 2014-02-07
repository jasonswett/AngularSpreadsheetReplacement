'use strict';

/* Query For Feeds Controller */

mftApp.controller('FeedIndexCtrl', ['$scope', '$resource', 'Feed', 'UserAuth', '$routeParams', '$route', '$location', '$filter', '$rootScope', '$cookieStore',  
  function($scope, $resource, Feed, UserAuth, $routeParams, $route, $location, $filter, $rootScope, $cookieStore) {
	UserAuth.getCredentials();
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.feedList = [];

	Feed.query(function(res) {
		$scope.keepGoing = false;
		var listOfFeeds = [];
		//Convert ID to an int
		for (var i = 0; i < res.results.length; i++) {
			res.results[i].ID = parseInt(res.results[i].ID);
		}
		//Initialize 1st x amount of rows of feedList
		var init = 35;
		for (var i = 0; i < init; i++) {
		    listOfFeeds[i] = res.results[i];
			$scope.feedList[i] = listOfFeeds[i];
		 }
		//On Scroll, Load the next 50 feeds until list is done
		var inc = 50
		//hit max number of list exactly with $scope.keepGoing and else logic
		var i = init + inc
		$scope.loadMore = function() {
		  		for (var j = i - inc; j < i; j++) {
					//Stop Infinite Scroll At End Of List
					if (j >= res.results.length) {
						$scope.keepGoing = true;
						break;
					}
					else {
		    		listOfFeeds.push(res.results[j]);
					}
		  		}
				$scope.feedList = listOfFeeds;
				i+=inc;
		};
		//If User searches, search entire list of feeds	and break infinite scroll	
		$scope.filter = function() {
			$scope.feedList = res.results;
			$scope.keepGoing = true;
		};
		//var sortOrder = 'ID';
		$scope.sortOrder = '-IS_ACTIVE';
		$scope.reverse = false;
		//Order the Feeds by each column
		$scope.sort = function(newSortOrder) {
			$scope.feedList = res.results;
			$scope.keepGoing = true;
			$scope.sortOrder = newSortOrder;
		  if ($scope.sortOrder == newSortOrder) {
		    $scope.reverse = !$scope.reverse;
		    $scope.sortOrder = newSortOrder;
		        // icon reset
				$('th i').each(function(){
				        // icon reset
				        $(this).removeClass().addClass('icon-chevron-down icon-white');
				});
				if ($scope.reverse) {
		        	$('th.' + newSortOrder + '.sortable i').removeClass().addClass('icon-chevron-up icon-white');
				}
		        else {
					$scope.sortOrder = ('-' + newSortOrder);
		            $('th.' + newSortOrder + '.sortable i').removeClass().addClass('icon-chevron-down icon-white');
				}
		  } 
		};
	},
	function() {
		console.log("error");
	});
  }
]);