'use strict';
					
/* Query All Feeds From DB Service */

mftApp.factory('Feed', ['$resource', function($resource) { 
	//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
	var getFeed = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Feeds/:id', {id:'@id', status:'@status', interface:'@interface'}, 
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET', isArray:false}});
	return getFeed;
}]);