'use strict';

angular.module('angularStateTutApp')
  .factory('Friends', [function () {
    return {
      get: function() {
        return [
          {name: 'Geo', age: 100},
          {name: 'Carl', age: 40}
        ];
      }
    };
  }]);