'use strict';

/**
 * @ngdoc overview
 * @name wailerGuiApp
 * @description
 * # wailerGuiApp
 *
 * Main module of the application.
 */
angular
  .module('wailerGuiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/secret', {
        templateUrl: 'views/secret.html',
        controller: 'SecretCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
