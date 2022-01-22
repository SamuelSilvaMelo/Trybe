# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

import math


def calculate_ink(area):
    can_coverage = 54
    can_price = 80
    total_cans = math.ceil(area / can_coverage)
    total_cans_price = total_cans * can_price

    return (total_cans, total_cans_price)
