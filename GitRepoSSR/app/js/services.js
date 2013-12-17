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
var feedServices = angular.module('feedServices', ['ngResource']);

	feedServices.factory('Feed', ['$resource', function($resource) { 
		var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'}, 
		{ post: {method: 'POST'}, get: {method: 'GET', isArray: true}, update: {method:'PUT'} });
		return getFeed;			
	}]);
	



//Comment Services

var commentServices = angular.module('commentServices', ['ngResource']);

  commentServices.factory('Comment', ['$resource', function($resource) {
    var getComment = $resource('JSON/comments.json', {}, 
		{ post: {method: 'POST'}, get: {method: 'GET', isArray: true}, update: {method:'PUT'} });	
	return getComment;
  }]);






