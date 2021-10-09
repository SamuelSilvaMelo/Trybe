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
  if (!authorId || typeof authorId !== 'number') return false;

  const [authorIds] = await connection.execute(
    'SELECT id FROM authors;'
  );

  const findAuthor = authorIds.find(({ id }) => id === authorId);

  if (!findAuthor) return false;

  return true;
};

const create = async (title, author_id) => connection.execute(
  'INSERT INTO books (title, author_id) VALUES (?, ?)',
  [title, author_id]
);

module.exports = {
  getAllBooks,
  getByAuthorId,
  getBooksById,
  isValid,
  create,
};
