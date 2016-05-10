'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminOrderCtrl', function ($scope, OrderService, socket) {

    OrderService.query(function(orders){
      $scope.Orders = orders;
      socket.syncUpdates('order', $scope.Orders);
    });

    $scope.editDetails = function(order){
      $scope.orderDetails = order;
    };

    $scope.undoOrderDetails = function(){
      $scope.orderDetails = undefined;
    };

    $scope.deleteOrder = function(order){
      OrderService.delete({id: order._id});
      $scope.orderDetails = undefined;
    };

    $scope.calculateTotalPrice = function(order){
      var totalPrice = 0;
      for (var orderline in order.orderlines) {
        totalPrice += orderline.price * orderline.amount;
      }
      return totalPrice;
    };

  });
