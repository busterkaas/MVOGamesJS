/*'use strict';

angular.module('mvogamesJsApp')
  .controller('CrewCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
  */
  'use strict';




    angular.module('mvogamesJsApp')
      .controller('CrewCtrl', function($scope, CrewService, socket, $mdDialog, $mdMedia) {

        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


        CrewService.query(function(crews) {
          $scope.Crews = crews;
          socket.syncUpdates('crew', $scope.Crews);
        });

      });
