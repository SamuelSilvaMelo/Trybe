const { users, findUserById, getUserName } = require('../exercises/exercise3');

describe('Check if the function getUserName using Async/Await', () => {
  it('returns the user Mark to id 4', async () => {
    const userName = await getUserName(4);
      expect(userName).toBe('Mark');
  });

  it('returns the usar Paul to id 5', async () => {
    const userName = await getUserName(5);
      expect(userName).toBe('Paul');
  });

  it('returns error when the user id is different from 4 and 5', async () => {
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' })
    }
  });
})
