# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.


def verify_triangle(firstSide, secondSide, thirdSide):
    is_triangle = (
      firstSide + secondSide > thirdSide and
      secondSide + thirdSide > firstSide and
      firstSide + thirdSide > secondSide
    )

    if is_triangle:
        if firstSide == secondSide == thirdSide:
            return "Triângulo Equilátero"
        elif (
          firstSide == secondSide or
          secondSide == thirdSide or
          firstSide == thirdSide
        ):
            return "Triângulo Isósceles"
        else:
            return "Triângulo Escaleno"
    else:
        return "Não é um triângulo"
