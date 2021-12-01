const axios = require('axios').default;

const getJokes = async () => {
  try {
    const { data: { joke } } = await axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single');
  
    return joke;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getJokes
};
