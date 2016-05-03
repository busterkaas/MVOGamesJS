'use strict';

angular.module('mvogamesJsApp')
  .controller('UserNavbarController', function ($scope,$state) {

    $scope.userMenu = [
      {
    'title': 'My Crew',
    'state': 'myCrew'
  },{
  'title': 'My Profile',
  'state': 'user'
}
    ];

    $scope.goToState = function(item){
      $state.go(item.state,{id:null});
    };


  });
