'use strict';

angular.module('angularStateTutApp')
  .controller('homeCtrl', ['$scope', 'friends', function($scope, friends) {
    $scope.title = 'Home';
    $scope.friends = friends;
    $scope.items = ['home', 'about', 'contact'];
    $scope.selectedValue = 'about';
  }]);