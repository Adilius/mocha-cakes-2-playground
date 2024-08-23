'use-strict';

// This feature is to test .only function
Feature('Feature for testing .only', function () {

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

  // .only runs the only specified suite or test-case
  // Uncomment code below to try .only
  /*
  Scenario.only('Testing subtraction only', function () {
    Given('that 4 - 1 is 3', function () {
      (4 - 1).should.equal(3);
    });
  });
  */

});