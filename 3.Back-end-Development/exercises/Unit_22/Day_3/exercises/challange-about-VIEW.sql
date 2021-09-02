-- Desafios sobre VIEW
-- 1. Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e film do banco de dados sakila. Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW sakila.film_with_categories AS
  SELECT
    F.title, FC.category_id,
    C.`name` FROM sakila.film AS F
  INNER JOIN sakila.film_category AS FC
  ON FC.film_id = F.film_id
  INNER JOIN sakila.category AS C
  ON C.category_id = FC.category_id
  ORDER BY title;
  
SELECT * FROM sakila.film_with_categories;

-- 2. Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film do banco de dados sakila. Sua view deve exibir o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

CREATE VIEW sakila.film_info AS
SELECT
  A.actor_id,
  CONCAT(A.first_name, ' ', A.last_name) AS actor,
  F.title
  FROM sakila.actor AS A
  INNER JOIN sakila.film_actor AS FA
  ON FA.actor_id = A.actor_id
  INNER JOIN sakila.film AS F
  ON F.film_id = FA.film_id
  ORDER BY actor;
  
-- 3. Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila. Sua view deve exibir o address_id, o address, o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.

CREATE VIEW address_info AS
  SELECT A.address_id, A.address , A.district, A.city_id, C.city
  FROM sakila.address AS A
  INNER JOIN sakila.city AS C
  ON C.city_id = A.city_id
  ORDER BY C.city;

-- 4. Crie uma view chamada movies_languages, usando as tabelas film e language do banco de dados sakila. Sua view deve exibir o título do filme, o id do idioma e o idioma do filme, como na imagem a seguir.

CREATE VIEW movies_languages AS 
  SELECT T.title, L.language_id, L.`name` AS `language`
  FROM sakila.film AS T
  INNER JOIN sakila.language AS L
  ON L.language_id = T.language_id;
