# Exercício 1: Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?


def multiply_array(numbers):
    result = 0
    for number in numbers:
        result *= number

    return result

# Complexidade de Tempo: O(n) - Quanto maior o input maior será o laço e consequentemente maior o tempo (linear).
# Complexidade de Espaço: O(1) - Independente do input sempre será alocado em memória UM número.
