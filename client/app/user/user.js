'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl',
        authenticate: 'user'
      });
  });
