**Exercício 5:** Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de `n` números gerados aleatóriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?

**RESPOSTA:**

```py
import random

def thousand_randon_numbers(n):
    randon_numbers = []

    for _ in range(100):
        sum = 0

        for _ in range(n):
            sum += random.random()

        average = sum / n
        randon_numbers.append(sum)
    
    return randon_numbers
```

Como o range que determina o tamanho do Array final é `100` a **Complexidade de Espaço** acaba se tornando `O(1)`. Já a **Complexidade de Tempo** irá aumentar linearmente conforme a interação que obtem a média dos valores for aumentando, sendo então `O(n)`.
