package org.tdd.katas.roman.numerals;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RomanNumeralsTest {

    @Test
    void shouldReturnHello() {
        RomanNumerals romanNumerals = new RomanNumerals();

        String result = romanNumerals.deleteMe();

        assertEquals("hello!", result);
    }
}