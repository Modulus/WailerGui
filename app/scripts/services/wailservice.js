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
    // Service logic
    var urlBase = "http://localhost:8080/api";

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
      },
      upVote: function(wail){
        delete wail['timestamp'];
        var request = {
          method: 'PUT',
          url: urlBase + '/wail/upvote',
          data: wail,
          headers : {
            'Content-Type': 'application/json'
          }
        };

        return $http(request);
      },
      downVote: function(wail){
        delete wail['timestamp'];
        var request = {
          method: 'PUT',
          url: urlBase + '/wail/downvote',
          data: wail,
          headers : {
            'Content-Type': 'application/json'
          }
        };

        return $http(request);
      }
    };
  });
