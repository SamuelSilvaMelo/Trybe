# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

# Dica 1: Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
# Dica 2: O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2" .

import random


def scrambled_word(word):
    return "".join(random.sample(word, len(word)))


def raffle_word():
    words = [
      'pilot',
      'airplane',
      'trip',
      'world',
      'beach'
    ]

    return random.choice(words)


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
