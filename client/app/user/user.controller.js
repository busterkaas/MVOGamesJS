'use strict';

angular.module('mvogamesJsApp')
  .controller('UserCtrl', function ($scope, $stateParams, Auth, UserService) {

    Auth.getCurrentUser(function(user){
        $scope.me = user;
    });



    $scope.updateMe = function(){
        UserService.update({id: $scope.me._id}, $scope.me, function(user){
          $scope.me = user;
      });
    };
  });
