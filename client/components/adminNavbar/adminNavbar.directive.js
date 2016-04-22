'use strict';

angular.module('mvogamesJsApp')
  .directive('adminNavbar', () =>
    ({
      templateUrl: 'components/adminNavbar/adminNavbar.html',
      restrict: 'E',
      controller: 'AdminNavbarController',
      controllerAs: 'aNav'
  }));


/*  angular.module('mvogamesJsApp')
    .directive('adminNavbar', function () {
      return {
        templateUrl: 'components/adminNavbar/adminNavbar.html',
        restrict: 'E',
        controller: 'AdminNavbarController',
        link: function (scope, element, attrs) {
        }
      };
    });

    */
