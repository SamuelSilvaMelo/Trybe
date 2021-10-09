const express = require('express');
const author = require('./models/author');

const app = express();

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const authorData = await author.findById(id);

  if (!authorData) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(authorData);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
