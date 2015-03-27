'use strict';

/**
 * @ngdoc service
 * @name wailerGuiApp.wailService
 * @description
 * # wailService
 * Factory in the wailerGuiApp.
 */
angular.module('wailerGuiApp')
  .factory('wailService', function ($http,$log) {
    this.$inject = ['$http', '$log'];
    var urlBase = "http://localhost:8080/api";
    // Service logic
    // ...



    var wails = [{text: 'I hate haters', name: 'Scarce chuckwalla', timestamp: new Date() , upVotes: 10, downVotes:15},
      {text: 'I\'m sick of all this here nonsense guys!', name: 'Clever boutu', timestamp: new Date(), upVotes:100, downVotes:23 },
      {text: 'Why am I here?', name: 'Roy', timestamp: new Date(), upVotes:0, downVotes:0},
      {text: 'HULK SMASH!!!!', name: 'The Hulk', timestamp: new Date(), upVotes:5, downVotes:2}];

    // Public API here
    return {
      getWails: function () {
        $log.info("Trying to find latest wails")
        return $http.get(urlBase + "/wails");
      },
      postWail: function(wail){
        $log.info("Trying to insert new wail: "+wail);
        var request = {
          method: 'POST',
          url: urlBase + '/wail',
          data: wail,
          headers : {
            'Content-Type': 'application/json'
          }
        };

        return $http(request);
      }
    };
  });
