'use strict';

describe('Service: API', function () {

  // load the service's module
  beforeEach(module('jobsClientApp'));

  // instantiate service
  var API;
  beforeEach(inject(function (_API_) {
    API = _API_;
  }));

  it('should do something', function () {
    expect(!!API).toBe(true);
  });

});
