'use strict';

describe('Controller: AdminOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('mvogamesJsApp'));

  var AdminOrderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminOrderCtrl = $controller('AdminOrderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
