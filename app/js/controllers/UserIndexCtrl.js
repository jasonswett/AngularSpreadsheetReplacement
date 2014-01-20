'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', function($scope, $location, $rootScope) {
	$rootScope.user = {};
	$scope.loginAttempt = false;
	$rootScope.user.loggedIn = false;
	//Login Function
	$scope.login = function() {
		if ( $scope.user.email == "ad" && $scope.user.password == "man" ) { // test
			$rootScope.user = $scope.user;
			$rootScope.user.loggedIn = true;
		    $location.path( "/" );
			console.log($rootScope.user);
		} 
		else {
			$location.path("/login");
			$scope.loginAttempt = true;
		    $scope.loginError = "Invalid Email/Password";
			$rootScope.user.loggedIn = false;
			console.log($rootScope.user);
		}
	};
	//Logout Function
	$scope.logout = function() {
		$rootScope.user = {};
		$rootScope.user.loggedIn = false;
		console.log($rootScope.user);
	}
  });

