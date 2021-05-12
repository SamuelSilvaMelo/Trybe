// Função appendChild

function appendChild (element) {
  const body = document.querySelector('#jokeContainer');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = element;
  body.appendChild(createParagraph);
}

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendChild(data.joke));
};

window.onload = () => fetchJoke();