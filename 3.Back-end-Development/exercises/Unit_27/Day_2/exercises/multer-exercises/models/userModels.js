const fs = require('fs').promises;

const readProfiles = async () => JSON.parse(await fs.readFile('models/profiles.json', 'utf-8'));

const create = async ({ id, name, email, password, bio }) => {
  try {
    const users = await readProfiles();
    const newUsers = [...users, { id, name, email, password, bio }];
    await fs.writeFile('models/profiles.json', JSON.stringify(newUsers));
    return ({ message: 'User created' });
  } catch (err) {
    return new Error(err.message);
  }
};

const findUserById = async (id) => {
  try {
    const users = await readProfiles();
    return (
      users.find((user) => user.id === id)
    );
  } catch (err) {
    return new Error(err.message);
  }
};

module.exports = {
  create,
  findUserById,
};
