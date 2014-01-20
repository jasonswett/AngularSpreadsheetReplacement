'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', function($scope, $location, $rootScope) {
	$rootScope.loggedIn = false;
	$scope.loginAttempt = false;
	$rootScope.user.email = $scope.user.email;
	$rootScope.user.password = $scope.user.password;
	$scope.login = function() {
		if ( $rootScope.user.email == "ad" && $rootScope.user.password == "man" ) { // test
			$rootScope.userName = $scope.user.email;
			$rootScope.loggedIn = true;
		    $location.path( "/" );
		} 
		else {
			$location.path("/login");
			$scope.loginAttempt = true;
		    $scope.loginError = "Invalid Email/Password";
		}
	};
  });

