'use strict';

/* Query Comments From DB Service */

mftApp.factory('Comment', ['$resource', '$routeParams', function($resource, $routeParams) {
    //var getComment = $resource('JSON/comments.json', {id: '@id'},
 	var getComment = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Comments/:id', {id: '@$routeParams.id'}, 
		{ post: {method: 'POST'}, 
		get: {method: 'GET'}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:false}});	
	return getComment;
}]);