'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminUserCtrl', function ($scope, UserService, SpecialOrderService, socket, $mdDialog, $mdToast) {

    UserService.query(function(users){
      $scope.Users = users;
    });

    $scope.editUser = function(user){
      $scope.editingUser = angular.copy(user);
      SpecialOrderService.query({id:user._id}, function(orders) {
        $scope.userOrders = orders;
      });
    };

    $scope.undoEditUser = function(){
      $scope.editingUser = undefined;
    };

    $scope.deleteUser = function(user){
      UserService.delete({id: user._id});
      $scope.editingUser = undefined;
    };


    $scope.editOrder = function(orders){
      $scope.editingUserOrder = orders;
    };

    $scope.unduEditOrder = function(){
      $scope.editingUserOrder = undefined;
    };

    //**Updating User**
    $scope.updateUser = function(user, ev){
      var confirm = $mdDialog.confirm()
      .title('Update User')
      .textContent('Are you sure you want to update: ' + user.email + ' (' + user.name + ')')
      .ariaLabel('Update')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        UserService.update({
          id: $scope.editingUser._id
        }, $scope.editingUser, function(user){
          var toast = $mdToast.simple()
          .textContent(user.email + ' (' + user.name + ')' + ' was updated')
          .action('Ok')
          .highlightAction(false)
          .position('top');
          $mdToast.show(toast);
          $scope.editingUser = undefined;
        });
      });
    };

    //**Deleting User*
    $scope.deletUser = function(user, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete User')
      .textContent('Are you sure you want to delete: ' + user.email + ' (' + user.name + ')')
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        $scope.deleteUser(user);
        var toast = $mdToast.simple()
        .textContent(user.email + ' (' + user.name + ')' + ' was deleted')
        .action('Ok')
        .highlightAction(false)
        .position('top');
        $mdToast.show(toast);
      });
      };

      //**Deleting Item from ShoppingCart**
      $scope.deleteUserFromCrew = function(user, ev){
        var confirm = $mdDialog.confirm()
        .title('Delete Item from ShoppingCart')
        .textContent('Are you sure you want to delete this item')
        .ariaLabel('Delete')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, I am sure!')
        .cancel('No');
        $mdDialog.show(confirm).then(function(){
          _.remove($scope.editingUser.shoppingCartItems, function(u){
            return u._id === user._id;
          });
          UserService.update({
            id: $scope.editingUser._id
          }, $scope.editingUser, function(user){
            $scope.editingUser = user;
            var toast = $mdToast.simple()
            .textContent('Item was deleted')
            .action('Ok')
            .highlightAction(false)
            .position('top');
            $mdToast.show(toast);
          });
        });
      };


    });
