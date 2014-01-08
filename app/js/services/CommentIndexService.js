'use strict';

/* Query Comments From DB Service */

mftApp.factory('Comment', ['$resource', function($resource) {
    var getComment = $resource('JSON/comments.json', {id: '@id'}, 
		{ post: {method: 'POST'}, get: {method: 'GET'}, update: {method:'PUT'} });	
	return getComment;
}]);