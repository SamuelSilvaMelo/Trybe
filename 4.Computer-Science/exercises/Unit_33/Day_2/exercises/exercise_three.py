# Exercício 3: Que tal agora relembrarmos o exercício das figuras geométricas? Implemente o diagrama de classes abaixo.


from abc import ABC, abstractmethod
from math import sqrt


class GeometricFigure(ABC):
    @abstractmethod
    def area():
        raise NotImplementedError

    @abstractmethod
    def perimeter():
        raise NotADirectoryError


class circle(GeometricFigure):
    def __init__(self, diameter):
        self.diameter = diameter

    PI = 3.14159

    def area(self):
        area_value = self.PI * ((self.diameter / 2) ** 2)
        return f'O valor da área do seu círculo é: {area_value}'

    def perimeter(self):
        perimeter_value = (2 * self.PI) * (self.diameter / 2)
        return f'O valor da perímetro do seu círculo é: {perimeter_value}'

    def radios(self):
        radios_value = self.diameter / 2
        return f'O valor do raio do seu círculo é: {radios_value}'


class rectangle(GeometricFigure):
    def __init__(self, height, width):
        self._height = height
        self._width = width

    def area(self):
        area_value = self._height * self._width
        return f'O valor da área do seu retângulo é: {area_value}.'

    def perimeter(self):
        perimeter_value = (self._height * 2) + (self._width * 2)
        return f'O valor do perímetro do seu retângulo é: {perimeter_value}.'

    def diagonal(self):
        diagonal_value = sqrt(self._height ** 2 + self._width ** 2)
        return f'O valor da diagonal do seu retângulo é: {diagonal_value}.'


class square(GeometricFigure):
    def __init__(self, side):
        self.side = side

    def area(self):
        return f'O valor da área do seu quadrado é: {self.side ** 2}'

    def perimeter(self):
        return f'O valor do perímetro do seu quadrado é: {self.side * 4}'
