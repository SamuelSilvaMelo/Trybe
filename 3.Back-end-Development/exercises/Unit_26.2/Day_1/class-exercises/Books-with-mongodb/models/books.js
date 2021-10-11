const connection = require('./connection');
const { ObjectId } = require('mongodb');

const serialize = ({ id, title, author_id}) => ({
  id,
  title,
  authorId: author_id,
})

const getAllBooks = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
      .then((books) => 
        books.map(({ _id, title, author_id }) => ({
          id: _id,
          title,
          authorId: author_id,
        }))
      );
};

const getByAuthorId = async (authorId) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray())
      .then((books) => 
        books.map(({_id, title, author_id}) => ({
          id: _id,
          title,
          authorId: author_id
        }))
      );
};

const getBooksById = async (bookId) => {
  if (!ObjectId.isValid(bookId)) {
    return null;
  }

  const booksData = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(bookId)));

  if (!booksData) return null;

  const { _id, title, author_id } = booksData;

  return {
    id: _id,
    title,
    authorId: author_id,
  }
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' ||title.length < 4) return false;
  if (!authorId || typeof authorId !== 'string') return false;

  const authorIds = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(authorId)))

  if (!authorIds) return false;

  return true;
};

const create = async (title, authorId) => (
  connection()
    .then((db) => db.collection('books').insertOne({ title, authorId}))
);

module.exports = {
  getAllBooks,
  getByAuthorId,
  getBooksById,
  isValid,
  create,
};
