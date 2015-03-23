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

    var wails = ["I hate haters", "I'm sick of all this here nonsense guys!", "Why am I here?", "HULK SMASH!!!!"];

    // Public API here
    return {
      getWails: function () {
        return wails
      },
      postWail: function(wail){
        wails.push(wail);
      }
    };
  });
