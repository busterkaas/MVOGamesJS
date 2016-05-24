'use strict';

angular.module('mvogamesJsApp')
  .controller('UserCtrl', function ($scope, $stateParams, Auth, UserService) {

    Auth.getCurrentUser(function(user){
        $scope.me = user;
    });



    $scope.updateMe = function(){
        console.log($scope.me._id);
        UserService.update({id: $scope.me._id}, $scope.me, function(user){
          $scope.me = user;



        console.log(user.firstName);
      });
    };




  });
