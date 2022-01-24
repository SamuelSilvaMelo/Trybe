# Exercício 3: Modifique o exercício anterior (Exercício 2) para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

import random


def scrambled_word(word):
    return "".join(random.sample(word, len(word)))


def raffle_word():
    word_list = []

    with open('words.txt', 'r') as words:
        for word in words:
            word_list.append(word.rstrip('\n'))
            # How to remove a trailing newline in Python
            # https://www.kite.com/python/answers/how-to-remove-a-trailing-newline-in-python

    return random.choice(word_list)


def guess_the_word():
    WORD = raffle_word()
    attempts = 3

    while attempts > 0:
        print(f'Você tem {attempts} tentativas.')
        word_attempt = input(f'Que palavra é essa: {scrambled_word(WORD)}?\n')

        if word_attempt == WORD:
            print('Parabéns! Você acertou!')
            break
        attempts -= 1

    if attempts == 0:
        print('Não foi dessa vez!')


guess_the_word()
