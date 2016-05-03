'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminNavbarController', function ($scope,$state) {

    $scope.adminMenu = [
      {
      'title': 'Games',
      'state': 'adminGame'
    },{
    'title': 'Crews',
    'state': 'adminCrew'
  },{
  'title': 'Users',
  'state': 'adminUser'
},{
'title': 'Orders',
'state': 'adminOrder'
}
    ];

    $scope.goToState = function(item){
      $state.go(item.state,{id:null});
    };

  });
