'use strict';

describe('Controller: MyJobsCtrl', function () {

  // load the controller's module
  beforeEach(module('jobsClientApp'));

  var MyJobsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyJobsCtrl = $controller('MyJobsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
