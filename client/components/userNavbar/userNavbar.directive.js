'use strict';

angular.module('mvogamesJsApp')
  .directive('userNavbar', function() {
    return {
      templateUrl: 'components/userNavbar/userNavbar.html',
      restrict: 'EA',
      controller: 'UserNavbarController',
      link: function() {}
    };
  });
