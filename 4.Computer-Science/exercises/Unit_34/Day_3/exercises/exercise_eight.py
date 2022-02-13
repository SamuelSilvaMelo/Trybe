# Exercício 8: Agora um desafio, vá ao site https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags e recupere as imagens de todas as bandeiras.
# DICA: Faça requisições para as URLs das imagens e escreva seus conteúdos em arquivos binários. São 206 ao total.

import requests
from parsel import Selector


response = requests.get('https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags')
selector = Selector(response.text)
images = []
flags = selector.css('div.thumb div a img::attr(src)').getall()

for image in flags:
    image_content = requests.get('https:' + image).content
    images.append(image_content)
