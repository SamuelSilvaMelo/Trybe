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
