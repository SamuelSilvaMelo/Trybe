# Exercício Bônus 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .

def smallest_number(numbers):
    current_smallest_number = numbers[0]

    for number in numbers:
        if number < current_smallest_number:
            current_smallest_number = number

    return current_smallest_number


# Template
# def minimum(numbers):
#     return min(numbers)
