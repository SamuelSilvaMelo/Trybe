-- 1. Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.

USE sakila;
DELIMITER $$

CREATE FUNCTION TotalPaymentByCustomer(customerId INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payment INT;
    SELECT COUNT(payment_id) FROM payment
	GROUP BY customer_id
	HAVING customer_id = customerId INTO total_payment;
    RETURN total_payment;
END $$

DELIMITER ;

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.

USE sakila;
DELIMITER $$

CREATE FUNCTION FilmByInventoryId(inventoryId INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
	DECLARE movie_title VARCHAR(500);
	SELECT DISTINCT F.title FROM sakila.film AS F
	INNER JOIN sakila.inventory AS I
	ON I.film_id = F.film_id
	WHERE I.inventory_id = inventoryId INTO movie_title;
	RETURN movie_title;
END $$

DELIMITER ;

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.

USE sakila;
DELIMITER $$

CREATE FUNCTION TotalFilmByCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_movies INT;
	SELECT COUNT(CI.category_id) FROM sakila.film_category AS CI
	INNER JOIN sakila.category AS CA
	ON CA.category_id = CI.category_id
	GROUP BY CA.`name`
	HAVING CA.`name` = category INTO total_movies;
    RETURN total_movies;
END $$

DELIMITER ;
