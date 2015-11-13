'use strict';

/**
 * @ngdoc function
 * @name m133VerwaltungApp.controller:NewprojectCtrl
 * @description
 * # NewprojectCtrl
 * Controller of the m133VerwaltungApp
 */
angular.module('m133VerwaltungApp')
  .controller('NewprojectCtrl', function ($scope, $mdToast, M133VerwaltungService, $rootScope, $mdSidenav, $timeout, $location) {
    $scope.newProject = {};
    M133VerwaltungService.getClasses().then(function(classes){
      $scope.classes = classes;
      
    });
    $scope.save = save;
    $scope.href = function(path){
      $location.path(path);
    }
    
    function save(newProject){
      M133VerwaltungService.saveProject(newProject).then(function(data){
        if(data){
          
          $mdToast.show(
            $mdToast.simple()
              .content('Erfolgreich gespeichert.')
              .hideDelay(3000)
          );
          $location.path("/");
          $rootScope.$broadcast("addedProject", $scope.newProject);
          $scope.newProject = {};
        }
        else {
          $mdToast.show(
            $mdToast.simple()
              .content('Konnte nicht gespeichert werden!.')
              .hideDelay(3000)
          );
        }
      }).catch(function(){
        $mdToast.show(
            $mdToast.simple()
              .content('Konnte nicht gespeichert werden!.')
              .hideDelay(3000)
          );
      });
      
    }
  });
