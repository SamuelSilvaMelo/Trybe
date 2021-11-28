const { Book } = require('../models');

const listAllBooks = async (_req, res, next) => {
  const allBooks = await Book.findAll();

  if (allBooks.length === 0) return next({ error: 'No Registered Book' });

  res.status(200).json(allBooks);
};

const findBookById = async (req, res, next) => {
  const { id } = req.params;

  const book = await Book.findByPk(id);

  if (!book) return next({ error: 'Not Found' });

  res.status(200).json(book);
};

const createNewBook = async (req, res, _next) => {
  const { title, author, pageQuantity } = req.body;
  
  const newBook = await Book.create({ title, author, pageQuantity });

  res.status(200).json(newBook);
};

const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const findBook = await Book.findByPk(id);

  if (!findBook) return next({ error: 'Not Found' }); 

  const updatedBook = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  if (!updatedBook) return next({ error: 'Something went wrong here' });

  res.status(200).json({ message: 'Book updated successfully' });
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;

  const deletedBook = await Book.destroy({ where: { id } });

  if (!deletedBook) return next({ error: 'Not Found' });

  res.status(200).json({ message: 'Book removed successfully' });
};

module.exports = {
  listAllBooks,
  findBookById,
  createNewBook,
  updateBook,
  deleteBook,
};