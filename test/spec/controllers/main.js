'use strict';

describe('Controller: MainCtrl', function () {

  var wails = [{text: 'I hate haters', name: 'Scarce chuckwalla', timestamp: new Date() },
    {text: 'I\'m sick of all this here nonsense guys!', name: 'Clever boutu', timestamp: new Date() },
    {text: 'Why am I here?', name: 'Roy', timestamp: new Date()},
    {text: 'HULK SMASH!!!!', name: 'The Hulk', timestamp: new Date()}];

  // load the controller's module
  beforeEach(module('wailerGuiApp', function($provide){
    var WailService = {


        getWails: function () {
          return wails;
        },
        postWail: function(wail){
          wails.push(wail);
        }
      };

    $provide.factory('WailService', WailService);
  }));

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
    expect(scope.error).toBeDefined();
  });

  it('should have a newWail with an empty string', function () {
    expect(scope.newWail.length).toBe(0);
    expect(scope.newWail).toBe('');
  });

  it('should have an empty list of wails', function(){
    expect(scope.wails.length).toBeGreaterThan(1);
  });

  it('should have an emtpy error message at the beginning', function(){
    expect(scope.error.length).toBe(0);
  });

  it('should have an error message if empty wail was tried to be inserted', function(){
    scope.newWail = '';
    scope.pushWail();
    expect(scope.error.length).toBeGreaterThan(0)
  });

  it('should not have an error message if newWail has text', function(){
    scope.newWail = {text: 'bleuh bleush blaaaargh!', name: 'Nefarious Guinea Turaco', timestamp: new Date() }
    scope.pushWail();
    expect(scope.error.length).toBe(0);
  });
});
