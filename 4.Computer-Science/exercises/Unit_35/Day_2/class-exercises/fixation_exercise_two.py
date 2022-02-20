# Exercício 2: ReverseCorp Ligue seu cronômetro de novo, e tente desenvolver esta solução, utilizando a iteração. (Se demorar mais que 10 minutos, pare, e prossiga com o conteúdo!)
#
# Suponha agora que você está fazendo o processo seletivo para a ReverseCorp, uma empresa que se especializa em produtos e serviços ao contrário. Na sua entrevista, o seu desafio é demonstrar as suas habilidades de inversão com o seguinte problema:
#
# "Faça uma função que recebe uma lista, e retorna-a na ordem reversa."

def reverse_list(list):
    invert_list = []

    for index, _ in enumerate(list):
        invert_list.append(list[-index - 1])

    return invert_list


# EXEMPLO SOLUÇÃO RECURSIVA:

# def reverse(list):
#     if len(list) < 2:
#         return list
#     else:
#         return reverse(list[1:]) + [list[0]]
