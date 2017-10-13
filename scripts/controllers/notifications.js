'use strict';

/**
 * @ngdoc function
 * @name angularEjemploApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularEjemploApp
 */
angular.module('angularEjemploApp')
  .controller('NotificationsCtrl', ['$scope','growl','toaster','API', function ($scope,growl,toaster,API) {
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    ///Growl
    $scope.Show = function () {
 		///$scope.mensaje = API;
 		    growl.warning('This is warning message.',{title: 'Warning!'});
        growl.error('This is error message.',{title: 'Error!'});
        growl.success('This is success message.',{title: 'Success!'});
        growl.info('This is an info message.',{title: 'Info!'});
 	  };

    $scope.Success = function () {
        growl.success('This is success notification.',{title: 'Notification'});
    };

    $scope.Warning = function () {
        growl.warning('This is warning notification.',{title: 'Notification'});
    };

    $scope.Error = function () {
        growl.error('This is error notification.',{title: 'Notification'});
    };

    $scope.Info = function () {
        growl.info('This is info notification.',{title: 'Notification'});
    };

    ///Toaster
    $scope.PopShow = function () {
        toaster.pop('success','Success','This is success notification.');
        toaster.pop('warning','Warning','This is warning notification.');
        toaster.pop('error','Error','This is error notification.');
        toaster.pop('info','Info','This is info notification.');
    };

    $scope.PopSuccess = function () {
        toaster.pop('success','Success','This is success notification.');
    };

    $scope.PopWarning = function () {
        toaster.pop('warning','Warning','This is warning notification.');
    };

    $scope.PopError = function () {
        toaster.pop('error','Error','This is error notification.');
    };

    $scope.PopInfo = function () {
        toaster.pop('info','Info','This is info notification.');
    };

  }]);


