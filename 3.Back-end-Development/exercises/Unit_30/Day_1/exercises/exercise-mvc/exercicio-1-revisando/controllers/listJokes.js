const { getJokes } = require('../models/joke');

const listJokes = async (_req, res) => {
  const joke = await getJokes();

  return res.render('jokeView', { joke })
};

module.exports = {
  listJokes
};
