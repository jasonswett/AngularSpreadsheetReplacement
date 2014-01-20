'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', function($scope, $location, $rootScope) {
	$rootScope.loggedIn = false;
	$scope.loginAttempt = false;
	$scope.login = function() {
		if ( $scope.user.email == "ad" && $scope.user.password == "man" ) { // test
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

