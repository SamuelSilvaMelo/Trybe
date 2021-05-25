const myRemove = require('../exercises/exercise2')

test('Check remove item', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect( myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

test('Check input array has not changed', () => {
  let testArray = [1, 2, 3, 4];
  myRemove(testArray, 3);
  expect(myRemove(testArray, 3)).toEqual([1, 2, 4]);
  expect(testArray).toEqual([1, 2, 3, 4]);
})

