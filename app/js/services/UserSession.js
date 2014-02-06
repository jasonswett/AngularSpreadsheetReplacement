'use strict';
					
/* Query All Feeds From DB Service */

mftApp.service('UserSession', ['$cookieStore', 'UserAuthEndpoint', 'UserAuth', function($cookieStore, UserAuthEndpoint, UserAuth) { 
	/*var self = this;
	UserAuth.getCredentials();
	UserAuthEndpoint.get(function() {
		self._isValid = true;
	},
	function() {
		self._isValid = false;
	});*/
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
	this.isValid = function() {	
		//return this._isValid;
		return $cookieStore.get('Authorized') == "foo";
	};
	this.destroy = function() {
	    $cookieStore.put('Authorized', "");
		UserAuth.clearCredentials();
	};
	this.username = function() {
		return $cookieStore.get('Username');
	};
}]);
