'use strict';

describe('Directive: adminNavbar', function () {

  // load the directive's module and view
  beforeEach(module('mvogamesJsApp'));
  beforeEach(module('components/adminNavbar/adminNavbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-navbar></admin-navbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the adminNavbar directive');
  }));
});
