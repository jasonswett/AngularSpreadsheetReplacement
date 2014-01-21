'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', function($scope, $location, $rootScope, $cookies, $cookieStore) {
	$rootScope.user = {};
	$scope.loginAttempt = false;
	$rootScope.user.loggedIn = false;
	$scope.loggedIn = false;
	$cookies.loggedIn = $scope.loggedIn;
	console.log($rootScope.user);
	console.log("scope" + $scope.loggedIn);
	//Login Function
	$scope.login = function() {
		if ( $scope.user.email == "ad" && $scope.user.password == "man" ) { // test
			$rootScope.user = $scope.user;
			$rootScope.user.loggedIn = true;
			$scope.loggedIn = true;
			$cookies.loggedIn = $scope.loggedIn;
			var loggedInCookie = $cookies.loggedIn;
			console.log(loggedInCookie);
			console.log($rootScope.user);
			console.log("scope" + $scope.loggedIn);	
		} 
		else {
			$scope.loginAttempt = true;
		    $scope.loginError = "Invalid Email/Password";
			$rootScope.user.loggedIn = false;
			$scope.loggedIn = false;
			$cookies.loggedIn = $scope.loggedIn;
			console.log($rootScope.user);
			console.log("scope" + $scope.loggedIn);
		}
	};
	//Logout Function
	$scope.logout = function() {
		$rootScope.user = {};
		$rootScope.user.loggedIn = false;
		$scope.loggedIn = false;
		$cookies.loggedIn = $scope.loggedIn;
		console.log($rootScope.user);
		console.log("scope" + $scope.loggedIn);
	}
  });

