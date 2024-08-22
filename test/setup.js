"use strict";


// Setup common test libraries
require("mocha-cakes-2");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;

chai.should();
chai.use(chaiAsPromised);
