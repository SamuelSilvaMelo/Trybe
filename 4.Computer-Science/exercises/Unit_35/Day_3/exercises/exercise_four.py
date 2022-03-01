# Exercício 4 Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.

from random import shuffle
from stopwatch import Stopwatch


def merge(left, right, merged):

    left_cursor, right_cursor = 0, 0

    while left_cursor < len(left) and right_cursor < len(right):

        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1

    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged


def merge_sort(array):
    if len(array) <= 1:
        return array

    mid = len(array) // 2

    left, right = merge_sort(array[:mid]), merge_sort(array[mid:])

    return merge(left, right, array.copy())


def bubble_sort(array):
    has_swapped = True
    num_of_iterations = 0

    while has_swapped:
        has_swapped = False

        for i in range(len(array) - num_of_iterations - 1):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]

                has_swapped = True
        num_of_iterations += 1

    return array


ordenados = list(range(10000))
inversamente_ordenados = list(reversed(range(10000)))
aleatorios = ordenados.copy()
shuffle(aleatorios)


print("\nAleatorios")
with Stopwatch(merge_sort):
    print("insertion_sort")
    merge_sort(aleatorios)

with Stopwatch(bubble_sort):
    bubble_sort(aleatorios)


# OBSERVAÇÃO DOS RESULTADOS:
#
# Com valores maiores (10.000) o merge_sort se mostrou melhor que o bubble_sort:
# - merge_sort: 0.02111037199938437 segundos (Aleatorios).
# - bubble_sort: 4.350871474998712 segundos (Aleatorios).
#
# Isso ocorre pois o bubble_sort é um algoritmo de complexidade O(n²), ou seja, quadrático (possui dois laços de iteração aninhados) enquanto o merge_sort aplica a técnica do dividir para conquistar de complexidade O(n log n).
