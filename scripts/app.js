'use strict';

/**
 * @ngdoc overview
 * @name angularEjemploApp
 * @description
 * # angularEjemploApp
 *
 * Main module of the application.
 */
angular
  .module('angularEjemploApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-growl',
    'toaster',
    'angular-loading-bar',
    'angularUtils.directives.dirPagination'
  ])

  .constant('API', 'https://localhost:8080/')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html',
        controller: 'NotificationsCtrl',
        controllerAs: 'notifications'
      })
      .when('/pagination', {
        templateUrl: 'views/pagination.html',
        controller: 'PaginationCtrl',
        controllerAs: 'pagination'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
