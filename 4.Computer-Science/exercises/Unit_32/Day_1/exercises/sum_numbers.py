# Exercício Bônus 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N . Por exemplo, para N = 5 , o valor esperado será 15 .


def sum_numbers(n):
    sum = 0

    for number in range(n + 1):
        sum += number

    return sum


# def sum_numbers(n):
#     return sum(range(n + 1))
