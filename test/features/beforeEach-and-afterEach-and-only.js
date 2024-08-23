'use-strict';

Feature('beforeEach, afterEach, and .only', function () {

  // This feature is to test beforeEach and afterEach hooks
  // Also to test .skip
  // https://mochajs.org/#hooks

  beforeEach(function () {
    // Runs before each test
    console.log('      Before each test');
  });

  afterEach(function () {
    // Runs after each test
    console.log('      After each test');
  });


  Scenario('Testing subtraction', function () {

    Given('that 1 - 2 is -1', function () {
      (1 - 2).should.equal(-1);
    });

    And('2 - 1 is 1', function () {
      (2 - 1).should.equal(1);
    });

    But('1 - 1 is not 1', function () {
      (1 - 1).should.not.equal(1);
    });
  });

  // .only
  // Runs the only specified suite or test-case
  // Forbidden in this playground defined in package.json/scripts/test
  /*
  Scenario.only('Testing subtraction only', function () {
    Given('that 4 - 1 is 3', function () {
      (4 - 1).should.equal(3);
    });
  });
  */

});