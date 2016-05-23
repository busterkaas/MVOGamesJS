/*'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminGameCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
  */
'use strict';

angular.module('mvogamesJsApp')
  .controller('AdminGameCtrl', function($scope, GameService, socket, $mdDialog, $state) {


    //Load all games and genres (Filter genres)
    GameService.query(function(games) {
      $scope.Games = games;
      var allGenres = [];
      $scope.filterGenres = [];
      angular.forEach(games, function(game, key) {
        game.releaseDate = new Date(game.releaseDate);;
          angular.forEach(game.genres, function(genre) {
          allGenres.push(genre);
        });
      });
      _(allGenres).uniq(g => g.name).forEach(g => $scope.filterGenres.push(g));

      $scope.filterGenres = $scope.filterGenres.map(function(g) {
        g._lowername = g.name.toLowerCase();
        return g;
      });
      $scope.genres = $scope.filterGenres;

  });





    $scope.goToGame = function(game){
      console.log(game.title);
      $state.go('admingamedetails', {
        id: game._id,
      });
    };



    $scope.editGame = function(game) {
      $scope.selectedGenres = [];
      $scope.editingGame = angular.copy(game);
      $scope.editingGame.genres.forEach(function(genre){
        var g = _.find($scope.genres, function(o) {
        return o._lowername == genre.name.toLowerCase();
        });
        $scope.selectedGenres.push(g);
      })
      console.log(game);
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
    function querySearch(query) {
      var results = query ? $scope.genres.filter(createFilterFor(query)) : [];
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
        if($scope.selectedGenres){
        $scope.selectedGenres.forEach(function(g){
          if(g._lowername.indexOf(lowercaseQuery) >-1){
          return false;
        }
        });
      }
        return genre._lowername.indexOf(lowercaseQuery) >-1;
      };
  };

});
