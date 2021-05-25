const requestDogApi = require('./dogPictures');

describe('Test requestDogApi function', () => {
  const checkRequestDogApi = jest.spyOn(requestDogApi,'requestDogApi');
  afterEach(checkRequestDogApi.mockReset);

  test('Check successful answer', async () => {
    checkRequestDogApi.mockResolvedValue('request sucess');

    checkRequestDogApi();
    expect(checkRequestDogApi).toHaveBeenCalled();
    expect(checkRequestDogApi).toHaveBeenCalledTimes(1);
    expect(checkRequestDogApi()).resolves.toBe('request sucess');
    expect(checkRequestDogApi).toHaveBeenCalledTimes(2);
  });

  test('Check failure answer', async () => {
    checkRequestDogApi.mockRejectedValue('request failed');

    checkRequestDogApi();
    expect(checkRequestDogApi).toHaveBeenCalled();
    expect(checkRequestDogApi).toHaveBeenCalledTimes(1);
    expect(checkRequestDogApi()).rejects.toBe('request failed');
    expect(checkRequestDogApi).toHaveBeenCalledTimes(2);
  });
});
