'use strict';

describe('Controller: MyCrewCtrl', function () {

  // load the controller's module
  beforeEach(module('mvogamesJsApp'));

  var MyCrewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyCrewCtrl = $controller('MyCrewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
