import pytest
import src.kata as kata

def test_returns_hello():
    assert kata.delete_me() == "hello!"
