'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminNavbarController', function ($scope,$state, Auth) {

    $scope.adminMenu = [
      {
      'title': 'Games',
      'state': 'game'
    },{
    'title': 'Crews',
    'state': 'admin'
  },{
  'title': 'Users',
  'state': 'admin'
}
    ];

    $scope.goToState = function(item){
      $state.go(item.state,{id:null});
    }

  });
