const JokesModels = require('../models/JokesModel');

const getJokesCategories = async (_req, res) => {
  try {
    const categories = await JokesModels.getJokesCategories();
  
    return res.render('categories/index', { categories });
  } catch (error) {
    console.log(error);

    return res.render('notFound/404');
  }
};

const getJokeByCategory = async (req, res) => {
  try {
    const { category } = req.params;
  
    const joke = await JokesModels.getJokeByCategory(category);
  
    res.render('categories/joke', { joke, category });
  } catch (error) {
    console.log(error);

    return res.render('notFound/404');
  }
}

const getRandomJoke = async (_req, res) => {
  try {
    const joke = await JokesModels.getRandomJoke();

    res.render('randomJoke/index', { joke })
  } catch (error) {
    console.log(error);

    return res.render('notFound/404');
  }
}

module.exports = {
  getJokesCategories,
  getJokeByCategory,
  getRandomJoke
};
