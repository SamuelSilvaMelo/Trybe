## Bônus

1. Adicione autenticação a todos os endpoints:

    1.1. O token deve ser enviado através do header `Authorization`;
    1.2. O token deve ter exatamente 16 caracteres;
    1.3. Caso o token seja inválido ou inexistente, a resposta deve possuir o status `401 - Unauthorized` e o JSON `{ message: 'Token inválido!' }`.

2. Crie uma rota `POST /signup`:

    2.1. A rota deve receber, no body da requisição, os campos `email`, `password`, `firstName` e `phone`;
    2.1. Caso algum dos campos não esteja preenchido, a response deve possuir status `401 - Unauthorized` e o JSON `{ message: 'missing fields' }`;
    2.3. Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status `200 - OK`, e o JSON `{ token: '<token-aleatorio>' }`.

- Para gerar o token você pode utilizar a função `randomBytes`, do módulo `crypto` do Node, dessa forma:

  ```
  const crypto = require('crypto');

  function generateToken() {
    return crypto.randomBytes(8).toString('hex');
  }

  module.exports = generateToken;
  ```
