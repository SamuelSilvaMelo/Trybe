const connection = require('./connection');

const serializae = ({ id, first_name, last_name, email, password }) => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
});

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);'

  const [users] = await connection.execute(query, [firstName, lastName, email, password])

  return {
    id: users.insertId,
    firstName,
    lastName,
    email,
  };
}

const findAllEmails = async () => {
  const query = 'SELECT email FROM users;'

  const [userEmails] = await connection.execute(query);

  return userEmails;
}

const findAllUsers = async () => {
  const query = 'SELECT * FROM users;'

  const [allUsers] = await connection.execute(query);

  return allUsers.map(serializae);
};

const findUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id=?;';

  const [user] = await connection.execute(query, [id]);

  return user.map(serializae);
};

const updateUser = async (id, firstName, lastName, email, password ) => {
  const query = 'UPDATE users SET first_name=?, last_name=?, email=?, password=? WHERE id=?;';

  const [updatedValues] = await connection.execute(
    query,
    [firstName, lastName, email, password, id]
  );

  if (!updatedValues.affectedRows) return null

  return ({
    id,
    firstName,
    lastName,
    email,
    password,
  })
};

module.exports = {
  createUser,
  findAllEmails,
  findAllUsers,
  findUserById,
  updateUser,
};
