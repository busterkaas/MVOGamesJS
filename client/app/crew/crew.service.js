'use strict';

  angular.module('mvogamesJsApp')
    .factory('CrewService', function($resource){
      return $resource('/api/crews/:id',{
        id: '@id'
      },{
        update: {
          method: 'PUT'
        }
      });
    });
