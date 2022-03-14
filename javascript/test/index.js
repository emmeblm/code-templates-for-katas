'use strict';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { deleteMe } from '../src/index.js';

describe('Unit tests', function() {

	it('should return hello!', function() {
		var returnValue = deleteMe();

		expect(returnValue).to.equal('hello!');
	});
});
