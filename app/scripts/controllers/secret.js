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
      var tag = {text: nameService.createName()};

      $scope.names.push(tag);
    };

     $scope.pushNames = function(){
       for(var i = 0; i < 250; i++){
         var tag = {text: nameService.createName()};
         $scope.names.push(tag);
       }
     }
  });
