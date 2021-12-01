const express = require('express');
const JokesController = require('./controllers/jokesController');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => res.redirect('/categories'));
app.get('/categories', JokesController.getJokesCategories);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
