# Mocha Cakes 2 Playground

Playground for testing [Mocha Cakes 2](https://www.npmjs.com/package/mocha-cakes-2) a [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)/[Cucumber](https://cucumber.io/) syntax integration for the [Mocha](https://mochajs.org/) testing framework.

Show cases simple use of Mocha Cakes 2 syntax such as:
- Feature 
- Scenario
- Given
- When
- Then
- And
- But
- .skip
- .only
- beforeEachFeature
- afterEachFeature
- beforeEachScenario
- afterEachScenario

## Install & Run
1. Download `git clone https://github.com/Adilius/mocha-cakes-2-playground.git`
2. Change directory `cd mocha-cakes-2-playground/`
3. Install dependencies `npm install`
4. Run tests using Mocha `npm test`


##  Example code
Showcase of [before and after](https://www.npmjs.com/package/mocha-cakes-2#skip) which is Mocha syntax while [.skip](https://www.npmjs.com/package/mocha-cakes-2#skip) which is Mocha Cakes 2 syntax works together.
```js
'use-strict';

Feature('before, after, and .skip', function () {

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
```
![image](https://github.com/user-attachments/assets/a1a2f0cf-0c51-485a-b2db-e877d5645165)

## Acknowledgements

Influenced by sample tests from [mocha-cakes-2](https://github.com/iensu/mocha-cakes-2/) repository.
