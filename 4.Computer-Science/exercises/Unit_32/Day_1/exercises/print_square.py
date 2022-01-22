# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

def square(n):
    if n <= 1:
        print("Enter a number greater than 1")
        return

    loop = n

    while loop >= 1:
        print(n * "*")
        loop -= 1


# Template
# def draw_square(n):
#     for row in range(n):
#         print(n * '*')
