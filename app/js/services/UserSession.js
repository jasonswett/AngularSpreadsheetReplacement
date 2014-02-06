'use strict';
					
/* Query All Feeds From DB Service */

mftApp.service('UserSession', ['$cookieStore', function($cookieStore) { 
	//1.) Check for presence of cookie, if it's there don't boot back to login screen
	//2.) Check for cookie, make sure it's valid, if so, don't boot back to login screen
	this.create = function() {
		$cookieStore.put('Authorized', "foo");
	};
	this.isValid = function() {
		//$cookieStore.put('Authorized', "foo");		
		return $cookieStore.get('Authorized') == "foo";
	};
	this.destroy = function() {
	    $cookieStore.put('Authorized', "");
	};
}]);
