'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/games',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
      });
  });
