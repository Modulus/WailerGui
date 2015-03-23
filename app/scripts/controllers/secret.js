'use strict';

/**
 * @ngdoc function
 * @name wailerGuiApp.controller:SecretCtrl
 * @description
 * # SecretCtrl
 * Controller of the wailerGuiApp
 */
angular.module('wailerGuiApp')
  .controller('SecretCtrl', function ($scope, nameService) {
    this.$inject = ['$scope', 'nameService'];
    $scope.names = [];

    $scope.pushName = function(){
      $scope.names.push(nameService.createName());
    };
  });
