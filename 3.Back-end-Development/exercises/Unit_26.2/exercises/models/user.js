const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createUser = async (firstName, lastName, email, password) => (
  connection()
    .then((db) => db.collection('user').insertOne({
      firstName,
      lastName,
      email,
      password,
    }))
    .then(({ insertedId}) => ({
      id: insertedId,
      firstName,
      lastName,
      email,
    }))
    .catch((error) => ({
      errorCode: 401,
      message: error.message,
    }))
);

const findAllEmails = async () => (
  connection()
    .then((db) => db.collection('user').find({}, { _id: 0, email: 1 }).toArray())
    .then((response) => response)
);

const findAllUsers = async () => (
  connection()
    .then((db) => db.collection('user').find().toArray())
    .then((response) => response)
);

module.exports = { createUser, findAllEmails, findAllUsers };
