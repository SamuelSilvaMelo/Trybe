const readFile = require('./readFile');
const { question } = require('readline-sync');
const fs = require('fs').promises;

const replacesContent = async () => {
  const file = await readFile();
  console.log('O arquivo selecionado possui o seguinte conteúdo: ');
  console.log(file);

  const wordToRemove = question('Qual palavra você quer remover? ');
  const wordToAdd = question('Qual palavra você quer adicionar? ');

  const newFile = file.replace(new RegExp(wordToRemove, 'g'), wordToAdd);

  console.log('O novo arquivo ficará assim: ');
  console.log(newFile);

  const folderToSaveFile = question('Onde você deseja salvar esse novo arquivo? ');

  fs.writeFile(`./${folderToSaveFile}`, newFile);
};

module.exports = replacesContent;
