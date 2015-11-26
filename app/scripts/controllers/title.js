'use strict';

/**
 * @ngdoc function
 * @name m133VerwaltungApp.controller:TitlecontrollerCtrl
 * @description
 * # TitlecontrollerCtrl
 * Controller of the m133VerwaltungApp
 */
angular.module('m133VerwaltungApp')
  .controller('TitleCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.title = "M133 Projekteverwaltung";
    $scope.openMenu = function(){
      $rootScope.$broadcast('menu', 'close');
    }
    $scope.$on('subtitle', function (event, arg) { 
      $scope.subtitle = arg;
    });
  }]);
