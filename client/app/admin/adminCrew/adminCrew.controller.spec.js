'use strict';

describe('Controller: AdminCrewCtrl', function () {

  // load the controller's module
  beforeEach(module('mvogamesJsApp'));

  var AdminCrewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminCrewCtrl = $controller('AdminCrewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
