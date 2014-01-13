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

	$scope.save = function() {
		Comment.post({id:$routeParams.id, CURRENT_USER:'aaron@bigcompass.com', COMMENT_FEED:$scope.commentList.results.COMMENT_FEED, FEED_ID:$routeParams.id}, 
		$scope.commentList, 
		function() {
			$scope.commentList.results.COMMENT_FEED = "";
			$location.path('/comments/' + $routeParams.id);
			console.log("saved!");
		},
		function() {
			$scope.commentList.results.COMMENT_FEED = "";
			console.log("error");
		});
	};

	/*$scope.save = function () {
		var newComment = $scope.comment;
		var nc = new Comment( newComment );
		nc.$post(function() {
			$scope.commentList.push(nc);
			$scope.comment.COMMENT_FEED = '';
		});
	};*/
  }
]);

//Comments Controller
/*function commentsCtrl($scope, Comment, $resource) {
  $scope.commentList = Comment.query();
  $scope.dateFormat = 'M/d/yy h:mm:ss a';
  $scope.createNewComment = function() {
    $scope.commentList.push({name:$scope.commentText});

    $scope.commentText = '';
  };
};

  }
]);*/


	