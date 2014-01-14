'use strict';

/* Query Comments Controller */

mftApp.controller('CommentIndexCtrl', ['$scope', '$resource', 'Comment', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, Comment, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.dateFormat = new Date().getTime();      //'M/d/yy h:mm:ss a';
	$scope.commentList = Comment.get({id: $routeParams.id});

	//Save Comments; POST to DB
	$scope.save = function() {
		Comment.post({id:$routeParams.id, CURRENT_USER:'aaron@bigcompass.com', COMMENT_FEED:$scope.commentList.results.COMMENT_FEED}, 
		$scope.commentList, 
		function() {
			$scope.commentList.results.COMMENT_FEED = "";
			$route.reload();
			console.log("saved!");
		},
		function() {
			$scope.commentList.results.COMMENT_FEED = "";
			console.log("error");
		});
	};

  }
]);




	