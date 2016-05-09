'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminCrewCtrl', function ($scope, CrewService, socket, $mdDialog) {


    CrewService.query(function(crews){
      $scope.Crews = crews;
      socket.syncUpdates('crew', $scope.Crews);
    });

    $scope.editCrew = function(crew){
      $scope.editingCrew = crew;
    };

    $scope.undoEditCrew = function(){
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

    $scope.editGameSuggestion = function(gameSuggestions) {
      $scope.editingCrewGameSuggestion = gameSuggestions;
    };

    $scope.undoEditGameSuggestion = function(){
      $scope.editingCrewGameSuggestion = undefined;
    };


  });
