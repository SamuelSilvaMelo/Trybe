const randomNumber = require('./randomNumber');

test('Function randomNumberFrom0To100 return 10', () => {
  randomNumber.randomNumberFrom0To100 = jest
  .fn()
  .mockReturnValue(10);

  randomNumber.randomNumberFrom0To100();

  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalled();
  expect(randomNumber.randomNumberFrom0To100()).toBe(10);
  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalledTimes(2);
});
