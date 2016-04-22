'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adminGame', {
        url: '/admin/admingames',
        templateUrl: 'app/admin/adminGame/adminGame.html',
        controller: 'AdminGameCtrl',
        authenticate: 'admin'
      });
  });
