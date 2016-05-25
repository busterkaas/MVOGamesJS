'use strict';

angular.module('mvogamesJsApp')
  .controller('MyCrewCtrl', function($scope, $state, SpecialCrewService, Auth) {

    Auth.getCurrentUser(function(user) {
      $scope.me = user;

      SpecialCrewService.query({
        id: user._id
      }, function(crews) {
        $scope.Crews = crews;
      });
    });




    $scope.goToCrew = function(crew) {
      console.log(crew.name);
      $state.go('crewdetails', {
        id: crew._id,
      });
    };
  });
