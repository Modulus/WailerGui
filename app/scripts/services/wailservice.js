'use strict';

/**
 * @ngdoc service
 * @name wailerGuiApp.wailService
 * @description
 * # wailService
 * Factory in the wailerGuiApp.
 */
angular.module('wailerGuiApp')
  .factory('wailService', function () {
    // Service logic
    // ...

    var wails = [{text: 'I hate haters', name: 'Scarce chuckwalla', timestamp: new Date() },
      {text: 'I\'m sick of all this here nonsense guys!', name: 'Clever boutu', timestamp: new Date() },
      {text: 'Why am I here?', name: 'Roy', timestamp: new Date()},
      {text: 'HULK SMASH!!!!', name: 'The Hulk', timestamp: new Date()}];

    // Public API here
    return {
      getWails: function () {
        return wails;
      },
      postWail: function(wail){
        wails.push(wail);
      }
    };
  });
