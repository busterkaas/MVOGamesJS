'use strict';

describe('Directive: userNavbar', function () {

  // load the directive's module and view
  beforeEach(module('mvogamesJsApp'));
  beforeEach(module('components/userNavbar/userNavbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-navbar></user-navbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the userNavbar directive');
  }));
});
