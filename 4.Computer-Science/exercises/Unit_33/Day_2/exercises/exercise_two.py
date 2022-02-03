# Exercício 2: Defina uma classe Estatistica que calcule média, mediana e moda de uma lista de números.
# Dica: Utilize métodos de classe.


from statistics import mean, median, mode


class Estatistica():
    @classmethod
    def media(cls, numbers):
        return mean(numbers)

    @classmethod
    def mediana(cls, numbers):
        return median(numbers)

    @classmethod
    def moda(cls, numbers):
        return mode(numbers)
