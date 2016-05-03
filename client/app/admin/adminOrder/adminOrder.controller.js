'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminOrderCtrl', function ($scope, OrderService, socket) {

    OrderService.query(function(orders){
      $scope.Orders = orders;
      socket.syncUpdates('order', $scope.Orders);
    });

  });
