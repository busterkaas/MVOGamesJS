'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adminOrder', {
        url: '/admin/adminorders',
        templateUrl: 'app/admin/adminOrder/adminOrder.html',
        controller: 'AdminOrderCtrl',
        authenticate: 'admin'
      });
  });
