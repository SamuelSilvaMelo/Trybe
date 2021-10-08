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

module.exports = {
  getAllBooks,
  getByAuthorId,
};
