const fetch = require("node-fetch");

function requestDogApi() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}

module.exports = { requestDogApi };
