# Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum ( mdc ) de dois inteiros.

# Made with the help of the template

def MDC(a, b):
    if (b == 0):
        return a

    print(a % b)
    return MDC(b, a % b)


print(MDC(19, 25))
