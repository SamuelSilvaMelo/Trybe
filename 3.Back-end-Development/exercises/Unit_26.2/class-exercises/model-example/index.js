const express = require('express');
const author = require('./models/author');

const app = express();

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
