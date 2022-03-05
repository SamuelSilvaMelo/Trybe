# Exercício 1 Em um software monitor, que verifica a resiliência de outro software, precisamos saber qual o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema e verificamos se está ok. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.
#
# 1 - OK
# 0 - Instabilidades
#
# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3
#
# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

def analyze_stability(collected_values):
    stability_periods = []
    sum = 0

    for value in collected_values:
        if value == 1:
            sum += 1
        if value == 0 and sum != 0:
            stability_periods.append(sum)
            sum = 0

    return max(stability_periods)
