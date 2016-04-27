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

      //This is for genre chips

      function querySearch (query) {
         var results = query ? self.genres.filter(createFilterFor(query)) : [];
         return results;
       };

         /**
          * Return the proper object when the append is called.
          */
          function transformChip(chip) {
    // If it is an object, it's already a known chip
    if (angular.isObject(chip)) {
      return chip;
    }
    // Otherwise, create a new one
    return { name: chip }
  }

           function loadGenres() {
             var genries = [
               {
                 'name': 'Action',
               },
               {
                 'name': 'FPS',
               },
               {
                 'name': 'Shooter',
               },
               {
                 'name': 'RPG',
               },
               {
                 'name': 'RTS',
               },
               {
                 'name': 'Sport',
               },
               {
                 'name': 'Racing',
               }
             ];
             return genries.map(function (g) {
               g._lowername = g.name.toLowerCase();
               return genries;
             });
         }


   $scope.readonly = false;
   $scope.selectedGenre = null;
   $scope.genreSearchText = null;
   $scope.querySearch = querySearch;
   $scope.genres = loadGenres();
   $scope.selectedGenres = [];
   $scope.numberChips = [];
   $scope.numberChips2 = [];
   $scope.numberBuffer = '';
   $scope.autocompleteDemoRequireMatch = true;
   $scope.transformChip = transformChip;


   /**
      * Create filter function for a query string
      */
     function createFilterFor(query) {
       var lowercaseQuery = angular.lowercase(query);
       return function filterFn(genre) {
         return (genre._lowername.indexOf(lowercaseQuery) === 0);
       };
     }

   });
