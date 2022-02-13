# Exercício 2 Faça uma requisição ao recurso usuários da API do Github ( https://api.github.com/users ), exibindo o username e url de todos os usuários retornados.
#
# mojombo https://api.github.com/users/mojombo
# defunkt https://api.github.com/users/defunkt
# pjhyett https://api.github.com/users/pjhyett
# wycats https://api.github.com/users/wycats

import requests
import json


response = requests.get("https://api.github.com/users")

for user in json.loads(response.text):
    username = user['login']
    url = user['url']

    print(f'{username} {url}')
