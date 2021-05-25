const randomNumber = require('./randomNumber');

test('Implement division function that works only', () => {
  randomNumber.randomNumberFrom0To100 = jest.fn().mockImplementation((a, b) => a / b);

  randomNumber.randomNumberFrom0To100(10, 2);

  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalled();
  expect(randomNumber.randomNumberFrom0To100(10, 2)).toBe(5);
  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalledTimes(2);
  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalledWith(10, 2)
});
