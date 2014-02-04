'use strict';

/* Encode User/Pass into Authorization Header */

mftApp.factory('UserAuth', ['Base64', '$cookies', '$cookieStore', '$resource', '$http',
  function(Base64, $cookies, $cookieStore, $resource, $http) {
	// initialize to whatever is in the cookie, if anything
    //$http.defaults.headers.common['Authorization'] = 'Basic ' + $cookieStore.get('authdata');
	
	
    return {
        setCredentials: function (username, password) {
            var encoded = Base64.encode(username + ':' + password);
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $cookieStore.put('authdata', encoded);
			//var sessionID = $cookieStore.get('ssnid');
			//console.log(sessionID);
			//var session = $cookies.ssnid;
			//console.log(session);
        },
        clearCredentials: function () {
            document.execCommand("ClearAuthenticationCache");
            $cookieStore.remove('authdata');
			$cookieStore.remove('ssnid');
            $http.defaults.headers.common.Authorization = 'Basic ';
        }
    };
}]);