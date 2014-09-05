'use strict';

describe('Directive: clickHighlight', function () {

  // load the directive's module
  beforeEach(module('angularStateTutApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<click-highlight></click-highlight>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the clickHighlight directive');
  }));
});
