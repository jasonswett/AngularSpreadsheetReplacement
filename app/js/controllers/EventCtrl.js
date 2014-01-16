mftApp.controller('EventCtrl', ['$scope', '$resource', 'Event', '$routeParams', '$route', '$location', '$filter', 
  function($scope, $resource, Event, $routeParams, $route, $location, $filter) {
	$scope.eventList = Event.query();
	}
]);