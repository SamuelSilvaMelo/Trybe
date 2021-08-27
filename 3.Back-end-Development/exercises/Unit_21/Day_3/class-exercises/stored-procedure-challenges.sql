-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

USE sakila;
DELIMITER $$

CREATE PROCEDURE tenMostPopularActors()
BEGIN
	SELECT actor_id, COUNT(film_id) AS total_movies FROM film_actor
    GROUP BY actor_id
	ORDER BY total_movies DESC
	LIMIT 10;
END $$

DELIMITER ;

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowFilmsByCategory(IN category VARCHAR(50))
BEGIN
	SELECT F.film_id, F.title, FC.category_id, C.`name` FROM film AS F
	INNER JOIN film_category AS FC
	ON FC.film_id = F.film_id
	INNER JOIN category AS C
	ON C.category_id = FC.category_id
	WHERE C.`name` = category;
END $$

DELIMITER ;

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckActiveCustomer(IN clientEmail VARCHAR(200), OUT response VARCHAR(50))
BEGIN
	SET response = (
		SELECT
			(CASE 
				WHEN active = 1 THEN 'Cliente Ativo'
				WHEN active = 0 THEN 'Cliente Não Ativo'
			END) AS status_client
		FROM sakila.customer
		WHERE email = clientEmail
    );
END $$

DELIMITER ;
