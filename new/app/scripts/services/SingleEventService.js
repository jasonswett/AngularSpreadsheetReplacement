'use strict';
					
/* Query All Feeds From DB Service */

mftApp.factory('SingleEvent', ['$resource', function($resource) { 
	//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
	var getEvent = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/SingleEvent/:id', {id:'@id'}, 
	{ post: {method: 'POST', params:{DATA:''}, 
	transformRequest:function(data, headersGetter){
		var result = JSON.stringify(data);
		console.log("Result:" + result);             
	}}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET', isArray:false}});
	return getEvent;
}]);