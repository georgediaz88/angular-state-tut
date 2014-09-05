'use strict';

/**
 * @ngdoc function
 * @name angularStateTutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStateTutApp
 */
angular.module('angularStateTutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
