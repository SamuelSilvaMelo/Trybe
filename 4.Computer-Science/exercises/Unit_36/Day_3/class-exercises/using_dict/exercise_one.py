# Exercício 1: Consulte a forma de se criar um dicionário chamado de dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro. Exemplo:
#
# - 3 deve ser mapeado para 6;
#
# - 10 deve ser mapeado para 20.

dict_comprehension = {key: key * 2 for key in range(3, 21)}

print(dict_comprehension)
