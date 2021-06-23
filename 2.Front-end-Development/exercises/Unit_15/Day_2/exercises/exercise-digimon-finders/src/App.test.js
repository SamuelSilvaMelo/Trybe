import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {

  afterEach(() => jest.clearAllMocks());

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Verifica a presença de um input para pesquisar o Digimon', () => {
    const { getByTestId } = render(<App />);
    const searchDigimonInput = getByTestId('input');

    expect(searchDigimonInput).toBeInTheDocument();
    expect(searchDigimonInput.type).toBe('text');
  })

  it('Verifica a presença de um botão para pesquisar o Digimon', () => {
    const { getByTestId } = render(<App />);
    const buttonSearchDigimon = getByTestId('buttonSearch');

    expect(buttonSearchDigimon).toBeInTheDocument();
    expect(buttonSearchDigimon.type).toBe('button');
  })

  it('Testa o sucesso na busca por um Digimon', async () => {
    const data = [
      {
        "name": "Hawkmon",
        "img": "https://digimon.shadowsmith.com/img/hawkmon.jpg",
        "level": "Rookie",
      }
    ]

    const digimonSearched = 'Hawkmon';

    const { getByTestId, findByText, findByAltText } = render(<App />);
    const searchDigimonInput = getByTestId('input');
    const buttonSearchDigimon = getByTestId('buttonSearch');

    global.fetch = jest.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve(data)
    }));

    fireEvent.change(searchDigimonInput, { target: { value: digimonSearched } });
    fireEvent.click(buttonSearchDigimon);


    await findByText('Hawkmon');
    await findByText('level: Rookie');
    await findByAltText('Hawkmon');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`https://digimon-api.vercel.app/api/digimon/name/${digimonSearched}`)
  })

  it('Testa a falha na busca por um Digimon', async () => {
    const searchInput = 'Não é para encontrar';

    const data = 
      {
        "ErrorMsg": `${searchInput} is not a Digimon in our database.` 
      }

    const { getByTestId, findByText } = render(<App />);
    const searchDigimonInput = getByTestId('input');
    const buttonSearchDigimon = getByTestId('buttonSearch');

    jest.spyOn(global, "fetch")
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });

    fireEvent.change(searchDigimonInput, { target: { value: searchInput } });
    fireEvent.click(buttonSearchDigimon);

    await findByText(data.ErrorMsg);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`https://digimon-api.vercel.app/api/digimon/name/${searchInput}`);
  })
});
