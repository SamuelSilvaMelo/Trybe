# Exercício Bônus 2: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def print_triangle(base):
    for row in list(range(1, base + 1)):
        print(row * '*')
