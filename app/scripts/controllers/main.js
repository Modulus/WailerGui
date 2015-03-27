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
    $scope.wailsMark = 50; //TODO: Use this to "get more wails" from the backend.
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
        wailService.getWails()
          .success(function(wails){
            $scope.wails = wails.map(function(wail){
                var stamp = wail.timestamp;
                var date = new Date();
                date.setYear(stamp.year);
                date.setMonth(stamp.monthValue);
                date.setHours(stamp.hour);
                date.setMinutes(stamp.minute);
                date.setSeconds(stamp.second);
                wail.timestamp = date;
                return wail;

            });
          })
          .error(function(error){
            $log.error('Failed to get data because of: '+error);
          });
    }

    init();
  });
