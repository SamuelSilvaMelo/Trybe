const getRepos = require('../exercises/exercise4');

describe('Check output function getRepos', () => {
  it('Check if URL https://api.github.com/orgs/tryber/repos has sd-01-week4-5-project-todo-list and sd-01-week4-5-project-meme-generator repository', async () => {
    const findRepositorys = 
    await getRepos('https://api.github.com/orgs/tryber/repos')
    .then(data => data.filter((repository) => repository === 'sd-01-week4-5-project-todo-list' || repository === 'sd-01-week4-5-project-meme-generator'))

    expect(findRepositorys).toEqual(['sd-01-week4-5-project-meme-generator', 'sd-01-week4-5-project-todo-list']);
  })
});