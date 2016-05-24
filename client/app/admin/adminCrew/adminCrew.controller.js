'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminCrewCtrl', function ($scope, $stateParams, CrewService, socket, $mdDialog, $mdToast) {

    CrewService.query(function(crews){
      $scope.Crews = crews;
      socket.syncUpdates('crew', $scope.Crews);
    });

    $scope.editCrew = function(crew){
      $scope.editingCrew = angular.copy(crew);
    };

    $scope.undoEditCrew = function(){
      $scope.editingCrew = undefined;
    };

    $scope.deleteCrew = function(crew){
      CrewService.delete({id: crew._id});
      $scope.editingCrew = undefined;
    };

    //**Updating Crew**
    $scope.updateCrew = function(crew, ev){
      var confirm = $mdDialog.confirm()
      .title('Updating Crew')
      .textContent('Are you sure you want to update: ' + crew.name)
      .ariaLabel('Update')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        CrewService.update({
          id: $scope.editingCrew._id
        }, $scope.editingCrew, function(crew){
          var toast = $mdToast.simple()
          .textContent(crew.name + ' was updated')
          .action('Ok')
          .highlightAction(false)
          .position('top');
          $mdToast.show(toast);
          $scope.editingCrew = undefined;
        });
      });
    };

    //**Deleting whole Crew**
    $scope.deletCrew = function(crew, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete Crew')
      .textContent('Are you sure you want to delete' + crew.name)
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        $scope.deleteCrew(crew);
        var toast = $mdToast.simple()
        .textContent(crew.name + ' was deleted')
        .action('Ok')
        .highlightAction(false)
        .position('top');
        $mdToast.show(toast);
      });
      };

    //**Deleting User from Crew**
    $scope.deleteUserFromCrew = function(user, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete User from Crew')
      .textContent('Are you sure you want to delete: ' + user.name)
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        _.remove($scope.editingCrew.users, function(u){
          return u._id === user._id;
        });
        CrewService.update({
          id: $scope.editingCrew._id
        }, $scope.editingCrew, function(crew){
          $scope.editingCrew = crew;
          var toast = $mdToast.simple()
          .textContent(user.name + ' was deleted')
          .action('Ok')
          .highlightAction(false)
          .position('top');
          $mdToast.show(toast);
        });
      });
    };

    //**Deleting Applicant from Crew**
    $scope.deleteApplicantFromCrew = function(applicant, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete Applicant from Crew')
      .textContent('Are you sure you want to delete: ' + applicant.name)
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        _.remove($scope.editingCrew.applicants, function(a){
          return a._id === applicant._id;
        });
        CrewService.update({
          id: $scope.editingCrew._id
        }, $scope.editingCrew, function(crew){
          $scope.editingCrew = crew;
          var toast = $mdToast.simple()
          .textContent(applicant.name + ' was deleted')
          .action('Ok')
          .highlightAction(false)
          .position('top');
          $mdToast.show(toast);
        });
      });
    };

    $scope.editGameSuggestion = function(gameSuggestions) {
      $scope.editingCrewGameSuggestion = gameSuggestions;
      $scope.editingCrewGameSuggestion.expiration = moment($scope.editingCrewGameSuggestion.expiration).toDate();
    };

    $scope.undoEditGameSuggestion = function(){
      $scope.editingCrewGameSuggestion = undefined;
    };

    //**Deleting Game Suggestion from Crew**
    $scope.deleteGameSuggestionFromCrew = function(gamesugg, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete game suggestion from Crew')
      .textContent('Are you sure you want to delete: ' +  gamesugg.game.title)
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        _.remove($scope.editingCrew.gameSuggestions, function(a){
          return a._id === gamesugg._id;
        });
        CrewService.update({
          id: $scope.editingCrew._id
        }, $scope.editingCrew, function(crew){
          $scope.editingCrew = crew;
          var toast = $mdToast.simple()
          .textContent(gamesugg.game.title + ' was deleted')
          .action('Ok')
          .highlightAction(false)
          .position('top');
          $mdToast.show(toast);
          $scope.editingCrewGameSuggestion = undefined;
        });
      });
    };

    //**Deleting an User from gamesuggestion**
    $scope.deleteUserFromGameSuggestion = function(user, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete Applicant from Crew')
      .textContent('Are you sure you want to delete: ' + user.name)
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        _.remove($scope.editingCrewGameSuggestion.users, function(a){
          return a._id === user._id;
        });
        CrewService.update({
          id: $scope.editingCrew._id
        }, $scope.editingCrew, function(crew){
          $scope.editingCrew = crew;
          var toast = $mdToast.simple()
          .textContent(user.name + ' was deleted')
          .action('Ok')
          .highlightAction(false)
          .position('top');
          $mdToast.show(toast);
        });
      });
    };


  });
