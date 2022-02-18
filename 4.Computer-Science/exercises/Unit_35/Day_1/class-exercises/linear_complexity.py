import timeit


def sum_array(numbers):
    sum = 0

    for number in numbers:
        sum += number

    return sum


start = timeit.default_timer()
sum_array(range(1000000))
end = timeit.default_timer()

print(f'O algoritmo sum_array foi executado em: {end - start}')
