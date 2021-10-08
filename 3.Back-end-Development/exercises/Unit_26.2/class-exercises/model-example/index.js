const express = require('express');
const author = require('./models/author');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await author.getAll();

  res.status(200).json(authors);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
