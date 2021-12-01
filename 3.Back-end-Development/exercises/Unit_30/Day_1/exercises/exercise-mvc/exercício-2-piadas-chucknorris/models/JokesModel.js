const axios = require('axios').default;

const getJokesCategories = async() => {
  const { data } = await axios.get('https://api.chucknorris.io/jokes/categories');

  return data;
};

module.exports = {
  getJokesCategories,
};
