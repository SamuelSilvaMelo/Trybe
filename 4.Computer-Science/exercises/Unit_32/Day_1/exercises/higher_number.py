# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def higher_number(firstNumber, secondNumber):
    numbers = [firstNumber, secondNumber]
    numbers.sort(reverse=True)
    return numbers[0]
