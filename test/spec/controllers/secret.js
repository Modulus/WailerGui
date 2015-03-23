'use strict';

describe('Controller: SecretCtrl', function () {

  // load the controller's module
  beforeEach(module('wailerGuiApp'));

  var SecretCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecretCtrl = $controller('SecretCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.names.length).toBe(0);
  });
});
