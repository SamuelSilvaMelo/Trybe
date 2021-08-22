# Exercícios de fixação
## `SELEC`, o primeiro passo

1. Monte uma query que exiba seu nome na tela:
```
SELECT 'Samuel';
```
2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela:
```
SELECT 'Samuel', 'Melo', 'Belo Horizonte', '22';
```
3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português):
```
SELECT 'Samuel' AS Nome, 'Melo' AS Sobrenome, 'Belo Horizonte' AS 'Cidade Natal', 18 AS Idade;
```
4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;

**RESPOSTA**: 104;
```
SELECT 13 * 8;
```
5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual":
```
SELECT now() AS 'Data Atual';
```
6. Escreva uma query que selecione todas as colunas da tabela city:
```
SELECT * FROM sakila.city;
```
7. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer:
```
SELECT first_name, last_name FROM sakila.customer;
```
8. Escreva uma query que exiba todas as colunas da tabela rental:
```
SELECT * FROM sakila.rental;
```
9. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film:
```
SELECT title, description, release_year FROM sakila.film;
```
10. Utilize o SELECT para explorar todas as tabelas do banco de dados:
```
SELECT * FROM sakila.address;
```
## Juntando duas ou mais colunas usando o `CONCAT`
1. Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme:
```
SELECT CONCAT(title, ' - ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
```
2. Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis:
```
SELECT CONCAT(title, ' - ', rating) AS 'Classificação' FROM sakila.film;
```
3. Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço .
```
SELECT CONCAT(address, ' - ', district) AS 'Endereço' FROM sakila.address;
```
## Dados repetidos? Aqui não! Como usar o `DISTINCT`
Para criar a seguinte tabela:

<img src="https://user-images.githubusercontent.com/80549416/130063186-81310500-63c9-4de9-9dec-cb38efbf664f.png" alt="drawing" width="150"/>

Abra uma nova janela de query no MySQL Workbench e execute o seguinte código:
```
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
```

Responsa as seguintes questões:
1. Monte uma query para encontrar pares únicos de nomes e idades:
```
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;
```
2. Quantas linhas você encontraria na query anterior?

**RESPOSTA:** 5.

3. Monte uma query para encontrar somente os nomes únicos.
```
SELECT DISTINCT Nome FROM Escola.Alunos;
```
4. Quantas linhas você encontraria na query anterior?


**RESPOSTA:** 4.

5. Monte uma query para encontrar somente as idades únicas.
```
SELECT DISTINCT Idade FROM Escola.Alunos;
```
6. Quantas linhas você encontraria na query anterior?

**RESPOSTA:** 4.

## Contando resultados com o `COUNT`

Sobre a tabela a seguir:

<img src="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/sampleSelect1-f3fffe6ff17225ce4ffaa1a843e29405.png" alt="Tabela Staff"/>

Responda as seguintes questões:

1. Quantas senhas temos cadastradas nessa tabela?
```
SELECT COUNT(password) FROM sakila.staff;
```
**RESPOSTA:** 1.

2. Quantas pessoas temos no total trabalhando para nossa empresa?
```
SELECT COUNT(first_name) FROM sakila.staff;
```
**RESPOSTA:** 2.

3. Quantos emails temos cadastrados nessa tabela?
```
SELECT COUNT(email) FROM sakila.staff;
```
**RESPOSTA:** 2.

## `LIMIT OFFSET` - Pulando linhas desnecessárias

Observando o resultado a seguir, qual query eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY?

<img src="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/limit4-d2cddfe680162164a24131fee86ab759.png" alt="Tabela actor" />

**RESPOSTA:**
```
SELECT * FROM sakila.actor LIMIT 10 OFFSET 5;
```

## Vamos montar o bolo com todos os ingredientes que vimos hoje:

#### Para os exercícios a seguir, vamos usar a tabela sakila.film.
1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
```
SELECT * FROM sakila.film;
```
2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação:
```
SELECT title, release_year, rating FROM sakila.film;
```
3. Quantos filmes temos cadastrados?
```
SELECT COUNT(*) FROM sakila.film;
```

**RESPOSTA:** 1000.

#### Para os exercícios a seguir, vamos usar a tabela sakila.actor
1. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
```
SELECT DISTINCT last_name FROM sakila.actor;
```
2. Quantos sobrenomes únicos temos na tabela?
```
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
```

**RESPOSTA:** 121.

3. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
```
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;
```
4. Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
```
SELECT * FROM sakila.language WHERE name != 'English' LIMIT 5;
```
5. Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
```
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost
LIMIT 20;
```

