'use strict';

/* Encode User/Pass into Authorization Header */

mftApp.factory('UserAuth', ['Base64', '$cookieStore', '$resource', '$http', function(Base64, $cookieStore, $resource, $http) {
	// initialize to whatever is in the cookie, if anything
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $cookieStore.get('authdata');
    return {
        setCredentials: function (username, password) {
            var encoded = Base64.encode(username + ':' + password);
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $cookieStore.put('authdata', encoded);
console.log($http.defaults.headers.common);
        },
        clearCredentials: function () {
            document.execCommand("ClearAuthenticationCache");
            $cookieStore.remove('authdata');
            $http.defaults.headers.common.Authorization = 'Basic ';
        }
    };
}]);