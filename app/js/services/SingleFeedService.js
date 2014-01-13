'use strict';
					
/* Query All Feeds From DB Service */

mftApp.factory('SingleFeed', ['$resource', function($resource) { 
	//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
	var getFeed = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/SingleFeed/:id', {id:'@ID'}, 	
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT', params:{active:'@IS_ACTIVE', pci_test:'@PCI'}, transformRequest:function(data, headersGetter){
		var result = JSON.stringify(data);
		console.log("Result:" + result);             
	}}, 
	query: {method:'GET', isArray:false}});
	return getFeed;
}]);