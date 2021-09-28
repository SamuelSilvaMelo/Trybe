const fs = require('fs').promises;

// 4. Realize o download deste arquivo (./simpsonFamilyBackup.json) e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.
// 4.1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson.
const listCharacters = () => {
  fs.readFile('./simpsons.json', 'utf8')
    .then((response) => {
      const data = JSON.parse(response);

      data.map(({ id, name }) => {
        console.log(`${id} - ${name}`)
      });

    })
    .catch((err) => console.log(err.message));
};

// 4.2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const characterInfo = (id) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf-8')
      .then((response) => JSON.parse(response))
      .then((charactersList) => charactersList.find((character) => character.id === id))
      .then((character) => {
        if (character) {
          resolve(character);
        } else {
          reject(new Error('Erro: id não encontrado'));
        }
      })
      .catch((err) => reject(err));
  });
};

// 4.3. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const removeCharacters = async ([...ids]) => {
  try {
    const newCharacters = await fs
      .readFile('./simpsons.json', 'utf-8')
        .then((response) => JSON.parse(response))
        .then((characters) => {
          return newFamily = characters.filter((character) => ids.every((id) => id !== character.id))
        });
  
    fs.writeFile(
      './simpsons.json',
      JSON.stringify(newCharacters)
    );
  } catch (error) {
    console.log(error.message)
  }
};

// 4.4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
const createSimpsonFamily = async () => {
  try {
    const characters = await fs
      .readFile('./simpsons.json', 'utf-8')
        .then((response) => JSON.parse(response));

    const simpsonFamilyIds = ['1', '2', '3', '4'];
    const simpsonFamily = (
      characters.filter((character) => (
        simpsonFamilyIds.some((simpsonFamilyId) => simpsonFamilyId === character.id))
      )
    );

    fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));

  } catch (error) {
    console.log(error.message);

  }
};

// 4.5. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
const addNewCharacterToSimpsonFamily = async (characterName) => {
  try {
    const simpsonFamily = await fs
      .readFile('./simpsonFamily.json', 'utf-8')
        .then((response) => JSON.parse(response))
    
    const lastSimpsonFamilyCharacter = parseInt(simpsonFamily[simpsonFamily.length - 1].id);
    const newSimpsonFamily = [
      ...simpsonFamily,
      {
        id: (lastSimpsonFamilyCharacter + 1).toString(),
        name: characterName
      },
    ];

    fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonFamily));

  } catch (error) {
    console.log(error.message);
  };
};

// 4.6. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const replaceSimpsonFamilyCharacter = async (characterNameToRemove, characterNameToAdd) => {
  try {
    const simpsonFamily = await fs
      .readFile('./simpsonFamily.json', 'utf-8')
        .then((response) => JSON.parse(response));

    const newSimpsonFamily = (
      simpsonFamily.map((character) => {
        if(character.name === characterNameToRemove) {
          return { id: character.id, name: characterNameToAdd };
        }

        return character;
      })
    );

    fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonFamily));

  } catch (error) {
    console.log(error.message)
  }
};
