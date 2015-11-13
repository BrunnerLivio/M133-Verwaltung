'use strict';

/**
 * @ngdoc service
 * @name m133VerwaltungApp.M133VerwaltungService
 * @description
 * # M133VerwaltungService
 * Factory in the m133VerwaltungApp.
 */
angular.module('m133VerwaltungApp')
  .factory('M133VerwaltungService', function ($http, $q, http) {
    var classes;
    var apiAddress = "http://localhost:666/M133-Verwaltung/app/server/api/";
    return {
      getClasses: function () {
        var deferred = $q.defer();
        if(classes == undefined){
          http.get(apiAddress +"getClasses.php")
            .then(function (status) {
                classes = status.data;
                deferred.resolve(status.data);
            })
            .catch(function(){
                deferred.reject();
            });
        } else {
          deferred.resolve(classes);
        }
        return deferred.promise;
      },
      getProjectsById: function(Id){
        var deferred = $q.defer();
        http.get(apiAddress + "getProjectsById.php?Id=" + Id)
          .then(function (status) {
              deferred.resolve(status.data);
          })
          .catch(function(){
              deferred.reject();
          });
          return deferred.promise;
      },
      saveProject: function(project){
        var deferred = $q.defer();
        
        http.post(apiAddress + "saveProject.php" ,{project: project})
        .then(function (status) {
            console.log(status);
            deferred.resolve(status.data);
        })
        .catch(function(){
            deferred.reject();
        });
          
        return deferred.promise;
      }
    };
  });
