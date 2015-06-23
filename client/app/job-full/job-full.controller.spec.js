'use strict';

describe('Controller: JobFullCtrl', function () {

  // load the controller's module
  beforeEach(module('jobsClientApp'));

  var JobFullCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JobFullCtrl = $controller('JobFullCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
