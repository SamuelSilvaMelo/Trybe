## Para Fixar

### Alavancando o poder dos principais operadores booleanos e relacionais

**A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados sakila . Consulte-a ao fazer os desafios propostos.**

```
G = permitido para todos
PG = permitido para crianças menores de 13 anos
PG-13 = permitido para pessoas com mais de 13 anos
R = permitido para pessoas com mais de 17 anos
NC-17 = permitido apenas para adultos
```

Entre no banco de dados sakila e siga as instruções (e guarde as queries para conferir posteriormente):


1. Precisamos identificar os dados do cliente com o e-mail `LEONARD.SCHOFIELD@sakilacustomer.org` .

```
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
```

2. Precisamos de um relatório dos nomes dos clientes, em `ordem alfabética`, que não estão mais ativos no nosso sistema e pertencem à loja com o **id = 2**, e não inclua o cliente `KENNETH` no resultado.

```
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;
```

3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em `ordem alfabética` pelo título.

```
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> 'NC-17'
AND replacement_cost > 18
ORDER BY replacement_cost DESC, title
LIMIT 100;
```

4. Quantos clientes estão `ativos` e na loja 1?

```
SELECT COUNT(*) AS 'Clientes Ativos Loja 1' FROM sakila.customer
WHERE store_id = 1
AND ACTIVE = 1;
```

5. Mostre todos os detalhes dos clientes que `não` estão ativos na loja 1 .

```
SELECT * FROM sakila.customer
WHERE store_id = 1 
AND active = 0;
```

6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a `menor` taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em `ordem alfabética` pelo título.

```
SELECT title FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
```

### Como criar pesquisas mais dinâmicas e maleáveis usando o `LIKE`

1. Mostre todos os detalhes dos filmes que contêm a palavra `ace` no nome.

```
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
```

2. Mostre todos os detalhes dos filmes cujas descrições finalizam com `china`.

```
SELECT * FROM sakila.film
WHERE description LIKE '%china';
```

3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra `girl` e o título finaliza com a palavra `lord`.

```
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';
```

4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra `gon`.

```
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
LIMIT 2;
```

5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra `gon` e a descrição contém a palavra `Documentary`.

```
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%'
LIMIT 1;
```

6. Mostre os dois filmes cujos títulos ou finalizam com `academy` ou iniciam com `mosquito`.

```
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%'
LIMIT 2;
```

7. Mostre os seis filmes que contêm as palavras `monkey` e `sumo` em suas descrições.

```
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%'
LIMIT 6;
```

### Englobando uma faixa de resultados com `IN` e `BETWEEN`

1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.

```
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
```

2. Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética.

```
SELECT email FROM sakila.customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email;
```

3. Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia , diferente do formato brasileiro, que é dia/mês/ano .

```
SELECT COUNT(*) AS 'Quantidade de Pagamentos' FROM sakila.payment
WHERE payment_date
BETWEEN '2005/05/01' AND '2005/08/01';
```

4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.

```
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration
BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
```

5. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.

```
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
```

### Encontrando e separando resultados que incluem datas

1. Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.

```
SELECT COUNT(*) AS 'Quantidade de Pagamentos' FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';
```

2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?

```
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date
BETWEEN '2005-07-01' AND '2005-08-22';
```

3. Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.

```
SELECT
DATE(rental_date) AS 'Data',
YEAR(rental_date) AS 'Ano',
MONTH(rental_date) AS 'Mês',
DAY(rental_date) AS 'Dia',
HOUR(rental_date) AS 'Hora',
MINUTE(rental_date) AS 'Minuto',
SECOND(rental_date) AS 'Segundo'
FROM sakila.rental
WHERE rental_id = 10330;
```

4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .

```
SELECT * FROM sakila.payment
WHERE payment_date
BETWEEN '2005-07-28 22:00:00' AND '2005-07-28 23:59:59';
```


