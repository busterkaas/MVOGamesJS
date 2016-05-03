'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminUserCtrl', function ($scope, UserService, socket) {


    UserService.query(function(users){
      $scope.Users = users;
      socket.syncUpdates('user', $scope.Users);
    });

    $scope.editUser = function(user){
      $scope.editingUser = user;
    };

    $scope.undoEditUser = function(){
      $scope.editingUser = undefined;
    };

    $scope.deleteUser = function(user){
      UserService.delete({id: user._id});
      $scope.editingUser = undefined;
    };
  });
