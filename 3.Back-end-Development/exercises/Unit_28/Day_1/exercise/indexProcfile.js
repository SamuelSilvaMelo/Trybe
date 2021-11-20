require('dotenv').config();
const express = require('express');

const app = express();

const { PORT } = process.env;


app.get(
  '/',
  (_req, res) => {
    res.send('Procfile funciona mesmo!')
  },
);

app.listen(PORT, () => console.log(`Application running on port:${PORT}`));
