'use strict';


//Users Controller
  mftApp.controller('UserIndexCtrl', ['$scope', '$resource', '$routeParams', '$location', '$rootScope', '$cookies', '$cookieStore', 'UserAuthEndpoint', 'UserAuth', 'UserSession',
	function($scope, $resource, $routeParams, $location, $rootScope, $cookies, $cookieStore, UserAuthEndpoint, UserAuth, UserSession) {
	$rootScope.user = {};
	$scope.loginAttempt = false;
	$scope.user.email = UserSession.username();
	/*UserIndex.get(function() {
		UserAuth.getCredentials();
		$rootScope.loggedIn = true;
		console.log("initial credential test");
	},
	function() {
		$rootScope.loggedIn = false;
		console.log("initial credential test failure");
	});*/
	
	/*if($rootScope.loggedIn) {
		$rootScope.testSessionID = $cookieStore.get('authData');
		if ($rootScope.testSessionID == $rootScope.validSessionID) {
			$rootScope.loggedIn = true;
		}
		else {
			$rootScope.loggedIn = false;
		}
	}*/
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
			UserSession.create($scope.user.email, $scope.user.password, function(){
				$location.path('/');
			});
			/*UserAuthEndpoint.get(function() {
				$rootScope.loggedIn = true;
				//$scope.loggedIn = true;
				$location.path('/');
				console.log("Authenticating");
			},
		function() {
			$scope.invalidLogin = true;
			$scope.loginError = "Invalid Email/Password";
			console.log("error");	
		});*/
		}
	};
	
	//Logout Function
	$scope.logout = function() {
		UserSession.destroy();
		UserAuth.clearCredentials();
		$location.path('/login');
		//$scope.loggedIn = false;
		$rootScope.editFeedSuccess = false;
	}
  }]);