'use strict';

angular.module('mvogamesJsApp')
  .controller('CrewDetailsCtrl', function($scope, $stateParams, CrewService) {

$scope.gameSugSelected = undefined;

CrewService.get({id:$stateParams.id}, function(crew){
  $scope.crew = crew;
})


$scope.undoGameSuggestionDetails = function(){
  $scope.gameSugSelected = undefined;
}

$scope.gameSugDetails = function(gameSug){
  $scope.gameSugSelected = gameSug;
}

  });
