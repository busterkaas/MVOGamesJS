'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminCrewCtrl', function ($scope, CrewService, socket, $mdDialog, $mdToast) {

    CrewService.query(function(crews){
      $scope.Crews = crews;
      socket.syncUpdates('crew', $scope.Crews);
    });

    $scope.editCrew = function(crew){
      $scope.editingCrew = crew;
      $scope.copy = angular.copy($scope.editingCrew);
    };

    $scope.undoEditCrew = function(){
      $scope.editingCrew = $scope.copy;
      $scope.editingCrew = undefined;
    };

    $scope.deleteCrew = function(crew){
      CrewService.delete({id: crew._id});
      $scope.editingCrew = undefined;
    };

    $scope.confirmDeleteDialog = function(crew, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete Crew')
      .textContent('Are you sure you want to delete '+ crew.name)
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        $scope.deleteCrew(crew);
      }, function() {
      //do nothing
        });
    };

    $scope.deleteUserFromCrew = function(crew, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete User from Crew')
      .textContent('Are you sure you want to delete this user')
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        _.remove($scope.crew.users, function(u){
          return u._id === $scope.editingCrew._id;
        });

        CrewService.update({
          id: $scope.crew._id
        }, $scope.crew, function(crew){
          $scope.crew = crew;
          var toast = $mdToast.simple()
          .textContent('User deleted')
          .action('Ok')
          .highlightAction(false)
          .position('top');
          $mdToast.show(toast);
          $scope.editingCrew = undefined;
        });
      });
    };

    $scope.editGameSuggestion = function(gameSuggestions) {
      $scope.editingCrewGameSuggestion = gameSuggestions;
    };

    $scope.undoEditGameSuggestion = function(){
      $scope.editingCrewGameSuggestion = undefined;
    };


  });
