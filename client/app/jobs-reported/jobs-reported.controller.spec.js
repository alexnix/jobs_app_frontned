'use strict';

describe('Controller: JobsReportedCtrl', function () {

  // load the controller's module
  beforeEach(module('jobsClientApp'));

  var JobsReportedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JobsReportedCtrl = $controller('JobsReportedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
