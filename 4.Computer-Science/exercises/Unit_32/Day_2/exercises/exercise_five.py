# Exercício 5: Utilizando o arquivo pokemons.json , vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária "Quem é esse pokemon?", até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.
# Exemplo: o pokemon sorteado pelo programa é butterfree , a pessoa usuária chuta charizard , o programa deve exibir b . Em seguida, a pessoa chuta blastoise , o programa deve exibir bu e assim por diante até a pessoa acertar.
# Dica: Você pode utilizar o método choice do modulo random para sortear aleatoriamente um pokemon. Ex: random.choice(pokemon) -> Saída: {"name": "Pikachu", }


import json
import random


def pokemon_name_list():
    with open('pokemons.json') as file:
        results = json.load(file)['results']
        pokemons = [result['name'] for result in results]

    return pokemons


def which_pokemon():
    pokemon = random.choice(pokemon_name_list())
    attempts = 1

    while attempts < len(pokemon):
        print(f'Você tem {len(pokemon) - attempts} tentativas.')
        print(f'Tente adivinhar qual pokemon é esse {pokemon[0:attempts]}')

        user_response = input('Digite a respost: ')

        if user_response == pokemon:
            print(f'Parabéns! Você acertou! O nome do pokemon é {pokemon}')
            break

        attempts += 1

    if len(pokemon) == attempts:
        print(f'Não foi dessa vez! O nome do pokemon era {pokemon}')
