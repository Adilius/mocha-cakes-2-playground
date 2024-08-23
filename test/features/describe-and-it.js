'use-strict';

// describe is Mocha native function
// with Chai you use Feature + Scenario instead of describe for BDD
describe('Mocha native describe function', function () {


    // it is also Mocha native function
    // replaced by Chai's various Given, When, Then, etc...
    it('Mocha native it should work', function () {
        true.should.be.true;
    });

    describe('Mocha native layered describe function', function () {

        it('Mocha native layered it should also work', function () {
            true.should.be.true;
        });

    });
});