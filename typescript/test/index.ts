'use strict';

import { expect } from 'chai';
import { RomanNumerals } from '../src';

describe('RomanNumerals class', () => {

	it('should return hello!', () => {
		const romanNumerals: RomanNumerals = new RomanNumerals();
		const returnValue: string = romanNumerals.deleteMe();

		expect(returnValue).to.equal('hello!');
	});
});
