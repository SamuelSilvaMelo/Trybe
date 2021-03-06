# Exercício 2 Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:
#
# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2
#
# resultado = [2, 4, 6, 5]
#
# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3
#
# resultado = [1, 7, 4, 6, 4, 6]

def merging_cards(cards, parts):
    merged_cards = []

    for index in range(parts):
        try:
            merged_cards.append(cards[index])
            merged_cards.append(cards[index + parts])
        except IndexError:
            return "Error: Unable to shuffle cards"

    return merged_cards
