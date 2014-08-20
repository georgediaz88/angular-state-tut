'use strict';

/**
 * @ngdoc function
 * @name angularStateTutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStateTutApp
 */
angular.module('angularStateTutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
