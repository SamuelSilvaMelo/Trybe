const stringFunctions = require('./stringFunctions')

// jest.mock('./stringFunctions');

test('Transform function to return string to low case and after restore to original', () => {
  const mockChangeToUpperCase = jest
    .spyOn(stringFunctions, 'changeToUpperCase')
    .mockImplementation((string) => string.toLowerCase());

  expect(mockChangeToUpperCase('PASSA PARA MINÚSCULO')).toBe('passa para minúsculo');
  expect(mockChangeToUpperCase).toHaveBeenCalled();
  expect(mockChangeToUpperCase).toHaveBeenCalledWith('PASSA PARA MINÚSCULO');

  stringFunctions.changeToUpperCase.mockRestore();

  expect(stringFunctions.changeToUpperCase('passa para maiúsculo')).toBe('PASSA PARA MAIÚSCULO');
});
