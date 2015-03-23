'use strict';

describe('Service: wailService', function () {

  // load the service's module
  beforeEach(module('wailerGuiApp'));

  // instantiate service
  var wailService;
  beforeEach(inject(function (_wailService_) {
    wailService = _wailService_;
  }));

  it('should do something', function () {
    expect(!!wailService).toBe(true);
  });

});
