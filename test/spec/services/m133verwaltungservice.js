'use strict';

describe('Service: M133VerwaltungService', function () {

  // load the service's module
  beforeEach(module('m133VerwaltungApp'));

  // instantiate service
  var M133VerwaltungService;
  beforeEach(inject(function (_M133VerwaltungService_) {
    M133VerwaltungService = _M133VerwaltungService_;
  }));

  it('should do something', function () {
    expect(!!M133VerwaltungService).toBe(true);
  });

});
