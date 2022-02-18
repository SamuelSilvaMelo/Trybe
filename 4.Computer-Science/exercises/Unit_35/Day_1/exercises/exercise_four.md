**Exercício 4:** O código abaixo está em JavaScript . Calcule sua ordem de complexidade para um array de tamanho `n`.

```js
const numbers = [0,1,2,3,4,5,6,7,8,9]
numbers.map(n => n*n)
       .filter(n => n%2 === 0)
       .reduce((acc, n) => acc + n)
```

**RESPOSTA:**
```
A funcão map irá iterar sobre todos os elementos do array, multiplicando o valor por ele mesmo e retornando um array de mesmo tamanho, após isso outra iteração ocorrera sobre o array com a função filter, percorrendo todos os itens e retornando apenas os pares. Por fim mais uma iteração ocorrerá com a funcão reduce que também percorrerá todos os itens do array somando seus valores. Como o mesmo array é percorrido três vezes porém de forma paralela (e não aninhada) a complexidade desse algoritmo é de O(n + n + n) ou O(3n) ou O(n).
```
