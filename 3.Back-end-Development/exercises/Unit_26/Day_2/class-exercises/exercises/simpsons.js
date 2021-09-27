const fs = require('fs').promises;

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
