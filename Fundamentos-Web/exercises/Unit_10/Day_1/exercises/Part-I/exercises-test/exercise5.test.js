const {obj1, obj2, obj3} = require('../exercises/exercise5');

test('Check obj1 is equal to obj2', () => {
  expect(obj1).toEqual(obj2);
})

test('Check obj1 is not equal to obj3', () => {
  expect(obj1).not.toEqual(obj3);
})

test('Check obj2 is equal to obj1', () => {
  expect(obj2).toEqual(obj1);
})

test('Check obj2 is not equal to obj3', () => {
  expect(obj2).not.toEqual(obj3);
})

test('Check obj3 is not equal to obj1 and obj2', () => {
  expect(obj3).not.toEqual(obj1);
  expect(obj3).not.toEqual(obj2);
})
