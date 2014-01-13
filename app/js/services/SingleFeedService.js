'use strict';
					
/* Query All Feeds From DB Service */

mftApp.factory('SingleFeed', ['$resource', function($resource) { 
	//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
	var getFeed = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/SingleFeed/:id', {id:'@ID'}, 	
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT', params:{active:'@IS_ACTIVE'}, transformRequest:function(data, headersGetter){
		console.log("Data:" + data);
		console.log("product intro" + data.productIntro)
		console.log("headers:" + headersGetter);
	}}, 
	query: {method:'GET', isArray:false}});
	return getFeed;
}]);