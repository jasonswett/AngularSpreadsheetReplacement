'use strict';


// Declare app level module which depends on filters, and services
angular.module('mftApp', [
  'ngRoute',
  'mftApp.filters',
  'commentServices',
  'mftApp.directives',
  'mftController',
  'feedServices',
  'Services'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider) {

//Default main page
  $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'feedsCtrl'});

//Feeds
  $routeProvider.when('/feeds/:id/:status/:interface', {templateUrl: 'partials/feed.html', controller: 'feedsCtrl'});
    $routeProvider.when('/feedEdit/:id/:status/:interface', {templateUrl: 'partials/feedEdit.html', controller: 'feedsCtrl'});
  $routeProvider.when('/transfers/:id', {templateUrl: 'partials/transfers.html', controller: 'MyCtrl1'});
  $routeProvider.when('/comments/:id', {templateUrl: 'partials/comments.html', controller: 'commentsCtrl'});
  $routeProvider.when('/changeLog/:id', {templateUrl: 'partials/changeLog.html', controller: 'MyCtrl1'});
    $routeProvider.when('/changeDetail/:id', {templateUrl: 'partials/changeDetail.html', controller: 'MyCtrl1'});

//Alerts and Warnings
  $routeProvider.when('/alerts', {templateUrl: 'partials/alerts.html', controller: 'MyCtrl1'});

//Query Config Admin
  $routeProvider.when('/query', {templateUrl: 'partials/query.html', controller: 'MyCtrl1'});

//Monitoring
  $routeProvider.when('/monitoring', {templateUrl: 'partials/monitoring.html', controller: 'MyCtrl1'});
  
  //$routeProvider.otherwise({redirectTo: 'partials/main.html'});
}]);
