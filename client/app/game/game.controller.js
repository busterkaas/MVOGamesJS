/*'use strict';

angular.module('mvogamesJsApp')
  .controller('GameCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
*/
'use strict';

  angular.module('mvogamesJsApp')
    .controller('GameCtrl', function($scope, GameService, socket) {
      GameService.query(function(games) {
        $scope.Games = games;
        socket.syncUpdates('game', $scope.Games);
      });

      $scope.$on('$destroy', function(){
        socket.unsyncUpdates('game');
      });

    });
