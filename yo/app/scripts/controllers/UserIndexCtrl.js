'use strict';

//Users Controller
mftApp.controller('UserIndexCtrl', ['$scope', '$resource', '$routeParams', '$window', '$location', '$rootScope', '$cookies', '$cookieStore', 'UserAuthEndpoint', 'UserAuth', 'UserSession',
    function($scope, $resource, $routeParams, $window, $location, $rootScope, $cookies, $cookieStore, UserAuthEndpoint, UserAuth, UserSession) {
	$rootScope.user = {};
	$scope.loginAttempt = false;
	$scope.user.email = UserSession.username();
	//Login Function
	$scope.login = function() {
		$scope.loginAttempt = true;
		$scope.loginForm.$setPristine();
		if ($scope.loginForm.$valid) {
			$rootScope.user.email = $scope.user.email;
			$rootScope.email = $scope.user.email;
			$rootScope.password = $scope.user.password;
			UserSession.create($scope.user.email, $scope.user.password, function(){
				$window.location.href = 'index.html#/';
			},
			function() {
				$scope.invalidLogin = true;
				$scope.loginError = "Invalid Email/Password";
			});
		}
	};
	
	//Logout Function
	$scope.logout = function() {
		UserSession.destroy();
		$window.location.href = 'indexLogin.html#/';
		$rootScope.editFeedSuccess = false;
	}
}]);
