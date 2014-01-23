'use strict';
					
/* Query All Events From DB For Auditing Service */

mftApp.factory('Event', ['$resource', function($resource) { 
	//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
	var getEvent = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Event/:id', {id:'@id'}, 
	{ post: {method: 'POST', 
	transformRequest:function(data, headersGetter){
		var result = JSON.stringify(data);
		console.log("Result:" + result);             
	}}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET', isArray:false}});
	return getEvent;
}]);