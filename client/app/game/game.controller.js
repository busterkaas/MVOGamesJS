/*'use strict';

angular.module('mvogamesJsApp')
  .controller('GameCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
*/
'use strict';




angular.module('mvogamesJsApp')
  .controller('GameCtrl', function($scope, GameService, socket, $mdDialog, $mdMedia, Auth) {

    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.propToSortOn = 'releaseDate';
    $scope.reverse = false;

    GameService.query(function(games) {
      $scope.Games = games;
      socket.syncUpdates('game', $scope.Games);
    });

    $scope.sort = function(keyname) {
      $scope.propToSortOn = keyname;
      $scope.reverse = !$scope.reverse;
    };


    $scope.isCustomer = function() {
      if (Auth.isAdmin()) {
        return false;
      }
      return Auth.isLoggedIn();
    };

    function DialogController($scope, $mdDialog, game, Auth, UserService) {

      Auth.getCurrentUser(function(user) {
        $scope.me = user;
      });
      $scope.selectedGame = game;
      $scope.selectedPlatform = undefined;


      $scope.isCustomer = function() {
        if (Auth.isAdmin()) {
          return false;
        }
        return Auth.isLoggedIn();
      };

      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function() {

        if ($scope.selectedGame && $scope.selectedPlatform) {
          $scope.me.shoppingCartItems.push({
            game: $scope.selectedGame,
            platform: {
              name: $scope.selectedPlatform.name,
              price: $scope.selectedPlatform.price
            },
            amount: 1
          });

          UserService.update({
            id: $scope.me._id
          }, $scope.me, function(user) {
            $scope.me = user;
          });

          console.log($scope.me.shoppingCartItems.length + '');
        } else {
          console.log('No info');
        }
        $mdDialog.hide();
      };





      /*    $scope.loadCrews = function(){
            return $setTimeout(function () {
              $scope.crews = { id: 1, name: 'Scooby Doo' },
            { id: 2, name: 'Shaggy Rodgers' },
            { id: 3, name: 'Fred Jones' },
            { id: 4, name: 'Daphne Blake' },
            { id: 5, name: 'Velma Dinkley' }
            }, 500);
          };
          */
    }

    $scope.showAdvanced = function(gameToSee, ev) {
      $mdDialog.show({
          controller: DialogController,
          templateUrl: 'app/game/dialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          locals: {
            game: gameToSee
          },
          clickOutsideToClose: true,
        })
        .then(function() {
          $scope.status = 'You cancelled the dialog.';
          console.log('Id did one');
        }, function() {
          $scope.status = 'You cancelled the dialog.';
          console.log('Id did two');
        });
    };


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('game');
    });





  });
