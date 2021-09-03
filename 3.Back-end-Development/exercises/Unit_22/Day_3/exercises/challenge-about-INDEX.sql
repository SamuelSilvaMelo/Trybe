-- Desafios sobre INDEX
-- 1. Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE FULLTEXT INDEX category_index ON sakila.category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Query cost: 0.35

DROP INDEX category_index ON sakila.category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- Query cost: 1.85

-- 2. Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE INDEX address_postal_code_index ON sakila.address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

-- Query cost: 0.35

DROP INDEX address_postal_code_index ON sakila.address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

-- Query cost: 61.80
