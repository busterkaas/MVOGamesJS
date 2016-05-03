'use strict';

  angular.module('mvogamesJsApp')
    .factory('OrderService', function($resource){
      return $resource('/api/orders/:id',{
        id: '@id'
      },{
        update: {
          method: 'PUT'
        }
      });
    });
