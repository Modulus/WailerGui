'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wailerGuiApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have these fields declared', function(){
    expect(scope.newWail).toBeDefined();
    expect(scope.wails).toBeDefined();
  });

  it('should have a newWail with an empty string', function () {
    expect(scope.newWail.length).toBe(0);
    expect(scope.newWail).toBe("");
  });

  it('should have an empty list of wails', function(){
    expect(scope.wails.length).toBeGreaterThan(1);
  });
});
