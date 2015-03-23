'use strict';

describe('Service: nameService', function () {

  // load the service's module
  beforeEach(module('wailerGuiApp'));

  // instantiate service
  var nameService;
  beforeEach(inject(function (_nameService_) {
    nameService = _nameService_;
  }));

  it('should do something', function () {
    expect(!!nameService).toBe(true);
  });

  it('should return a name', function(){
    expect(nameService.createName().length).toBeGreaterThan(6);
  })

});
