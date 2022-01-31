import pytest
from validate_email import validate_email


def test_username_when_dont_start_with_letter():
    with pytest.raises(
      ValueError,
      match='The first character of the username must be a letter.'
    ):
        validate_email("1trybe@betrybe.com")


def test_invalid_username():
    with pytest.raises(
      ValueError,
      match='Invalid username'
    ):
        validate_email("trybe*@betrybe.com")


def test_invalid_website():
    with pytest.raises(
      ValueError,
      match='Invalid website name'
    ):
        validate_email("trybe@betrybe*.com")


def test_invalid_extension_len():
    with pytest.raises(
      ValueError,
      match='The maximum extension size is three'
    ):
        validate_email("trybe@betrybe.comm")


def test_valid_email():
    assert(validate_email("trybe@betrybe.com")) is None
