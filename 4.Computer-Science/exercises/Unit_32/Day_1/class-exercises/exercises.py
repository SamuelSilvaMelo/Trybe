# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.

a = 10
b = 5

a + b
a - b
a * b
a / b
a // b
a ** b
a % b

# Exercício 2: Declare e inicialize uma variável: hours = 6 . Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.

hours = 6
minutes = hours * 60
seconds = minutes * 60

print(hours, minutes, seconds)

# Exercício 3: Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.

print('Hello World!')

# Exercício 4: Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

book_price = 24.20 * 0.6
logistic = 3 + (0.75 * 59)
price = 60 * book_price + logistic

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.

trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course.append("Ciência da Computação")

# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".

trybe_course[0] = "Fundamentos"

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

var = set()

var.add("Samuel")

print(var)

# Exercício 8: O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key ?

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["personagem"]  # retorna 'Margarida'

# Exercício 9: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "sim"

# Exercício 10: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.

del info["origem"]
print(info)

# Exercício 11: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.

resposta = "Uma tupla tuple('Thiago', 'Nobre', 29) ou uma lista"

# Exercício 12: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

resposta = "Dicionário (dict()) pois as chaves não se repetem"

# Exercício 13: O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5 . Escreva um código que calcule o fatorial de um número inteiro.

factorial = 5
result = 1

while factorial > 0:
    result *= factorial
    factorial -= 1

print(result)

# Exercício 14: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100] .

ratings = [6, 8, 5, 9, 10]
updated_ratings = []

for rating in ratings:
    updated_ratings.append(rating * 10)

print(updated_ratings)

# 14.1 Experimente utilizar a sintaxe de compreensão de listas.

ratings = [6, 8, 5, 9, 10]
updated_ratings = [10 * rating for rating in ratings]
print(updated_ratings)

# Exercício 15: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se o elemento for divisível por 3.

ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    if rating % 3 == 0:
        print(f'O número {rating} é Múltiplo de 3')
