import pytest
from decode_string_to_number import decode_string_to_number


def test_decode_string_to_number_value_errors():
    with pytest.raises(
      ValueError,
      match='The number entered must be greater than 1 and less than 30'
    ):
        decode_string_to_number('')

    with pytest.raises(
      ValueError,
      match='Invalid value'
    ):
        decode_string_to_number('*FAILURE-TEST')

    with pytest.raises(
      TypeError,
      match="missing 1 required positional argument: 'string'"
    ):
        decode_string_to_number()

    with pytest.raises(
      TypeError,
      match="object of type 'int' has no len()"
    ):
        decode_string_to_number(123)


def test_decode_string_to_number_value_success():
    assert(
      decode_string_to_number('1-HOME-SWEET-HOME')
    ) == '1-4663-79338-4663'

    assert(
      decode_string_to_number('MY-WONDERFUL-JOB')
    ) == '69-966337385-562'
