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
    $scope.show = false;

    $scope.pushWail = function () {
      if ($scope.newWail) {
        $scope.show = false;
        $scope.error = '';
        $log.info('Publishing new wail to wails: ' + $scope.newWail);
        var wail = {
          text: $scope.newWail,
          name: nameService.createName(),
          timestamp: new Date(),
          upVotes: 0,
          downVotes: 0

        };
        wailService.postWail(wail);
        $log.info('Clearing new wail');
        $scope.newWail = '';
      }
      else {
        $scope.show = true;
          $log.error('No text entered, showing error dialog.');
          $scope.error = 'Please give us text, GIVE US TEXT!!! Pretty please.';
      }
    };

      $scope.voteUp = function(index){
        $scope.wails[index].upVotes += 1;
        $log.info($scope.wails[index].text + ' increased by one upVote');
      };

      $scope.voteDown = function(index){
        $scope.wails[index].downVotes += 1;
        $log.info($scope.wails[index].text + ' increased by one downVote');
      };


    function init() {
      $scope.wails = wailService.getWails();
    }

    init();
  });
