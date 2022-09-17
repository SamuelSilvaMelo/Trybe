# Exercício 3: Utilize o dicionário criado no exercício 1. Para as chaves ímpares, não queremos mais mapear para o seu sobro, mas sim, para o seu triplo. Consulte o método keys() e atualize o seu dicionário para a nova regra.

# Criando dicionário do zero:

new_dict_comprehension = dict()


for key in range(3, 21):
    if (key % 2 == 0):
        new_dict_comprehension[key] = key * 2
    if (key % 2 != 0):
        new_dict_comprehension[key] = key * 3

print(new_dict_comprehension)


# Alterando dicionário já criado

dict_comprehension = {key: key * 2 for key in range(3, 21)}

for key in dict_comprehension.values():
    if (key % 2 != 0):
        dict_comprehension[key] = key * 3

print(dict_comprehension)
