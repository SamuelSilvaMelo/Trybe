# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

def inverted_vertical_name():
    NAME = input('Digite seu nome: ')
    curr_position = len(NAME)

    while curr_position >= 0:
        print(
          NAME[0:curr_position]
        )
        curr_position -= 1
