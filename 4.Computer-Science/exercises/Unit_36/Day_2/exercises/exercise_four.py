# Exercício 4 Dado dois arrays de números inteiros que representam instantes de entrada e saídas em uma biblioteca e um número que represente um instante a ser buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante que entrou, saiu da biblioteca.
#
# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1
#
# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.

def present_students(entries, exits, instant):
    if len(entries) != len(exits):
        raise Exception("The entries and exits must be informed")

    count = 0

    for index in range(len(entries)):
        permanency = range(exits[index] - entries[index])

        if (instant in permanency):
            count += 1

    return count
