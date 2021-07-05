import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, getByDisplayValue, queryByText } = render(<App />) // Caso precise de uma nova query adicione no object destructuring

    const taskInput = getByLabelText('Tarefa:');
    const addBtn = getByDisplayValue('Adicionar');

    listTodo.forEach((task) => {
      fireEvent.change(taskInput, { target: { value: task } });

      expect(queryByText(task)).not.toBeInTheDocument();

      fireEvent.click(addBtn);
      
      expect(queryByText(task)).toBeInTheDocument();
    })

  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content="Teste" />);

    expect(getByText('Teste')).toBeInTheDocument();
  })
})
