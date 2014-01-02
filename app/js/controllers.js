'use strict';

/* Controllers */

var mftController = angular.module('mftController', []);


  mftController.controller('MyCtrl1', [function() {

  }])
  mftController.controller('MyCtrl2', [function() {

  }]);

angular.module('Services', ['ngResource', 'ngRoute'])
  


//Feeds Controller
  //.controller('feedsCtrl', ['$scope', 'Feed', '$resource', '$routeParams', '$route', '$location', '$filter', function($scope, Feed, $resource, $routeParams, $route, $location, $filter) {
	/*$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.feedList = Feed.query();
	$scope.feedList1 = angular.toJson($scope.feedList);
	
	console.log($scope.feedList);
	console.log($scope.feedList1);
	console.log(typeof($scope.feedList1));
	console.log(typeof($scope.feedList));
	
	
	//$scope.params = $scope.feedList.params;
	
	//Default Order the feeds by lastActive
	//$scope.orderProp = 'lastActive';
	//Order the Feeds by each column
	var sortOrder = 'lastActive';
	$scope.sortOrder = sortOrder;
	$scope.reverse = false;
	
	// change sorting order
	$scope.sort = function(newSortOrder) {
	  if ($scope.sortOrder == newSortOrder)
	    $scope.reverse = !$scope.reverse;
	    $scope.sortOrder = newSortOrder;

	//Change arrow direction
	// icon setup
        $('th i').each(function(){
            // icon reset
			if ($scope.reverse)
            	$(this).removeClass().addClass('icon-chevron-up icon-white');
			
	           // $('th.'+newSortOrder+'i').removeClass().addClass('icon-chevron-up icon-white');
	        else
	            $(this).removeClass().addClass('icon-chevron-down icon-white');
			
       }); 
    };*/

//Get Feed By ID
/*	var feedId = '';
	$scope.feedId = feedId;
	$scope.feedAttr = {};
	$scope.getFeedId = function(newFeedId) {
		for (var i = 0, ii = $scope.feedList.length; i < ii; i++) {
			
			if (newFeedId == $scope.feedList[i].id)  
				{$scope.feedId = newFeedId;
				$scope.feedAttr = $scope.feedList[i];
				return $scope.feedAttr;}
		};	
	};
*/	
	//Edit Feeds
/*	$scope.editFeed = function() {
		$scope.feedList.push({interface:$scope.feed.interface});
		alert($scope.feed.interface)
		$scope.feedList = Feed.$save();
	};*/

/*	$scope.editFeed = function() {
	  //$scope.Services.$save();
	  //$location.path('index.html#/feeds/$routeParams.id/$routeParams.status/$routeParams.interface'); //{{feed.id}}/{{feed.status}}/{{feed.interface}}');
	  var updateFeed = {status: $scope.feed.status, interface: $scope.feed.interface};
	  var nf = new Feed(updateFeed);
	  nf.$update(function() {
		$scope.feedList.push(nf);
	  });
	};
  }])*/

//Comments Controller
  /*.controller('commentsCtrl', function($scope, Comment, $resource, $routeParams, $route, $location) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.params = $routeParams;
	$scope.dateFormat = new Date().getTime();      //'M/d/yy h:mm:ss a';
	$scope.commentList = Comment.query();

	$scope.save = function () {
		var newComment = { name: $scope.Services.name };
		var nc = new Comment( newComment );
		nc.$post(function() {
			$scope.commentList.push(nc);
			$scope.Services.name = '';
		});
	};
  });*/

//Comments Controller
/*function commentsCtrl($scope, Comment, $resource) {
  $scope.commentList = Comment.query();
  $scope.dateFormat = 'M/d/yy h:mm:ss a';
  $scope.createNewComment = function() {
    $scope.commentList.push({name:$scope.commentText});
	
    $scope.commentText = '';
  };
};


  $scope.createNewComment = function() {
    $scope.commentList.push({name:$scope.commentText});
	
    $scope.commentText = '';
	$scope.commentList.name = "Testing Post";
	
  };
}); */



/*function feedsCtrl($scope, Feed, $resource) {
	$scope.feedList = Feed.query();
	
	$scope.orderProp = 'lastActive';
	//$scope.feedId = $(this).find( "#feedId" )
	
	$scope.feed = {id: "$scope.feedList.id"};
	
	//Edit Feeds
	$scope.editFeed = function() {
		$scope.feedList.push({interface:$scope.feed.interface});
		alert($scope.feed.interface)
		$scope.feedList = Feed.$save()
	}
	
	$scope.feedDetails = function(detail) {
	$scope.feedDetailsList = {};
	  for (var i = 0, ii = $scope.feedList.length; i < ii; i++) {
		if (detail === $scope.feedList[i]) {
			$scope.feedList[i].push({id:$scope.feedDetailsList});
		}
		
	  }
	};

};*/
  








/*<!doctype html>
<html ng-app>
  <head>
    <script src="http://code.angularjs.org/1.2.4/angular.min.js"></script>
    <script src="script.js"></script>
  </head>
  <body>
    <div ng-controller="FormController" class="example">
    
      <label>Name:</label><br>
      <input type="text" ng-model="user.name" required/> <br><br>
    
      <label>Address:</label><br>
      <input type="text" ng-model="user.address.line1" size="33" required> <br>
      <input type="text" ng-model="user.address.city" size="12" required>,
      <input type="text" ng-model="user.address.state"
             ng-pattern="state" size="2" required>
      <input type="text" ng-model="user.address.zip" size="5"
             ng-pattern="zip" required><br><br>
    
      <label>Phone:</label>
      [ <a href="" ng-click="addContact()">add</a> ]
      <div ng-repeat="contact in user.contacts">
        <select ng-model="contact.type">
          <option>email</option>
          <option>phone</option>
          <option>pager</option>
          <option>IM</option>
        </select>
        <input type="text" ng-model="contact.value" required>
         [ <a href="" ng-click="removeContact(contact)">X</a> ]
      </div>
      <hr/>
      Debug View:
      <pre>user={{user | json}}</pre>
    </div>
  </body>
</html>

function FormController($scope) {
  var user = $scope.user = {
    name: 'John Smith',
    address:{line1: '123 Main St.', city:'Anytown', state:'AA', zip:'12345'},
    contacts:[{type:'phone', value:'1(234) 555-1212'}]
  };
  $scope.state = /^\w\w$/;
  $scope.zip = /^\d\d\d\d\d$/;
 
  $scope.addContact = function() {
     user.contacts.push({type:'email', value:''});
  };
 
  $scope.removeContact = function(contact) {
    for (var i = 0, ii = user.contacts.length; i < ii; i++) {
      if (contact === user.contacts[i]) {
        $scope.user.contacts.splice(i, 1);
      }
    }
  };

}
 
  */


