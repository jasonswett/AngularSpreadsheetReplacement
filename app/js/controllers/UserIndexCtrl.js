'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', function($scope, $location, $rootScope) {
	$rootScope.loggedIn = false;
	$scope.loginAttempt = false;
	$scope.login = function() {
		if ( $scope.user.email == "administrator@disney.com" && $scope.user.password == "manage" ) { // test
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

