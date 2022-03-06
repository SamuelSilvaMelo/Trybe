# Exercícios de fixação

## Exercício 1: Inicializando a classe e adicionando elementos

- Crie uma classe chamada `Conjunto`;
- Escreva um construtor que defina uma lista do tamanho necessário. Inicialize todos os valores com `False`, uma vez que ainda não temos valores adicionados;
- Crie um método `add(item)` que recebe um valor até 1000 e adiciona no conjunto;
- Na `main` (dentro de: if `__name__ == "__main__":` ), instancie um objeto do tipo `Conjunto` e adicione os valores:

  ```py
  [0, 10, 100, 1000]
  ```

## Exercício 2: Imprimir

Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto) não irá funcionar. O que será impresso é o endereço de memória onde o objeto está guardado, e não é isso que queremos. Para que o comando print funcione, precisamos que a nossa classe tenha um método chamado `__str__` e é o que faremos agora:

- Crie um método com a assinatura abaixo:

  ```py
  def __str__(self):
      # retorno: uma string que representa o seu objeto
  ```

- Exemplos de entrada e saída:

  ```py
  A = {1, 2, 3}
  # saída: '{1, 2, 3}'

  B = {7, 2, 10}
  # saída: '{2, 7, 10}'

  C = {}
  # saída: '{}'
  ```

  A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem em consideração. A saída pode ser em qualquer ordem, mas provavelmente será mais fácil retornar em ordem. Teste seu método imprimindo os objetos que você criou.