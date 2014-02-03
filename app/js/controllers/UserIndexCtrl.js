'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', ['$scope', '$resource', '$routeParams', '$location', '$rootScope', '$cookies', '$cookieStore', 'UserIndex', 'UserAuth',
	function($scope, $resource, $routeParams, $location, $rootScope, $cookies, $cookieStore, UserIndex, UserAuth) {
	$rootScope.user = {};
	$scope.loginAttempt = false;
	$rootScope.user.loggedIn = false;
	$scope.loggedIn = false;
	$cookies.loggedIn = $scope.loggedIn;
	UserAuth.clearCredentials();
	//Login Function
	$scope.login = function() {
		$scope.loginAttempt = true;
		if ($scope.loginForm.$valid) {
			$rootScope.user.email = $scope.user.email;
			$rootScope.user.password = $scope.user.password;
			$rootScope.auth = UserAuth.setCredentials($scope.user.email, $scope.user.password);
			
		UserIndex.get({}, 
		$scope.user, 
		function() {
			$rootScope.loggedIn = true;
			$scope.loggedIn = true;
			console.log("Authenticating");
		},
		function() {
			console.log("error");	
		});
		$scope.loginForm.$setPristine();
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
		$rootScope.user = {};
		$rootScope.user.loggedIn = false;
		$scope.loggedIn = false;
		$scope.loginForm.$setDirty();
		$rootScope.editFeedSuccess = false;
	}
  }]);