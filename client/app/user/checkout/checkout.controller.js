'use strict';

angular.module('mvogamesJsApp')
  .controller('CheckoutCtrl', function ($scope, $stateParams, User) {

    User.get({name: $stateParams.name}, function(user){
      $scope.me = user;
    });




  });
