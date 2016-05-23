'use strict';

angular.module('mvogamesJsApp')
  .controller('CrewDetailsCtrl', function($scope, $stateParams, CrewService) {

CrewService.get({id:$stateParams.id}, function(crew){
  $scope.crew = crew;
})


  });
