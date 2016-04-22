/*'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminGameCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
  */
'use strict';

  angular.module('mvogamesJsApp')
    .controller('AdminGameCtrl', function($scope, GameService, socket, $mdDialog) {


      GameService.query(function(games) {
        $scope.Games = games;
        socket.syncUpdates('game', $scope.Games);
      });

      $scope.editGame = function(game){
        $scope.editingGame = game;
      };

      $scope.undoEditGame = function(){
        $scope.editingGame = undefined;
      };

      $scope.deleteGame = function(game){
        GameService.delete({id: game._id});
        $scope.editingGame = undefined;
      };

      $scope.confirmDeleteDialog = function(game, ev){
        var confirm = $mdDialog.confirm()
        .title('Delete Game')
        .textContent('Are you sure you want to delete '+ game.title)
        .ariaLabel('Delete')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, I am sure!')
        .cancel('No');
        $mdDialog.show(confirm).then(function(){
          $scope.deleteGame(game);
        }, function() {
        //do nothing
          });
      };

    });
