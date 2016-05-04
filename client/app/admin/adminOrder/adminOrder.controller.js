'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminOrderCtrl', function ($scope, OrderService, socket, GameService) {

    OrderService.query(function(orders){
      $scope.Orders = orders;
      socket.syncUpdates('order', $scope.Orders);
    });

    $scope.getGame = function(gameid){
      GameService.get({id:gameid},function(game){
        return game;
      });
    };


  });
