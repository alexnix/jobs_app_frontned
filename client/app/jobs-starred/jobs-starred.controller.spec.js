'use strict';

describe('Controller: JobsStarredCtrl', function () {

  // load the controller's module
  beforeEach(module('jobsClientApp'));

  var JobsStarredCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JobsStarredCtrl = $controller('JobsStarredCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
