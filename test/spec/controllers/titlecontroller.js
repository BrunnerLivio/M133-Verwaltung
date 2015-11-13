'use strict';

describe('Controller: TitlecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('m133VerwaltungApp'));

  var TitlecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TitlecontrollerCtrl = $controller('TitlecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TitlecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
