# Exercício 5: Escreva um algoritmo recursivo que identifica se um número é primo.

def isPrime(number, counter):
    if (number < 1 or counter < 1):
        return False

    if (number == 2):
        return True

    if (number % counter == 0):
        return False

    if (counter < 3):
        return True

    return isPrime(number, counter - 1)


for number in range(100):
    print(f'O número {number} é primo? - {isPrime(number, number - 1)}')
