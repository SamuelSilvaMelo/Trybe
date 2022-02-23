# Exercício 3: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.
#
# Exemplo:
#
# Número passado por parâmetro à função: 4
#
# Execução: 4 + 3 + 2 + 1
#
# Resultado: 10

def recursive_count(n):
    if n == 1:
        return 1
    else:
        return n + recursive_count(n - 1)


print(recursive_count(4))
