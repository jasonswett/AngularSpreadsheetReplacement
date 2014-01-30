'use strict';

/* Query Comments From DB Service */

mftApp.factory('UserAuth', ['$cookieStore', '$resource', function($cookieStore, $resource) {
	var getUserInfo = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/UserAuth', {}, 
		{ post: {method: 'POST', 
		transformRequest:function(data, headersGetter){
			console.log(data);
			console.log(headersGetter);
			var result = JSON.stringify(data);
			console.log("Result:" + result);             
		}}, 
		get: {method: 'GET'}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:false}});	
	return getUserInfo;
}]);


/*services.factory('Auth', ['Base64', '$cookieStore', '$http', function (Base64, $cookieStore, $http) {
    // initialize to whatever is in the cookie, if anything
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $cookieStore.get('authdata');
 
    return {
        setCredentials: function (username, password) {
            var encoded = Base64.encode(username + ':' + password);
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $cookieStore.put('authdata', encoded);
        },
        clearCredentials: function () {
            document.execCommand("ClearAuthenticationCache");
            $cookieStore.remove('authdata');
            $http.defaults.headers.common.Authorization = 'Basic ';
        }
    };
}]);*/