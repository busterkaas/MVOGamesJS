'use strict';

angular.module('mvogamesJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adminCrew', {
        url: '/admin/admincrews',
        templateUrl: 'app/admin/adminCrew/adminCrew.html',
        controller: 'AdminCrewCtrl',
        authenticate: 'admin'
      });
  });
