const JokesModels = require('../models/JokesModel');

const getJokesCategories = async (_req, res) => {
  const categories = await JokesModels.getJokesCategories();

  console.log('ENTREI NO GETJOKES')

  res.render('categories/index', { categories });
};

module.exports = {
  getJokesCategories
};
