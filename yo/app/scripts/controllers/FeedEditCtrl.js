'use strict';

/* Edit Feed Controller */

mftApp.controller('FeedEditCtrl', ['$scope', '$rootScope', '$resource', 'SingleFeed', '$routeParams', '$route', '$location', '$filter', 'Event', 'SingleEvent', 
  function($scope, $rootScope, $resource, SingleFeed, $routeParams, $route, $location, $filter, Event, SingleEvent) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.singleFeed = SingleFeed.get({id: $routeParams.id});
	$scope.master = SingleFeed.get({id: $routeParams.id});
	
	//Update and Log Event
	$scope.log = function() {
		//Update DB with Changes
		SingleFeed.update({LAST_CHANGE_BY: $scope.user.email}, $scope.singleFeed, 
			function() {
				//$location.path('/feeds/' + $routeParams.id);
				$rootScope.editFeedSuccess = true;
				console.log("updated");
					//Post new data to Events Table
					SingleFeed.get({id: $routeParams.id}, function(results){
						$scope.eventData = {};
						$scope.eventData.InOut = results.TD_IN_OUT;
						console.log($scope.eventData);
						Event.post({DATA:results, id:$routeParams.id, USER_NAME:$scope.user.email}, 
							results, 
							function() {
								$route.reload();
								console.log("Logged!");
							},
							function() {
								console.log("error");
							});
					});									
			},
			function() {
				$scope.editFeedFailure = true;
				console.log("error");
			});
	};
	//Call log() after checking if it's the 1st change
	$scope.editFeedFailure = false;
	$scope.noChange = false;
	$scope.save = function() {
		//If No Changes, Don't submit the form
		if(angular.equals($scope.master, $scope.singleFeed)){
			$scope.noChange = true;
		}
		$scope.feedForm.$setPristine();
		angular.forEach(Object.keys($scope.singleFeed), function(key){
			if ($scope.singleFeed[key] == "") {
				$scope.singleFeed[key] = null;
			}
		});
		//Get Event By ID to see if there's been any changes made; if no changes, POST master to DB
		SingleEvent.get({id: $routeParams.id}, function(results) {
			if ($scope.feedForm.$valid && !angular.equals($scope.master, $scope.singleFeed)){
				if (results.results.length == 0) {
					Event.post({DATA:$scope.master, id:$routeParams.id, USER_NAME:$scope.user.email}, 
						$scope.master, 
						function() {
							console.log("1st Change!");
							$scope.log();
						},
						function() {
							console.log("error");
					});	
				}  //End 2nd if
				else {
					$scope.log();
				} //End else 
			} //End 1st if
		},
		function(){
			console.log("error");
		});
	};
  }
]);