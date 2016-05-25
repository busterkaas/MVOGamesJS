'use strict';

angular.module('mvogamesJsApp')
  .controller('CreateCrewCtrl', function(socket, $scope, CrewService, Auth) {

    Auth.getCurrentUser(function(user){
      $scope.me = user;
    })

  })
