const uppercase = require('../exercises/exercise1')

test('Check if function uppercase transform string in uppercase', () => {
  uppercase('teste Essa sTring', (str) => {
    expect(str).toBe('TESTE ESSA STRING');
    // done();
  });
});

// FUNCIONOU MESMO SEM O DONE(), NÃO APRESENTANDO FALSO POSITIVO, PORQUE?
// ENTENDER PORQUE NÃO FUNCIONA COM O CONSOLE.LOG

// --------------------------------------------------------------------------- //

// uppercase('teste Essa sTring', console.log)

// test('Check if function uppercase transform string in uppercase', () => {
//   expect(uppercase('teste Essa sTring', console.log)).toBe('TESTE ESSA STRING')
// })