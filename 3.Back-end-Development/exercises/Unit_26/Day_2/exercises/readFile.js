const { question, keyInSelect } = require('readline-sync');
const fs = require('fs').promises;

const readFile = async () => {
  const ask = question('Qual arquivo você gostaria de ler? ');
  const extentionOptions = ['.txt', '.json', '.js', '.pdf', '.ppt', '.doc', '.md'];
  const whichExtension = keyInSelect(extentionOptions, 'Qual o formato do arquivo? ');
  const file = `${ask}${extentionOptions[whichExtension]}`;

  try {
    const readFile = await fs.readFile(file, 'utf-8');
    return readFile;
  } catch (error) {
    return `Arquivo inexistente |, ${error.message}`
  }
};

module.exports = readFile;
