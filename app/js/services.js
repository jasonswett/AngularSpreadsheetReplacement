'use strict';
					
/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('mftApp.services', []).
  //value('version', '0.1');

//var Item = $resource( 'App/Details/:AppId', { AppId: '@id' } );

//var item = Item.get({ id: 1 }, function( data ) {
    //data.setAnothervalue = 'fake value';
    //data.$save();
//);

//Feeds Services
//var feedServices = angular.module('feedServices', ['ngResource']);

	mftApp.factory('Feed', ['$resource', function($resource) { 
		//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
		var getFeed = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/Feeds/:id', {id:'@id', status:'@status', interface:'@interface'}, 
		{ post: {method: 'POST'}, 
		get: {method: 'GET'}, 
		update: {method:'PUT'}, 
		query: {method:'GET', isArray:true, headers: {'Content-Type': 'application/json'}}});
		
		//Ajax Call
		$.ajax({
		    url: "http://dev.bigcompass.com:2222/rest/AaronL/Feeds/",
		    success: function(reports){

		        var global = reports;
				// Create x2js instance with default config
				var x2js = new X2JS();
				var xmlText = global;
				var jsonObj = x2js.xml_str2json( xmlText );
		        return global;
				return jsonObj;
				console.log(jsonObj);
				console.log(global);
				$scope.jsonString = findJSON;
				console.log($scope.jsonString);
		        }
		    });
		var x2js = new X2JS();
		var xmlText = getFeed;
		var jsonObj = x2js.xml_str2json( xmlText );
		return jsonObj;
	}]);

//Comment Services

//var commentServices = angular.module('commentServices', ['ngResource']);

  mftApp.factory('Comment', ['$resource', function($resource) {
    var getComment = $resource('JSON/comments.json', {id: '@id'}, 
		{ post: {method: 'POST'}, get: {method: 'GET'}, update: {method:'PUT'} });	
	return getComment;
  }]);






