'use strict';

angular.module('mvogamesJsApp')
  .controller('CrewCtrl', function($scope, CrewService, socket, $mdDialog) {

    CrewService.query(function(crews) {
      $scope.Crews = crews;
      socket.syncUpdates('crew', $scope.Crews);
    });

    $scope.getMembersCount = function(crew) {
      return crew.users.length;
    };

    $scope.getLeaderName = function(crew) {
      return crew.leader.firstName;
    };

    $scope.getApplicantsCount = function(crew) {
      return crew.applicants.length;
    };

    $scope.showCrewMemberNamesDialog = function(event) {
      $mdDialog.show({
        templateUrl: '/app/crew/crewMemberNamesDialog.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true
      });
    };

    $scope.getCrewMemberName = function(user) {
      return user.firstName;
    };

  });