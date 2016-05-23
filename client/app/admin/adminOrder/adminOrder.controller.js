'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminOrderCtrl', function($scope, OrderService, socket, $mdDialog) {


    OrderService.query(function(orders) {
      $scope.Orders = orders;
      socket.syncUpdates('order', $scope.Orders);
    });

    $scope.editDetails = function(order) {
      $scope.orderDetails = order;
    };

    $scope.undoOrderDetails = function() {
      $scope.orderDetails = undefined;
    };

    $scope.deleteOrder = function(order) {
      OrderService.delete({
        id: order._id
      });
      $scope.orderDetails = undefined;
    };

    $scope.calculateTotalPrice = function(order) {
      var totalPrice = 0;
      order.orderlines.forEach(function(orderline){
        console.log(orderline);
        totalPrice += orderline.platform.price * orderline.amount;
      });
      return totalPrice;
    };

    $scope.confirmDeleteDialog = function(order, ev) {
      var confirm = $mdDialog.confirm()
        .title('Delete Order')
        .textContent('Are you sure you want to delete ' + order._id)
        .ariaLabel('Delete')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, I am sure!')
        .cancel('No');
      $mdDialog.show(confirm).then(function() {
        $scope.deleteOrder(order);
      }, function() {
        //do nothing
      });
    };

  });
