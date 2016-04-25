'use strict';

describe('Controller: AdminUserCtrl', function () {

  // load the controller's module
  beforeEach(module('mvogamesJsApp'));

  var AdminUserCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminUserCtrl = $controller('AdminUserCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
