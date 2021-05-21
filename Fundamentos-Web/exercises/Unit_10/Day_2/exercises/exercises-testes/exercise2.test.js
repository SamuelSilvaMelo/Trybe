const { users, findUserById, getUserName } = require('../exercises/exercise2');

describe('Check if the function getUserName', () => {
  it('returns the user Mark to id 4', () => {
    expect.assertions(1);
    return getUserName(4).then(user => 
      expect(user).toBe('Mark'));
  });

  it('returns the user Paul to id 5', () => {
    expect.assertions(1);
    return getUserName(5).then(user => 
      expect(user).toBe('Paul'));
  });

  it('returns error when the user id is different from 4 and 5', () => {
    expect.assertions(1);
    return getUserName(1).catch(error => 
      expect(error).toEqual({ error: 'User with 1 not found.' }));
  });
})
