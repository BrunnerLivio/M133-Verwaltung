'use strict';

/**
 * @ngdoc function
 * @name m133VerwaltungApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the m133VerwaltungApp
 */
angular.module('m133VerwaltungApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, M133VerwaltungService, $mdToast, $rootScope, $location, $timeout, $routeParams, $linq, $q) {
    getData().then(function(){
      if($routeParams.classId != undefined){
        console.log($scope.classes);
        var slClass = $linq.Enumerable().From($scope.classes)
        .Where(function(c){
          
          return c.Id == $routeParams.classId;
        })
        .FirstOrDefault();
        
        if(slClass != null){
          openClass(slClass);
        }
        
      }
    });
    
    $scope.href = function(path){
      $location.path(path);
    }
    $scope.openNewProject = function(path){
      $location.path("/");
      $timeout(function(){
        $location.path("/newProject");
      });
      
    }
    $scope.openClass = openClass;
    $scope.$on('menu', function (event, arg) { 
      if($scope.menuClass !== "active"){
        $scope.menuClass = "active";
      } else {
        $scope.menuClass = "";
      }
    });
    $scope.$on('addedProject', function (event, arg) { 
      
      arg.CreationDate = new Date();
      if($scope.selectedClass.Id == arg.ClassId){
        $scope.projects.push(arg);
      }
    });
    function openClass(klasse){
      $scope.selectedClass = klasse;
      $rootScope.$broadcast('selectedClassChange', klasse);
      M133VerwaltungService.getProjectsById(klasse.Id).then(function(data){
        $scope.projects = data;
      })
      .catch(function(){
        $mdToast.show(
          $mdToast.simple()
            .content('Service konnte nicht emfapngen werden.')
            .hideDelay(3000)
        );
      });
    };
    function getData(){
      var deferred = $q.defer();
      M133VerwaltungService.getClasses().then(function(data){
        $scope.classes = data;
        openClass(data[0]);
        deferred.resolve();
      })
      .catch(function(){
        $mdToast.show(
          $mdToast.simple()
            .content('Service konnte nicht emfapngen werden.')
            .hideDelay(3000)
        );
        deferred.reject();
      });
      return deferred.promise;
    }
  });
