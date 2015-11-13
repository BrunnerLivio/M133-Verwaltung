'use strict';

describe('Controller: M133verwaltungCtrl', function () {

  // load the controller's module
  beforeEach(module('m133VerwaltungApp'));

  var M133verwaltungCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    M133verwaltungCtrl = $controller('M133verwaltungCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(M133verwaltungCtrl.awesomeThings.length).toBe(3);
  });
});
