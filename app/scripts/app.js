'use strict';

angular
  .module('angularStateTutApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        resolve: {
          friends: ['$http', function($http) {
            // return $http.get('/api/friends.json').then(function(response){
            //   return response.data;
            // });
            return [{name: 'So', age: 33}];
          }]
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      });

  }]);
