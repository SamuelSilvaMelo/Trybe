const express = require('express');
const JokesController = require('./controllers/jokesController');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => res.redirect('/categories'));

app.get('/jokes', JokesController.getRandomJoke);

app.get('/categories', JokesController.getJokesCategories);
app.get('/jokes/:category', JokesController.getJokeByCategory);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
