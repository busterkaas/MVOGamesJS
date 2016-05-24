'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crew', {
        url: '/crews',
        templateUrl: 'app/crew/crew.html',
        controller: 'CrewCtrl'
      })
      .state('crewdetails', {
        url: '/crews/:id',
        templateUrl: 'app/crew/crew-details.html',
        controller:'CrewDetailsCtrl',
        authenticate: 'user'
      });
  });
