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
    this.$inject = ['$scope', '$log', 'nameService', 'wailService']
    $scope.newWail = "";
    $scope.wails = [];

    $scope.pushWail = function(){
        $log.info('Pubhsing new wail to wails: '+$scope.newWail);
        $scope.wails.push($scope.newWail);
    };

    function init(){
      $scope.wails = wailService.getWails();
    }
    init();
  });
