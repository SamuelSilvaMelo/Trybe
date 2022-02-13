# IMPORTANTE: Importe o arquivo [books.json](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/computer-science/python/entrada-saida/books-346aab4788ea58d4c3aa988632da100b.json) no MongoDB antes de responder as próximas questões.
# DICA: mongoimport --db library books.json
#
# Exercício 6 Escreva um programa que se conecte ao banco de dados library e liste os livros da coleção books para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido.

from pymongo import MongoClient


def all_books_by_category(category):
    with MongoClient() as client:
        db = client.library
        collection = db.library.find(
          {'categories': category},
          {'title': 1, '_id': 0}
        )

        for book in collection:
            print(book['title'])


category = input("Escolha uma categoria de filme: ")
all_books_by_category(category)
