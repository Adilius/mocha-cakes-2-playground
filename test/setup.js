// Enable strict mode
"use strict";

// Mocha cakes 2 import to be used for tests
// Write Mocha tests using Gherkin syntax (i.e., 'Given', 'When', 'Then')
require("mocha-cakes-2");

// Chai import to be used as assertion library
// Assert code in various ways (i.e., 'should', 'expect', 'assert')
const chai = require("chai");

// Chai As Promised import
// Allows for assertion promises
const chaiAsPromised = require("chai-as-promised");

// Configure Chai to not truncate when displaying failed assertion messages
chai.config.truncateThreshold = 0;

// Configure Chai to include stack trace in output when assertion fails
chai.config.includeStack = true;

// Initializes 'should' style assersions in Chai
chai.should();

// Configure Chai to use chai-as-promised plugin
chai.use(chaiAsPromised);
