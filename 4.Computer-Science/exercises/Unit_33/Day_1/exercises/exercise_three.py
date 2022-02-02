# Exercício 3: E como poderíamos definir um círculo? Qual seu nome, atributos e comportamentos?

class circle():
    def __init__(self, diameter):
        self.diameter = diameter

    PI = 3.14159

    def radius(self):
        radios_value = self.diameter / 2
        return f'O valor do raio do seu círculo é: {radios_value}'

    def area(self):
        area_value = self.PI * ((self.diameter / 2) ** 2)
        return f'O valor da área do seu círculo é: {area_value}'

    def perimeter(self):
        perimeter_value = (2 * self.PI) * (self.diameter / 2)
        return f'O valor da perímetro do seu círculo é: {perimeter_value}'


meu_circulo = circle(20)

print(meu_circulo.radius())
print(meu_circulo.area())
print(meu_circulo.perimeter())
