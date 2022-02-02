# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma cafeteria. Como podemos abstrair um pedido composto por vários itens? Qual seu nome, atributos e comportamentos?


class coffe_shop():
    def __init__(self, client_name):
        self.client_name = client_name
        self._coffe_price = 4.50
        self._cappuccino_price = 9.35
        self._macchiato_price = 14.0
        self._mocha_price = 12.0
        self._omelet_price = 5.0
        self._brazilian_fried_chicken_balls_price = 8.0
        self._pastry_price = 5.0
        self._meat_pie_price = 4.5
        self.products = []
        self._total_price = 0

    def total_price(self):
        for product in self.products:
            print(product)
        print(
          f'{self.client_name} o total do seu pedido foi: {self._total_price}'
        )

    def add_coffe(self):
        self.products.append(f'1 x Café: R$:{self._coffe_price}')
        self._total_price += self._coffe_price

    def add_cappuccino(self):
        self.products.append(f'1 x Cappuccino: R$:{self._cappuccino_price}')
        self._total_price += self._cappuccino_price

    def add_macchiato(self):
        self.products.append(f'1 x Macchiato: R$:{self._macchiato_price}')
        self._total_price += self._macchiato_price

    def add_mocha(self):
        self.products.append(f'1 x Mocha: R$:{self._mocha_price}')
        self._total_price += self._mocha_price

    def add_omelet(self):
        self.products.append(f'1 x Omelet: R$:{self._omelet_price}')
        self._total_price += self._omelet_price

    def add_brazilian_fried_chicken_balls(self):
        self.products.append(
          f'1 x Coxinha: R$:{self._brazilian_fried_chicken_balls_price}'
        )
        self._total_price += self._brazilian_fried_chicken_balls_price

    def add_pastry(self):
        self.products.append(f'1 x Pastel: R$:{self._pastry_price}')
        self._total_price += self._pastry_price

    def add_meat_pie(self):
        self.products.append(f'1 x Empada: R$:{self._meat_pie_price}')
        self._total_price += self._meat_pie_price
