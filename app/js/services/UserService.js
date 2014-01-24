'use strict';

/* Query Comments From DB Service */

mftApp.factory('UserAuth', ['$resource', function($resource) {
    //var getComment = $resource('JSON/comments.json', {id: '@id'},
 	var getUserInfo = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Comments/:id', {id: '@FEED_ID'}, 
		{ post: {method: 'POST', isArray:true, 
		transformRequest:function(data, headersGetter){
			var result = JSON.stringify(data);
			console.log("Result:" + result);             
		}}, 
		get: {method: 'GET'}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:false}});	
	return getUserInfo;
}]);