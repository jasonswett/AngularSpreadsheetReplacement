'use strict';

/* Query Comments From DB Service */

mftApp.factory('Comment', ['$resource', function($resource) {
    //var getComment = $resource('JSON/comments.json', {id: '@id'},
 	var getComment = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Comments/:id', {id: '@id'}, 
		{ post: {method: 'POST'}, 
		get: {method: 'GET'}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:false}});	
	return getComment;
}]);