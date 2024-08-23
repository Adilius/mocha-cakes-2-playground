'use-strict';

// This runs first thing in the feature
beforeEachFeature(function() {
    console.log('  Global beforeEachFeature');
  });

// This runs last thing in the feature
afterEachFeature(function() {
    console.log('   Global afterEachFeature');
  });

// This runs first thing in the scenario
beforeEachScenario(function() {
  console.log('    Global beforeEachScenario');
});

// This runs last thing in the scenario
afterEachScenario(function() {
  console.log('    Global afterEachScenario');
});


Feature('Feature 1', function () {

  Scenario('Scenario 1', function () {

    When('something is true', function () {
      true.should.equal(true);
    });

    Then('everything should be ok', function () {
      "everything".should.be.ok;
    });
  });

  Scenario('Scenario 2', function () {

    When('something is true', function () {
      true.should.equal(true);
    });

    Then('everything should be ok', function () {
      "everything".should.be.ok;
    });
  });
});

Feature('Feature 2', function () {

  Scenario('Scenario 1', function () {

    When('something is false', function () {
      false.should.equal(false);
    });

    Then('everything should be ok', function () {
      "everything".should.be.ok;
    });
  });
});