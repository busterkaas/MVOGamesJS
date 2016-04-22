'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crew', {
        url: '/crews',
        templateUrl: 'app/crew/crew.html',
        controller: 'CrewCtrl'
      });
  });
