'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adminUser', {
        url: '/admin/adminusers',
        templateUrl: 'app/admin/adminUser/adminUser.html',
        controller: 'AdminUserCtrl',
        authenticate: 'admin'
      });
  });
