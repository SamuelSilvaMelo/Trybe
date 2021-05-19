const { encode, decode } = require('../exercises/exercise1')

test('Check if encode and decode are functions', () => {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function');
})

test('Check encode function convert a, e, i, o, u to 1, 2, 3, 4, 5', () => {
  expect(encode('aeiou')).toBe('12345');
})

test('Check decode function convert 1, 2, 3, 4, 5 to a, e, i, o, u', () => {
  expect(decode('12345')).toBe('aeiou');
})

test('Checks if the function encode does not convert other letters', () => {
  const alphabet = 'abcdefghijklmnopqrstuvxwyz';
  const alphabetEncoded = '1bcd2fgh3jklmn4pqrst5vxwyz'
  expect(encode(alphabet)).toBe(alphabetEncoded);
})

test('Checks if the function decode does not convert other numbers', () => {
  const numbers = '0123456789';
  const numbersDecoded = '0aeiou6789'
  expect(decode(numbers)).toBe(numbersDecoded);
})

test('Check if the length of the input string and output string is the same', () => {
  expect(encode('hi there').length).toBe(8);
  expect(encode('Check this string').length).toBe(17);
  expect(decode('h3 th2r2').length).toBe(8);
  expect(decode('Ch2ck th3s str3ng').length).toBe(17);
})