'use strict';

describe('Directive: search', function () {

  // load the directive's module and view
  beforeEach(module('jobsClientApp'));
  beforeEach(module('app/Directives/search/search.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search></search>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the search directive');
  }));
});