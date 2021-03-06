const express = require('express');
const books = require('./models/books')

const app = express();

app.use(express.json());

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const allBooks = (author_id)
    ? await books.getByAuthorId(author_id)  
    : await books.getAllBooks()

  res.status(200).json(allBooks);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const bookById = await books.getBooksById(id);

  if (!bookById) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(bookById);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!(await books.isValid(title, author_id))) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await books.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`)
});
