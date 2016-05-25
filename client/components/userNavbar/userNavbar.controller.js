'use strict';

angular.module('mvogamesJsApp')

.controller('UserNavbarController', function($scope, $state, Auth) {

  Auth.getCurrentUser(function(user) {
    $scope.me = user;

  });

  $scope.itemsCount = function() {
    var number = 0;
    $scope.me.shoppingCartItems.forEach(function(item) {
      number += item.amount;
    });
    return number;
  };



  $scope.userMenu = [{
    'title': 'My Crews',
    'state': 'myCrew'
  }, {
    'title': 'My Profile',
    'state': 'user'
  }];

  $scope.goToState = function(item) {
    $state.go(item.state, {
      id: null
    });
  };

  $scope.checkout = function() {
    $state.go('checkout');
  };


});
