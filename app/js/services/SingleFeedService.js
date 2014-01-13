'use strict';
					
/* Query All Feeds From DB Service */

mftApp.factory('SingleFeed', ['$resource', function($resource) { 
	//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
	var getFeed = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/SingleFeed/:id', {id:'@ID'}, 	
	{ post: {method: 'POST', transformRequest : function(data, headersGetter)}, 
	get: {method: 'GET'}, 
	update: {method:'PUT', transformRequest : function(data, headersGetter)}, 
	query: {method:'GET', isArray:false}});
	return getFeed;
}]);