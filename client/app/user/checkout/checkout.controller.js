'use strict';

angular.module('mvogamesJsApp')
  .controller('CheckoutCtrl', function ($scope, $stateParams, Auth) {

    Auth.getCurrentUser(function(user){
        $scope.me = user;
    });




  });
