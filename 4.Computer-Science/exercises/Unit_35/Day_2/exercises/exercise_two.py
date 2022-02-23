# Exercício 2: Transforme o algoritmo criado no Exercício 1 em recursivo.

def count_pairs_recursive(n):
    if (n == 0):
        return 0

    if (n % 2 == 0):
        return 1 + count_pairs_recursive(n - 1)
    else:
        return count_pairs_recursive(n - 1)
