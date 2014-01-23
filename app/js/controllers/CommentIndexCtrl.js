'use strict';

/* Query Comments Controller */

mftApp.controller('CommentIndexCtrl', ['$scope', '$resource', 'Comment', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, Comment, $routeParams, $route, $location, $filter) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.dateFormat = new Date().getTime();      //'M/d/yy h:mm:ss a';
	$scope.commentList = [];
	Comment.get({id: $routeParams.id}, function(results){
		$scope.commentList = results.results;
		$scope.commentList.sort(function(a,b){
		  a = new Date(a.CREATED_AT);
		  b = new Date(b.CREATED_AT);
		  return a<b?1:a>b?-1:0;
		});
	});

	//Save Comments; POST to DB
	$scope.postCommentSuccess = false;
	$scope.postCommentFailure = false;
	$scope.save = function() {
		Comment.post({id:$routeParams.id, CURRENT_USER:'aaron@bigcompass.com', COMMENT_FEED:$scope.commentList.COMMENT_FEED}, 
		$scope.commentList, 
		function() {
			$scope.commentList.COMMENT_FEED = "";
			$route.reload();
			$scope.postCommentSuccess = true;
			console.log($scope.postCommentSuccess);
		},
		function() {
			$scope.commentList.COMMENT_FEED = "";
			$scope.postCommentFailure = true;
			console.log("error");
		});
	};

  }
]);




	