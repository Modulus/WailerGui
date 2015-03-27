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
          upVotes: 0,
          downVotes: 0

        };

        //timestamp: new Date(),

          wailService.postWail(wail)
          .success(function(data, status, headers, config){
              $log.info('Wail posted successfully!');
              $scope.newWail = '';
              fetchWails();
          })
          .error(function(data, status, header, config){
            $log.error('Failed to post wail: '+wail);
          });
        $log.info('Clearing new wail');

      }
      else {
        $scope.show = true;
          $log.error('No text entered, showing error dialog.');
          $scope.error = 'Please give us text, GIVE US TEXT!!! Pretty please.';
      }
    };

    //TODO: Check that index and id matches, and not out of bounds
      $scope.voteUp = function(index, id){
        wailService.upVote($scope.wails[index])
          .success(function(){
            $log.info($scope.wails[index].text + ' from ' + $scope.wails[index].name + ' increased by one upVote');
            fetchWails();
          })
          .error(function(){
            $log.error('Failed to increase upVotes');
          });

      };

      $scope.voteDown = function(index){
        wailService.downVote($scope.wails[index])
          .success(function(){
            $log.info($scope.wails[index].text + ' from ' + $scope.wails[index].name + ' increased by one downVote');
            fetchWails();
          })
          .error(function(){
            $log.error('Failed to increase downVotes');
          });
      };


    function fetchWails() {
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

    fetchWails();
  });
