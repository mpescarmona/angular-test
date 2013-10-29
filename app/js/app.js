'use strict';


// Declare app level module which depends on filters, and services
angular.module('testApp', [
  'ngRoute',
  'testApp.filters',
  'testApp.services',
  'testApp.directives',
  'testApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/contacts', {templateUrl: 'partials/partialContacts.html', controller: 'ContactController'});
  $routeProvider.when('/contacts/:contactId', {templateUrl: 'partials/partialContactDetails.html', controller: 'ContactDetailController'});
  $routeProvider.when('/contacts/:contactId/json', {templateUrl: 'partials/partialContactDetailsJson.html', controller: 'ContactDetailController'});
  $routeProvider.when('/contacts/:contactId/details', {templateUrl: 'partials/partialContacts.html', controller: 'ContactShowDetailsController'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
