'use strict';

angular.module('mvogamesJsApp')
  .controller('CheckoutCtrl', function($scope, $stateParams, Auth) {

    Auth.getCurrentUser(function(user) {
      $scope.me = user;
    });

    $scope.gameDetails = function(game) {
      $scope.viewGameDetails = game;
    };

    $scope.calculateTotalPrice = function(user) {
      var totalPrice = 0;
      user.shoppingCartItems.forEach(function(item) {
        totalPrice += item.platform.price * item.amount;
      });
      return totalPrice;
    };

    /*$scope.subtractAmount = function(item) {

        if(item.platform.amount ==< 1) {
          //delete game from shopping cart
          angular.forEach
        } else {
          angular.forEach($scope.me.shoppingCartItems, function(i) {
            if(i._id === item._id) {
              i.item.platform.amount--;
            }
          });
        }
        //update user
    };

    $scope.addAmount = function(item) {
        item.platform.amount++;
        //update user
    };

    $scope.checkoutShoppingCart = function() {
      var order;
      order.date = new Date();
      order.comment
      OrderService.create($scope.me.shoppingCartItems);
    };*/





  });
