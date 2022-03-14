'use strict';

import { expect } from 'chai';
import { Kata } from '../src';

describe('Kata class', () => {

	it('should return hello!', () => {
		const kata: Kata = new Kata();
		const returnValue: string = kata.deleteMe();

		expect(returnValue).to.equal('hello!');
	});
});
