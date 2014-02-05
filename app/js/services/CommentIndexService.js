'use strict';

/* Query Comments From DB Service */

mftApp.factory('Comment', ['$resource', '$routeParams', function($resource, $routeParams) {
    //var getComment = $resource('JSON/comments.json', {id: '@id'},
 	var getComment = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Comments/:id', {id: '@FEED_ID'}, 
		{ post: {method: 'POST', 
		transformRequest:function(data, headersGetter){
			var result = JSON.stringify(data);
			console.log("Result:" + result);             
		}}, 
		get: {method: 'GET', isArray:false}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:true}});	
	return getComment;
}]);