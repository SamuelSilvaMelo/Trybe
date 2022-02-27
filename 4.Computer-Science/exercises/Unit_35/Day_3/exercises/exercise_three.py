# Exercício 3 Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias, em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.

from random import shuffle
from stopwatch import Stopwatch


def selection_sort(array):
    for i in range(len(array)):
        minimum = i

        for j in range(i + 1, len(array)):
            # seleciona o menor valor
            if array[j] < array[minimum]:
                minimum = j

        array[minimum], array[i] = array[i], array[minimum]

    return array


def insertion_sort(array):
    for i in range(len(array)):
        current_value = array[i]
        current_position = i

        while (current_position > 0 and array[current_position - 1] > current_value):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1

        array[current_position] = current_value
    return array


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados.copy()
shuffle(aleatorios)

print("\nOrdenados")
with Stopwatch(insertion_sort):
    insertion_sort(ordenados)

with Stopwatch(selection_sort):
    selection_sort(ordenados)


print("\nInversamente Ordenados")
with Stopwatch(insertion_sort):
    insertion_sort(inversamente_ordenados)

with Stopwatch(selection_sort):
    selection_sort(inversamente_ordenados)


print("\nAleatorios")
with Stopwatch(insertion_sort):
    print("insertion_sort")
    insertion_sort(aleatorios)

with Stopwatch(selection_sort):
    selection_sort(aleatorios)


# OBSERVAÇÃO DOS RESULTADOS:
# Com valores pequenos (100) o insertion_sort se mostrou melhor que o selection_sort.
# - insertion_sort: 9.397997928317636e-06 segundos (ordenados); 8.495997462887317e-06 segundos (Inversamente Ordenados); 1.0269999620504677e-05 segundos (Aleatorios).
# - selection_sort: 0.00017535500228405 segundos (ordenados); 0.00022354700195137411 segundos (Inversamente Ordenados); 0.00017605700122658163 segundos (Aleatorios).
#
# Com valores maiores (10.000) o insertion_sort se mostrou melhor que o selection_sort:
# - insertion_sort: 0.00848505699832458 segundos (ordenados); 0.00865677600086201 segundos (Inversamente Ordenados); 0.008969681002781726 segundos (Aleatorios).
# - selection_sort: 188.31320502699964 segundos (ordenados); 210.76067964899994 segundos (Inversamente Ordenados); 229.2901637670002 segundos (Aleatorios).
