require('dotenv').config();
const express = require('express');
const { listJokes } = require('./controllers/listJokes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', listJokes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
