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
						Event.post({DATA:results, id:$routeParams.id}, 
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
					Event.post({DATA:$scope.master, id:$routeParams.id}, 
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



/*  


//Log Data for Auditing
$scope.log = function() {
	angular.forEach(Object.keys($scope.singleFeed), function(key){
		if ($scope.singleFeed[key] == "") {
			$scope.singleFeed[key] = null;
		}
	});
	//Get Event By ID to see if there's been any changes made; if no changes, POST master to DB
	SingleEvent.get({id: $routeParams.id}, function(results) {
		if ($scope.feedForm.$valid && !angular.equals($scope.master, $scope.singleFeed)){	
			if (results.results.length == 0) {
				Event.post({DATA:$scope.master, id:$routeParams.id}, 
					$scope.master, 
					function() {
						console.log("1st Change!");
					},
					function() {
						console.log("error");
				});	
			}
		}
	},
	function(){
		console.log("error");
	});
};

//Save Edits; PUT to DB
//$rootScope.editFeedSuccess = false;
$scope.editFeedFailure = false;
$scope.noChange = false;
$scope.save = function() {
	$scope.feedForm.$setPristine();
	angular.forEach(Object.keys($scope.singleFeed), function(key){
		if ($scope.singleFeed[key] == "") {
			$scope.singleFeed[key] = null;
		}
	});
	if($scope.feedForm.$valid && !angular.equals($scope.master, $scope.singleFeed)){
		//Update DB with Changes
		SingleFeed.update({LAST_CHANGE_BY: $scope.user.email}, $scope.singleFeed, 
			function() {
				$route.reload();
				//$location.path('/feeds/' + $routeParams.id);
				$rootScope.editFeedSuccess = true;
				console.log("updated");
				//Post new data to Events Table
				SingleFeed.get({id: $routeParams.id}, function(results){
					Event.post({DATA:results, id:$routeParams.id}, 
						results, 
						function() {
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
			
	}
	//If No Changes, Don't submit the form
	if(angular.equals($scope.master, $scope.singleFeed)){
		$scope.noChange = true;
	}
};



*/