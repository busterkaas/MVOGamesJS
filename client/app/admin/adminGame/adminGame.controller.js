/*'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminGameCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
  */
'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminGameCtrl', function($scope, GameService, socket, $mdDialog) {


    //Load all games and genres (Filter genres)
    GameService.query(function(games) {
      $scope.Games = games;
      var allGenres = [];
      $scope.filterGenres = [];
      angular.forEach(games, function(game) {
        game.releaseDate = new Date(game.releaseDate);
        angular.forEach(game.genres, function(genre) {
          allGenres.push(genre);
        });
      });
      _(allGenres).uniq(g => g.name).forEach(g => $scope.filterGenres.push(g));

      socket.syncUpdates('Game', $scope.Games);
    });



    $scope.editGame = function(game) {
      $scope.editingGame = game;
    };

    $scope.undoEditGame = function() {
      $scope.editingGame = undefined;
    };

    $scope.deleteGame = function(game) {
      GameService.delete({
        id: game._id
      });
      $scope.editingGame = undefined;
    };

    $scope.confirmDeleteDialog = function(game, ev) {
      var confirm = $mdDialog.confirm()
        .title('Delete Crew')
        .textContent('Are you sure you want to delete ' + game.title)
        .ariaLabel('Delete')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, I am sure!')
        .cancel('No');
      $mdDialog.show(confirm).then(function() {
        $scope.deleteGame(game);
      }, function() {
        //do nothing
      });
    };

    //update game
    $scope.updateGame = function() {
      GameService.update({
          id: $scope.editingGame._id
        }, $scope.editingGame,
        function(game) {
          $scope.editingGame = game;
        });
    };





    //This is for genre chips

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(genre) {
        return (genre._lowername.indexOf(lowercaseQuery) === 0);
      };
    }


    function querySearch(query) {
      var results = query ? $scope.genres.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }
      // Otherwise, create a new one
      return {
        name: chip
      };
    }


    function loadGenres() {
      var genries = [{
        'name': 'Action',
      }, {
        'name': 'FPS',
      }, {
        'name': 'Shooter',
      }, {
        'name': 'RPG',
      }, {
        'name': 'RTS',
      }, {
        'name': 'Sport',
      }, {
        'name': 'Racing',
      }, {
        'name': 'Third Person',
      }];
      return genries.map(function(g) {
        g._lowername = g.name.toLowerCase();
        return g;
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



  });
