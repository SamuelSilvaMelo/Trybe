# Exercício 1: Lembra do exercício da TV que já abstraímos? Hoje vamos implementar ele, porém com algumas modificações. Veja o diagrama abaixo:
#
# Atributos:
# volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
# canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
# tamanho - será inicializado com o valor do parâmetro;
# ligada - será inicializado com o valor de False , pois está inicialmente desligado.
# Todos os atributos devem ser privados.
#
# Métodos:
# aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;
# diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;
# modificar_canal - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção ( ValueError ) caso o valor esteja fora dos limites;
# ligar_desligar - alterna o estado da TV entre ligado e desligado ( True / False ).


class TV():
    def __init__(self, tamanho):
        self.__volume = 98
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        else:
            raise Exception(f'Volume máximo atingido - {self.__volume}')

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        else:
            raise Exception(f'Volume mínimo atingido - {self.__volume}')

    def modificar_canal(self, novo_canal):
        if not 1 <= novo_canal <= 99:
            raise Exception(f'Canal {novo_canal} não pode ser acessado.')
        else:
            self.__canal = novo_canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
