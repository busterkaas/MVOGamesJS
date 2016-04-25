'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminNavbarController', function ($scope,$state, Auth) {

    $scope.adminMenu = [
      {
      'title': 'Games',
      'state': 'adminGame'
    },{
    'title': 'Crews',
    'state': 'adminCrew'
  },{
  'title': 'Users',
  'state': 'admin'
}
    ];

    $scope.goToState = function(item){
      $state.go(item.state,{id:null});
    }

  });
