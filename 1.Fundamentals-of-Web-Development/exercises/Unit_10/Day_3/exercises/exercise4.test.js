const stringFunctions = require('./stringFunctions')

jest.mock('./stringFunctions');

test('Transform function to return string to low case', () => {
  stringFunctions.changeToUpperCase.mockImplementation((string) => string.toLowerCase());

  expect(stringFunctions.changeToUpperCase('PASSA PARA MINÚSCULO')).toBe('passa para minúsculo');
  expect(stringFunctions.changeToUpperCase).toHaveBeenCalled();
  expect(stringFunctions.changeToUpperCase).toHaveBeenCalledWith('PASSA PARA MINÚSCULO');
});

test('Transform function to get last letter', () => {
  stringFunctions.getFirstLetter.mockImplementation((string) => string[string.length - 1]);

  expect(stringFunctions.getFirstLetter('Pega o A')).toBe('A');
  expect(stringFunctions.getFirstLetter).toHaveBeenCalled();
  expect(stringFunctions.getFirstLetter).toHaveBeenCalledWith('Pega o A');
});

test('Transform function to concat three strings', () => {
  stringFunctions.concatStrings.mockImplementation((a, b, c) => `${a} ${b} ${c}`);

  expect(stringFunctions.concatStrings('Essa', 'frase', 'aqui')).toBe('Essa frase aqui');
  expect(stringFunctions.concatStrings).toHaveBeenCalled();
  expect(stringFunctions.concatStrings).toHaveBeenCalledWith('Essa', 'frase', 'aqui');
})
