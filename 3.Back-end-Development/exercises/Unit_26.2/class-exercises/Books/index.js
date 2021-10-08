const express = require('express');
const books = require('./models/books')

const app = express();

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const allBooks = (author_id)
    ? await books.getByAuthorId(author_id)  
    : await books.getAllBooks()

  res.status(200).json(allBooks);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`)
});
