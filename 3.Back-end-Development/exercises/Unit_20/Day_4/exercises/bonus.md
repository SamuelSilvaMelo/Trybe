## Exercício Bônus

Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados Pixar.

1. Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

```
UPDATE Pixar.BoxOffice
SET rating = (
	CASE
		WHEN domestic_sales > 400000000 THEN 9
        ELSE rating
	END
)
```

2. Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

```
UPDATE Pixar.BoxOffice
SET rating = (
	CASE
		WHEN domestic_sales > 200000000 AND international_sales < 300000000 THEN 6
        ELSE rating
	END
)
```

3. Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.

```
SELECT id FROM Pixar.Movies
WHERE length_minutes < 100;

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Pixar.Movies
WHERE length_minutes < 100;
```

