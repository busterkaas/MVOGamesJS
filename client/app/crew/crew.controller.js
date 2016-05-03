'use strict';

    angular.module('mvogamesJsApp')
      .controller('CrewCtrl', function($scope, CrewService, socket) {

        CrewService.query(function(crews) {
          $scope.Crews = crews;
          socket.syncUpdates('crew', $scope.Crews);
        });

      });
