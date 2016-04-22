'use strict';

describe('Controller: AdminGameCtrl', function () {

  // load the controller's module
  beforeEach(module('mvogamesJsApp'));

  var AdminGameCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminGameCtrl = $controller('AdminGameCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
