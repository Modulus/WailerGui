'use strict';

/**
 * @ngdoc function
 * @name wailerGuiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wailerGuiApp
 */
angular.module('wailerGuiApp')
  .controller('MainCtrl', function ($scope, $log, nameService, wailService) {
    this.$inject = ['$scope', '$log', 'nameService', 'wailService'];
    $scope.newWail = '';
    $scope.wails = [];
    $scope.error = '';

    $scope.pushWail = function () {
      if ($scope.newWail) {

        $scope.error = '';
        $log.info('Pubhsing new wail to wails: ' + $scope.newWail);
        var wail = {text: $scope.newWail, name: nameService.createName(), timestamp: new Date()};
        wailService.postWail(wail);
        $log.info('Clearing new wail');
        $scope.newWail = '';
      }
      else {
          $scope.showAlert();
          $log.error('No text entered, showing error dialog.');
          $scope.error = 'Please give us text, GIVE US TEXT!!! Pretty please.';
      }
    };

    $scope.hideAlert = function(){
      $('#errorDialog').addClass('ng-hide');
    };

    $scope.showAlert = function(){
      $('#errorDialog').removeClass('ng-hide')
    };

    function init() {
      $scope.wails = wailService.getWails();
    }

    init();
  });
