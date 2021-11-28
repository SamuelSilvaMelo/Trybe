const express = require('express');
const BooksController = require('../controller/booksController');
const ValidateNewBook = require('../middleware/validateNewBook');

const route = express.Router();

route.get(
  '/',
  BooksController.listAllBooks,
);

route.get(
  '/:id',
  BooksController.findBookById,
);

route.post(
  '/',
  ValidateNewBook,
  BooksController.createNewBook,
);

route.post(
  '/:id',
  ValidateNewBook,
  BooksController.updateBook,
);

route.delete(
  '/:id',
  BooksController.deleteBook,
);

module.exports = route;