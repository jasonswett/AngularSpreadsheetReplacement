'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', function($scope, $location, $rootScope) {
	$rootScope.loggedIn = false;
	$scope.login = function() {
		if ( $scope.user.name == "Administrator" && $scope.user.password == "manage" ) { // test
			$rootScope.userName = $scope.user.name;
			$rootScope.loggedIn = true;
		    $location.path( "/" );
		} 
		else {
		    $scope.loginError = "Invalid user/pass.";
		}
	};
	
  });

