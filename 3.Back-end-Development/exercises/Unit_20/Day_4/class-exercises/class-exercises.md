## Para fixar

### Tabela vazia ? Vamos resolver isso ae! `INSERT` na prática

1. Insira um novo funcionário na tabela `sakila.staff`.

Para saber quais campos são obrigatórios, clique com o botão direito na tabela `sakila.staff` e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

```
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('Fulano', 'De Tal', 1, 'fulanodetal@betrybe.com', 1, 1, 'tryber', '1234567-senhasupersegura');
```

2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .

```
INSERT INTO sakila.staff 
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUE 
	('Frank', 'Rocha', 1, 'frank.rocha@betrybe.com', 1, 1, 'frank.rocha', '1234568hehe'),
	('Gustavo', 'Caetano', 2, 'emailMaaaaravilhoso@betrybe.com', 2, 1, 'gustavo.caetano', 'uma-senha-maaaaaravilhosa');
```


3. Selecione os cinco primeiros nomes e sobrenomes da tabela `sakila.customer` e cadastre essas pessoas como atores na tabela `sakila.actor`.

```
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;
```

4. Cadastre três categorias de uma vez só na tabela `sakila.category`.

```
INSERT INTO sakila.category (name)
VALUES
	('Adventure'),
	('Historic'),
	('Romance');
```

5. Cadastre uma nova loja na tabela `sakila.store`.

```
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (8, 1);
```

### Digitou algo errado? De boa, vamos dar um `UPDATE`

1. Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".

```
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
```

2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".

```
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
```

3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.

```
UPDATE sakila.film
SET rental_rate = 25.00
WHERE length > 100
AND rating IN('G', 'PG', 'PG-13')
AND replacement_cost > 20;
```

4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

```
UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 0 AND 100 THEN 10.00
        WHEN length > 100 THEN 20.00
	END
);
```

### Como assim, alguém te cadastrou sem você deixar ? Vamos dar um `DELETE` nisso!

1. Exclua do banco de dados o ator com o nome de "KARL".

```
SELECT * FROM sakila.actor
WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';
```

2. Exclua do banco de dados os atores com o nome de "MATTHEW".

```
SELECT * FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id IN(8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name IN('MATTHEW');
```

3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

```
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';
```

4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .

```
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
```

5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

- sakila.address -> city_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.city -> country_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.customer -> address_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.customer -> store_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.film -> language_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.film -> original_language_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.film_actor -> actor_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.film_actor -> film_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.film_category -> category_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.film_category -> film_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.inventory -> film_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.inventory -> store_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.payment -> customer_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.payment -> rental_id = ON DELETE SET NULL ON UPDATE CASCADE;
- sakila.payment -> staff_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.rental -> customer_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.rental -> inventory_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.rental -> staff_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.rental -> staff_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.staff -> address_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.staff -> store_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.store -> address_id = ON DELETE RESTRICT ON UPDATE CASCADE;
- sakila.store -> manager_staff_id = ON DELETE RESTRICT ON UPDATE CASCADE;

