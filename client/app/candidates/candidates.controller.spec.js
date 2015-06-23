'use strict';

describe('Controller: CandidatesCtrl', function () {

  // load the controller's module
  beforeEach(module('jobsClientApp'));

  var CandidatesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidatesCtrl = $controller('CandidatesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
