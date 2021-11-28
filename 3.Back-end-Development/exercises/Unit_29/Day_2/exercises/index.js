require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const BookRoutes = require('./routes/BookRoutes');
const ErrorMiddleware = require('./middleware/error');

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());

app.use('/books', BookRoutes);

app.use(ErrorMiddleware);

app.use('*', (_req, res) => {
  res.status(404).json({ message: 'Page not found' });
})

app.listen(PORT, () => console.log(`Listen on Port: ${PORT}`));
