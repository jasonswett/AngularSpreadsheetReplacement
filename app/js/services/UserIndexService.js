'use strict';

/* Encode User/Pass into Authorization Header */

mftApp.factory('UserIndex', ['$resource', function($resource) {
   	var getUserInfo = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/UserAuth', {}, 
		{ post: {method: 'POST', 
		  transformRequest:function(data, headersGetter){
			var result = JSON.stringify(data);
			console.log("Result:" + result);             
		}}, 
		get: {method: 'GET', 
		  transformResponse:function(data, headersGetter){
			var results = JSON.stringify(headersGetter);
			console.log(headersGetter); 
			console.log(results);            
		}}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:false}});	
		return getUserInfo;
}]);