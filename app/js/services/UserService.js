'use strict';

/* Query Comments From DB Service */

mftApp.factory('UserAuth', ['$resource', function($resource) {
 	var getUserInfo = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/UserAuth', {}, 
		{ post: {method: 'POST', 
		transformRequest:function(data, headersGetter){
			var result = JSON.stringify(data);
			console.log("Result:" + result);             
		}}, 
		get: {method: 'GET'}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:false}});	
	return getUserInfo;
}]);