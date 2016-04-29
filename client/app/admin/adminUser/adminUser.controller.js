'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminUserCtrl', function ($scope, UserService, socket) {


    UserService.query(function(users){
      $scope.Users = users;
      socket.syncUpdates('user', $scope.Users);
    });
  });
