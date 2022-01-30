import pytest
from Fizz_Buzz import Fizz_Buzz


mock_response = {
  'Numbers': [1, 2],
  'Fizz': [1, 2, 'Fizz'],
  'Buzz': [1, 2, 'Fizz', 4, 'Buzz'],
  'FizzBuzz': [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
}


def test_Fizz_Buzz_Error():
    with pytest.raises(Exception, match='Informe um número maior que 1'):
        Fizz_Buzz(0)


def test_Fizz_Buzz_Return_Numbers():
    assert(
      Fizz_Buzz(2)
    ) == mock_response['Numbers']


def test_Fizz_Buzz_Return_Fizz():
    assert(
      Fizz_Buzz(3)
    ) == mock_response['Fizz']


def test_Fizz_Buzz_Return_Buzz():
    assert(
      Fizz_Buzz(5)
    ) == mock_response['Buzz']


def test_Fizz_Buzz_Return_FizzBuzz():
    assert(
      Fizz_Buzz(15)
    ) == mock_response['FizzBuzz']
