'use strict';

describe('Directive: job', function () {

  // load the directive's module and view
  beforeEach(module('jobsClientApp'));
  beforeEach(module('app/Directives/job/job.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<job></job>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the job directive');
  }));
});