'use strict';
					
/* Query All Feeds From DB Service */

mftApp.factory('Feed', ['$resource', function($resource) { 
	//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
	var getFeed = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Feeds/:id', {id:'@id'}, 
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET', isArray:false}});
	return getFeed;
}]);


/*
CORS Attemps wM
watt.server.cors.enabled=true
watt.server.cors.allowedOrigins=*
watt.server.cors.supportedMethods=GET,POST,OPTIONS,PUT,HEAD
watt.server.cors.host=localhost:8080
watt.server.cors.supportsCredentials=true
watt.server.cors.supportedHeaders=access-control-allow-origin,Content-Type,accept
watt.server.cors.exposedHeaders=Access-Control-Allow-Origin,Content-Type,accept
*/