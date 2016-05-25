'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myCrew', {
        url: '/user/mycrew/:id',
        templateUrl: 'app/user/myCrew/myCrew.html',
        controller: 'MyCrewCtrl',
        authenticate: 'user'
      })
      .state('createCrew', {
        url: '/user/createCrew',
        templateUrl: 'app/user/myCrew/createCrew.html',
        controller:'CreateCrewCtrl',
        authenticate: 'user'
      });
  });
