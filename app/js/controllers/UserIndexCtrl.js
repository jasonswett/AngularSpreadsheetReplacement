'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', function($scope, $location, $rootScope) {
	$rootScope.user = {};
	$scope.loginAttempt = false;
	//Login Function
	$scope.login = function() {
		if ( $scope.user.email == "ad" && $scope.user.password == "man" ) { // test
			$rootScope.user = $scope.user;
			console.log($rootScope.user);
			$rootScope.user.loggedIn = true;
		    $location.path( "/" );
		} 
		else {
			$location.path("/login");
			$scope.loginAttempt = true;
		    $scope.loginError = "Invalid Email/Password";
			$rootScope.user.loggedIn = false;
		}
	};
	//Logout Function
	$scope.logout = function() {
		$rootScope.user = {};
	}
  });

