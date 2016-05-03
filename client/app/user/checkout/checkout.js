'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('checkout', {
        url: '/user/checkout',
        templateUrl: 'app/user/checkout/checkout.html',
        controller: 'CheckoutCtrl',
        authenticate: 'user'
      });
  });
