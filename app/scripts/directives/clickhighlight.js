'use strict';

/**
 * @ngdoc directive
 * @name angularStateTutApp.directive:clickHighlight
 * @description
 * # clickHighlight
 */
angular.module('angularStateTutApp')
  .directive('clickHighlight', function () {
    return {
      template: '<div>click ME!!</div>',
      restrict: 'AE',
      link: function postLink(scope, element) {
        element.on('click', function(){
          element.css('background-color', 'yellow');
        });
      }
    };
  });
