'use strict';

describe('Controller: JobsAppliedCtrl', function () {

  // load the controller's module
  beforeEach(module('jobsClientApp'));

  var JobsAppliedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JobsAppliedCtrl = $controller('JobsAppliedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
