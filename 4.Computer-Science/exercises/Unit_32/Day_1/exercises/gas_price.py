# Exercício Bônus 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
#
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
#
# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

def discount_price(standard_price, discount):
    return standard_price - (standard_price * (discount / 100))


def gas_price(liters, type):
    type_A_standard_price = 1.9
    type_B_standard_price = 2.5

    if type == 'A':
        if liters > 20:
            return liters * discount_price(type_A_standard_price, 5)
        else:
            return liters * discount_price(type_A_standard_price, 3)

    if type == 'B':
        if liters > 20:
            return liters * discount_price(type_B_standard_price, 6)
        else:
            return liters * discount_price(type_B_standard_price, 4)
