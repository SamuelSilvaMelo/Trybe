# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.
# Saída:
# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878


import json
import csv


def read_books(file_name):
    lines = []
    with open(file_name) as file:
        for line in file:
            lines.append(
              json.loads(line)
            )

    return lines


def book_categories_indice(books):
    book_categories = dict()

    for book in books:
        for category in book['categories']:
            if category in book_categories:
                book_categories[category] += 1
            else:
                book_categories[category] = 1

    return book_categories


def book_categories_percentage(book_categories):
    percentage = book_categories
    total_books = len(read_books('exercise_four.json'))

    for category in percentage:
        value = round(percentage[category] * (100 / total_books), 2)
        percentage[category] = value

    return percentage


LIST_BOOKS = read_books('exercise_four.json')
BOOK_CATEGORIES = book_categories_indice(LIST_BOOKS)
PERCENTAGEM = book_categories_percentage(BOOK_CATEGORIES)


with open("report.csv", "w") as file:
    header = ['Categoria', 'Porcentagem']
    body = PERCENTAGEM

    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(body.items())
