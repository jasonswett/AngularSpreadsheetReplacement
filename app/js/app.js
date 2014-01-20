'use strict';


// Declare app level module which depends on filters, and services
var mftApp = angular.module('mftApp', [
  'ngRoute',
  'ngResource',
  'mftApp.directives',
  'mftController',
  'infinite-scroll'
  
])
.config(['$routeProvider', '$locationProvider', function($routeProvider) {
	
//Login Page
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'UserIndexCtrl'});

//Default main page
  $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'FeedIndexCtrl'});

//Feeds
  $routeProvider.when('/feeds/:id', {templateUrl: 'partials/feed.html', controller: 'FeedShowCtrl'});
    $routeProvider.when('/feeds/:id/edit', {templateUrl: 'partials/feedEdit.html', controller: 'FeedEditCtrl'});
  $routeProvider.when('/transfers/:id', {templateUrl: 'partials/transfers.html', controller: 'FeedShowCtrl'});
  $routeProvider.when('/comments/:id', {templateUrl: 'partials/comments.html', controller: 'CommentIndexCtrl'});
  $routeProvider.when('/changeLog/:id', {templateUrl: 'partials/changeLog.html', controller: 'EventShowCtrl'});
    $routeProvider.when('/changeDetail/:id', {templateUrl: 'partials/changeDetail.html', controller: 'EventShowCtrl'});

  $routeProvider.when('/event', {templateUrl: 'partials/event.html', controller: 'EventIndexCtrl'});
    $routeProvider.when('/event/:id', {templateUrl: 'partials/eventShow.html', controller: 'EventShowCtrl'});  

//User Profile
  $routeProvider.when('/users/:userId', {templateUrl: 'partials/user.html', controller: 'UserIndexCtrl'});

//Alerts and Warnings
  $routeProvider.when('/alerts', {templateUrl: 'partials/alerts.html', controller: 'MyCtrl1'});

//Query Config Admin
  $routeProvider.when('/query', {templateUrl: 'partials/query.html', controller: 'MyCtrl1'});

//Monitoring
  $routeProvider.when('/monitoring', {templateUrl: 'partials/monitoring.html', controller: 'MyCtrl1'});
  
//All other URLs
  $routeProvider.otherwise({redirectTo: '/'});
}])

//Run on route change to make sure user is logged in
.run( function($rootScope, $location) {
    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $rootScope.user.loggedIn == false ) {
        $location.path("/login");
      }
    });
});
