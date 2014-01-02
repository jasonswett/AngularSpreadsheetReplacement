'use strict';


// Declare app level module which depends on filters, and services
var mftApp = angular.module('mftApp', [
  'ngRoute',
  'ngResource',
  'mftApp.filters',
  'mftApp.directives',
  'mftController',
  'Services'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider) {

//Default main page
  $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'FeedIndexCtrl'});

//Feeds
  $routeProvider.when('/feeds/:id', {templateUrl: 'partials/feed.html', controller: 'FeedShowCtrl'});
    $routeProvider.when('/feeds/:id/edit', {templateUrl: 'partials/feedEdit.html', controller: 'FeedEditCtrl'});
  $routeProvider.when('/transfers/:id', {templateUrl: 'partials/transfers.html', controller: 'MyCtrl1'});
  $routeProvider.when('/comments/:id', {templateUrl: 'partials/comments.html', controller: 'CommentIndexCtrl'});
  $routeProvider.when('/changeLog/:id', {templateUrl: 'partials/changeLog.html', controller: 'MyCtrl1'});
    $routeProvider.when('/changeDetail/:id', {templateUrl: 'partials/changeDetail.html', controller: 'MyCtrl1'});

//User Profile
  $routeProvider.when('/users/:userId', {templateUrl: 'partials/user.html', controller: 'feedsCtrl'});

//Alerts and Warnings
  $routeProvider.when('/alerts', {templateUrl: 'partials/alerts.html', controller: 'MyCtrl1'});

//Query Config Admin
  $routeProvider.when('/query', {templateUrl: 'partials/query.html', controller: 'MyCtrl1'});

//Monitoring
  $routeProvider.when('/monitoring', {templateUrl: 'partials/monitoring.html', controller: 'MyCtrl1'});
  
  //$routeProvider.otherwise({redirectTo: 'partials/main.html'});
}]);
