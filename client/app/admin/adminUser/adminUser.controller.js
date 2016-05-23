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

    //**Deleting user*
    $scope.deletUser = function(user, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete Crew')
      .textContent('Are you sure you want to delete: ' + user.email + ' (' + user.name + ')')
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        $scope.deleteUser(user);
        var toast = $mdToast.simple()
        .textContent(user.name + ' was deleted')
        .action('Ok')
        .highlightAction(false)
        .position('top');
        $mdToast.show(toast);
      });
      };
  });
