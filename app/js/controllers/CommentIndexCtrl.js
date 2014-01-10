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

	$scope.save = function () {
		var newComment = $scope.comment;
		$scope.comment.FEED_ID = $routeParams.id;
		var nc = new Comment( newComment );
		nc.$post(function() {
			$scope.commentList.push(nc);
			$scope.comment.COMMENT_FEED = '';
		});
	};
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


	