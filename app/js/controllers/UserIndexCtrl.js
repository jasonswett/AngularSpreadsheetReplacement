'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', ['$scope', '$resource', '$routeParams', '$location', '$rootScope', '$cookies', '$cookieStore', 'UserIndex', 'UserAuth',
	function($scope, $resource, $routeParams, $location, $rootScope, $cookies, $cookieStore, UserIndex, UserAuth) {
	$rootScope.user = {};
	$scope.loginAttempt = false;
	$rootScope.user.loggedIn = false;
	$scope.loggedIn = false;
	$cookies.loggedIn = $scope.loggedIn;
	//UserAuth.clearCredentials();
	//Login Function
	$scope.login = function() {
		$scope.loginAttempt = true;
		$scope.loginForm.$setPristine();
		if ($scope.loginForm.$valid) {
			$rootScope.user.email = $scope.user.email;
			$rootScope.user.password = $scope.user.password;
			UserAuth.setCredentials($scope.user.email, $scope.user.password);
			
		UserIndex.get(function() {
			$rootScope.user.loggedIn = true;
			$scope.loggedIn = true;
			$location.path('/');
			console.log("Authenticating");
		},
		function() {
			$scope.invalidLogin = true;
			$scope.loginError = "Invalid Email/Password";
			console.log("error");	
		});
		}

		/*if ( $scope.user.email == "ad" && $scope.user.password == "man" ) { // test
			$rootScope.user = $scope.user;
			$rootScope.user.loggedIn = true;
			$scope.loggedIn = true;
		} 
		else {
			$scope.loginAttempt = true;
		    $scope.loginError = "Invalid Email/Password";
			$rootScope.user.loggedIn = false;
			$scope.loggedIn = false;
		}*/
	};
	//Logout Function
	$scope.logout = function() {
		UserAuth.clearCredentials();
		$location.path('/login');
		
		$rootScope.user = {};
		$rootScope.user.loggedIn = false;
		$scope.loggedIn = false;
		$scope.loginForm.$setDirty();
		$rootScope.editFeedSuccess = false;
	}
  }]);