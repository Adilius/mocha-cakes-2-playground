'use-strict';

Feature('Mocha Cakes Mathematics Addition', function () {

  // This feature is to test before and after hooks
  // https://mochajs.org/#hooks

  before(function () {
    a = 1;
    b = 2;
    c = 3
    console.log(`  Before feature scenario we allocate some variables a=${a}, b=${b}, c=${c}.`);
  });

  after(function () {
    delete a;
    delete b;
    delete c;
    console.log('  After feature scenario we delete the variables from memory.');
  })

  Scenario('Testing Addition', function () {

    Given('that a + a is 2', function () {
      (a + a).should.equal(2);
    });
    And('b + b is 4', function () {
      (b + b).should.equal(4);
    });
    But('b + c is not 4', function () {
      (b + c).should.not.equal(4);
    });
    When('adding 10 to variable a', function () {
      a += 10;
    });
    Then('a should equal to 11', function () {
      a.should.equal(11);
    })
  });

  // .skip
  // Skips a test clause
  Scenario.skip('Skipped testing Addition', function () {
    Given('that 1 + (1/0) is infinity', function () {
      (1 + (1/0)).should.equal(Infinity);
    });
  });


});