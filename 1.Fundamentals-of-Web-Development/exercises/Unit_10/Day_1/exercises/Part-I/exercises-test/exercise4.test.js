const myFizzBuzz = require('../exercises/exercise4');

test('Check fizzbuzz result', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
})

test('Check fizz result', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
})

test('Check buzz result', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
})

test('Check number not divisible by 3 and 5', () => {
  expect(myFizzBuzz(2)).toBe(2);
  expect(myFizzBuzz(143)).toBe(143);
  expect(myFizzBuzz(527)).toBe(527);
})

test('Check typeof not number', () => {
  expect(myFizzBuzz('5')).toBe(false);
  expect(myFizzBuzz([5])).toBe(false);
  expect(myFizzBuzz({number: 3,})).toBe(false);
  expect(myFizzBuzz('15')).toBe(false);
})