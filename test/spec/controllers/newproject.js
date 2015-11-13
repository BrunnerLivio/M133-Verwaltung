'use strict';

describe('Controller: NewprojectCtrl', function () {

  // load the controller's module
  beforeEach(module('m133VerwaltungApp'));

  var NewprojectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewprojectCtrl = $controller('NewprojectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewprojectCtrl.awesomeThings.length).toBe(3);
  });
});
