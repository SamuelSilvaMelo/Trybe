const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};


// const findRepositorys = 
// getRepos('https://api.github.com/orgs/tryber/repos')
// .then(data => data.filter((repository) => repository === 'sd-01-week4-5-project-todo-list' || repository === 'sd-01-week4-5-project-meme-generator'))
// .then(result => console.log(result));

// findRepositorys


module.exports = getRepos;