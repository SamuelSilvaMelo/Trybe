// 5. Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

const math = require('./fixation-exercises');

test('Test function subtrair', () => {
  // implementação original
  expect(math.subtrair(4, 2)).toBe(2);

  // Testa o número de chamadas e o retorno
  const mockSubtrair = jest.spyOn(math, 'subtrair')

  mockSubtrair(10, 5);

  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair(10, 5)).toBe(5);
  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 5);

  // Define como retorno padrão o valor 20

  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  expect(mockSubtrair()).toBe(20);
  expect(mockSubtrair).toHaveBeenCalledTimes(3);

  // Restaura a implementação original
  mockSubtrair.mockRestore();

  expect(math.subtrair(20, 5)).toBe(15);
});
