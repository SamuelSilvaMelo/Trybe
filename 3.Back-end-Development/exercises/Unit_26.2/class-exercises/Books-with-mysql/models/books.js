const connection = require('./connection');

const serialize = ({ id, title, author_id}) => ({
  id,
  title,
  authorId: author_id,
})

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM books'
  )

  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT * FROM books WHERE author_id=?;', [authorId]
  )

  return books.map(serialize);
};

const getBooksById = async (bookId) => {
  const query = 'SELECT * FROM books WHERE id=?;'
  const [book] = await connection.execute(query, [bookId]);

  if (book.length === 0) return null;

  return book.map(serialize);
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
