'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminUserCtrl', function ($scope, UserService, socket, $mdDialog, $mdToast) {

    UserService.query(function(users){
      $scope.Users = users;
      socket.syncUpdates('user', $scope.Users);
    });

    $scope.editUser = function(user){
      $scope.editingUser = angular.copy(user);
    };

    $scope.undoEditUser = function(){
      $scope.editingUser = undefined;
    };

    $scope.deleteUser = function(user){
      UserService.delete({id: user._id});
      $scope.editingUser = undefined;
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


  //**Deleting Item in cart from User**
  $scope.deleteGameItemFromUser = function(items, ev){
    var confirm = $mdDialog.confirm()
    .title('Delete Item from User')
    .textContent('Are you sure you want to delete: ' + items.game.title)
    .ariaLabel('Delete')
    .targetEvent(ev)
    .openFrom('#left')
    .ok('YES, I am sure!')
    .cancel('No');
    $mdDialog.show(confirm).then(function(){
      _.remove($scope.editingUser.shoppingCartItems, function(u){
        return u._id === items._id;
      });
      UserService.update({
        id: $scope.editingUser._id
      }, $scope.editingUser, function(item){
        $scope.editingUser = item;
        var toast = $mdToast.simple()
        .textContent(items.game.title + ' was deleted')
        .action('Ok')
        .highlightAction(false)
        .position('top');
        $mdToast.show(toast);
      });
    });
  };

    });
