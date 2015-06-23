'use strict';

describe('Controller: NewJobCtrl', function () {

  // load the controller's module
  beforeEach(module('jobsClientApp'));

  var NewJobCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewJobCtrl = $controller('NewJobCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
