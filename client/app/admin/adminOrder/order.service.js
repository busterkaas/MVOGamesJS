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
    })
      .factory('SpecialOrderService', function($resource){
        return $resource('/api/orders/user/:id',
        {'query': { method: 'GET' }},{
          id: '@id'
        });
      });
