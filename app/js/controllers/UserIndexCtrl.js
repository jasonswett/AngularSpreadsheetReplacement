'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', function($scope, $location, $rootScope, $cookies, $cookieStore) {
	$rootScope.user = {};
	$scope.loginAttempt = false;
	$rootScope.user.loggedIn = false;
	$scope.loggedIn = false;
	//Login Function
	$scope.login = function() {
		if ( $scope.user.email == "ad" && $scope.user.password == "man" ) { // test
			$rootScope.user = $scope.user;
			$rootScope.user.loggedIn = true;
			$scope.loggedIn = true;
			$cookieStore.get('isLoggedIn');
			$cookieStore.put('isLoggedIn', $rootScope.user.loggedin);
		    $location.path( "/" );
			console.log($rootScope.user);
			console.log($cookieStore.get('isLoggedIn'));
			
		} 
		else {
			$location.path("/");
			$scope.loginAttempt = true;
		    $scope.loginError = "Invalid Email/Password";
			$rootScope.user.loggedIn = false;
			$scope.loggedIn = false;
			console.log($rootScope.user);
			console.log($cookieStore.get('isLoggedIn'));
		}
	};
	//Logout Function
	$scope.logout = function() {
		$rootScope.user = {};
		$rootScope.user.loggedIn = false;
		$scope.loggedIn = false;
		console.log($rootScope.user);
		console.log($cookieStore.get('isLoggedIn'));
	}
  });

