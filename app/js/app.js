'use strict';


// Declare app level module which depends on filters, and services
var mftApp = angular.module('mftApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'mftApp.directives',
  'infinite-scroll',
  'ui.bootstrap' 
])
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.withCredentials = true;
    }
])

.config(['$routeProvider', function($routeProvider) {
	
//Login Page
  //$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'UserIndexCtrl'});

//Default main page
  $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'FeedIndexCtrl'});

//Feeds
  $routeProvider.when('/new', {templateUrl: 'partials/feedNew.html', controller: 'FeedNewCtrl'});
  $routeProvider.when('/feeds/:id', {templateUrl: 'partials/feed.html', controller: 'FeedShowCtrl'});
    $routeProvider.when('/feeds/:id/edit', {templateUrl: 'partials/feedEdit.html', controller: 'FeedEditCtrl'});
  $routeProvider.when('/transfers/:id', {templateUrl: 'partials/transfers.html', controller: 'FeedShowCtrl'});
  $routeProvider.when('/comments/:id', {templateUrl: 'partials/comments.html', controller: 'CommentIndexCtrl'});
  $routeProvider.when('/changeLog/:id', {templateUrl: 'partials/changeLog.html', controller: 'EventShowCtrl'});
    $routeProvider.when('/changeLog/:id/changeDetail/:index', {templateUrl: 'partials/changeDetail.html', controller: 'EventCompareCtrl'});

//User Profile
  $routeProvider.when('/users/:userId', {templateUrl: 'partials/user.html', controller: 'EventShowCtrl'});
    $routeProvider.when('/users/:userId/changeDetail/:userIndex', {templateUrl: 'partials/user.html', controller: 'EventCompareCtrl'});

//Alerts and Warnings
  //$routeProvider.when('/alerts', {templateUrl: 'partials/alerts.html', controller: 'MyCtrl1'});

//Query Config Admin
  //$routeProvider.when('/query', {templateUrl: 'partials/query.html', controller: 'MyCtrl1'});

//Monitoring
  //$routeProvider.when('/monitoring', {templateUrl: 'partials/monitoring.html', controller: 'MyCtrl1'});
  
//All other URLs
  $routeProvider.otherwise({redirectTo: '/'});
}])

//Run on route change to make sure user is logged in
.run( function($rootScope, $location, $window, UserSession) {
	$rootScope.username = UserSession.username();
    // register listener to watch route changes
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
	console.log(UserSession.isValid());
		$rootScope.loggedIn = UserSession.isValid();
	  if ( UserSession.isValid() && $window.location == 'indexLogin.html#/') {
	    $window.location.href = 'index.html#/';
	  }
      if ( !UserSession.isValid() && $window.location != 'indexLogin.html#/') {
        $window.location.href = 'indexLogin.html#/';
      }         
    });
});