const randomNumber = require('./randomNumber');

test('Create multiplication implementation with three parameters, reset, and create another double return', () => {
  randomNumber.randomNumberFrom0To100 = jest.fn().mockImplementation((a, b, c) => a * b * c);

  randomNumber.randomNumberFrom0To100(2, 5, 5);

  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalled();
  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalledWith(2, 5, 5);
  expect(randomNumber.randomNumberFrom0To100(2, 5, 5)).toBe(50);
  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalledTimes(2);

  randomNumber.randomNumberFrom0To100.mockReset().mockImplementation((a) => a * a);

  randomNumber.randomNumberFrom0To100(2);

  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalled();
  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalledWith(2);
  expect(randomNumber.randomNumberFrom0To100(2)).toBe(4);
  expect(randomNumber.randomNumberFrom0To100).toHaveBeenCalledTimes(2);
});
