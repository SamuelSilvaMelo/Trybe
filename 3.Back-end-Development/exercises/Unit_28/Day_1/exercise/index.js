require('dotenv').config();
const express = require('express');

const app = express();

const { PORT, MESSAGE } = process.env;


app.get(
  '/',
  (_req, res) => {
    res.send(MESSAGE)
  },
);

app.listen(PORT, () => console.log(`Application running on port:${PORT}`));
