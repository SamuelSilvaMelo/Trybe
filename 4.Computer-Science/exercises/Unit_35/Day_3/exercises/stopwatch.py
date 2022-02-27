from time import perf_counter


class Stopwatch:
    def __init__(self, name="Seu algoritmo"):
        self.name = name

    def __enter__(self):
        self.start = perf_counter()

    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} demorou {elapsed} segundos")


# Para utilizar o Cronometro , basta usá-lo dentro de um with e em seguida chamar a função:

# from Cronometro import Cronometro


# with Cronometro("algoritmo"):
#     algoritmo(...)
