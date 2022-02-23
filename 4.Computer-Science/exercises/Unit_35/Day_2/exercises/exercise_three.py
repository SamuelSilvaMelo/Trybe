# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.


def biggest_integer(n):
    # Se a lista tiver o tamanho de 1 o próprio valor é o maior
    if len(n) == 1:
        return n

    # Caso a lista tenha o tamanho de 2 eu retorno o maio valor
    if len(n) == 2:
        if n[0] > n[1]:
            # [:1] pega sempre o primeiro valor
            return n[0:1]
        else:
            # [:2] pega sempre o último valor
            return n[2:0]

    # Divide a lista ao meio colocando a primeira metade no first_half_list e a segunda metade no second_hald_list
    first_half_list = n[0:(len(n) // 2)]
    second_half_list = n[(len(n) // 2):]

    # Sempre irei dividir meu array até ter um com apenas 2 ou 1 valor, juntando os mesmos e dividindo novamente até chegar mais uma vez em 2 ou 1 de tamanho para então chegar no meu caso base.
    return biggest_integer(
        biggest_integer(first_half_list) + biggest_integer(second_half_list)
    )


print(biggest_integer([1, 21, 300, 4, 57]))
