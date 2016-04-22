'use strict';

describe('Controller: CrewCtrl', function () {

  // load the controller's module
  beforeEach(module('mvogamesJsApp'));

  var CrewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrewCtrl = $controller('CrewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
