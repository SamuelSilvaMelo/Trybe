# Exercício 2: Para desembaraçar a sopa de letrinhas que a seção anterior criou, meça o tempo de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!

import timeit


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = list(range(1, 2000))

start = timeit.default_timer()
multiply_arrays(meu_array, meu_array)
end = timeit.default_timer()

print(f'O algoritmo multiply_arrays foi executado em: {end - start}')
