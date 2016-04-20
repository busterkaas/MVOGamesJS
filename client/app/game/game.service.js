'use strict';

  angular.module('mvogamesJsApp')
    .factory('GameService', function($resource){
      return $resource('/api/games/:id',{
        id: '@id'
      },{
        update: {
          method: 'PUT'
        }
      });
    });
