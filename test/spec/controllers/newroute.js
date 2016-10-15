'use strict';

describe('Controller: NewrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('eklinkhammergithubioApp'));

  var NewrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewrouteCtrl = $controller('NewrouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewrouteCtrl.awesomeThings.length).toBe(3);
  });
});
