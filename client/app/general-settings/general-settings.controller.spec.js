'use strict';

describe('Controller: GeneralSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('jobsClientApp'));

  var GeneralSettingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneralSettingsCtrl = $controller('GeneralSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
