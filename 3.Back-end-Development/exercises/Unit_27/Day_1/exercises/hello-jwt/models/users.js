const fs = require('fs').promises;

const readUserData = async () => JSON.parse(await fs.readFile('./models/data/user.json', 'utf-8'));

const findUserByUserName = async (username) => {
  try {
    const userList = await readUserData();
    return userList.find((user) => user.username === username);
  } catch (err) {
    return err.message;
  }
};

const createUser = async ({ username, password, admin }) => {
  try {
    const userList = await readUserData();
    const newUserList = [...userList, { username, password, admin }];
    await fs.writeFile('./models/data/user.json', JSON.stringify(newUserList));
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  findUserByUserName,
  createUser,
};
