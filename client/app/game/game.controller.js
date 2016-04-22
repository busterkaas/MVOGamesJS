/*'use strict';

angular.module('mvogamesJsApp')
  .controller('GameCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
*/
'use strict';




  angular.module('mvogamesJsApp')
    .controller('GameCtrl', function($scope, GameService, socket, $mdDialog, $mdMedia) {

      $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


      GameService.query(function(games) {
        $scope.Games = games;
        socket.syncUpdates('game', $scope.Games);
      });

      function DialogController($scope, $mdDialog, game) {
      if (game != null) {
        $scope.selectedGame = game;
      }

      $scope.hide = function () {
        $mdDialog.hide();
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
      $scope.answer = function (result) {
        $mdDialog.hide(result);
      };
    }


      $scope.showAdvanced = function(gameToSee, ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
      controller: DialogController,
      templateUrl: 'app/game/dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals: {game: gameToSee},
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
      })
      .then(function(selectedGame) {
      $scope.status = 'You said the information was "';
      }, function() {
      $scope.status = 'You cancelled the dialog.';
      });
      };





      $scope.$on('$destroy', function(){
        socket.unsyncUpdates('game');
      });

    });
