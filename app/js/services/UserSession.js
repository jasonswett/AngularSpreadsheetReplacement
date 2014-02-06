'use strict';
					
/* Query All Feeds From DB Service */

mftApp.service('UserSession', ['$cookieStore', 'UserAuthEndpoint', 'UserAuth', function($cookieStore, UserAuthEndpoint, UserAuth) { 
	//1.) Check for presence of cookie, if it's there don't boot back to login screen
	//2.) Check for cookie, make sure it's valid, if so, don't boot back to login screen
	this.create = function(username, password, callback) {
		UserAuth.setCredentials(username, password);
		
		UserAuthEndpoint.get(function() {
			$cookieStore.put('Username', username);
			$cookieStore.put('Authorized', "foo");
			callback();			
		});
	};
	this.isValid = function() {
		//$cookieStore.put('Authorized', "foo");		
		return $cookieStore.get('Authorized') == "foo";
	};
	this.destroy = function() {
	    $cookieStore.put('Authorized', "");
	};
	this.username = function() {
		return $cookieStore.get('Username');
	};
}]);
