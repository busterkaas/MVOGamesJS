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
      return crew.leader.firstName + " " + crew.leader.lastName;
    };

    $scope.getApplicantsCount = function(crew) {
      return crew.applicants.length;
    };

    function DialogController($scope, $mdDialog, crew) {
      if (crew !== null) {
        $scope.crewMembers = crew.users;
        $scope.crewApplicants = crew.applicants;
      }
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }

    $scope.showMembersDialog = function(chosenCrew, ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/app/crew/dialogTemplate.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        locals: {
          crew: chosenCrew
        },
        clickOutsideToClose: false
      });
    };

  });
