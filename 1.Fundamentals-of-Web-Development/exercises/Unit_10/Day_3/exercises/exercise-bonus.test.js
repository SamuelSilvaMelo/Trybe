const { fetchJoke } = require('./exercise-bonus');

const resultAPI = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}

fetchJoke.fetchJoke = jest.fn().mockReturnValue(resultAPI);

test('Check the result of the API call', () => {
  fetchJoke.fetchJoke();

  expect(fetchJoke.fetchJoke).toHaveBeenCalled();
  expect(fetchJoke.fetchJoke()).toEqual(resultAPI);
  expect(fetchJoke.fetchJoke).toHaveBeenCalledTimes(2);
})