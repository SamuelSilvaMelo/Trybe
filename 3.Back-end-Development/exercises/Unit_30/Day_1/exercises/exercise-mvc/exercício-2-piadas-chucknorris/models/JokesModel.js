const axios = require('axios').default;

const getJokesCategories = async() => {
  const { data } = await axios.get('https://api.chucknorris.io/jokes/categories');

  return data;
};

const getJokeByCategory = async (category) => {
  const { data: { value } } = (
    await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
  );

  return value;
}

const getRandomJoke = async () => {
  const { data: { value } } = (
    await axios.get('https://api.chucknorris.io/jokes/random')
  );

  return value;
};

module.exports = {
  getJokesCategories,
  getJokeByCategory,
  getRandomJoke
};
