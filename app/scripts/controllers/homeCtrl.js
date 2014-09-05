'use strict';

angular.module('angularStateTutApp')
  .controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = 'Home';
    $scope.friends = Friends.get();
    $scope.items = ['home', 'about', 'contact'];
    $scope.selectedValue = 'about';
  }]);