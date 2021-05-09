const assert = require('chai').assert;
const app = require('../app');
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

describe('App', function() {
    it('app should return hello', function() {
        assert.equal(app(), 'hello');
    })
});