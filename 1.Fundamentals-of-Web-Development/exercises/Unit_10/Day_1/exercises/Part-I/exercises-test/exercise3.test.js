const myRemoveWithoutCopy = require('../exercises/exercise3')

test('Check remove item from array', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

test('Check input array has changed', () => {
  let testArray = [1, 2, 3, 4];
  myRemoveWithoutCopy(testArray, 3);
  expect(myRemoveWithoutCopy(testArray, 3)).toEqual([1, 2, 4]);
  expect(testArray).toEqual([1, 2, 4]);
})