'use strict';

  angular.module('mvogamesJsApp')
    .factory('UserService', function($resource){
      return $resource('/api/users/:id',{
        id: '@id'
      },{
        update: {
          method: 'PUT'
        }
      });
    });
