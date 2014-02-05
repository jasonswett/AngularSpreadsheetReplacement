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
	$scope.submitted = false;
	$scope.save = function() {
		$scope.commentForm.$setPristine();
		$scope.submitted = true;
		if($scope.commentForm.$valid) {
		console.log($scope.commentList);
		console.log($scope.user.email);
		console.log($scope.commentList.COMMENT_FEED);
		$scope.commentData = [];
		$scope.commentData.push(CURRENT_USER:$scope.user.email);
		$scope.commentData.push(COMMENT_FEED:$scope.commentList.COMMENT_FEED);
		console.log($scope.commentData);
		Comment.post({id:$routeParams.id},
		$scope.commentData, 
		function() {
			$scope.submitted = false;
		    Comment.get({id: $routeParams.id}, function(results){
				$scope.commentList = results.results;
				$scope.commentList.sort(function(a,b){
				  a = new Date(a.CREATED_AT);
				  b = new Date(b.CREATED_AT);
				  return a<b?1:a>b?-1:0;
				});
			});
			$scope.commentList.COMMENT_FEED = "";
			$scope.postCommentSuccess = true;
		},
		function() {
			$scope.submitted = false;
			$scope.postCommentFailure = true;
			$scope.commentList.COMMENT_FEED = "";	
		});
		}
	};
	

  }
]);




	