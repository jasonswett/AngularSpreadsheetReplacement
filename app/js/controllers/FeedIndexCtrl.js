'use strict';

/* Query For Feeds Controller */

mftApp.controller('FeedIndexCtrl', ['$scope', '$resource', 'Feed', '$routeParams', '$route', '$location', '$filter',  
  function($scope, $resource, Feed, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.feedList = Feed.query();
	console.log($scope.feedList);
	console.log(typeof($scope.feedList));
	
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
	
	
	//Default Order the feeds by lastActive
	var sortOrder = 'lastActive';
	$scope.sortOrder = sortOrder;
	$scope.reverse = false;
	
	//Order the Feeds by each column
	$scope.sort = function(newSortOrder) {
	  if ($scope.sortOrder == newSortOrder)
	    $scope.reverse = !$scope.reverse;
	    $scope.sortOrder = newSortOrder;

	//Change arrow direction
        $('th i').each(function(){
            // icon reset
			if ($scope.reverse)
            	$(this).removeClass().addClass('icon-chevron-up icon-white');
			
	           // $('th.'+newSortOrder+'i').removeClass().addClass('icon-chevron-up icon-white');
	        else
	            $(this).removeClass().addClass('icon-chevron-down icon-white');
			
       }); 
    };
  }
]);

