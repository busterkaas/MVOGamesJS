'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminGameDetailsCtrl', function($scope, GameService, socket, $mdDialog, $stateParams) {

    GameService.query(function(games) {
      $scope.Games = games;
      var allGenres = [];
      $scope.filterGenres = [];
      angular.forEach(games, function(game, key) {
        game.releaseDate = new Date(game.releaseDate);
        angular.forEach(game.genres, function(genre, key) {
          allGenres.push(genre);
        });
      });
      _(allGenres).uniq(g => g.name).forEach(g => $scope.filterGenres.push(g));

      $scope.filterGenres = $scope.filterGenres.map(function(g) {
        g._lowername = g.name.toLowerCase();
        return g;
      });
    });

    GameService.get({
      id: $stateParams.id
    }, function(game) {
      $scope.Game = angular.copy(game);
      $scope.Game.releaseDate = new Date(game.releaseDate);

      $scope.selectedGenres = [];
      $scope.Game.filterGenres.forEach(function(genre) {
        var g = _.find($scope.filterGenres, function(o) {
          return o._lowername == genre.name.toLowerCase();
        });
        $scope.selectedGenres.push(g);
      })
    });

    //DELETE GAME SECTION

    $scope.deleteGame = function(game) {
      GameService.delete({
        id: game._id
      });
      window.goBack();
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


    //UPDATE GAME SECTION
    $scope.updateGame = function() {
      GameService.update({
          id: $scope.editingGame._id
        }, $scope.editingGame,
        function(game) {
          $scope.Game = game;
          window.goBack();
        });
    }



    //GENRE SECTION ////////////////////////////////



    //This is for genre chips
    function querySearch(query) {
      var results = query ? $scope.filterGenres.filter(createFilterFor(query)) : [];
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
      return {
        name: chip
      };
    }


    $scope.readonly = false;
    $scope.selectedGenre = null;
    $scope.genreSearchText = null;
    $scope.querySearch = querySearch;
    /*$scope.genres = loadGenres();*/
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
        if($scope.selectedGenres){
        $scope.selectedGenres.forEach(function(g){
          if(g._lowername.indexOf(lowercaseQuery) >-1){
          return false;
        }
        });
      }
        return genre._lowername.indexOf(lowercaseQuery) >-1;
      };
    }


  });
