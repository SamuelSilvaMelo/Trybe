const { expect } = require('chai');

const writeFile = require('../writeFile');

describe('A função writeFile', () => {
  describe('Escreve um novo arquivo', () => {
    it('Com sucesso', async () => {
      const status = await writeFile('fileName.txt', 'Conteúdo muito importante');

      expect(status).to.be.a('string');
      expect(status).to.be.equal('ok');
    });
  });

  describe('Tenta escrever um novo arquivo', () => {
    it('Mas falha', async () => {
      const status = await writeFile('fileNameError.txt', 'Ocorreu um erro ao escrever esse arquivo');

      expect(status).to.be.a('string');
      expect(status).to.be.equal('Error');
    });
  });
});
