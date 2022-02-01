# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar algumas partes de um software de geometria. Como poderíamos modelar um objeto retângulo?

from math import sqrt


class rectangle():
    def __init__(self, height, width):
        self._height = height
        self._width = width

    def perimeter(self):
        perimeter_value = (self._height * 2) + (self._width * 2)
        return f'O valor do perímetro do seu retângulo é: {perimeter_value}.'

    def area(self):
        area_value = self._height * self._width
        return f'O valor da área do seu retângulo é: {area_value}.'

    def diagonal(self):
        diagonal_value = sqrt(self._height ** 2 + self._width ** 2)
        return f'O valor da diagonal do seu retângulo é: {diagonal_value}.'
