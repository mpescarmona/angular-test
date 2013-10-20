'use strict';

/* Controllers */

angular.module('testApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('ContactController', ['$scope', function($scope) {
    $scope.contacts = [
      {'id':1,
      'name': 'Pedro Navaja',
      'email': 'pnavaja@blades.com'},
      {'id':2,
      'name': 'Piano Man',
      'email': 'pianoman@billyjoel.com'},
      {'id':3,
      'name': 'Mr. Jones',
      'email': 'mrjones@charlygarcia.com'}
    ];
  }])
  .controller('ContactDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    switch($routeParams.contactId)
    {
      case '1':
        $scope.contact = {'id':1,
                          'name': 'Pedro Navaja',
                          'email': 'pnavaja@blades.com'};
        break;
      case '2':
        $scope.contact = {'id':2,
                          'name': 'Piano Man',
                          'email': 'pianoman@billyjoel.com'};
        break;
      case '3':
        $scope.contact = {'id':3,
                          'name': 'Mr. Jones',
                          'email': 'mrjones@charlygarcia.com'};
        break;
      default:
        $scope.contact = {};
    }
  }]);