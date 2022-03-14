'use strict';

const expect = require('chai').expect;
var { describe, it } = require('mocha');
const Kata = require('../src/index');

describe('Unit tests', function() {

	it('should return hello!', function() {
    var kata = new Kata();
		var returnValue = kata.deleteMe();

		expect(returnValue).to.equal('hello!');
	});
});
