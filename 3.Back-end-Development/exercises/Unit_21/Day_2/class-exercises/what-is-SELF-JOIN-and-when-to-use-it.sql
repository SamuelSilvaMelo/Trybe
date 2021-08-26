-- 1. Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
    
SELECT tb1.title, tb1.replacement_cost, tb2.title, tb2.replacement_cost
FROM sakila.film AS tb1, sakila.film AS tb2
WHERE tb1.replacement_cost = tb2.replacement_cost;

-- 2. Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
    
SELECT tb1.title, tb1.rental_duration, tb2.title, tb2.rental_duration
FROM sakila.film AS tb1, sakila.film AS tb2
WHERE tb1.rental_duration = tb2.rental_duration
AND tb1.rental_duration BETWEEN 2 AND 4
AND tb2.rental_duration BETWEEN 2 AND 4;
