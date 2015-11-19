'use strict';

/**
 * @ngdoc overview
 * @name m133VerwaltungApp
 * @description
 * # m133VerwaltungApp
 *
 * Main module of the application.
 */
angular
  .module('m133VerwaltungApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMessages',
    'angular-linq'
  ])
  .config(function ($routeProvider, $mdThemingProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          closeSideNav: function($mdSidenav, $timeout){
            $timeout(function(){
              $mdSidenav("newProjectSideNav").isLockedOpen(true);
              $mdSidenav("newProjectSideNav").close();
            });
          }
        }
      })
      .when('/class/:classId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          closeSideNav: function($mdSidenav, $timeout){
            $timeout(function(){
              $mdSidenav("newProjectSideNav").isLockedOpen(true);
              $mdSidenav("newProjectSideNav").close();
            });
          }
        }
      })
      .when('/newProject', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'newProject',
        resolve: {
          openSideNav: function($mdSidenav, $timeout){
            $timeout(function(){
              $mdSidenav("newProjectSideNav").open();
              $mdSidenav("newProjectSideNav").isLockedOpen(true);
            });
            
          }
        },
      })
      .otherwise({
        redirectTo: '/'
      });
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
        $locationProvider.html5Mode(true);
  });
