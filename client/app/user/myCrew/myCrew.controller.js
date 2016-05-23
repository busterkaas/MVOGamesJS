'use strict';

angular.module('mvogamesJsApp')
  .controller('MyCrewCtrl', function ($scope, $state, CrewService) {
    CrewService.query(function(crews) {
      $scope.Crews = crews;
    });

    $scope.goToCrew = function(crew){
      console.log(crew.name);
      $state.go('crewdetails', {
        id: crew._id,
      });
    };
  });
