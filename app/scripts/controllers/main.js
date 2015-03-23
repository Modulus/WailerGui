'use strict';

/**
 * @ngdoc function
 * @name wailerGuiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wailerGuiApp
 */
angular.module('wailerGuiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.newWail = "";
    $scope.wails = [];

    function init(){
      $scope.wails = ["I hate my boss", "I'm sick of all this here nonsense guys!", "Why am I here?", "HULK SMASH!!!!"];
    }
    init();
  });
