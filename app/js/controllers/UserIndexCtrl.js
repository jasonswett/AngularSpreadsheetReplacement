'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', ['$scope', '$resource', '$routeParams', '$location', '$rootScope', '$cookies', '$cookieStore', 'UserIndex', 'UserAuth',
	function($scope, $resource, $routeParams, $location, $rootScope, $cookies, $cookieStore, UserIndex, UserAuth) {
	console.log($rootScope.loggedIn);
	$rootScope.user = {};
	$scope.loginAttempt = false;
	
	UserIndex.get(function() {
		UserAuth.getCredentials();
		$rootScope.loggedIn = true;
	},
	function() {
		$rootScope.loggedIn = false;
	});
	
	if($rootScope.loggedIn) {
		$rootScope.testSessionID = $cookieStore.get('authData');
		if ($rootScope.testSessionID == $rootScope.validSessionID) {
			$rootScope.loggedIn = true;
		}
		else {
			$rootScope.loggedIn = false;
		}
	}
	//$scope.loggedIn = false;
	//$rootScope.loggedIn = false;
	//Login Function
	$scope.login = function() {
		$scope.loginAttempt = true;
		$scope.loginForm.$setPristine();
		if ($scope.loginForm.$valid) {
			$rootScope.user.email = $scope.user.email;
			$rootScope.email = $scope.user.email;
			$rootScope.password = $scope.user.password;
			UserAuth.setCredentials($scope.user.email, $scope.user.password);
		UserIndex.get(function() {
			$rootScope.loggedIn = true;
			//$scope.loggedIn = true;
			$location.path('/');
			console.log("Authenticating");
		},
		function() {
			$scope.invalidLogin = true;
			$scope.loginError = "Invalid Email/Password";
			console.log("error");	
		});
		}
	};
	
	//Logout Function
	$scope.logout = function() {
		UserAuth.clearCredentials();
		$location.path('/login');
		$rootScope.loggedIn = false;
		//$scope.loggedIn = false;
		$rootScope.editFeedSuccess = false;
	}
  }]);