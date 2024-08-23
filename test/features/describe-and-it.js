'use-strict';

// describe is Mocha native function
// with Chai you use Feature + Scenario instead for BDD
describe('Mocha native function', function () {


    // it is also Mocha native function
    // replaced by Chai's various Given, When, Then, etc...
    it('it should work', function () {
        true.should.be.true;
    });

    describe('Layered Mocha native function', function () {

        it('layered it should also work', function () {
            true.should.be.true;
        });

    });
});