'use strict';

/**
 * @ngdoc service
 * @name m133VerwaltungApp.http
 * @description
 * # http
 * Factory in the m133VerwaltungApp.
 */
angular.module('m133VerwaltungApp')
  .factory('http', ['$http', '$q', function ($http, $q) {
    return {
      post: function (url, data) {
          var deferred = $q.defer();
          $http({
              method: 'POST',
              url: url,
              data: $.param(data),
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }).success(function (data, status) {
              data = { data: data, status: status };
              deferred.resolve(data);
          })
            .error(function () {
                deferred.reject();
            });

          return deferred.promise;
      },
      get: function (url, data) {
          var deferred = $q.defer();
          $http({
              method: 'GET',
              url: url,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }).success(function (data, status) {
              data = { data: data, status: status };
              deferred.resolve(data);
          })
            .error(function (data) {
                console.log(data);
                deferred.reject();
            });

          return deferred.promise;
      }
    };
  }]);
