const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const writeFile = require('../writeFile');

describe('A função writeFile', () => {
  describe('Escreve um novo arquivo', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync')
    });

    after(() => {
      fs.readFileSync.restore();
    });

    it('Com sucesso', () => {
      const status = writeFile('fileName.txt', 'Conteúdo muito importante');

      expect(status).to.be.a('string');
      expect(status).to.be.equal('ok');
    });
  });

  describe('Tenta escrever um novo arquivo', () => {
    it('Mas falha', () => {
      const status = writeFile('**formato-/errado.txt', 'Ocorreu um erro ao escrever esse arquivo');

      expect(status).to.be.a('string');
      expect(status).to.be.equal('Error');
    });
  });
});
