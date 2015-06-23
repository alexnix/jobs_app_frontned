'use strict';

describe('Directive: isPassword', function () {

  // load the directive's module
  beforeEach(module('jobsClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<is-password></is-password>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the isPassword directive');
  }));
});