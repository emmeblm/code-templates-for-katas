package org.katas;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MainTest {

    @Test
    void shouldReturnHello() {
        Main main = new Main();

        String result = main.deleteMe();

        assertEquals("hello!", result);
    }
}