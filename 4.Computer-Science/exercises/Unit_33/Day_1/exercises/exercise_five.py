# Exercício 5: Notou que os pilares da orientação a objetos começam a manifestar a medida que fizemos nossos exercícios de modelagem? Que tal agora então modelarmos uma televisão?
# Dica: Pense em como encapsular comportamentos como o estado (ligado/desligado), ou a taxa de variação do volume, que muda de TV para TV etc.

class TV():
    def __init__(self):
        self.channel = 'CBN'
        self.volume = 10
        self.switched_on = False

    def turn_on(self):
        self.switched_on = True

    def turn_off(self):
        self.switched_on = False

    def increase_volume(self):
        self.volume += 1

    def decrease_volume(self):
        self.volume -= 1

    def change_channel(self, new_channel):
        self.channel = new_channel
