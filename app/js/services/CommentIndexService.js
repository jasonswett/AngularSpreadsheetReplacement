'use strict';

/* Query Comments From DB Service */

mftApp.factory('Comment', ['$resource', '$routeParams', function($resource, $routeParams) {
    //var getComment = $resource('JSON/comments.json', {id: '@id'},
 	var getComment = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Comments/:FEED_ID', {FEED_ID: '@FEED_ID'}, 
		{ post: {method: 'POST', params:{CURRENT_USER:'', COMMENT_FEED:'', FEED_ID:''}, 
		transformRequest:function(data, headersGetter){
			var result = JSON.stringify(data);
			console.log("Result:" + result);             
		}}, 
		get: {method: 'GET'}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:false}});	
	return getComment;
}]);