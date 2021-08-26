-- Bonus Exercises
-- 1. Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT
	M.id,
	M.title,
	M.director,
	M.`year`,
	M.length_minutes,
	M.theater_id
FROM
	Pixar.Movies AS M
INNER JOIN
	Pixar.Theater AS T
ON
	T.id = M.theater_id
INNER JOIN
	Pixar.BoxOffice AS B
ON
	B.movie_id = M.id
WHERE
	B.rating > 8;

-- 2. Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT
	tb1.title, tb1.length_minutes, tb2.title, tb2.length_minutes
FROM 
	Pixar.Movies AS tb1,
    Pixar.Movies AS tb2
WHERE
	tb1.director = tb2.director
AND 
	tb1.title <> tb2.title;

-- 3. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

SELECT M.title FROM Pixar.Movies AS M
WHERE M.length_minutes > 110
AND M.id IN (
	SELECT movie_id FROM Pixar.BoxOffice
    WHERE domestic_sales + international_sales > 500000000
);

SELECT M.title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.Id
WHERE B.domestic_sales + B.international_sales > 500000000
AND M.length_minutes > 110;
