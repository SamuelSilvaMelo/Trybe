"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""

import sys


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        self.remove(index)
        return self.set(index, value)


# vamos inicializar e preencher uma estrutura de dados array
array = Array()

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 56

array.set(0, "Marcos")
array.set(1, "Patrícia")

# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 88

array.set(2, "Matheus")
array.set(3, "Giovana")

# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 88

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")

# Inserimos mais alguns valores e vamos ver o que acontece.
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 120

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Marcos
print(array.get(2))  # saída: Matheus
print("-----")

# Até agora inserimos somente ao final do nosso array. Mas e se precisarmos adicionar um elemento no início, ou no meio?

print(array)  # saída: ['Marcos', 'Patrícia', 'Matheus', 'Giovana', 'Alberto', 'Marta', 'Túlio', 'Michelle']

# inserindo no começo do array
array.set(0, "Valeria")
print(array)  # saída: ["Valeria", 'Marcos', 'Patrícia', 'Matheus', 'Giovana', 'Alberto', 'Marta', 'Túlio', 'Michelle']

# inserindo em uma posição intermediária
array.set(1, "Miguel")
print(array)  # saída: ['Valeria', 'Miguel', 'Marcos', 'Patrícia', 'Matheus', 'Giovana', 'Alberto', 'Marta', 'Túlio', 'Michelle']

array.update(2, "Samuel")
print(array)  # saída: ['Valeria', 'Miguel', 'Samuel', 'Patrícia', 'Matheus', 'Giovana', 'Alberto', 'Marta', 'Túlio', 'Michelle']

print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1
