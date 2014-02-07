'use strict';
					
/* Query All Feeds From DB Service */

mftApp.service('UserSession', ['$cookieStore', '$rootScope', 'UserAuthEndpoint', 'UserAuth', function($cookieStore, $rootScope, UserAuthEndpoint, UserAuth) { 
	/*var self = this;
	UserAuth.getCredentials();
	UserAuthEndpoint.get(function() {
		self._isValid = true;
		$rootScope.loggedIn = self._isValid;
	},
	function() {
		self._isValid = false;
		$rootScope.loggedIn = self._isValid;
	});*/
	//Create user session
	this.create = function(username, password, success, failure) {
		UserAuth.setCredentials(username, password);
		UserAuthEndpoint.get(function() {
			$cookieStore.put('Username', username);
			$cookieStore.put('Authorized', "foo");
			success();			
		},
		function() {
			failure();
			console.log("failed login");
		});
	};
	//Check Validity of User Session
	this.isValid = function() {	
		//return this._isValid;
		return $cookieStore.get('Authorized') == "foo";
	};
	//Destroy User Session
	this.destroy = function() {
	    $cookieStore.put('Authorized', "");
		$cookieStore.remove('Username');
		UserAuth.clearCredentials();
	};
	//Store username in cookie to use in the app
	this.username = function() {
		return $cookieStore.get('Username');
	};
}]);
